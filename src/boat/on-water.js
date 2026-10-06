// What the boat does to the sea round it (v35): its shadow in the water, its reflection on it,
// and the lantern's path of light. Without them a hull drawn over the sea looks cut out and
// pasted on, however well it is lit.
//
// The sea's own shader knows nothing of the boat and is not touched. This is a sheet of its
// own, laid on the water for 20 m round the hull and drawn straight after the sea:
//
//   where it lies   its vertex shader works out the sea's surface exactly as the sea's does
//                   (the same GLSL, COMMON from water-shader.js, the same textures, the same
//                   level of detail for the distance from the camera), then lifts it 3 cm.
//   the shadow      the sun's light that the hull, the floats and the beams keep out of the
//                   water: found along the eye's bent ray under the surface, at four depths
//                   down to the seabed, each traced back up the sun's bent ray to the surface.
//                   From the cliff that is the dark shape lying on the sand beside the boat.
//   the reflection  the eye's ray turned in the water's slope (the FFT's, as fine as the pixel
//                   resolves, blurred by the spread of what it does not) and tested against the
//                   boat as about twenty capsules. Weighted by Fresnel, so it is a mirror from
//                   the beach and next to nothing from above. The blur is not round: seen at a
//                   low angle, slopes throw the turned ray up and down far more than sideways,
//                   which is why reflections on water are drawn out toward the eye.
//   the lantern     the same turned ray against the flame: a narrow path of warm light.
//   under water     the eye's ray bent down into the water, against the floats and the hull's
//                   bottom: the sea is drawn opaque out here, so without this a float under a
//                   wave is simply gone, cut off at the surface.
//
// It only darkens what is under it (alpha) and adds to it, so where it has nothing to say it
// draws nothing.

import * as THREE from 'three';
import { COMMON } from '../water/water-shader.js';
import { SKY_PARS } from '../sky/atmosphere-glsl.js';
import { CLOUD_SHADOW_GLSL } from '../sky/clouds.js';
import { SUN_SHADOW_GLSL } from '../terrain/sun-shadow.js';

const f = (v) => Number(v).toFixed(4);
const v3 = (a) => `vec3(${a.map(f).join(', ')})`;

// Coordinates from -reach to reach: `fine` apart within `half`, then each step 28% longer.
function axis(half, fine, reach) {
  const out = [0];
  let x = 0, step = fine;
  while (x < half) { x += fine; out.push(x); }
  while (x < reach) { step *= 1.28; x = Math.min(x + step, reach); out.push(x); }
  return [...out.slice(1).reverse().map((v) => -v), ...out];
}

// water: createWater's. uniforms: the boat's (uBoatInv, uGlow, uLampPos, uWaterAlb, uExtent,
// uSunShadow, uFlex). shape: { proxies: [{ a, b, r, kind, under }], half, beam, bend: [z0, z1],
// floats: { z, r, x0, x1 }, beams: [x], sheer: GLSL for the sheer's height at u }.
export function createOnWater({ water, lightUniforms = {}, gradeUniforms = {}, uniforms, shape }) {
  const xs = axis(4.3, 0.16, 20), zs = axis(2.9, 0.16, 20);
  const pos = new Float32Array(xs.length * zs.length * 3), idx = [];
  xs.forEach((x, i) => zs.forEach((z, j) => { const k = (i * zs.length + j) * 3; pos[k] = x; pos[k + 2] = z; }));
  for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < zs.length - 1; j++) {
    const a = i * zs.length + j, b = a + zs.length;
    idx.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geometry.setIndex(idx);
  // (The vertex shader places it from uRest, not from the mesh's matrix. The boat keeps that
  // matrix on the same spot all the same, so this sphere lets the sheet be culled with it.)
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 30);

  const own = {
    uRest: { value: new THREE.Vector4(0, 0, 0, 1) },   // the boat's place on the map (east, north) and its heading (east, north)
    uLampWater: { value: 0 },                          // how strong the lantern's path on the water is (on screen)
  };
  const material = new THREE.ShaderMaterial({
    uniforms: { ...water.uniforms, ...lightUniforms, ...gradeUniforms, ...uniforms, ...own },
    vertexShader: /* glsl */ `
      ${COMMON}
      uniform sampler2D uOceanV[3];
      uniform float uGridScale;
      uniform float uGridK;
      uniform vec4 uRest;
      varying vec3 vWorld;
      varying vec2 vRest;
      varying vec4 vSeaW;
      varying float vBed;
      // (As the sea's vertex shader, water-shader.js: this has to give the same surface.)
      vec3 cascadeDisp(sampler2D tex, vec2 p, float L, float spacing) {
        float lod = max(log2(2.0 * spacing * 256.0 / L), 0.0);
        return textureLod(tex, p / L, lod).xyz;
      }
      void main() {
        vec2 p = uRest.xy + uRest.zw * position.x + vec2(uRest.w, -uRest.z) * position.z;
        vRest = p;
        vec4 d = dataAt(p);
        vec4 sw = seaWeights(p, d);
        float spacing = max(length(p - vec2(cameraPosition.x, -cameraPosition.z)), uGridScale) * uGridK;
        Surf sf = surfAt(p, d);
        sw *= 1.0 - sf.sheet;
        vSeaW = sw;
        vBed = d.r;
        vec3 D = vec3(0.0);
        if (sw.x > 0.001) D += sw.x * cascadeDisp(uOceanV[0], p, uOceanL.x, spacing);
        if (sw.y > 0.001 && spacing < uOceanL.y / 8.0) D += sw.y * cascadeDisp(uOceanV[1], p, uOceanL.y, spacing);
        if (sw.z > 0.001 && spacing < uOceanL.z / 8.0) D += sw.z * cascadeDisp(uOceanV[2], p, uOceanL.z, spacing);
        vec3 w = vec3(p.x + D.x, sf.h + D.y, -p.y - D.z);
        vec2 toShore = -offshoreAt(p);
        w.xz += vec2(toShore.x, -toShore.y) * sf.lean;
        float far = max(length(w.xz - cameraPosition.xz) - 2000.0, 0.0);
        w.y -= far * far / (2.0 * 6.36e6);
        vWorld = w;
        // Just proud of the sea, so the sea does not cut through it between its own vertices.
        w.y += 0.03;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      #include <common>
      ${SKY_PARS}
      ${CLOUD_SHADOW_GLSL}
      uniform vec3 uExtent;
      ${SUN_SHADOW_GLSL}
      uniform sampler2D uOceanB[4];
      uniform vec4 uOceanL;
      uniform float uOceanTail;
      uniform mat4 uBoatInv;
      uniform vec3 uGlow;
      uniform vec3 uLampPos;
      uniform vec3 uWaterAlb;
      uniform float uLampWater;
      uniform vec4 uFlex;
      varying vec3 vWorld;
      varying vec2 vRest;
      varying vec4 vSeaW;
      varying float vBed;

      vec3 owLin(vec3 c) { return pow(c, vec3(2.2)); }
      float owSheer(float u) { return ${shape.sheer}; }
      float owHalf(float u) { return ${f(shape.beam)} * pow(max(1.0 - pow(abs(u), 2.4), 0.0), 0.7) + 0.012; }

      // Where a point of the boat is once the beams have sprung (as the boat's own vertex shader).
      vec3 owBent(vec3 p) {
        float bend = smoothstep(${f(shape.bend[0])}, ${f(shape.bend[1])}, abs(p.z));
        vec2 fl = p.z > 0.0 ? uFlex.zw : uFlex.xy;
        return p + vec3(0.0, bend * bend * clamp(fl.x + fl.y * p.x, -0.14, 0.14), 0.0);
      }
      // One capsule of the boat in the turned ray: how much of the ray's spread it fills, and
      // its light. kind: 0 the hull (white, the band under the rail), 1 bamboo, 2 dark
      // bamboo, 3 the mast, 4 canvas; seen under water, 5 the hull's bottom, 6 a float.
      // The turned ray's spread: across (level, square to the ray) and up (square to both), and
      // how wide each is per metre travelled.
      vec3 owAcross, owUp;
      vec2 owSpread;
      void owHit(vec3 ro, vec3 rd, vec3 a, vec3 b, float r, int kind, vec3 sunB, float lit, vec3 seaUp, inout float cover, inout vec3 acc) {
        a = owBent(a);
        b = owBent(b);
        vec3 ba = b - a, oa = ro - a;
        float oad = dot(oa, rd), dba = dot(rd, ba), baba = dot(ba, ba), oaba = dot(oa, ba);
        float sAlong = clamp((oaba - oad * dba) / max(baba - dba * dba, 1e-5), 0.0, 1.0);
        vec3 c = a + ba * sAlong;
        float t = dot(c - ro, rd);
        if (t <= 0.0) return;
        vec3 q = ro + rd * t, e = q - c;
        vec2 w = 0.012 + owSpread * t;
        float d = length(e);
        float m = length(vec2(dot(e, owAcross) / (r + w.x), dot(e, owUp) / (r + w.y)));
        float cov = (1.0 - smoothstep(0.55, 1.0, m)) * min(1.0, 1.8 * r / (r + sqrt(w.x * w.y)));
        if (cov <= 0.0) return;
        vec3 hit = q - rd * sqrt(max(r * r - min(d * d, r * r), 0.0));
        vec3 n = normalize(hit - c);
        vec3 alb;
        if (kind == 0) {
          float under = owSheer(hit.x / ${f(shape.half)}) - hit.y;
          alb = mix(owLin(vec3(0.82, 0.8, 0.74)), owLin(vec3(0.72, 0.41, 0.29)), 1.0 - smoothstep(0.1, 0.15, under));
          alb *= mix(0.45, 1.0, smoothstep(0.0, 0.14, hit.y));
        } else if (kind == 1) alb = owLin(vec3(0.53, 0.47, 0.35));
        else if (kind == 2) alb = owLin(vec3(0.41, 0.35, 0.26));
        else if (kind == 3) alb = owLin(vec3(0.44, 0.35, 0.26));
        else if (kind == 4) alb = owLin(vec3(0.84, 0.78, 0.64));
        else if (kind == 5) alb = owLin(vec3(0.3, 0.36, 0.27));
        else alb = owLin(vec3(0.42, 0.39, 0.28));
        vec3 L = alb / PI * (uSunIrr * max(dot(n, sunB), 0.0) * lit + uSkyUp * (0.55 + 0.45 * n.y) + seaUp * 0.5 * (1.0 - n.y));
        acc += L * cov;
        cover += cov;
      }
      // The boat from straight above, at (x forward, z to starboard): how much of the sun it
      // keeps off. blur: how soft, in metres (softer the deeper the light has gone).
      float owFoot(vec2 p, float blur) {
        float u = p.x / ${f(shape.half)};
        float hw = owHalf(u);
        float s = (1.0 - smoothstep(hw - blur, hw + blur, abs(p.y))) * (1.0 - smoothstep(${f(shape.half)} - blur, ${f(shape.half)} + blur, abs(p.x)));
        float fl = (1.0 - smoothstep(-blur, blur, abs(abs(p.y) - ${f(shape.floats.z)}) - ${f(shape.floats.r)})) * min(1.0, ${f(shape.floats.r * 1.3)} / blur)
          * smoothstep(${f(shape.floats.x0)} - blur, ${f(shape.floats.x0)} + blur, p.x) * (1.0 - smoothstep(${f(shape.floats.x1)} - blur, ${f(shape.floats.x1)} + blur, p.x));
        s = max(s, fl);
${shape.beams.map((x) => `        s = max(s, (1.0 - smoothstep(-blur, blur, abs(p.x - ${f(x)}) - 0.035)) * min(1.0, 0.045 / blur) * (1.0 - smoothstep(${f(shape.floats.z)} - blur, ${f(shape.floats.z)} + blur, abs(p.y))));`).join('\n')}
        return s;
      }

      void main() {
        vec3 toCam = cameraPosition - vWorld;
        vec3 V = -normalize(toCam);
        // The sea's slope here as far as a pixel resolves it, and the spread of the rest.
        vec3 b0 = texture2D(uOceanB[0], vRest / uOceanL.x).xyz, b1 = texture2D(uOceanB[1], vRest / uOceanL.y).xyz;
        vec3 b2 = texture2D(uOceanB[2], vRest / uOceanL.z).xyz, b3 = texture2D(uOceanB[3], vRest / uOceanL.w).xyz;
        vec2 sl = vSeaW.x * b0.xy + vSeaW.y * b1.xy + vSeaW.z * b2.xy + vSeaW.w * b3.xy;
        float spread = uOceanTail + vSeaW.x * vSeaW.x * max(b0.z - dot(b0.xy, b0.xy), 0.0) + vSeaW.y * vSeaW.y * max(b1.z - dot(b1.xy, b1.xy), 0.0)
          + vSeaW.z * vSeaW.z * max(b2.z - dot(b2.xy, b2.xy), 0.0) + vSeaW.w * vSeaW.w * max(b3.z - dot(b3.xy, b3.xy), 0.0);
        float sigma = sqrt(spread);
        vec3 N = normalize(vec3(-sl.x, 1.0, sl.y));
        float F = 0.02 + 0.98 * pow(1.0 - max(max(dot(-V, N), 0.0), 1.3 * sigma), 5.0);
        vec3 R = reflect(V, N);
        R.y = max(R.y, 0.015);
        R = normalize(R);

        mat3 rB = mat3(uBoatInv);
        vec3 ro = (uBoatInv * vec4(vWorld, 1.0)).xyz, rd = rB * R, sunB = rB * uSunDir;
        vec3 across = normalize(cross(R, vec3(0.0, 1.0, 0.0))), upR = cross(across, R);
        owAcross = rB * across;
        owUp = rB * upR;
        // A slope of sigma turns the ray 2 sigma up or down, but sideways only by that times
        // the sine of the angle it leaves the water at.
        owSpread = 2.0 * sigma * vec2(max(R.y, 0.03), 1.0);
        // (Nothing of this sheet's own to say near its edge: it ends there.)
        vec2 gB = abs(ro.xz);
        float edge = 1.0 - smoothstep(15.0, 20.0, max(gB.x, gB.y));
        float lit = bakedShadow(vWorld, 0.3) * cloudShadow(vWorld, uSunDir);
        vec3 sunDown = uSunIrr * max(uSunDir.y, 0.0) * lit;
        vec3 seaUp = uWaterAlb * (sunDown + uSkyUp);

        // The boat in the turned ray. (Nothing to test unless the ray passes near it.)
        float cover = 0.0;
        vec3 acc = vec3(0.0);
        vec3 oc = ro - vec3(0.0, 1.2, 0.0);
        float bq = dot(oc, rd), cq = dot(oc, oc) - 30.0;
        if (bq * bq - cq > 0.0 && (cq < 0.0 || bq < 0.0)) {
${shape.proxies.map((p) => `          owHit(ro, rd, ${v3(p.a)}, ${v3(p.b)}, ${f(p.r)}, ${p.kind}, sunB, lit, seaUp, cover, acc);`).join('\n')}
        }
        float aR = F * clamp(cover, 0.0, 1.0) * edge;
        vec3 cB = linearToOutputTexel(vec4(toneMapping(acc / max(cover, 1e-4)), 1.0)).rgb;

        // The lantern's path: the flame in the turned ray, spread by the water's roughness.
        vec3 cL = vec3(0.0);
        if (uLampWater > 0.0) {
          vec3 toL = uLampPos - vWorld;
          float tl = dot(toL, R);
          if (tl > 0.0) {
            vec3 e = toL - R * tl;
            vec2 re = 0.06 + owSpread * tl;
            float g = exp(-pow(dot(e, across) / re.x, 2.0) - pow(dot(e, upR) / re.y, 2.0));
            vec3 glow = uGlow * uLampWater * g / (1.0 + 0.1 * tl);
            cL = linearToOutputTexel(vec4(toneMapping(max(F, 0.25) * glow), 1.0)).rgb * (1.0 - clamp(cover, 0.0, 1.0)) * edge;
          }
        }

        // The shadow: sunlight kept out of the water under and beside the boat.
        float aS = 0.0;
        if (uSunDir.y > 0.02) {
          float depth = max(vWorld.y - vBed, 0.2);
          vec3 Tv = refract(V, vec3(0.0, 1.0, 0.0), 0.75), Ts = refract(-uSunDir, vec3(0.0, 1.0, 0.0), 0.75);
          vec3 stepV = Tv / max(-Tv.y, 0.15) - Ts / max(-Ts.y, 0.15);
          float sh = 0.0;
          sh += 0.2 * owFoot((uBoatInv * vec4(vWorld + stepV * 0.05 * depth, 1.0)).xz, 0.05 + 0.004 * depth);
          sh += 0.2 * owFoot((uBoatInv * vec4(vWorld + stepV * 0.3 * depth, 1.0)).xz, 0.05 + 0.03 * depth);
          sh += 0.25 * owFoot((uBoatInv * vec4(vWorld + stepV * 0.65 * depth, 1.0)).xz, 0.05 + 0.06 * depth);
          sh += 0.35 * owFoot((uBoatInv * vec4(vWorld + stepV * depth, 1.0)).xz, 0.05 + 0.09 * depth);
          float sunLum = dot(sunDown, vec3(0.2126, 0.7152, 0.0722)), skyLum = dot(uSkyUp, vec3(0.2126, 0.7152, 0.0722));
          float share = sunLum / max(sunLum + skyLum, 1e-6);
          // (Blending happens on the encoded picture: the root makes it a share of the light.)
          aS = 1.0 - pow(1.0 - (1.0 - F) * share * sh * 0.92, 1.0 / 2.2);
        }
        // Under the surface, down the bent ray: only what the surface does not reflect away.
        float aU = 0.0;
        vec3 cU = vec3(0.0);
        vec3 Tw = refract(V, N, 0.75);
        if (cq < 1.0 && Tw.y < 0.0) {
          owAcross = rB * normalize(cross(Tw, vec3(0.0, 1.0, 0.0)));
          owUp = cross(owAcross, rB * Tw);
          owSpread = vec2(0.03);
          float cu = 0.0;
          vec3 au = vec3(0.0);
${shape.proxies.filter((p) => p.under).map((p) => `          owHit(ro, rB * Tw, ${v3(p.a)}, ${v3(p.b)}, ${f(p.r)}, ${p.under}, sunB, lit, seaUp, cu, au);`).join('\n')}
          aU = (1.0 - F) * clamp(cu, 0.0, 1.0);
          cU = linearToOutputTexel(vec4(toneMapping(au / max(cu, 1e-4) * vec3(0.5, 0.7, 0.72)), 1.0)).rgb;
        }
        gl_FragColor = vec4(cB * aR + cU * aU * (1.0 - aR) + cL, 1.0 - (1.0 - aR) * (1.0 - aS) * (1.0 - aU));
      }`,
    transparent: true, premultipliedAlpha: true, depthWrite: false,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'boat-on-water';
  // After the sea (renderOrder 1), before the spray and the sky.
  mesh.renderOrder = 2;
  return { mesh, uniforms: own };
}
