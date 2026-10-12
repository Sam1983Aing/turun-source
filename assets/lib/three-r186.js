/*! three.js r186, Copyright 2010-2026 Three.js Authors, SPDX-License-Identifier: MIT. As a classic script: window.__klm["vendor/three.module.js"] holds its exports. */
(function(){var P=window.__klm=window.__klm||{};P["vendor/three.core.js"]=function(){const Tt="186",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},en={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wt=0,Yn=1,Dr=2,Di=3,Ra=0,Ni=1,Zn=2,al=3,ki=0,tn=1,Kt=2,ol=0,Ss=1,mh=2,ll=3,Wt=4,Ui=5,xi=6,Fi=100,Oi=101,gh=102,Qs=103,Ms=104,Nr=200,cl=201,Ur=202,vi=203,hl=204,yi=205,ci=206,Ia=207,ul=208,jn=209,dl=210,bs=211,_h=212,Pa=213,La=214,Da=0,Na=1,Ua=2,Yt=3,Fr=4,Cn=5,Or=6,Fa=7,er=0,fl=1,pl=2,ml=0,gl=1,_l=2,xl=3,xh=4,Oa=5,Ba=6,Br=7,za="attached",Ga="detached",Hi=300,Vi=301,vl=302,yl=303,Sl=304,ka=306,zr=1000,yn=1001,ts=1002,Pn=1003,Ml=1004,vh=1004,ns=1005,Ha=1005,Gn=1006,bl=1007,yh=1007,Gr=1008,Ts=1008,Si=1009,Tl=1010,Wi=1011,Va=1012,Wa=1013,tr=1014,is=1015,As=1016,Al=1017,El=1018,Sh=1020,wl=35902,Cl=35899,Rl=1021,Il=1022,Es=1023,kr=1026,Pl=1027,Xa=1028,qa=1029,Ll=1030,Dl=1031,Mh=1032,Nl=1033,Ul=33776,Fl=33777,Ol=33778,Bl=33779,zl=35840,Gl=35841,kl=35842,Ya=35843,Hl=36196,Vl=37492,Za=37496,ja=37488,Ja=37489,bh=37490,Wl=37491,Xl=37808,ql=37809,Hr=37810,Yl=37811,Vr=37812,nr=37813,Zl=37814,jl=37815,Jl=37816,$l=37817,Kl=37818,Ql=37819,ec=37820,ss=37821,rs=36492,tc=36494,ws=36495,ir=36283,Th=36284,$a=36285,Ka=36286,nc=2200,ic=2201,sc=2202,sr=2300,Wr=2301,Xr=2302,Qa=2303,Xi=2400,qi=2401,Cs=2402,Rs=2500,rr=2501,eo=0,to=1,rc=2,no=3200,ac=3201,oc=3202,lc=3203,Yi=0,cc=1,qr="",kn="srgb",Yr="srgb-linear",Zr="linear",ar="srgb",hc="",uc="rg",dc="ga",fc=0,or=7680,pc=7681,mc=7682,gc=7683,_c=34055,xc=34056,vc=5386,yc=512,Sc=513,Mc=514,bc=515,Tc=516,Ac=517,Ec=518,io=519,Ah=512,Eh=513,so=514,td=515,wh=516,Ch=517,Rh=518,Ih=519,lr=35044,wc=35048,nd=35040,Ph=35045,id=35049,sd=35041,rd=35046,ad=35050,od=35042,ld="100",cd="300 es",Mi=2000,Is=2001,hd={COMPUTE:"compute",RENDER:"render"},ud={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},dd={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},fd={TEXTURE_COMPARE:"depthTextureCompare"},pd={NONE:0,SHARED:1,FULL:2};function md(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}const gd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function cr(e,t){return new gd[e](t)}function Cc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _d(){const e=jr("canvas");e.style.display="block";return e}const Lh={};let as=null;function xd(e){as=e}function vd(){return as}function Rc(...e){const t="THREE."+e.shift();if(as)as("log",t,...e);else console.log(t,...e)}function Dh(e){const t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){const n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function lt(...e){e=Dh(e);const t="THREE."+e.shift();if(as)as("warn",t,...e);else{const n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function Nt(...e){e=Dh(e);const t="THREE."+e.shift();if(as)as("error",t,...e);else{const n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function os(...e){const t=e.join(" ");if(t in Lh)return;Lh[t]=!0;lt(...e)}function yd(){if(typeof self<"u"&&typeof self.scheduler<"u"&&typeof self.scheduler.yield<"u")return self.scheduler.yield();return new Promise((e)=>{requestAnimationFrame(e)})}function Sd(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Md={[Da]:Na,[Ua]:Or,[Fr]:Fa,[Yt]:Cn,[Na]:Da,[Or]:Ua,[Fa]:Fr,[Cn]:Yt};class bi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};const n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){const n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const Ps=Math.PI/180,hr=180/Math.PI;function Qn(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ln[e&255]+Ln[e>>8&255]+Ln[e>>16&255]+Ln[e>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function Ic(e,t){return(e%t+t)%t}function bd(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Td(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function Jr(e,t,n){return(1-n)*e+n*t}function Ad(e,t,n,i){return Jr(e,t,1-Math.exp(-n*i))}function Ed(e,t=1){return t-Math.abs(Ic(e,t*2)-t)}function wd(e,t,n){if(e<=t)return 0;if(e>=n)return 1;e=(e-t)/(n-t);return e*e*(3-2*e)}function Cd(e,t,n){if(e<=t)return 0;if(e>=n)return 1;e=(e-t)/(n-t);return e*e*e*(e*(e*6-15)+10)}function Rd(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Id(e,t){return e+Math.random()*(t-e)}function Pd(e){return e*(0.5-Math.random())}function Ld(e){if(e!==void 0)Nh=e;let t=Nh+=1831565813;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}function Dd(e){return e*Ps}function Nd(e){return e*hr}function Ud(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Fd(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Od(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Bd(e,t,n,i,s){const{cos:r,sin:o}=Math,l=r(n/2),c=o(n/2),u=r((t+i)/2),d=o((t+i)/2),p=r((t-i)/2),m=o((t-i)/2),_=r((i-t)/2),v=o((i-t)/2);switch(s){case"XYX":e.set(l*d,c*p,c*m,l*u);break;case"YZY":e.set(c*m,l*d,c*p,l*u);break;case"ZXZ":e.set(c*p,c*m,l*d,l*u);break;case"XZX":e.set(l*d,c*v,c*_,l*u);break;case"YXY":e.set(c*_,l*d,c*v,l*u);break;case"ZYZ":e.set(c*v,c*_,l*d,l*u);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function vt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}const zd={DEG2RAD:Ps,RAD2DEG:hr,generateUUID:Qn,clamp:ut,euclideanModulo:Ic,mapLinear:bd,inverseLerp:Td,lerp:Jr,damp:Ad,pingpong:Ed,smoothstep:wd,smootherstep:Cd,randInt:Rd,randFloat:Id,randFloatSpread:Pd,seededRandom:Ld,degToRad:Dd,radToDeg:Nd,isPowerOfTwo:Ud,ceilPowerOfTwo:Fd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Bd,normalize:vt,denormalize:Hn};class we{static{we.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e;this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){this.x=e;this.y=t;return this}setScalar(e){this.x=e;this.y=e;return this}setX(e){this.x=e;return this}setY(e){this.y=e;return this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){this.x=e.x;this.y=e.y;return this}add(e){this.x+=e.x;this.y+=e.y;return this}addScalar(e){this.x+=e;this.y+=e;return this}addVectors(e,t){this.x=e.x+t.x;this.y=e.y+t.y;return this}addScaledVector(e,t){this.x+=e.x*t;this.y+=e.y*t;return this}sub(e){this.x-=e.x;this.y-=e.y;return this}subScalar(e){this.x-=e;this.y-=e;return this}subVectors(e,t){this.x=e.x-t.x;this.y=e.y-t.y;return this}multiply(e){this.x*=e.x;this.y*=e.y;return this}multiplyScalar(e){this.x*=e;this.y*=e;return this}divide(e){this.x/=e.x;this.y/=e.y;return this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;this.x=i[0]*t+i[3]*n+i[6];this.y=i[1]*t+i[4]*n+i[7];return this}min(e){this.x=Math.min(this.x,e.x);this.y=Math.min(this.y,e.y);return this}max(e){this.x=Math.max(this.x,e.x);this.y=Math.max(this.y,e.y);return this}clamp(e,t){this.x=ut(this.x,e.x,t.x);this.y=ut(this.y,e.y,t.y);return this}clampScalar(e,t){this.x=ut(this.x,e,t);this.y=ut(this.y,e,t);return this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);return this}negate(){this.x=-this.x;this.y=-this.y;return this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){this.x+=(e.x-this.x)*t;this.y+=(e.y-this.y)*t;return this}lerpVectors(e,t,n){this.x=e.x+(t.x-e.x)*n;this.y=e.y+(t.y-e.y)*n;return this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){this.x=e[t];this.y=e[t+1];return this}toArray(e=[],t=0){e[t]=this.x;e[t+1]=this.y;return e}fromBufferAttribute(e,t){this.x=e.getX(t);this.y=e.getY(t);return this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;this.x=s*n-r*i+e.x;this.y=s*i+r*n+e.y;return this}random(){this.x=Math.random();this.y=Math.random();return this}*[Symbol.iterator](){yield this.x;yield this.y}}class Dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0;this._x=e;this._y=t;this._z=n;this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],p=s[r+0],m=s[r+1],_=s[r+2],v=s[r+3];if(d!==v||l!==p||c!==m||u!==_){let T=l*p+c*m+u*_+d*v;if(T<0){p=-p;m=-m;_=-_;v=-v;T=-T}let I=1-o;if(T<0.9995){const C=Math.acos(T),B=Math.sin(C);I=Math.sin(I*C)/B;o=Math.sin(o*C)/B;l=l*I+p*o;c=c*I+m*o;u=u*I+_*o;d=d*I+v*o}else{l=l*I+p*o;c=c*I+m*o;u=u*I+_*o;d=d*I+v*o;const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C;c*=C;u*=C;d*=C}}e[t]=l;e[t+1]=c;e[t+2]=u;e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r],p=s[r+1],m=s[r+2],_=s[r+3];e[t]=o*_+u*d+l*m-c*p;e[t+1]=l*_+u*p+c*d-o*m;e[t+2]=c*_+u*m+o*p-l*d;e[t+3]=u*_-o*d-l*p-c*m;return e}get x(){return this._x}set x(e){this._x=e;this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e;this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e;this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e;this._onChangeCallback()}set(e,t,n,i){this._x=e;this._y=t;this._z=n;this._w=i;this._onChangeCallback();return this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){this._x=e.x;this._y=e.y;this._z=e.z;this._w=e.w;this._onChangeCallback();return this}setFromEuler(e,t=!0){const{_x:n,_y:i,_z:s,_order:r}=e,{cos:o,sin:l}=Math,c=o(n/2),u=o(i/2),d=o(s/2),p=l(n/2),m=l(i/2),_=l(s/2);switch(r){case"XYZ":this._x=p*u*d+c*m*_;this._y=c*m*d-p*u*_;this._z=c*u*_+p*m*d;this._w=c*u*d-p*m*_;break;case"YXZ":this._x=p*u*d+c*m*_;this._y=c*m*d-p*u*_;this._z=c*u*_-p*m*d;this._w=c*u*d+p*m*_;break;case"ZXY":this._x=p*u*d-c*m*_;this._y=c*m*d+p*u*_;this._z=c*u*_+p*m*d;this._w=c*u*d-p*m*_;break;case"ZYX":this._x=p*u*d-c*m*_;this._y=c*m*d+p*u*_;this._z=c*u*_-p*m*d;this._w=c*u*d+p*m*_;break;case"YZX":this._x=p*u*d+c*m*_;this._y=c*m*d+p*u*_;this._z=c*u*_-p*m*d;this._w=c*u*d-p*m*_;break;case"XZY":this._x=p*u*d-c*m*_;this._y=c*m*d-p*u*_;this._z=c*u*_+p*m*d;this._w=c*u*d+p*m*_;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);this._x=e.x*i;this._y=e.y*i;this._z=e.z*i;this._w=Math.cos(n);this._onChangeCallback();return this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const m=0.5/Math.sqrt(p+1);this._w=0.25/m;this._x=(u-l)*m;this._y=(s-c)*m;this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m;this._x=0.25*m;this._y=(i+r)/m;this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m;this._x=(i+r)/m;this._y=0.25*m;this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m;this._x=(s+c)/m;this._y=(l+u)/m;this._z=0.25*m}this._onChangeCallback();return this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001){n=0;if(Math.abs(e.x)>Math.abs(e.z)){this._x=-e.y;this._y=e.x;this._z=0;this._w=n}else{this._x=0;this._y=-e.z;this._z=e.y;this._w=n}}else{this._x=e.y*t.z-e.z*t.y;this._y=e.z*t.x-e.x*t.z;this._z=e.x*t.y-e.y*t.x;this._w=n}return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);this.slerp(e,i);return this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){this._x*=-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0){this._x=0;this._y=0;this._z=0;this._w=1}else{e=1/e;this._x=this._x*e;this._y=this._y*e;this._z=this._z*e;this._w=this._w*e}this._onChangeCallback();return this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const{_x:n,_y:i,_z:s,_w:r}=e,{_x:o,_y:l,_z:c,_w:u}=t;this._x=n*u+r*o+i*c-s*l;this._y=i*u+r*l+s*o-n*c;this._z=s*u+r*c+n*l-i*o;this._w=r*u-n*o-i*l-s*c;this._onChangeCallback();return this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,o=this.dot(e);if(o<0){n=-n;i=-i;s=-s;r=-r;o=-o}let l=1-t;if(o<0.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u;t=Math.sin(t*c)/u;this._x=this._x*l+n*t;this._y=this._y*l+i*t;this._z=this._z*l+s*t;this._w=this._w*l+r*t;this._onChangeCallback()}else{this._x=this._x*l+n*t;this._y=this._y*l+i*t;this._z=this._z*l+s*t;this._w=this._w*l+r*t;this.normalize()}return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){this._x=e[t];this._y=e[t+1];this._z=e[t+2];this._w=e[t+3];this._onChangeCallback();return this}toArray(e=[],t=0){e[t]=this._x;e[t+1]=this._y;e[t+2]=this._z;e[t+3]=this._w;return e}fromBufferAttribute(e,t){this._x=e.getX(t);this._y=e.getY(t);this._z=e.getZ(t);this._w=e.getW(t);this._onChangeCallback();return this}toJSON(){return this.toArray()}_onChange(e){this._onChangeCallback=e;return this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x;yield this._y;yield this._z;yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e;this.y=t;this.z=n}set(e,t,n){if(n===void 0)n=this.z;this.x=e;this.y=t;this.z=n;return this}setScalar(e){this.x=e;this.y=e;this.z=e;return this}setX(e){this.x=e;return this}setY(e){this.y=e;return this}setZ(e){this.z=e;return this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){this.x=e.x;this.y=e.y;this.z=e.z;return this}add(e){this.x+=e.x;this.y+=e.y;this.z+=e.z;return this}addScalar(e){this.x+=e;this.y+=e;this.z+=e;return this}addVectors(e,t){this.x=e.x+t.x;this.y=e.y+t.y;this.z=e.z+t.z;return this}addScaledVector(e,t){this.x+=e.x*t;this.y+=e.y*t;this.z+=e.z*t;return this}sub(e){this.x-=e.x;this.y-=e.y;this.z-=e.z;return this}subScalar(e){this.x-=e;this.y-=e;this.z-=e;return this}subVectors(e,t){this.x=e.x-t.x;this.y=e.y-t.y;this.z=e.z-t.z;return this}multiply(e){this.x*=e.x;this.y*=e.y;this.z*=e.z;return this}multiplyScalar(e){this.x*=e;this.y*=e;this.z*=e;return this}multiplyVectors(e,t){this.x=e.x*t.x;this.y=e.y*t.y;this.z=e.z*t.z;return this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;this.x=s[0]*t+s[3]*n+s[6]*i;this.y=s[1]*t+s[4]*n+s[7]*i;this.z=s[2]*t+s[5]*n+s[8]*i;return this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r;this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r;this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r;return this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:l}=e,c=2*(r*i-o*n),u=2*(o*t-s*i),d=2*(s*n-r*t);this.x=t+l*c+r*d-o*u;this.y=n+l*u+o*c-s*d;this.z=i+l*d+s*u-r*c;return this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;this.x=s[0]*t+s[4]*n+s[8]*i;this.y=s[1]*t+s[5]*n+s[9]*i;this.z=s[2]*t+s[6]*n+s[10]*i;return this.normalize()}divide(e){this.x/=e.x;this.y/=e.y;this.z/=e.z;return this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){this.x=Math.min(this.x,e.x);this.y=Math.min(this.y,e.y);this.z=Math.min(this.z,e.z);return this}max(e){this.x=Math.max(this.x,e.x);this.y=Math.max(this.y,e.y);this.z=Math.max(this.z,e.z);return this}clamp(e,t){this.x=ut(this.x,e.x,t.x);this.y=ut(this.y,e.y,t.y);this.z=ut(this.z,e.z,t.z);return this}clampScalar(e,t){this.x=ut(this.x,e,t);this.y=ut(this.y,e,t);this.z=ut(this.z,e,t);return this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);this.z=Math.trunc(this.z);return this}negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){this.x+=(e.x-this.x)*t;this.y+=(e.y-this.y)*t;this.z+=(e.z-this.z)*t;return this}lerpVectors(e,t,n){this.x=e.x+(t.x-e.x)*n;this.y=e.y+(t.y-e.y)*n;this.z=e.z+(t.z-e.z)*n;return this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const{x:n,y:i,z:s}=e,{x:r,y:o,z:l}=t;this.x=i*l-s*o;this.y=s*r-n*l;this.z=n*o-i*r;return this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){Pc.copy(this).projectOnVector(e);return this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;this.x=i*Math.sin(n);this.y=Math.cos(t)*e;this.z=i*Math.cos(n);return this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){this.x=e*Math.sin(t);this.y=n;this.z=e*Math.cos(t);return this}setFromMatrixPosition(e){const t=e.elements;this.x=t[12];this.y=t[13];this.z=t[14];return this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();this.x=t;this.y=n;this.z=i;return this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){this.x=e._x;this.y=e._y;this.z=e._z;return this}setFromColor(e){this.x=e.r;this.y=e.g;this.z=e.b;return this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){this.x=e[t];this.y=e[t+1];this.z=e[t+2];return this}toArray(e=[],t=0){e[t]=this.x;e[t+1]=this.y;e[t+2]=this.z;return e}fromBufferAttribute(e,t){this.x=e.getX(t);this.y=e.getY(t);this.z=e.getZ(t);return this}random(){this.x=Math.random();this.y=Math.random();this.z=Math.random();return this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);this.x=n*Math.cos(e);this.y=t;this.z=n*Math.sin(e);return this}*[Symbol.iterator](){yield this.x;yield this.y;yield this.z}}const Pc=new U,Uh=new Dn;class Ti{static{Ti.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1];if(e!==void 0)this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){const u=this.elements;u[0]=e;u[1]=i;u[2]=o;u[3]=t;u[4]=s;u[5]=l;u[6]=n;u[7]=r;u[8]=c;return this}identity(){this.set(1,0,0,0,1,0,0,0,1);return this}copy(e){const t=this.elements,n=e.elements;t[0]=n[0];t[1]=n[1];t[2]=n[2];t[3]=n[3];t[4]=n[4];t[5]=n[5];t[6]=n[6];t[7]=n[7];t[8]=n[8];return this}extractBasis(e,t,n){e.setFromMatrix3Column(this,0);t.setFromMatrix3Column(this,1);n.setFromMatrix3Column(this,2);return this}setFromMatrix4(e){const t=e.elements;this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]);return this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],_=n[8],v=i[0],T=i[3],I=i[6],C=i[1],B=i[4],F=i[7],W=i[2],oe=i[5],ve=i[8];s[0]=r*v+o*C+l*W;s[3]=r*T+o*B+l*oe;s[6]=r*I+o*F+l*ve;s[1]=c*v+u*C+d*W;s[4]=c*T+u*B+d*oe;s[7]=c*I+u*F+d*ve;s[2]=p*v+m*C+_*W;s[5]=p*T+m*B+_*oe;s[8]=p*I+m*F+_*ve;return this}multiplyScalar(e){const t=this.elements;t[0]*=e;t[3]*=e;t[6]*=e;t[1]*=e;t[4]*=e;t[7]*=e;t[2]*=e;t[5]*=e;t[8]*=e;return this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,p=o*l-u*s,m=c*s-r*l,_=t*d+n*p+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;e[0]=d*v;e[1]=(i*c-u*n)*v;e[2]=(o*n-i*r)*v;e[3]=p*v;e[4]=(u*t-i*l)*v;e[5]=(i*s-o*t)*v;e[6]=m*v;e[7]=(n*l-c*t)*v;e[8]=(r*t-n*s)*v;return this}transpose(){let e;const t=this.elements;e=t[1];t[1]=t[3];t[3]=e;e=t[2];t[2]=t[6];t[6]=e;e=t[5];t[5]=t[7];t[7]=e;return this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;e[0]=t[0];e[1]=t[3];e[2]=t[6];e[3]=t[1];e[4]=t[4];e[5]=t[7];e[6]=t[2];e[7]=t[5];e[8]=t[8];return this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1);return this}scale(e,t){os("Matrix3: .scale() is deprecated. Use .makeScale() instead.");this.premultiply(Lc.makeScale(e,t));return this}rotate(e){os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead.");this.premultiply(Lc.makeRotation(-e));return this}translate(e,t){os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead.");this.premultiply(Lc.makeTranslation(e,t));return this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);this.set(t,-n,0,n,t,0,0,0,1);return this}makeScale(e,t){this.set(e,0,0,0,t,0,0,0,1);return this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;e[t]=n[0];e[t+1]=n[1];e[t+2]=n[2];e[t+3]=n[3];e[t+4]=n[4];e[t+5]=n[5];e[t+6]=n[6];e[t+7]=n[7];e[t+8]=n[8];return e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new Ti,Fh=new Ti().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Oh=new Ti().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Gd(){const e={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,o){if(this.enabled===!1||r===o||!r||!o)return s;if(this.spaces[r].transfer===ar){s.r=Zi(s.r);s.g=Zi(s.g);s.b=Zi(s.b)}if(this.spaces[r].primaries!==this.spaces[o].primaries){s.applyMatrix3(this.spaces[r].toXYZ);s.applyMatrix3(this.spaces[o].fromXYZ)}if(this.spaces[o].transfer===ar){s.r=ur(s.r);s.g=ur(s.g);s.b=ur(s.b)}return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s===qr)return Zr;return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");return e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");return e.colorSpaceToWorking(s,r)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];e.define({[Yr]:{primaries:t,whitePoint:i,transfer:Zr,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:i,transfer:ar,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}});return e}const Jn=Gd();function Zi(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function ur(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}let dr;class Dc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(dr===void 0)dr=jr("canvas");dr.width=e.width;dr.height=e.height;const i=dr.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width;t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;n.putImageData(i,0,0);return t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(Zi(t[n]/255)*255);else t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else{lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.");return e}}}let kd=0;class Bi{constructor(e=null){this.isTextureSource=!0;Object.defineProperty(this,"id",{value:kd++});this.uuid=Qn();this.data=e;this.dataReady=!0;this.version=0}getSize(e){const t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){const t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(Nc(i[r].image));else s.push(Nc(i[r]))}else s=Nc(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function Nc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Dc.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else{lt("Texture: Unable to serialize Texture.");return{}}}class Bh extends Bi{constructor(e=null){os('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.');super(e);this.isSource=!0}}let Hd=0;const Uc=new U;class hn extends bi{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,n=yn,i=yn,s=Gn,r=Gr,o=Es,l=Si,c=hn.DEFAULT_ANISOTROPY,u=qr){super();this.isTexture=!0;Object.defineProperty(this,"id",{value:Hd++});this.uuid=Qn();this.name="";this.source=new Bi(e);this.mipmaps=[];this.mapping=t;this.channel=0;this.wrapS=n;this.wrapT=i;this.magFilter=s;this.minFilter=r;this.anisotropy=c;this.format=o;this.internalFormat=null;this.type=l;this.offset=new we(0,0);this.repeat=new we(1,1);this.center=new we(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new Ti;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.colorSpace=u;this.userData={};this.updateRanges=[];this.version=0;this.onUpdate=null;this.renderTarget=null;this.isRenderTargetTexture=!1;this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1;this.pmremVersion=0;this.normalized=!1}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name;this.source=e.source;this.mipmaps=e.mipmaps.slice(0);this.mapping=e.mapping;this.channel=e.channel;this.wrapS=e.wrapS;this.wrapT=e.wrapT;this.magFilter=e.magFilter;this.minFilter=e.minFilter;this.anisotropy=e.anisotropy;this.format=e.format;this.internalFormat=e.internalFormat;this.type=e.type;this.normalized=e.normalized;this.offset.copy(e.offset);this.repeat.copy(e.repeat);this.center.copy(e.center);this.rotation=e.rotation;this.matrixAutoUpdate=e.matrixAutoUpdate;this.matrix.copy(e.matrix);this.generateMipmaps=e.generateMipmaps;this.premultiplyAlpha=e.premultiplyAlpha;this.flipY=e.flipY;this.unpackAlignment=e.unpackAlignment;this.colorSpace=e.colorSpace;this.renderTarget=e.renderTarget;this.isRenderTargetTexture=e.isRenderTargetTexture;this.isArrayTexture=e.isArrayTexture;this.userData=JSON.parse(JSON.stringify(e.userData));this.needsUpdate=!0;return this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){const t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hi)return e;e.applyMatrix3(this.matrix);if(e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case ts:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case ts:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0){this.version++;this.source.needsUpdate=!0}}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hi;hn.DEFAULT_ANISOTROPY=1;class Vn{static{Vn.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e;this.y=t;this.z=n;this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){this.x=e;this.y=t;this.z=n;this.w=i;return this}setScalar(e){this.x=e;this.y=e;this.z=e;this.w=e;return this}setX(e){this.x=e;return this}setY(e){this.y=e;return this}setZ(e){this.z=e;return this}setW(e){this.w=e;return this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){this.x=e.x;this.y=e.y;this.z=e.z;this.w=e.w!==void 0?e.w:1;return this}add(e){this.x+=e.x;this.y+=e.y;this.z+=e.z;this.w+=e.w;return this}addScalar(e){this.x+=e;this.y+=e;this.z+=e;this.w+=e;return this}addVectors(e,t){this.x=e.x+t.x;this.y=e.y+t.y;this.z=e.z+t.z;this.w=e.w+t.w;return this}addScaledVector(e,t){this.x+=e.x*t;this.y+=e.y*t;this.z+=e.z*t;this.w+=e.w*t;return this}sub(e){this.x-=e.x;this.y-=e.y;this.z-=e.z;this.w-=e.w;return this}subScalar(e){this.x-=e;this.y-=e;this.z-=e;this.w-=e;return this}subVectors(e,t){this.x=e.x-t.x;this.y=e.y-t.y;this.z=e.z-t.z;this.w=e.w-t.w;return this}multiply(e){this.x*=e.x;this.y*=e.y;this.z*=e.z;this.w*=e.w;return this}multiplyScalar(e){this.x*=e;this.y*=e;this.z*=e;this.w*=e;return this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s;this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s;this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s;this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s;return this}divide(e){this.x/=e.x;this.y/=e.y;this.z/=e.z;this.w/=e.w;return this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);if(t<0.0001){this.x=1;this.y=0;this.z=0}else{this.x=e.x/t;this.y=e.y/t;this.z=e.z/t}return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const r=0.01,o=0.1,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],T=l[6],I=l[10];if(Math.abs(u-p)<r&&Math.abs(d-v)<r&&Math.abs(_-T)<r){if(Math.abs(u+p)<o&&Math.abs(d+v)<o&&Math.abs(_+T)<o&&Math.abs(c+m+I-3)<o){this.set(1,0,0,0);return this}t=Math.PI;const B=(c+1)/2,F=(m+1)/2,W=(I+1)/2,oe=(u+p)/4,ve=(d+v)/4,le=(_+T)/4;if(B>F&&B>W)if(B<r){n=0;i=0.707106781;s=0.707106781}else{n=Math.sqrt(B);i=oe/n;s=ve/n}else if(F>W)if(F<r){n=0.707106781;i=0;s=0.707106781}else{i=Math.sqrt(F);n=oe/i;s=le/i}else if(W<r){n=0.707106781;i=0.707106781;s=0}else{s=Math.sqrt(W);n=ve/s;i=le/s}this.set(n,i,s,t);return this}let C=Math.sqrt((T-_)*(T-_)+(d-v)*(d-v)+(p-u)*(p-u));if(Math.abs(C)<0.001)C=1;this.x=(T-_)/C;this.y=(d-v)/C;this.z=(p-u)/C;this.w=Math.acos((c+m+I-1)/2);return this}setFromMatrixPosition(e){const t=e.elements;this.x=t[12];this.y=t[13];this.z=t[14];this.w=t[15];return this}min(e){this.x=Math.min(this.x,e.x);this.y=Math.min(this.y,e.y);this.z=Math.min(this.z,e.z);this.w=Math.min(this.w,e.w);return this}max(e){this.x=Math.max(this.x,e.x);this.y=Math.max(this.y,e.y);this.z=Math.max(this.z,e.z);this.w=Math.max(this.w,e.w);return this}clamp(e,t){this.x=ut(this.x,e.x,t.x);this.y=ut(this.y,e.y,t.y);this.z=ut(this.z,e.z,t.z);this.w=ut(this.w,e.w,t.w);return this}clampScalar(e,t){this.x=ut(this.x,e,t);this.y=ut(this.y,e,t);this.z=ut(this.z,e,t);this.w=ut(this.w,e,t);return this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this}ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this}round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this}roundToZero(){this.x=Math.trunc(this.x);this.y=Math.trunc(this.y);this.z=Math.trunc(this.z);this.w=Math.trunc(this.w);return this}negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){this.x+=(e.x-this.x)*t;this.y+=(e.y-this.y)*t;this.z+=(e.z-this.z)*t;this.w+=(e.w-this.w)*t;return this}lerpVectors(e,t,n){this.x=e.x+(t.x-e.x)*n;this.y=e.y+(t.y-e.y)*n;this.z=e.z+(t.z-e.z)*n;this.w=e.w+(t.w-e.w)*n;return this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){this.x=e[t];this.y=e[t+1];this.z=e[t+2];this.w=e[t+3];return this}toArray(e=[],t=0){e[t]=this.x;e[t+1]=this.y;e[t+2]=this.z;e[t+3]=this.w;return e}fromBufferAttribute(e,t){this.x=e.getX(t);this.y=e.getY(t);this.z=e.getZ(t);this.w=e.getW(t);return this}random(){this.x=Math.random();this.y=Math.random();this.z=Math.random();this.w=Math.random();return this}*[Symbol.iterator](){yield this.x;yield this.y;yield this.z;yield this.w}}class ro extends bi{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n);this.isRenderTarget=!0;this.width=e;this.height=t;this.depth=n.depth;this.scissor=new Vn(0,0,e,t);this.scissorTest=!1;this.viewport=new Vn(0,0,e,t);this.textures=[];const i={width:e,height:t,depth:n.depth},s=new hn(i),r=n.count;for(let o=0;o<r;o++){this.textures[o]=s.clone();this.textures[o].isRenderTargetTexture=!0;this.textures[o].renderTarget=this}this._setTextureOptions(n);this.depthBuffer=n.depthBuffer;this.stencilBuffer=n.stencilBuffer;this.resolveColorBuffer=n.resolveColorBuffer;this.resolveDepthBuffer=n.resolveDepthBuffer;this.resolveStencilBuffer=n.resolveStencilBuffer;this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer;this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer;this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer;this._depthTexture=null;this.depthTexture=n.depthTexture;this.samples=n.samples;this.multiview=n.multiview;this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e;this.height=t;this.depth=n;for(let i=0,s=this.textures.length;i<s;i++){this.textures[i].image.width=e;this.textures[i].image.height=t;this.textures[i].image.depth=n;if(this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1}this.dispose()}this.viewport.set(0,0,e,t);this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width;this.height=e.height;this.depth=e.depth;this.scissor.copy(e.scissor);this.scissorTest=e.scissorTest;this.viewport.copy(e.viewport);this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone();this.textures[t].isRenderTargetTexture=!0;this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bi(i)}this.depthBuffer=e.depthBuffer;this.stencilBuffer=e.stencilBuffer;this.resolveColorBuffer=e.resolveColorBuffer;this.resolveDepthBuffer=e.resolveDepthBuffer;this.resolveStencilBuffer=e.resolveStencilBuffer;this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer;this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer;this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer;if(e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null;this.depthTexture=t}else this.depthTexture=e.depthTexture;this.samples=e.samples;this.multiview=e.multiview;this.useArrayDepthTexture=e.useArrayDepthTexture;return this}dispose(){this.dispatchEvent({type:"dispose"})}}class ao extends ro{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class Fc extends hn{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0;this.image={data:e,width:t,height:n,depth:i};this.magFilter=Pn;this.minFilter=Pn;this.wrapR=yn;this.generateMipmaps=!1;this.flipY=!1;this.unpackAlignment=1;this.layerUpdates=new Set}copy(e){super.copy(e);this.wrapR=e.wrapR;return this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends ao{constructor(e=1,t=1,n=1,i={}){super(e,t,i);this.isWebGLArrayRenderTarget=!0;this.depth=n;this.texture=new Fc(null,e,t,n);this._setTextureOptions(i);this.texture.isRenderTargetTexture=!0}}class oo extends hn{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0;this.image={data:e,width:t,height:n,depth:i};this.magFilter=Pn;this.minFilter=Pn;this.wrapR=yn;this.generateMipmaps=!1;this.flipY=!1;this.unpackAlignment=1}copy(e){super.copy(e);this.wrapR=e.wrapR;return this}}class Gh extends ao{constructor(e=1,t=1,n=1,i={}){super(e,t,i);this.isWebGL3DRenderTarget=!0;this.depth=n;this.texture=new oo(null,e,t,n);this._setTextureOptions(i);this.texture.isRenderTargetTexture=!0}}class yt{static{yt.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,l,c,u,d,p,m,_,v,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];if(e!==void 0)this.set(e,t,n,i,s,r,o,l,c,u,d,p,m,_,v,T)}set(e,t,n,i,s,r,o,l,c,u,d,p,m,_,v,T){const I=this.elements;I[0]=e;I[4]=t;I[8]=n;I[12]=i;I[1]=s;I[5]=r;I[9]=o;I[13]=l;I[2]=c;I[6]=u;I[10]=d;I[14]=p;I[3]=m;I[7]=_;I[11]=v;I[15]=T;return this}identity(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;t[0]=n[0];t[1]=n[1];t[2]=n[2];t[3]=n[3];t[4]=n[4];t[5]=n[5];t[6]=n[6];t[7]=n[7];t[8]=n[8];t[9]=n[9];t[10]=n[10];t[11]=n[11];t[12]=n[12];t[13]=n[13];t[14]=n[14];t[15]=n[15];return this}copyPosition(e){const t=this.elements,n=e.elements;t[12]=n[12];t[13]=n[13];t[14]=n[14];return this}setFromMatrix3(e){const t=e.elements;this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1);return this}extractBasis(e,t,n){if(this.determinantAffine()===0){e.set(1,0,0);t.set(0,1,0);n.set(0,0,1);return this}e.setFromMatrixColumn(this,0);t.setFromMatrixColumn(this,1);n.setFromMatrixColumn(this,2);return this}makeBasis(e,t,n){this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1);return this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),r=1/fr.setFromMatrixColumn(e,2).length();t[0]=n[0]*i;t[1]=n[1]*i;t[2]=n[2]*i;t[3]=0;t[4]=n[4]*s;t[5]=n[5]*s;t[6]=n[6]*s;t[7]=0;t[8]=n[8]*r;t[9]=n[9]*r;t[10]=n[10]*r;t[11]=0;t[12]=0;t[13]=0;t[14]=0;t[15]=1;return this}makeRotationFromEuler(e){const t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=r*u,m=r*d,_=o*u,v=o*d;t[0]=l*u;t[4]=-l*d;t[8]=c;t[1]=m+_*c;t[5]=p-v*c;t[9]=-o*l;t[2]=v-p*c;t[6]=_+m*c;t[10]=r*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,_=c*u,v=c*d;t[0]=p+v*o;t[4]=_*o-m;t[8]=r*c;t[1]=r*d;t[5]=r*u;t[9]=-o;t[2]=m*o-_;t[6]=v+p*o;t[10]=r*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,_=c*u,v=c*d;t[0]=p-v*o;t[4]=-r*d;t[8]=_+m*o;t[1]=m+_*o;t[5]=r*u;t[9]=v-p*o;t[2]=-r*c;t[6]=o;t[10]=r*l}else if(e.order==="ZYX"){const p=r*u,m=r*d,_=o*u,v=o*d;t[0]=l*u;t[4]=_*c-m;t[8]=p*c+v;t[1]=l*d;t[5]=v*c+p;t[9]=m*c-_;t[2]=-c;t[6]=o*l;t[10]=r*l}else if(e.order==="YZX"){const p=r*l,m=r*c,_=o*l,v=o*c;t[0]=l*u;t[4]=v-p*d;t[8]=_*d+m;t[1]=d;t[5]=r*u;t[9]=-o*u;t[2]=-c*u;t[6]=m*d+_;t[10]=p-v*d}else if(e.order==="XZY"){const p=r*l,m=r*c,_=o*l,v=o*c;t[0]=l*u;t[4]=-d;t[8]=c*u;t[1]=p*d+v;t[5]=r*u;t[9]=m*d-_;t[2]=_*d-m;t[6]=o*u;t[10]=v*d+p}t[3]=0;t[7]=0;t[11]=0;t[12]=0;t[13]=0;t[14]=0;t[15]=1;return this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Wd)}lookAt(e,t,n){const i=this.elements;ei.subVectors(e,t);if(ei.lengthSq()===0)ei.z=1;ei.normalize();ls.crossVectors(n,ei);if(ls.lengthSq()===0){if(Math.abs(n.z)===1)ei.x+=0.0001;else ei.z+=0.0001;ei.normalize();ls.crossVectors(n,ei)}ls.normalize();lo.crossVectors(ei,ls);i[0]=ls.x;i[4]=lo.x;i[8]=ei.x;i[1]=ls.y;i[5]=lo.y;i[9]=ei.y;i[2]=ls.z;i[6]=lo.z;i[10]=ei.z;return this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],_=n[2],v=n[6],T=n[10],I=n[14],C=n[3],B=n[7],F=n[11],W=n[15],oe=i[0],ve=i[4],le=i[8],Me=i[12],Ae=i[1],je=i[5],rt=i[9],dt=i[13],Lt=i[2],ht=i[6],nn=i[10],cn=i[14],Bn=i[3],an=i[7],pn=i[11],mn=i[15];s[0]=r*oe+o*Ae+l*Lt+c*Bn;s[4]=r*ve+o*je+l*ht+c*an;s[8]=r*le+o*rt+l*nn+c*pn;s[12]=r*Me+o*dt+l*cn+c*mn;s[1]=u*oe+d*Ae+p*Lt+m*Bn;s[5]=u*ve+d*je+p*ht+m*an;s[9]=u*le+d*rt+p*nn+m*pn;s[13]=u*Me+d*dt+p*cn+m*mn;s[2]=_*oe+v*Ae+T*Lt+I*Bn;s[6]=_*ve+v*je+T*ht+I*an;s[10]=_*le+v*rt+T*nn+I*pn;s[14]=_*Me+v*dt+T*cn+I*mn;s[3]=C*oe+B*Ae+F*Lt+W*Bn;s[7]=C*ve+B*je+F*ht+W*an;s[11]=C*le+B*rt+F*nn+W*pn;s[15]=C*Me+B*dt+F*cn+W*mn;return this}multiplyScalar(e){const t=this.elements;t[0]*=e;t[4]*=e;t[8]*=e;t[12]*=e;t[1]*=e;t[5]*=e;t[9]*=e;t[13]*=e;t[2]*=e;t[6]*=e;t[10]*=e;t[14]*=e;t[3]*=e;t[7]*=e;t[11]*=e;t[15]*=e;return this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],_=e[3],v=e[7],T=e[11],I=e[15],C=l*m-c*p,B=o*m-c*d,F=o*p-l*d,W=r*m-c*u,oe=r*p-l*u,ve=r*d-o*u;return t*(v*C-T*B+I*F)-n*(_*C-T*W+I*oe)+i*(_*B-v*W+I*ve)-s*(_*F-v*oe+T*ve)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-n*(s*u-o*l)+i*(s*c-r*l)}transpose(){const e=this.elements;let t;t=e[1];e[1]=e[4];e[4]=t;t=e[2];e[2]=e[8];e[8]=t;t=e[6];e[6]=e[9];e[9]=t;t=e[3];e[3]=e[12];e[12]=t;t=e[7];e[7]=e[13];e[13]=t;t=e[11];e[11]=e[14];e[14]=t;return this}setPosition(e,t,n){const i=this.elements;if(e.isVector3){i[12]=e.x;i[13]=e.y;i[14]=e.z}else{i[12]=e;i[13]=t;i[14]=n}return this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],_=e[12],v=e[13],T=e[14],I=e[15],C=t*o-n*r,B=t*l-i*r,F=t*c-s*r,W=n*l-i*o,oe=n*c-s*o,ve=i*c-s*l,le=u*v-d*_,Me=u*T-p*_,Ae=u*I-m*_,je=d*T-p*v,rt=d*I-m*v,dt=p*I-m*T,Lt=C*dt-B*rt+F*je+W*Ae-oe*Me+ve*le;if(Lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ht=1/Lt;e[0]=(o*dt-l*rt+c*je)*ht;e[1]=(i*rt-n*dt-s*je)*ht;e[2]=(v*ve-T*oe+I*W)*ht;e[3]=(p*oe-d*ve-m*W)*ht;e[4]=(l*Ae-r*dt-c*Me)*ht;e[5]=(t*dt-i*Ae+s*Me)*ht;e[6]=(T*F-_*ve-I*B)*ht;e[7]=(u*ve-p*F+m*B)*ht;e[8]=(r*rt-o*Ae+c*le)*ht;e[9]=(n*Ae-t*rt-s*le)*ht;e[10]=(_*oe-v*F+I*C)*ht;e[11]=(d*F-u*oe-m*C)*ht;e[12]=(o*Me-r*je-l*le)*ht;e[13]=(t*je-n*Me+i*le)*ht;e[14]=(v*B-_*W-T*C)*ht;e[15]=(u*W-d*B+p*C)*ht;return this}scale(e){const t=this.elements,{x:n,y:i,z:s}=e;t[0]*=n;t[4]*=i;t[8]*=s;t[1]*=n;t[5]*=i;t[9]*=s;t[2]*=n;t[6]*=i;t[10]*=s;t[3]*=n;t[7]*=i;t[11]*=s;return this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1);return this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1);return this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1);return this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:o,z:l}=e,c=s*r,u=s*o;this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1);return this}makeScale(e,t,n){this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1);return this}makeShear(e,t,n,i,s,r){this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1);return this}compose(e,t,n){const i=this.elements,{_x:s,_y:r,_z:o,_w:l}=t,c=s+s,u=r+r,d=o+o,p=s*c,m=s*u,_=s*d,v=r*u,T=r*d,I=o*d,C=l*c,B=l*u,F=l*d,{x:W,y:oe,z:ve}=n;i[0]=(1-(v+I))*W;i[1]=(m+F)*W;i[2]=(_-B)*W;i[3]=0;i[4]=(m-F)*oe;i[5]=(1-(p+I))*oe;i[6]=(T+C)*oe;i[7]=0;i[8]=(_+B)*ve;i[9]=(T-C)*ve;i[10]=(1-(p+v))*ve;i[11]=0;i[12]=e.x;i[13]=e.y;i[14]=e.z;i[15]=1;return this}decompose(e,t,n){const i=this.elements;e.x=i[12];e.y=i[13];e.z=i[14];const s=this.determinantAffine();if(s===0){n.set(1,1,1);t.identity();return this}let r=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),l=fr.set(i[8],i[9],i[10]).length();if(s<0)r=-r;Ai.copy(this);const c=1/r,u=1/o,d=1/l;Ai.elements[0]*=c;Ai.elements[1]*=c;Ai.elements[2]*=c;Ai.elements[4]*=u;Ai.elements[5]*=u;Ai.elements[6]*=u;Ai.elements[8]*=d;Ai.elements[9]*=d;Ai.elements[10]*=d;t.setFromRotationMatrix(Ai);n.x=r;n.y=o;n.z=l;return this}makePerspective(e,t,n,i,s,r,o=Mi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let _,v;if(l){_=s/(r-s);v=r*s/(r-s)}else if(o===Mi){_=-(r+s)/(r-s);v=-2*r*s/(r-s)}else if(o===Is){_=-r/(r-s);v=-r*s/(r-s)}else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);c[0]=u;c[4]=0;c[8]=p;c[12]=0;c[1]=0;c[5]=d;c[9]=m;c[13]=0;c[2]=0;c[6]=0;c[10]=_;c[14]=v;c[3]=0;c[7]=0;c[11]=-1;c[15]=0;return this}makeOrthographic(e,t,n,i,s,r,o=Mi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),p=-(t+e)/(t-e),m=-(n+i)/(n-i);let _,v;if(l){_=1/(r-s);v=r/(r-s)}else if(o===Mi){_=-2/(r-s);v=-(r+s)/(r-s)}else if(o===Is){_=-1/(r-s);v=-s/(r-s)}else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);c[0]=u;c[4]=0;c[8]=0;c[12]=p;c[1]=0;c[5]=d;c[9]=0;c[13]=m;c[2]=0;c[6]=0;c[10]=_;c[14]=v;c[3]=0;c[7]=0;c[11]=0;c[15]=1;return this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;e[t]=n[0];e[t+1]=n[1];e[t+2]=n[2];e[t+3]=n[3];e[t+4]=n[4];e[t+5]=n[5];e[t+6]=n[6];e[t+7]=n[7];e[t+8]=n[8];e[t+9]=n[9];e[t+10]=n[10];e[t+11]=n[11];e[t+12]=n[12];e[t+13]=n[13];e[t+14]=n[14];e[t+15]=n[15];return e}}const fr=new U,Ai=new yt,Vd=new U(0,0,0),Wd=new U(1,1,1),ls=new U,lo=new U,ei=new U,kh=new yt,Hh=new Dn;class Ei{constructor(e=0,t=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0;this._x=e;this._y=t;this._z=n;this._order=i}get x(){return this._x}set x(e){this._x=e;this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e;this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e;this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e;this._onChangeCallback()}set(e,t,n,i=this._order){this._x=e;this._y=t;this._z=n;this._order=i;this._onChangeCallback();return this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){this._x=e._x;this._y=e._y;this._z=e._z;this._order=e._order;this._onChangeCallback();return this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],p=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1));if(Math.abs(o)<0.9999999){this._x=Math.atan2(-u,m);this._z=Math.atan2(-r,s)}else{this._x=Math.atan2(p,c);this._z=0}break;case"YXZ":this._x=Math.asin(-ut(u,-1,1));if(Math.abs(u)<0.9999999){this._y=Math.atan2(o,m);this._z=Math.atan2(l,c)}else{this._y=Math.atan2(-d,s);this._z=0}break;case"ZXY":this._x=Math.asin(ut(p,-1,1));if(Math.abs(p)<0.9999999){this._y=Math.atan2(-d,m);this._z=Math.atan2(-r,c)}else{this._y=0;this._z=Math.atan2(l,s)}break;case"ZYX":this._y=Math.asin(-ut(d,-1,1));if(Math.abs(d)<0.9999999){this._x=Math.atan2(p,m);this._z=Math.atan2(l,s)}else{this._x=0;this._z=Math.atan2(-r,c)}break;case"YZX":this._z=Math.asin(ut(l,-1,1));if(Math.abs(l)<0.9999999){this._x=Math.atan2(-u,c);this._y=Math.atan2(-d,s)}else{this._x=0;this._y=Math.atan2(o,m)}break;case"XZY":this._z=Math.asin(-ut(r,-1,1));if(Math.abs(r)<0.9999999){this._x=Math.atan2(p,c);this._y=Math.atan2(o,s)}else{this._x=Math.atan2(-u,m);this._y=0}break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}this._order=t;if(n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){kh.makeRotationFromQuaternion(e);return this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){Hh.setFromEuler(this);return this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){this._x=e[0];this._y=e[1];this._z=e[2];if(e[3]!==void 0)this._order=e[3];this._onChangeCallback();return this}toArray(e=[],t=0){e[t]=this._x;e[t+1]=this._y;e[t+2]=this._z;e[t+3]=this._order;return e}_onChange(e){this._onChangeCallback=e;return this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x;yield this._y;yield this._z;yield this._order}}Ei.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const Vh=new U,pr=new Dn,ji=new yt,ho=new U,$r=new U,qd=new U,Yd=new Dn,Zd=new U(1,0,0),jd=new U(0,1,0),Jd=new U(0,0,1),$d={type:"added"},Bf={type:"removed"},Kr={type:"childadded",child:null},Wh={type:"childremoved",child:null};class Gt extends bi{constructor(){super();this.isObject3D=!0;Object.defineProperty(this,"id",{value:Xd++});this.uuid=Qn();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=Gt.DEFAULT_UP.clone();const e=new U,t=new Ei,n=new Dn,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s);n._onChange(r);Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ti}});this.matrix=new yt;this.matrixWorld=new yt;this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE;this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;this.matrixWorldNeedsUpdate=!1;this.layers=new co;this.visible=!0;this.castShadow=!1;this.receiveShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.animations=[];this.customDepthMaterial=void 0;this.customDistanceMaterial=void 0;this.static=!1;this.userData={};this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e);this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){this.quaternion.premultiply(e);return this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){pr.setFromAxisAngle(e,t);this.quaternion.multiply(pr);return this}rotateOnWorldAxis(e,t){pr.setFromAxisAngle(e,t);this.quaternion.premultiply(pr);return this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(jd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){Vh.copy(e).applyQuaternion(this.quaternion);this.position.add(Vh.multiplyScalar(t));return this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(jd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){this.updateWorldMatrix(!0,!1);return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){this.updateWorldMatrix(!0,!1);return e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)ho.copy(e);else ho.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1);$r.setFromMatrixPosition(this.matrixWorld);if(this.isCamera||this.isLight)ji.lookAt($r,ho,this.up);else ji.lookAt(ho,$r,this.up);this.quaternion.setFromRotationMatrix(ji);if(i){ji.extractRotation(i.matrixWorld);pr.setFromRotationMatrix(ji);this.quaternion.premultiply(pr.invert())}}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this){Nt("Object3D.add: object can't be added as a child of itself.",e);return this}if(e&&e.isObject3D){e.removeFromParent();e.parent=this;this.children.push(e);e.dispatchEvent($d);Kr.child=e;this.dispatchEvent(Kr);Kr.child=null}else Nt("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);if(t!==-1){e.parent=null;this.children.splice(t,1);e.dispatchEvent(Bf);Wh.child=e;this.dispatchEvent(Wh);Wh.child=null}return this}removeFromParent(){const e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){this.updateWorldMatrix(!0,!1);ji.copy(this.matrixWorld).invert();if(e.parent!==null){e.parent.updateWorldMatrix(!0,!1);ji.multiply(e.parent.matrixWorld)}e.applyMatrix4(ji);e.removeFromParent();e.parent=this;this.children.push(e);e.updateWorldMatrix(!1,!0);e.dispatchEvent($d);Kr.child=e;this.dispatchEvent(Kr);Kr.child=null;return this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){this.updateWorldMatrix(!0,!1);return e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){this.updateWorldMatrix(!0,!1);this.matrixWorld.decompose($r,e,qd);return e}getWorldScale(e){this.updateWorldMatrix(!0,!1);this.matrixWorld.decompose($r,Yd,e);return e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;if(t!==null){e(t);t.traverseAncestors(e)}}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i;s[13]+=n-s[1]*t-s[5]*n-s[9]*i;s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1;e=!0}const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1;n=!0}if(t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e==="string",n={};if(t){e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}};n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"}}const i={};i.uuid=this.uuid;i.type=this.type;i.name=this.name;i.castShadow=this.castShadow;i.receiveShadow=this.receiveShadow;i.visible=this.visible;i.frustumCulled=this.frustumCulled;i.renderOrder=this.renderOrder;i.static=this.static;i.matrixAutoUpdate=this.matrixAutoUpdate;if(Object.keys(this.userData).length>0)i.userData=this.userData;i.layers=this.layers.mask;i.matrix=this.matrix.toArray();i.up=this.up.toArray();if(this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){i.type="InstancedMesh";i.count=this.count;i.instanceMatrix=this.instanceMatrix.toJSON();if(this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){i.type="BatchedMesh";i.perObjectFrustumCulled=this.perObjectFrustumCulled;i.sortObjects=this.sortObjects;i.drawRanges=this._drawRanges;i.reservedRanges=this._reservedRanges;i.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0}));i.instanceInfo=this._instanceInfo.map((o)=>({...o}));i.availableInstanceIds=this._availableInstanceIds.slice();i.availableGeometryIds=this._availableGeometryIds.slice();i.nextIndexStart=this._nextIndexStart;i.nextVertexStart=this._nextVertexStart;i.geometryCount=this._geometryCount;i.maxInstanceCount=this._maxInstanceCount;i.maxVertexCount=this._maxVertexCount;i.maxIndexCount=this._maxIndexCount;i.geometryInitialized=this._geometryInitialized;i.matricesTexture=this._matricesTexture.toJSON(e);i.indirectTexture=this._indirectTexture.toJSON(e);if(this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(o,l){if(o[l.uuid]===void 0)o[l.uuid]=l.toJSON(e);return l.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh){i.bindMode=this.bindMode;i.bindMatrix=this.bindMatrix.toArray();if(this.skeleton!==void 0){s(e.skeletons,this.skeleton);i.skeleton=this.skeleton.uuid}}if(this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),p=r(e.skeletons),m=r(e.animations),_=r(e.nodes);if(o.length>0)n.geometries=o;if(l.length>0)n.materials=l;if(c.length>0)n.textures=c;if(u.length>0)n.images=u;if(d.length>0)n.shapes=d;if(p.length>0)n.skeletons=p;if(m.length>0)n.animations=m;if(_.length>0)n.nodes=_}n.object=i;return n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata;l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){this.name=e.name;this.up.copy(e.up);this.position.copy(e.position);this.rotation.order=e.rotation.order;this.quaternion.copy(e.quaternion);this.scale.copy(e.scale);this.pivot=e.pivot!==null?e.pivot.clone():null;this.matrix.copy(e.matrix);this.matrixWorld.copy(e.matrixWorld);this.matrixAutoUpdate=e.matrixAutoUpdate;this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate;this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate;this.layers.mask=e.layers.mask;this.visible=e.visible;this.castShadow=e.castShadow;this.receiveShadow=e.receiveShadow;this.frustumCulled=e.frustumCulled;this.renderOrder=e.renderOrder;this.static=e.static;this.animations=e.animations.slice();this.userData=JSON.parse(JSON.stringify(e.userData));if(t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new U(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mr extends Gt{constructor(){super();this.isGroup=!0;this.type="Group"}}const zf={type:"move"};class Kd{constructor(){this._targetRay=null;this._grip=null;this._hand=null}getHandSpace(){if(this._hand===null){this._hand=new mr;this._hand.matrixAutoUpdate=!1;this._hand.visible=!1;this._hand.joints={};this._hand.inputState={pinching:!1}}return this._hand}getTargetRaySpace(){if(this._targetRay===null){this._targetRay=new mr;this._targetRay.matrixAutoUpdate=!1;this._targetRay.visible=!1;this._targetRay.hasLinearVelocity=!1;this._targetRay.linearVelocity=new U;this._targetRay.hasAngularVelocity=!1;this._targetRay.angularVelocity=new U}return this._targetRay}getGripSpace(){if(this._grip===null){this._grip=new mr;this._grip.matrixAutoUpdate=!1;this._grip.visible=!1;this._grip.hasLinearVelocity=!1;this._grip.linearVelocity=new U;this._grip.hasAngularVelocity=!1;this._grip.angularVelocity=new U;this._grip.eventsEnabled=!1}return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}this.dispatchEvent({type:"connected",data:e});return this}disconnect(e){this.dispatchEvent({type:"disconnected",data:e});if(this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const T=t.getJointPose(v,n),I=this._getHandJoint(c,v);if(T!==null){I.matrix.fromArray(T.transform.matrix);I.matrix.decompose(I.position,I.rotation,I.scale);I.matrixWorldNeedsUpdate=!0;I.jointRadius=T.radius}I.visible=T!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=0.02,_=0.005;if(c.inputState.pinching&&p>m+_){c.inputState.pinching=!1;this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})}else if(!c.inputState.pinching&&p<=m-_){c.inputState.pinching=!0;this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}}else if(l!==null&&e.gripSpace){s=t.getPose(e.gripSpace,n);if(s!==null){l.matrix.fromArray(s.transform.matrix);l.matrix.decompose(l.position,l.rotation,l.scale);l.matrixWorldNeedsUpdate=!0;if(s.linearVelocity){l.hasLinearVelocity=!0;l.linearVelocity.copy(s.linearVelocity)}else l.hasLinearVelocity=!1;if(s.angularVelocity){l.hasAngularVelocity=!0;l.angularVelocity.copy(s.angularVelocity)}else l.hasAngularVelocity=!1;if(l.eventsEnabled)l.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){i=t.getPose(e.targetRaySpace,n);if(i===null&&s!==null)i=s;if(i!==null){o.matrix.fromArray(i.transform.matrix);o.matrix.decompose(o.position,o.rotation,o.scale);o.matrixWorldNeedsUpdate=!0;if(i.linearVelocity){o.hasLinearVelocity=!0;o.linearVelocity.copy(i.linearVelocity)}else o.hasLinearVelocity=!1;if(i.angularVelocity){o.hasAngularVelocity=!0;o.angularVelocity.copy(i.angularVelocity)}else o.hasAngularVelocity=!1;this.dispatchEvent(zf)}}}if(o!==null)o.visible=i!==null;if(l!==null)l.visible=s!==null;if(c!==null)c.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1;n.visible=!1;e.joints[t.jointName]=n;e.add(n)}return e.joints[t.jointName]}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Xh(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class gt{constructor(e,t,n){this.isColor=!0;this.r=1;this.g=1;this.b=1;return this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){this.r=e;this.g=e;this.b=e;return this}setHex(e,t=kn){e=Math.floor(e);this.r=(e>>16&255)/255;this.g=(e>>8&255)/255;this.b=(e&255)/255;Jn.colorSpaceToWorking(this,t);return this}setRGB(e,t,n,i=Jn.workingColorSpace){this.r=e;this.g=t;this.b=n;Jn.colorSpaceToWorking(this,i);return this}setHSL(e,t,n,i=Jn.workingColorSpace){e=Ic(e,1);t=ut(t,0,1);n=ut(n,0,1);if(t===0)this.r=this.g=this.b=n;else{const s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Xh(r,s,e+0.3333333333333333);this.g=Xh(r,s,e);this.b=Xh(r,s,e-0.3333333333333333)}Jn.colorSpaceToWorking(this,i);return this}setStyle(e,t=kn){function n(s){if(s===void 0)return;if(parseFloat(s)<1)lt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){n(s[4]);return this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t)}if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){n(s[4]);return this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t)}break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){n(s[4]);return this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t)}break;default:lt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=Qd[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else lt("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){this.r=e.r;this.g=e.g;this.b=e.b;return this}copySRGBToLinear(e){this.r=Zi(e.r);this.g=Zi(e.g);this.b=Zi(e.b);return this}copyLinearToSRGB(e){this.r=ur(e.r);this.g=ur(e.g);this.b=ur(e.b);return this}convertSRGBToLinear(){this.copySRGBToLinear(this);return this}convertLinearToSRGB(){this.copyLinearToSRGB(this);return this}getHex(e=kn){Jn.workingToColorSpace(Wn.copy(this),e);return Math.round(ut(Wn.r*255,0,255))*65536+Math.round(ut(Wn.g*255,0,255))*256+Math.round(ut(Wn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jn.workingColorSpace){Jn.workingToColorSpace(Wn.copy(this),t);const{r:n,g:i,b:s}=Wn,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r){l=0;c=0}else{const d=r-o;c=u<=0.5?d/(r+o):d/(2-r-o);switch(r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}e.h=l;e.s=c;e.l=u;return e}getRGB(e,t=Jn.workingColorSpace){Jn.workingToColorSpace(Wn.copy(this),t);e.r=Wn.r;e.g=Wn.g;e.b=Wn.b;return e}getStyle(e=kn){Jn.workingToColorSpace(Wn.copy(this),e);const{r:t,g:n,b:i}=Wn;if(e!==kn)return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){this.getHSL(Ls);return this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){this.r+=e.r;this.g+=e.g;this.b+=e.b;return this}addColors(e,t){this.r=e.r+t.r;this.g=e.g+t.g;this.b=e.b+t.b;return this}addScalar(e){this.r+=e;this.g+=e;this.b+=e;return this}sub(e){this.r=Math.max(0,this.r-e.r);this.g=Math.max(0,this.g-e.g);this.b=Math.max(0,this.b-e.b);return this}multiply(e){this.r*=e.r;this.g*=e.g;this.b*=e.b;return this}multiplyScalar(e){this.r*=e;this.g*=e;this.b*=e;return this}lerp(e,t){this.r+=(e.r-this.r)*t;this.g+=(e.g-this.g)*t;this.b+=(e.b-this.b)*t;return this}lerpColors(e,t,n){this.r=e.r+(t.r-e.r)*n;this.g=e.g+(t.g-e.g)*n;this.b=e.b+(t.b-e.b)*n;return this}lerpHSL(e,t){this.getHSL(Ls);e.getHSL(Oc);const n=Jr(Ls.h,Oc.h,t),i=Jr(Ls.s,Oc.s,t),s=Jr(Ls.l,Oc.l,t);this.setHSL(n,i,s);return this}setFromVector3(e){this.r=e.x;this.g=e.y;this.b=e.z;return this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;this.r=s[0]*t+s[3]*n+s[6]*i;this.g=s[1]*t+s[4]*n+s[7]*i;this.b=s[2]*t+s[5]*n+s[8]*i;return this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){this.r=e[t];this.g=e[t+1];this.b=e[t+2];return this}toArray(e=[],t=0){e[t]=this.r;e[t+1]=this.g;e[t+2]=this.b;return e}fromBufferAttribute(e,t){this.r=e.getX(t);this.g=e.getY(t);this.b=e.getZ(t);return this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r;yield this.g;yield this.b}}const Wn=new gt;gt.NAMES=Qd;class Bc{constructor(e,t=0.00025){this.isFogExp2=!0;this.name="";this.color=new gt(e);this.density=t}clone(){return new Bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zc{constructor(e,t=1,n=1000){this.isFog=!0;this.name="";this.color=new gt(e);this.near=t;this.far=n}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qh extends Gt{constructor(){super();this.isScene=!0;this.type="Scene";this.background=null;this.environment=null;this.fog=null;this.backgroundBlurriness=0;this.backgroundIntensity=1;this.backgroundRotation=new Ei;this.environmentIntensity=1;this.environmentRotation=new Ei;this.overrideMaterial=null;if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){super.copy(e,t);if(e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();this.backgroundBlurriness=e.backgroundBlurriness;this.backgroundIntensity=e.backgroundIntensity;this.backgroundRotation.copy(e.backgroundRotation);this.environmentIntensity=e.environmentIntensity;this.environmentRotation.copy(e.environmentRotation);if(e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();this.matrixAutoUpdate=e.matrixAutoUpdate;return this}toJSON(e){const t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();t.object.backgroundBlurriness=this.backgroundBlurriness;t.object.backgroundIntensity=this.backgroundIntensity;t.object.backgroundRotation=this.backgroundRotation.toArray();t.object.environmentIntensity=this.environmentIntensity;t.object.environmentRotation=this.environmentRotation.toArray();return t}}const zi=new U,cs=new U,Yh=new U,hs=new U,Qr=new U,ea=new U,ef=new U,Zh=new U,jh=new U,Jh=new U,$h=new Vn,Kh=new Vn,Qh=new Vn;class ti{constructor(e=new U,t=new U,n=new U){this.a=e;this.b=t;this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t);zi.subVectors(e,t);i.cross(zi);const s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){zi.subVectors(i,t);cs.subVectors(n,t);Yh.subVectors(e,t);const r=zi.dot(zi),o=zi.dot(cs),l=zi.dot(Yh),c=cs.dot(cs),u=cs.dot(Yh),d=r*c-o*o;if(d===0){s.set(0,0,0);return null}const p=1/d,m=(c*l-o*u)*p,_=(r*u-o*l)*p;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,hs)===null)return!1;return hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,n,i,s,r,o,l){if(this.getBarycoord(e,t,n,i,hs)===null){l.x=0;l.y=0;if("z"in l)l.z=0;if("w"in l)l.w=0;return null}l.setScalar(0);l.addScaledVector(s,hs.x);l.addScaledVector(r,hs.y);l.addScaledVector(o,hs.z);return l}static getInterpolatedAttribute(e,t,n,i,s,r){$h.setScalar(0);Kh.setScalar(0);Qh.setScalar(0);$h.fromBufferAttribute(e,t);Kh.fromBufferAttribute(e,n);Qh.fromBufferAttribute(e,i);r.setScalar(0);r.addScaledVector($h,s.x);r.addScaledVector(Kh,s.y);r.addScaledVector(Qh,s.z);return r}static isFrontFacing(e,t,n,i){zi.subVectors(n,t);cs.subVectors(e,t);return zi.cross(cs).dot(i)<0}set(e,t,n){this.a.copy(e);this.b.copy(t);this.c.copy(n);return this}setFromPointsAndIndices(e,t,n,i){this.a.copy(e[t]);this.b.copy(e[n]);this.c.copy(e[i]);return this}setFromAttributeAndIndices(e,t,n,i){this.a.fromBufferAttribute(e,t);this.b.fromBufferAttribute(e,n);this.c.fromBufferAttribute(e,i);return this}clone(){return new this.constructor().copy(this)}copy(e){this.a.copy(e.a);this.b.copy(e.b);this.c.copy(e.c);return this}getArea(){zi.subVectors(this.c,this.b);cs.subVectors(this.a,this.b);return zi.cross(cs).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;Qr.subVectors(i,n);ea.subVectors(s,n);Zh.subVectors(e,n);const l=Qr.dot(Zh),c=ea.dot(Zh);if(l<=0&&c<=0)return t.copy(n);jh.subVectors(e,i);const u=Qr.dot(jh),d=ea.dot(jh);if(u>=0&&d<=u)return t.copy(i);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0){r=l/(l-u);return t.copy(n).addScaledVector(Qr,r)}Jh.subVectors(e,s);const m=Qr.dot(Jh),_=ea.dot(Jh);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0){o=c/(c-_);return t.copy(n).addScaledVector(ea,o)}const T=u*_-m*d;if(T<=0&&d-u>=0&&m-_>=0){ef.subVectors(s,i);o=(d-u)/(d-u+(m-_));return t.copy(i).addScaledVector(ef,o)}const I=1/(T+v+p);r=v*I;o=p*I;return t.copy(n).addScaledVector(Qr,r).addScaledVector(ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nt{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0;this.min=e;this.max=t}set(e,t){this.min.copy(e);this.max.copy(t);return this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(0.5);this.min.copy(e).sub(n);this.max.copy(e).add(n);return this}setFromObject(e,t=!1){this.makeEmpty();return this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.min.copy(e.min);this.max.copy(e.max);return this}makeEmpty(){this.min.x=this.min.y=this.min.z=1/0;this.max.x=this.max.y=this.max.z=-1/0;return this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){this.min.min(e);this.max.max(e);return this}expandByVector(e){this.min.sub(e);this.max.add(e);return this}expandByScalar(e){this.min.addScalar(-e);this.max.addScalar(e);return this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(e.isMesh===!0)e.getVertexPosition(r,_n);else _n.fromBufferAttribute(s,r);_n.applyMatrix4(e.matrixWorld);this.expandByPoint(_n)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Ds.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Ds.copy(n.boundingBox)}Ds.applyMatrix4(e.matrixWorld);this.union(Ds)}}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){this.clampPoint(e.center,_n);return _n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0){t=e.normal.x*this.min.x;n=e.normal.x*this.max.x}else{t=e.normal.x*this.max.x;n=e.normal.x*this.min.x}if(e.normal.y>0){t+=e.normal.y*this.min.y;n+=e.normal.y*this.max.y}else{t+=e.normal.y*this.max.y;n+=e.normal.y*this.min.y}if(e.normal.z>0){t+=e.normal.z*this.min.z;n+=e.normal.z*this.max.z}else{t+=e.normal.z*this.max.z;n+=e.normal.z*this.min.z}return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta);Ji.subVectors(this.max,ta);gr.subVectors(e.a,ta);Ns.subVectors(e.b,ta);_r.subVectors(e.c,ta);us.subVectors(Ns,gr);ds.subVectors(_r,Ns);Us.subVectors(gr,_r);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Us.z,Us.y,us.z,0,-us.x,ds.z,0,-ds.x,Us.z,0,-Us.x,-us.y,us.x,0,-ds.y,ds.x,0,-Us.y,Us.x,0];if(!Gc(t,gr,Ns,_r,Ji))return!1;t=[1,0,0,0,1,0,0,0,1];if(!Gc(t,gr,Ns,_r,Ji))return!1;uo.crossVectors(us,ds);t=[uo.x,uo.y,uo.z];return Gc(t,gr,Ns,_r,Ji)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else{this.getCenter(e.center);e.radius=this.getSize(_n).length()*0.5}return e}intersect(e){this.min.max(e.min);this.max.min(e.max);if(this.isEmpty())this.makeEmpty();return this}union(e){this.min.min(e.min);this.max.max(e.max);return this}applyMatrix4(e){if(this.isEmpty())return this;De[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e);De[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e);De[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e);De[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e);De[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e);De[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e);De[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e);De[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e);this.setFromPoints(De);return this}translate(e){this.min.add(e);this.max.add(e);return this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){this.min.fromArray(e.min);this.max.fromArray(e.max);return this}}const De=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,Ds=new nt,gr=new U,Ns=new U,_r=new U,us=new U,ds=new U,Us=new U,ta=new U,Ji=new U,uo=new U,Fs=new U;function Gc(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Fs.fromArray(e,r);const l=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=t.dot(Fs),u=n.dot(Fs),d=i.dot(Fs);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const ni=eu();function eu(){const e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const u=c-127;if(u<-27){i[c]=0;i[c|256]=32768;s[c]=24;s[c|256]=24}else if(u<-14){i[c]=1024>>-u-14;i[c|256]=1024>>-u-14|32768;s[c]=-u-1;s[c|256]=-u-1}else if(u<=15){i[c]=u+15<<10;i[c|256]=u+15<<10|32768;s[c]=13;s[c|256]=13}else if(u<128){i[c]=31744;i[c|256]=64512;s[c]=24;s[c|256]=24}else{i[c]=31744;i[c|256]=64512;s[c]=13;s[c|256]=13}}const r=new Uint32Array(2048),o=new Uint32Array(64),l=new Uint32Array(64);for(let c=1;c<1024;++c){let u=c<<13,d=0;while((u&8388608)===0){u<<=1;d-=8388608}u&=-8388609;d+=947912704;r[c]=u|d}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944;o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)if(c!==32)l[c]=1024;return{floatView:t,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:l}}function Nn(e){if(Math.abs(e)>65504)lt("DataUtils.toHalfFloat(): Value out of range.");e=ut(e,-65504,65504);ni.floatView[0]=e;const t=ni.uint32View[0],n=t>>23&511;return ni.baseTable[n]+((t&8388607)>>ni.shiftTable[n])}function Os(e){const t=e>>10;ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(e&1023)]+ni.exponentTable[t];return ni.floatView[0]}class fo{static toHalfFloat(e){return Nn(e)}static fromHalfFloat(e){return Os(e)}}const un=new U,po=new we;let Bs=0;class Jt extends bi{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0;Object.defineProperty(this,"id",{value:Bs++});this.name="";this.array=e;this.itemSize=t;this.count=e!==void 0?e.length/t:0;this.normalized=n;this.usage=lr;this.updateRanges=[];this.gpuType=is;this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){this.usage=e;return this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){this.name=e.name;this.array=new e.array.constructor(e.array);this.itemSize=e.itemSize;this.count=e.count;this.normalized=e.normalized;this.usage=e.usage;this.gpuType=e.gpuType;return this}copyAt(e,t,n){e*=this.itemSize;n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){this.array.set(e);return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++){po.fromBufferAttribute(this,t);po.applyMatrix3(e);this.setXY(t,po.x,po.y)}else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++){un.fromBufferAttribute(this,t);un.applyMatrix3(e);this.setXYZ(t,un.x,un.y,un.z)}return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++){un.fromBufferAttribute(this,t);un.applyMatrix4(e);this.setXYZ(t,un.x,un.y,un.z)}return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++){un.fromBufferAttribute(this,t);un.applyNormalMatrix(e);this.setXYZ(t,un.x,un.y,un.z)}return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++){un.fromBufferAttribute(this,t);un.transformDirection(e);this.setXYZ(t,un.x,un.y,un.z)}return this}set(e,t=0){this.array.set(e,t);return this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=Hn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=vt(n,this.array);this.array[e*this.itemSize+t]=n;return this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=Hn(t,this.array);return t}setX(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize]=t;return this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=Hn(t,this.array);return t}setY(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+1]=t;return this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=Hn(t,this.array);return t}setZ(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+2]=t;return this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=Hn(t,this.array);return t}setW(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+3]=t;return this}setXY(e,t,n){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array)}this.array[e+0]=t;this.array[e+1]=n;return this}setXYZ(e,t,n,i){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array)}this.array[e+0]=t;this.array[e+1]=n;this.array[e+2]=i;return this}setXYZW(e,t,n,i,s){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array);s=vt(s,this.array)}this.array[e+0]=t;this.array[e+1]=n;this.array[e+2]=i;this.array[e+3]=s;return this}onUpload(e){this.onUploadCallback=e;return this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};e.name=this.name;e.usage=this.usage;e.gpuType=this.gpuType;return e}dispose(){this.dispatchEvent({type:"dispose"})}}class tu extends Jt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class kc extends Jt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class zs extends Jt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class nu extends Jt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Hc extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vc extends Jt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class mo extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class na extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n);this.isFloat16BufferAttribute=!0}getX(e){let t=Os(this.array[e*this.itemSize]);if(this.normalized)t=Hn(t,this.array);return t}setX(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize]=Nn(t);return this}getY(e){let t=Os(this.array[e*this.itemSize+1]);if(this.normalized)t=Hn(t,this.array);return t}setY(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+1]=Nn(t);return this}getZ(e){let t=Os(this.array[e*this.itemSize+2]);if(this.normalized)t=Hn(t,this.array);return t}setZ(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+2]=Nn(t);return this}getW(e){let t=Os(this.array[e*this.itemSize+3]);if(this.normalized)t=Hn(t,this.array);return t}setW(e,t){if(this.normalized)t=vt(t,this.array);this.array[e*this.itemSize+3]=Nn(t);return this}setXY(e,t,n){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array)}this.array[e+0]=Nn(t);this.array[e+1]=Nn(n);return this}setXYZ(e,t,n,i){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array)}this.array[e+0]=Nn(t);this.array[e+1]=Nn(n);this.array[e+2]=Nn(i);return this}setXYZW(e,t,n,i,s){e*=this.itemSize;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array);s=vt(s,this.array)}this.array[e+0]=Nn(t);this.array[e+1]=Nn(n);this.array[e+2]=Nn(i);this.array[e+3]=Nn(s);return this}}class Ye extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const tf=new nt,ia=new U,Wc=new U;class En{constructor(e=new U,t=-1){this.isSphere=!0;this.center=e;this.radius=t}set(e,t){this.center.copy(e);this.radius=t;return this}setFromPoints(e,t){const n=this.center;if(t!==void 0)n.copy(t);else tf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));this.radius=Math.sqrt(i);return this}copy(e){this.center.copy(e.center);this.radius=e.radius;return this}isEmpty(){return this.radius<0}makeEmpty(){this.center.set(0,0,0);this.radius=-1;return this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);t.copy(e);if(n>this.radius*this.radius){t.sub(this.center).normalize();t.multiplyScalar(this.radius).add(this.center)}return t}getBoundingBox(e){if(this.isEmpty()){e.makeEmpty();return e}e.set(this.center,this.center);e.expandByScalar(this.radius);return e}applyMatrix4(e){this.center.applyMatrix4(e);this.radius=this.radius*e.getMaxScaleOnAxis();return this}translate(e){this.center.add(e);return this}expandByPoint(e){if(this.isEmpty()){this.center.copy(e);this.radius=0;return this}ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(ia,i/n);this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty()){this.copy(e);return this}if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else{Wc.subVectors(e.center,this.center).setLength(e.radius);this.expandByPoint(ia.copy(e.center).add(Wc));this.expandByPoint(ia.copy(e.center).sub(Wc))}return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){this.radius=e.radius;this.center.fromArray(e.center);return this}}let nf=0;const hi=new yt,Xc=new Gt,xr=new U,ii=new nt,vr=new nt,Sn=new U;class St extends bi{constructor(){super();this.isBufferGeometry=!0;Object.defineProperty(this,"id",{value:nf++});this.uuid=Qn();this.name="";this.type="BufferGeometry";this.index=null;this.indirect=null;this.indirectOffset=0;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=!1;this.groups=[];this.boundingBox=null;this.boundingSphere=null;this.drawRange={start:0,count:1/0};this.userData={};this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((md(e))?mo:Hc)(e,1);else this.index=e;return this}setIndirect(e,t=0){this.indirect=e;this.indirectOffset=t;return this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){this.attributes[e]=t;return this}deleteAttribute(e){delete this.attributes[e];return this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e;this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;if(t!==void 0){t.applyMatrix4(e);t.needsUpdate=!0}const n=this.attributes.normal;if(n!==void 0){const s=new Ti().getNormalMatrix(e);n.applyNormalMatrix(s);n.needsUpdate=!0}const i=this.attributes.tangent;if(i!==void 0){i.transformDirection(e);i.needsUpdate=!0}if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();this._transformed=!0;return this}applyQuaternion(e){hi.makeRotationFromQuaternion(e);this.applyMatrix4(hi);return this}rotateX(e){hi.makeRotationX(e);this.applyMatrix4(hi);return this}rotateY(e){hi.makeRotationY(e);this.applyMatrix4(hi);return this}rotateZ(e){hi.makeRotationZ(e);this.applyMatrix4(hi);return this}translate(e,t,n){hi.makeTranslation(e,t,n);this.applyMatrix4(hi);return this}scale(e,t,n){hi.makeScale(e,t,n);this.applyMatrix4(hi);return this}lookAt(e){Xc.lookAt(e);Xc.updateMatrix();this.applyMatrix4(Xc.matrix);return this}center(){this.computeBoundingBox();this.boundingBox.getCenter(xr).negate();this.translate(xr.x,xr.y,xr.z);return this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new nt;const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this);this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){this.boundingBox.setFromBufferAttribute(e);if(t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ii.setFromBufferAttribute(s);if(this.morphTargetsRelative){Sn.addVectors(this.boundingBox.min,ii.min);this.boundingBox.expandByPoint(Sn);Sn.addVectors(this.boundingBox.max,ii.max);this.boundingBox.expandByPoint(Sn)}else{this.boundingBox.expandByPoint(ii.min);this.boundingBox.expandByPoint(ii.max)}}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new En;const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this);this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;ii.setFromBufferAttribute(e);if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s];vr.setFromBufferAttribute(o);if(this.morphTargetsRelative){Sn.addVectors(ii.min,vr.min);ii.expandByPoint(Sn);Sn.addVectors(ii.max,vr.max);ii.expandByPoint(Sn)}else{ii.expandByPoint(vr.min);ii.expandByPoint(vr.max)}}ii.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++){Sn.fromBufferAttribute(e,s);i=Math.max(i,n.distanceToSquared(Sn))}if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++){Sn.fromBufferAttribute(o,c);if(l){xr.fromBufferAttribute(e,c);Sn.add(xr)}i=Math.max(i,n.distanceToSquared(Sn))}}this.boundingSphere.radius=Math.sqrt(i);if(isNaN(this.boundingSphere.radius))Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const{position:n,normal:i,uv:s}=t;let r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count){r=new Jt(new Float32Array(4*n.count),4);this.setAttribute("tangent",r)}const o=[],l=[];for(let le=0;le<n.count;le++){o[le]=new U;l[le]=new U}const c=new U,u=new U,d=new U,p=new we,m=new we,_=new we,v=new U,T=new U;function I(le,Me,Ae){c.fromBufferAttribute(n,le);u.fromBufferAttribute(n,Me);d.fromBufferAttribute(n,Ae);p.fromBufferAttribute(s,le);m.fromBufferAttribute(s,Me);_.fromBufferAttribute(s,Ae);u.sub(c);d.sub(c);m.sub(p);_.sub(p);const je=1/(m.x*_.y-_.x*m.y);if(!isFinite(je))return;v.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(je);T.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(je);o[le].add(v);o[Me].add(v);o[Ae].add(v);l[le].add(T);l[Me].add(T);l[Ae].add(T)}let C=this.groups;if(C.length===0)C=[{start:0,count:e.count}];for(let le=0,Me=C.length;le<Me;++le){const Ae=C[le],{start:je,count:rt}=Ae;for(let dt=je,Lt=je+rt;dt<Lt;dt+=3)I(e.getX(dt+0),e.getX(dt+1),e.getX(dt+2))}const B=new U,F=new U,W=new U,oe=new U;function ve(le){W.fromBufferAttribute(i,le);oe.copy(W);const Me=o[le];B.copy(Me);B.sub(W.multiplyScalar(W.dot(Me))).normalize();F.crossVectors(oe,Me);const je=F.dot(l[le])<0?-1:1;r.setXYZW(le,B.x,B.y,B.z,je)}for(let le=0,Me=C.length;le<Me;++le){const Ae=C[le],{start:je,count:rt}=Ae;for(let dt=je,Lt=je+rt;dt<Lt;dt+=3){ve(e.getX(dt+0));ve(e.getX(dt+1));ve(e.getX(dt+2))}}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count){n=new Jt(new Float32Array(t.count*3),3);this.setAttribute("normal",n)}else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new U,s=new U,r=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),v=e.getX(p+1),T=e.getX(p+2);i.fromBufferAttribute(t,_);s.fromBufferAttribute(t,v);r.fromBufferAttribute(t,T);u.subVectors(r,s);d.subVectors(i,s);u.cross(d);o.fromBufferAttribute(n,_);l.fromBufferAttribute(n,v);c.fromBufferAttribute(n,T);o.add(u);l.add(u);c.add(u);n.setXYZ(_,o.x,o.y,o.z);n.setXYZ(v,l.x,l.y,l.z);n.setXYZ(T,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3){i.fromBufferAttribute(t,p+0);s.fromBufferAttribute(t,p+1);r.fromBufferAttribute(t,p+2);u.subVectors(r,s);d.subVectors(i,s);u.cross(d);n.setXYZ(p+0,u.x,u.y,u.z);n.setXYZ(p+1,u.x,u.y,u.z);n.setXYZ(p+2,u.x,u.y,u.z)}this.normalizeNormals();n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++){Sn.fromBufferAttribute(e,t);Sn.normalize();e.setXYZ(t,Sn.x,Sn.y,Sn.z)}}toNonIndexed(){function e(o,l){const{array:c,itemSize:u,normalized:d}=o,p=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,T=l.length;v<T;v++){if(o.isInterleavedBufferAttribute)m=l[v]*o.data.stride+o.offset;else m=l[v]*u;for(let I=0;I<u;I++)p[_++]=c[m++]}return new Jt(p,u,d)}if(this.index===null){lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.");return this}const t=new St,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};e.uuid=this.uuid;e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type;e.name=this.name;if(Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)if(l[c]!==void 0)e[c]=l[c];return e}e.data={attributes:{}};const t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}if(u.length>0){i[l]=u;s=!0}}if(s){e.data.morphAttributes=i;e.data.morphTargetsRelative=this.morphTargetsRelative}const r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));const o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingBox=null;this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;if(n!==null)this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();const l=e.boundingSphere;if(l!==null)this.boundingSphere=l.clone();this.drawRange.start=e.drawRange.start;this.drawRange.count=e.drawRange.count;this.userData=e.userData;this._transformed=e._transformed;return this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr{constructor(e,t){this.isInterleavedBuffer=!0;this.array=e;this.stride=t;this.count=e!==void 0?e.length/t:0;this.usage=lr;this.updateRanges=[];this.version=0;this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){this.usage=e;return this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){this.array=new e.array.constructor(e.array);this.count=e.count;this.stride=e.stride;this.usage=e.usage;return this}copyAt(e,t,n){e*=this.stride;n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){this.array.set(e,t);return this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Qn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);n.setUsage(this.usage);return n}onUpload(e){this.onUploadCallback=e;return this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Qn();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};t.usage=this.usage;return t}}const Un=new U;class fs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0;this.name="";this.data=e;this.itemSize=t;this.offset=n;this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++){Un.fromBufferAttribute(this,t);Un.applyMatrix4(e);this.setXYZ(t,Un.x,Un.y,Un.z)}return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++){Un.fromBufferAttribute(this,t);Un.applyNormalMatrix(e);this.setXYZ(t,Un.x,Un.y,Un.z)}return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++){Un.fromBufferAttribute(this,t);Un.transformDirection(e);this.setXYZ(t,Un.x,Un.y,Un.z)}return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=Hn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=vt(n,this.array);this.data.array[e*this.data.stride+this.offset+t]=n;return this}setX(e,t){if(this.normalized)t=vt(t,this.array);this.data.array[e*this.data.stride+this.offset]=t;return this}setY(e,t){if(this.normalized)t=vt(t,this.array);this.data.array[e*this.data.stride+this.offset+1]=t;return this}setZ(e,t){if(this.normalized)t=vt(t,this.array);this.data.array[e*this.data.stride+this.offset+2]=t;return this}setW(e,t){if(this.normalized)t=vt(t,this.array);this.data.array[e*this.data.stride+this.offset+3]=t;return this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=Hn(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=Hn(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=Hn(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=Hn(t,this.array);return t}setXY(e,t,n){e=e*this.data.stride+this.offset;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array)}this.data.array[e+0]=t;this.data.array[e+1]=n;return this}setXYZ(e,t,n,i){e=e*this.data.stride+this.offset;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array)}this.data.array[e+0]=t;this.data.array[e+1]=n;this.data.array[e+2]=i;return this}setXYZW(e,t,n,i,s){e=e*this.data.stride+this.offset;if(this.normalized){t=vt(t,this.array);n=vt(n,this.array);i=vt(i,this.array);s=vt(s,this.array)}this.data.array[e+0]=t;this.data.array[e+1]=n;this.data.array[e+2]=i;this.data.array[e+3]=s;return this}clone(e){if(e===void 0){Rc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new fs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){Rc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}const go=new U,iu=new U,su=new Ti;class Gi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0;this.normal=e;this.constant=t}set(e,t){this.normal.copy(e);this.constant=t;return this}setComponents(e,t,n,i){this.normal.set(e,t,n);this.constant=i;return this}setFromNormalAndCoplanarPoint(e,t){this.normal.copy(e);this.constant=-t.dot(this.normal);return this}setFromCoplanarPoints(e,t,n){const i=go.subVectors(n,t).cross(iu.subVectors(e,t)).normalize();this.setFromNormalAndCoplanarPoint(i,e);return this}copy(e){this.normal.copy(e.normal);this.constant=e.constant;return this}normalize(){const e=1/this.normal.length();this.normal.multiplyScalar(e);this.constant*=e;return this}negate(){this.constant*=-1;this.normal.negate();return this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(go),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}const r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||su.getNormalMatrix(e),i=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();this.constant=-i.dot(s);return this}translate(e){this.constant-=e.dot(this.normal);return this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){this.normal.fromArray(e.normal);this.constant=e.constant;return this}}let Sr=0;class Ct extends bi{constructor(){super();this.isMaterial=!0;Object.defineProperty(this,"id",{value:Sr++});this.uuid=Qn();this.name="";this.type="Material";this.blending=Ss;this.side=ki;this.vertexColors=!1;this.opacity=1;this.transparent=!1;this.alphaHash=!1;this.blendSrc=hl;this.blendDst=yi;this.blendEquation=Fi;this.blendSrcAlpha=null;this.blendDstAlpha=null;this.blendEquationAlpha=null;this.blendColor=new gt(0,0,0);this.blendAlpha=0;this.depthFunc=Yt;this.depthTest=!0;this.depthWrite=!0;this.stencilWriteMask=255;this.stencilFunc=io;this.stencilRef=0;this.stencilFuncMask=255;this.stencilFail=or;this.stencilZFail=or;this.stencilZPass=or;this.stencilWrite=!1;this.clippingPlanes=null;this.clipIntersection=!1;this.clipShadows=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetFactor=0;this.polygonOffsetUnits=0;this.dithering=!1;this.alphaToCoverage=!1;this.premultipliedAlpha=!1;this.forceSinglePass=!1;this.allowOverride=!0;this.visible=!0;this.toneMapped=!0;this.userData={};this.version=0;this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(const t in e){const n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){const t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid;n.type=this.type;n.blending=this.blending;n.side=this.side;n.shadowSide=this.shadowSide;n.vertexColors=this.vertexColors;n.opacity=this.opacity;n.transparent=this.transparent;n.blendSrc=this.blendSrc;n.blendDst=this.blendDst;n.blendEquation=this.blendEquation;n.blendSrcAlpha=this.blendSrcAlpha;n.blendDstAlpha=this.blendDstAlpha;n.blendEquationAlpha=this.blendEquationAlpha;n.blendColor=this.blendColor.getHex();n.blendAlpha=this.blendAlpha;n.depthFunc=this.depthFunc;n.depthTest=this.depthTest;n.depthWrite=this.depthWrite;n.colorWrite=this.colorWrite;n.clipIntersection=this.clipIntersection;n.clipShadows=this.clipShadows;n.stencilWriteMask=this.stencilWriteMask;n.stencilFunc=this.stencilFunc;n.stencilRef=this.stencilRef;n.stencilFuncMask=this.stencilFuncMask;n.stencilFail=this.stencilFail;n.stencilZFail=this.stencilZFail;n.stencilZPass=this.stencilZPass;n.stencilWrite=this.stencilWrite;n.polygonOffset=this.polygonOffset;n.polygonOffsetFactor=this.polygonOffsetFactor;n.polygonOffsetUnits=this.polygonOffsetUnits;n.dithering=this.dithering;n.alphaTest=this.alphaTest;n.alphaHash=this.alphaHash;n.alphaToCoverage=this.alphaToCoverage;n.premultipliedAlpha=this.premultipliedAlpha;n.forceSinglePass=this.forceSinglePass;n.allowOverride=this.allowOverride;n.visible=this.visible;n.toneMapped=this.toneMapped;n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture){n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid;n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()}if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture){n.lightMap=this.lightMap.toJSON(e).uuid;n.lightMapIntensity=this.lightMapIntensity}if(this.aoMap&&this.aoMap.isTexture){n.aoMap=this.aoMap.toJSON(e).uuid;n.aoMapIntensity=this.aoMapIntensity}if(this.bumpMap&&this.bumpMap.isTexture){n.bumpMap=this.bumpMap.toJSON(e).uuid;n.bumpScale=this.bumpScale}if(this.normalMap&&this.normalMap.isTexture){n.normalMap=this.normalMap.toJSON(e).uuid;n.normalMapType=this.normalMapType;n.normalScale=this.normalScale.toArray()}if(this.displacementMap&&this.displacementMap.isTexture){n.displacementMap=this.displacementMap.toJSON(e).uuid;n.displacementScale=this.displacementScale;n.displacementBias=this.displacementBias}if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){n.envMap=this.envMap.toJSON(e).uuid;if(this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata;r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new gt().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new Gi().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new we().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name;this.blending=e.blending;this.side=e.side;this.vertexColors=e.vertexColors;this.opacity=e.opacity;this.transparent=e.transparent;this.blendSrc=e.blendSrc;this.blendDst=e.blendDst;this.blendEquation=e.blendEquation;this.blendSrcAlpha=e.blendSrcAlpha;this.blendDstAlpha=e.blendDstAlpha;this.blendEquationAlpha=e.blendEquationAlpha;this.blendColor.copy(e.blendColor);this.blendAlpha=e.blendAlpha;this.depthFunc=e.depthFunc;this.depthTest=e.depthTest;this.depthWrite=e.depthWrite;this.stencilWriteMask=e.stencilWriteMask;this.stencilFunc=e.stencilFunc;this.stencilRef=e.stencilRef;this.stencilFuncMask=e.stencilFuncMask;this.stencilFail=e.stencilFail;this.stencilZFail=e.stencilZFail;this.stencilZPass=e.stencilZPass;this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}this.clippingPlanes=n;this.clipIntersection=e.clipIntersection;this.clipShadows=e.clipShadows;this.shadowSide=e.shadowSide;this.colorWrite=e.colorWrite;this.precision=e.precision;this.polygonOffset=e.polygonOffset;this.polygonOffsetFactor=e.polygonOffsetFactor;this.polygonOffsetUnits=e.polygonOffsetUnits;this.dithering=e.dithering;this.alphaTest=e.alphaTest;this.alphaHash=e.alphaHash;this.alphaToCoverage=e.alphaToCoverage;this.premultipliedAlpha=e.premultipliedAlpha;this.forceSinglePass=e.forceSinglePass;this.allowOverride=e.allowOverride;this.visible=e.visible;this.toneMapped=e.toneMapped;this.userData=JSON.parse(JSON.stringify(e.userData));return this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}class dn extends Ct{constructor(e){super();this.isSpriteMaterial=!0;this.type="SpriteMaterial";this.color=new gt(16777215);this.map=null;this.alphaMap=null;this.rotation=0;this.sizeAttenuation=!0;this.transparent=!0;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.alphaMap=e.alphaMap;this.rotation=e.rotation;this.sizeAttenuation=e.sizeAttenuation;this.fog=e.fog;return this}}let $i;const sa=new U,Mr=new U,br=new U,Tr=new we,ra=new we,ru=new yt,_o=new U,aa=new U,xo=new U,au=new we,qc=new we,ou=new we;class Yc extends Gt{constructor(e=new dn){super();this.isSprite=!0;this.type="Sprite";if($i===void 0){$i=new St;const t=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new yr(t,5);$i.setIndex([0,1,2,0,2,3]);$i.setAttribute("position",new fs(n,3,0,!1));$i.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=$i;this.material=e;this.center=new we(0.5,0.5);this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){if(e.camera===null)Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');Mr.setFromMatrixScale(this.matrixWorld);ru.copy(e.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld);br.setFromMatrixPosition(this.modelViewMatrix);if(e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Mr.multiplyScalar(-br.z);const n=this.material.rotation;let i,s;if(n!==0){s=Math.cos(n);i=Math.sin(n)}const r=this.center;vo(_o.set(-0.5,-0.5,0),br,r,Mr,i,s);vo(aa.set(0.5,-0.5,0),br,r,Mr,i,s);vo(xo.set(0.5,0.5,0),br,r,Mr,i,s);au.set(0,0);qc.set(1,0);ou.set(1,1);let o=e.ray.intersectTriangle(_o,aa,xo,!1,sa);if(o===null){vo(aa.set(-0.5,0.5,0),br,r,Mr,i,s);qc.set(0,1);o=e.ray.intersectTriangle(_o,xo,aa,!1,sa);if(o===null)return}const l=e.ray.origin.distanceTo(sa);if(l<e.near||l>e.far)return;t.push({distance:l,point:sa.clone(),uv:ti.getInterpolation(sa,_o,aa,xo,au,qc,ou,new we),face:null,object:this})}copy(e,t){super.copy(e,t);if(e.center!==void 0)this.center.copy(e.center);this.material=e.material;return this}}function vo(e,t,n,i,s,r){Tr.subVectors(e,n).addScalar(0.5).multiply(i);if(s!==void 0){ra.x=r*Tr.x-s*Tr.y;ra.y=s*Tr.x+r*Tr.y}else ra.copy(Tr);e.copy(t);e.x+=ra.x;e.y+=ra.y;e.applyMatrix4(ru)}const yo=new U,lu=new U;class Zc extends Gt{constructor(){super();this.isLOD=!0;this._currentLevel=0;this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}this.autoUpdate=e.autoUpdate;return this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length;s++)if(t<i[s].distance)break;i.splice(s,0,{distance:t,hysteresis:n,object:e});this.add(e);return this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);this.remove(i[0].object);return!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible)s-=s*t[n].hysteresis;if(e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){yo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(yo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){yo.setFromMatrixPosition(e.matrixWorld);lu.setFromMatrixPosition(this.matrixWorld);const n=yo.distanceTo(lu)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let r=t[i].distance;if(t[i].object.visible)r-=r*t[i].hysteresis;if(n>=r){t[i-1].object.visible=!1;t[i].object.visible=!0}else break}this._currentLevel=i-1;for(;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate;t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const r=n[i];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const Ki=new U,jc=new U,So=new U,Mo=new U;class Gs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e;this.direction=t}set(e,t){this.origin.copy(e);this.direction.copy(t);return this}copy(e){this.origin.copy(e.origin);this.direction.copy(e.direction);return this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){this.direction.copy(e).sub(this.origin).normalize();return this}recast(e){this.origin.copy(this.at(e,Ki));return this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);Ki.copy(this.origin).addScaledVector(this.direction,t);return Ki.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){jc.copy(e).add(t).multiplyScalar(0.5);So.copy(t).sub(e).normalize();Mo.copy(this.origin).sub(jc);const s=e.distanceTo(t)*0.5,r=-this.direction.dot(So),o=Mo.dot(this.direction),l=-Mo.dot(So),c=Mo.lengthSq(),u=Math.abs(1-r*r);let d,p,m,_;if(u>0){d=r*l-o;p=r*o-l;_=s*u;if(d>=0)if(p>=-_)if(p<=_){const v=1/u;d*=v;p*=v;m=d*(d+r*p+2*o)+p*(r*d+p+2*l)+c}else{p=s;d=Math.max(0,-(r*p+o));m=-d*d+p*(p+2*l)+c}else{p=-s;d=Math.max(0,-(r*p+o));m=-d*d+p*(p+2*l)+c}else if(p<=-_){d=Math.max(0,-(-r*s+o));p=d>0?-s:Math.min(Math.max(-s,-l),s);m=-d*d+p*(p+2*l)+c}else if(p<=_){d=0;p=Math.min(Math.max(-s,-l),s);m=p*(p+2*l)+c}else{d=Math.max(0,-(r*s+o));p=d>0?s:Math.min(Math.max(-s,-l),s);m=-d*d+p*(p+2*l)+c}}else{p=r>0?-s:s;d=Math.max(0,-(r*p+o));m=-d*d+p*(p+2*l)+c}if(n)n.copy(this.origin).addScaledVector(this.direction,d);if(i)i.copy(jc).addScaledVector(So,p);return m}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;if(l<0)return null;if(o<0)return this.at(l,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;if(c>=0){n=(e.min.x-p.x)*c;i=(e.max.x-p.x)*c}else{n=(e.max.x-p.x)*c;i=(e.min.x-p.x)*c}if(u>=0){s=(e.min.y-p.y)*u;r=(e.max.y-p.y)*u}else{s=(e.max.y-p.y)*u;r=(e.min.y-p.y)*u}if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(d>=0){o=(e.min.z-p.z)*d;l=(e.max.z-p.z)*d}else{o=(e.max.z-p.z)*d;l=(e.min.z-p.z)*d}if(n>l||o>i)return null;if(o>n||n!==n)n=o;if(l<i||i!==i)i=l;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,s){const r=this.origin,o=this.direction,{x:l,y:c,z:u}=o,d=e.x-r.x,p=e.y-r.y,m=e.z-r.z,_=t.x-r.x,v=t.y-r.y,T=t.z-r.z,I=n.x-r.x,C=n.y-r.y,B=n.z-r.z,F=Math.abs(l),W=Math.abs(c),oe=Math.abs(u);let ve,le,Me,Ae,je,rt,dt,Lt,ht,nn,cn,Bn;if(F>=W&&F>=oe){Me=l;rt=d;ht=_;Bn=I;if(l>=0){ve=c;le=u;Ae=p;je=m;dt=v;Lt=T;nn=C;cn=B}else{ve=u;le=c;Ae=m;je=p;dt=T;Lt=v;nn=B;cn=C}}else if(W>=oe){Me=c;rt=p;ht=v;Bn=C;if(c>=0){ve=u;le=l;Ae=m;je=d;dt=T;Lt=_;nn=B;cn=I}else{ve=l;le=u;Ae=d;je=m;dt=_;Lt=T;nn=I;cn=B}}else{Me=u;rt=m;ht=T;Bn=B;if(u>=0){ve=l;le=c;Ae=d;je=p;dt=_;Lt=v;nn=I;cn=C}else{ve=c;le=l;Ae=p;je=d;dt=v;Lt=_;nn=C;cn=I}}if(Me===0)return null;const an=ve/Me,pn=le/Me,mn=1/Me,_i=Ae-an*rt,oi=je-pn*rt,$s=dt-an*ht,Pr=Lt-pn*ht,Qu=nn-an*Bn,ed=cn-pn*Bn,Lr=Qu*Pr-ed*$s,li=_i*ed-oi*Qu,ys=$s*oi-Pr*_i;if(i){if(Lr<0||li<0||ys<0)return null}else if((Lr<0||li<0||ys<0)&&(Lr>0||li>0||ys>0))return null;const ph=Lr+li+ys;if(ph===0)return null;const Ii=mn*(Lr*rt+li*ht+ys*Bn);if(ph>0?Ii<0:Ii>0)return null;return this.at(Ii/ph,s)}applyMatrix4(e){this.origin.applyMatrix4(e);this.direction.transformDirection(e);return this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ps extends Ct{constructor(e){super();this.isMeshBasicMaterial=!0;this.type="MeshBasicMaterial";this.color=new gt(16777215);this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.envMapRotation=new Ei;this.combine=er;this.reflectivity=1;this.refractionRatio=0.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.lightMap=e.lightMap;this.lightMapIntensity=e.lightMapIntensity;this.aoMap=e.aoMap;this.aoMapIntensity=e.aoMapIntensity;this.specularMap=e.specularMap;this.alphaMap=e.alphaMap;this.envMap=e.envMap;this.envMapRotation.copy(e.envMapRotation);this.combine=e.combine;this.reflectivity=e.reflectivity;this.refractionRatio=e.refractionRatio;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.wireframeLinecap=e.wireframeLinecap;this.wireframeLinejoin=e.wireframeLinejoin;this.fog=e.fog;return this}}const cu=new yt,ks=new Gs,bo=new En,hu=new U,To=new U,Ao=new U,Eo=new U,Jc=new U,wo=new U,uu=new U,Co=new U;class ui extends Gt{constructor(e=new St,t=new ps){super();this.isMesh=!0;this.type="Mesh";this.geometry=e;this.material=t;this.morphTargetDictionary=void 0;this.morphTargetInfluences=void 0;this.count=1;this.updateMorphTargets()}copy(e,t){super.copy(e,t);if(e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);this.material=Array.isArray(e.material)?e.material.slice():e.material;this.geometry=e.geometry;return this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0);this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];if(u===0)continue;Jc.fromBufferAttribute(d,e);if(r)wo.addScaledVector(Jc,u);else wo.addScaledVector(Jc.sub(t),u)}t.add(wo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();bo.copy(n.boundingSphere);bo.applyMatrix4(s);ks.copy(e.ray).recast(e.near);if(bo.containsPoint(ks.origin)===!1){if(ks.intersectSphere(bo,hu)===null)return;if(ks.origin.distanceToSquared(hu)>(e.far-e.near)**2)return}cu.copy(s).invert();ks.copy(e.ray).applyMatrix4(cu);if(n.boundingBox!==null){if(ks.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,ks)}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,{groups:p,drawRange:m}=s;if(o!==null)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const T=p[_],I=r[T.materialIndex],C=Math.max(T.start,m.start),B=Math.min(o.count,Math.min(T.start+T.count,m.start+m.count));for(let F=C,W=B;F<W;F+=3){const oe=o.getX(F),ve=o.getX(F+1),le=o.getX(F+2);i=Ro(this,I,e,n,c,u,d,oe,ve,le);if(i){i.faceIndex=Math.floor(F/3);i.face.materialIndex=T.materialIndex;t.push(i)}}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let T=_,I=v;T<I;T+=3){const C=o.getX(T),B=o.getX(T+1),F=o.getX(T+2);i=Ro(this,r,e,n,c,u,d,C,B,F);if(i){i.faceIndex=Math.floor(T/3);t.push(i)}}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,v=p.length;_<v;_++){const T=p[_],I=r[T.materialIndex],C=Math.max(T.start,m.start),B=Math.min(l.count,Math.min(T.start+T.count,m.start+m.count));for(let F=C,W=B;F<W;F+=3){const oe=F,ve=F+1,le=F+2;i=Ro(this,I,e,n,c,u,d,oe,ve,le);if(i){i.faceIndex=Math.floor(F/3);i.face.materialIndex=T.materialIndex;t.push(i)}}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let T=_,I=v;T<I;T+=3){const C=T,B=T+1,F=T+2;i=Ro(this,r,e,n,c,u,d,C,B,F);if(i){i.faceIndex=Math.floor(T/3);t.push(i)}}}}}function sf(e,t,n,i,s,r,o,l){let c;if(t.side===tn)c=i.intersectTriangle(o,r,s,!0,l);else c=i.intersectTriangle(s,r,o,t.side===ki,l);if(c===null)return null;Co.copy(l);Co.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Co);if(u<n.near||u>n.far)return null;return{distance:u,point:Co.clone(),object:e}}function Ro(e,t,n,i,s,r,o,l,c,u){e.getVertexPosition(l,To);e.getVertexPosition(c,Ao);e.getVertexPosition(u,Eo);const d=sf(e,t,n,i,To,Ao,Eo,uu);if(d){const p=new U;ti.getBarycoord(uu,To,Ao,Eo,p);if(s)d.uv=ti.getInterpolatedAttribute(s,l,c,u,p,new we);if(r)d.uv1=ti.getInterpolatedAttribute(r,l,c,u,p,new we);if(o){d.normal=ti.getInterpolatedAttribute(o,l,c,u,p,new U);if(d.normal.dot(i.direction)>0)d.normal.multiplyScalar(-1)}const m={a:l,b:c,c:u,normal:new U,materialIndex:0};ti.getNormal(To,Ao,Eo,m.normal);d.face=m;d.barycoord=p}return d}const oa=new Vn,du=new Vn,fu=new Vn,pu=new Vn,$c=new yt,la=new U,ca=new En,Kc=new yt,Qc=new Gs;class Hs extends ui{constructor(e,t){super(e,t);this.isSkinnedMesh=!0;this.type="SkinnedMesh";this.bindMode=za;this.bindMatrix=new yt;this.bindMatrixInverse=new yt;this.boundingBox=null;this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;if(this.boundingBox===null)this.boundingBox=new nt;this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++){this.getVertexPosition(n,la);this.boundingBox.expandByPoint(la)}}computeBoundingSphere(){const e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new En;this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++){this.getVertexPosition(n,la);this.boundingSphere.expandByPoint(la)}}copy(e,t){super.copy(e,t);this.bindMode=e.bindMode;this.bindMatrix.copy(e.bindMatrix);this.bindMatrixInverse.copy(e.bindMatrixInverse);this.skeleton=e.skeleton;if(e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}raycast(e,t){const n=this.material,i=this.matrixWorld;if(n===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();ca.copy(this.boundingSphere);ca.applyMatrix4(i);if(e.ray.intersectsSphere(ca)===!1)return;Kc.copy(i).invert();Qc.copy(e.ray).applyMatrix4(Kc);if(this.boundingBox!==null){if(Qc.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,Qc)}getVertexPosition(e,t){super.getVertexPosition(e,t);this.applyBoneTransform(e,t);return t}bind(e,t){this.skeleton=e;if(t===void 0){this.updateMatrixWorld(!0);this.skeleton.calculateInverses();t=this.matrixWorld}this.bindMatrix.copy(t);this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Vn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();if(s!==1/0)e.multiplyScalar(s);else e.set(1,0,0,0);t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e);if(this.bindMode===za)this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode===Ga)this.bindMatrixInverse.copy(this.bindMatrix).invert();else lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;du.fromBufferAttribute(i.attributes.skinIndex,e);fu.fromBufferAttribute(i.attributes.skinWeight,e);if(t.isVector4){oa.copy(t);t.set(0,0,0,0)}else{oa.set(...t,1);t.set(0,0,0)}oa.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const r=fu.getComponent(s);if(r!==0){const o=du.getComponent(s);$c.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]);t.addScaledVector(pu.copy(oa).applyMatrix4($c),r)}}if(t.isVector4)t.w=oa.w;return t.applyMatrix4(this.bindMatrixInverse)}}class ha extends Gt{constructor(){super();this.isBone=!0;this.type="Bone"}}class di extends hn{constructor(e=null,t=1,n=1,i,s,r,o,l,c=Pn,u=Pn,d,p){super(null,r,o,l,c,u,i,s,d,p);this.isDataTexture=!0;this.image={data:e,width:t,height:n};this.generateMipmaps=!1;this.flipY=!1;this.unpackAlignment=1}}const mu=new yt,rf=new yt;class ua{constructor(e=[],t=[]){this.uuid=Qn();this.bones=e.slice(0);this.boneInverses=t;this.boneMatrices=null;this.boneTexture=null;this.init()}init(){const e=this.bones,t=this.boneInverses;this.boneMatrices=new Float32Array(e.length*16);if(t.length===0)this.calculateInverses();else if(e.length!==t.length){lt("Skeleton: Number of inverse bone matrices does not match amount of bones.");this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new yt;if(this.bones[e])n.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];if(n)n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];if(n){if(n.parent&&n.parent.isBone){n.matrix.copy(n.parent.matrixWorld).invert();n.matrix.multiply(n.matrixWorld)}else n.matrix.copy(n.matrixWorld);n.matrix.decompose(n.position,n.quaternion,n.scale)}}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:rf;mu.multiplyMatrices(o,t[s]);mu.toArray(n,s*16)}if(i!==null)i.needsUpdate=!0}clone(){return new ua(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4;e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new di(t,e,e,Es,is);n.needsUpdate=!0;this.boneMatrices=t;this.boneTexture=n;return this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}return}dispose(){if(this.boneTexture!==null){this.boneTexture.dispose();this.boneTexture=null}}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];if(r===void 0){lt("Skeleton: No bone found with UUID:",s);r=new ha}this.bones.push(r);this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}this.init();return this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vs extends Jt{constructor(e,t,n,i=1){super(e,t,n);this.isInstancedBufferAttribute=!0;this.meshPerAttribute=i}copy(e){super.copy(e);this.meshPerAttribute=e.meshPerAttribute;return this}toJSON(){const e=super.toJSON();e.meshPerAttribute=this.meshPerAttribute;e.isInstancedBufferAttribute=!0;return e}}const Ws=new yt,gu=new yt,Io=[],_u=new nt,Po=new yt,da=new ui,fa=new En;class eh extends ui{constructor(e,t,n){super(e,t);this.isInstancedMesh=!0;this.instanceMatrix=new Vs(new Float32Array(n*16),16);this.instanceColor=null;this.morphTexture=null;this.count=n;this.boundingBox=null;this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Po)}computeBoundingBox(){const e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new nt;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<t;n++){this.getMatrixAt(n,Ws);_u.copy(e.boundingBox).applyMatrix4(Ws);this.boundingBox.union(_u)}}computeBoundingSphere(){const e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new En;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<t;n++){this.getMatrixAt(n,Ws);fa.copy(e.boundingSphere).applyMatrix4(Ws);this.boundingSphere.union(fa)}}copy(e,t){super.copy(e,t);this.instanceMatrix.copy(e.instanceMatrix);if(e.morphTexture!==null)this.morphTexture=e.morphTexture.clone();if(e.instanceColor!==null)this.instanceColor=e.instanceColor.clone();this.count=e.count;if(e.boundingBox!==null)this.boundingBox=e.boundingBox.clone();if(e.boundingSphere!==null)this.boundingSphere=e.boundingSphere.clone();return this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;da.geometry=this.geometry;da.material=this.material;if(da.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();fa.copy(this.boundingSphere);fa.applyMatrix4(n);if(e.ray.intersectsSphere(fa)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Ws);gu.multiplyMatrices(n,Ws);da.matrixWorld=gu;da.raycast(e,Io);for(let r=0,o=Io.length;r<o;r++){const l=Io[r];l.instanceId=s;l.object=this;t.push(l)}Io.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3);t.toArray(this.instanceColor.array,e*3);return this}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16);return this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new di(new Float32Array(i*this.count),i,this.count,Xa,is);const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=o;s.set(n,l+1);return this}updateMorphTargets(){}dispose(){super.dispose();if(this.morphTexture!==null){this.morphTexture.dispose();this.morphTexture=null}}}const Xs=new En,pa=new we(0.5,0.5),ma=new U;class qs{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,s=new Gi,r=new Gi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;o[0].copy(e);o[1].copy(t);o[2].copy(n);o[3].copy(i);o[4].copy(s);o[5].copy(r);return this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi,n=!1){const i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],p=s[6],m=s[7],_=s[8],v=s[9],T=s[10],I=s[11],C=s[12],B=s[13],F=s[14],W=s[15];i[0].setComponents(c-r,m-u,I-_,W-C).normalize();i[1].setComponents(c+r,m+u,I+_,W+C).normalize();i[2].setComponents(c+o,m+d,I+v,W+B).normalize();i[3].setComponents(c-o,m-d,I-v,W-B).normalize();if(n){i[4].setComponents(l,p,T,F).normalize();i[5].setComponents(c-l,m-p,I-T,W-F).normalize()}else{i[4].setComponents(c-l,m-p,I-T,W-F).normalize();if(t===Mi)i[5].setComponents(c+l,m+p,I+T,W+F).normalize();else if(t===Is)i[5].setComponents(l,p,T,F).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t)}return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{const t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const t=pa.distanceTo(e.center);Xs.radius=0.7071067811865476+t;Xs.applyMatrix4(e.matrixWorld);return this.intersectsSphere(Xs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];ma.x=i.normal.x>0?e.max.x:e.min.x;ma.y=i.normal.y>0?e.max.y:e.min.y;ma.z=i.normal.z>0?e.max.z:e.min.z;if(i.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xu=new yt;class Ar{constructor(){this.coordinateSystem=Mi;this._frustums=[];this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];xu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse);if(n[i]===void 0)n[i]=new qs;n[i].setFromProjectionMatrix(xu,s.coordinateSystem,s.reversedDepth)}this._count=t.length;return this}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++){if(t[i]===void 0)t[i]=new qs;t[i].copy(n[i])}this._count=e._count;return this}clone(){return new Ar().copy(this)}}function th(e,t){return e-t}function af(e,t){return e.z-t.z}function of(e,t){return t.z-e.z}class nh{constructor(){this.index=0;this.pool=[];this.list=[]}push(e,t,n,i){const s=this.pool,r=this.list;if(this.index>=s.length)s.push({start:-1,count:-1,z:-1,index:-1});const o=s[this.index];r.push(o);this.index++;o.start=e;o.count=t;o.z=n;o.index=i}reset(){this.list.length=0;this.index=0}}const $n=new yt,vu=new gt(1,1,1),lf=new qs,cf=new Ar,Lo=new nt,Ys=new En,ga=new U,yu=new U,hf=new U,ih=new nh,Fn=new ui,Do=[];function uf(e,t,n=0){const i=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const s=e.count;for(let r=0;r<s;r++)for(let o=0;o<i;o++)t.setComponent(r+n,o,e.getComponent(r,o))}else t.array.set(e.array,n*i);t.needsUpdate=!0}function ms(e,t){if(e.constructor!==t.constructor){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++)t[i]=e[i]}else{const n=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,n))}}class No extends ui{constructor(e,t,n=t*2,i){super(new St,i);this.isBatchedMesh=!0;this.perObjectFrustumCulled=!0;this.sortObjects=!0;this.boundingBox=null;this.boundingSphere=null;this.customSort=null;this._instanceInfo=[];this._geometryInfo=[];this._availableInstanceIds=[];this._availableGeometryIds=[];this._nextIndexStart=0;this._nextVertexStart=0;this._geometryCount=0;this._visibilityChanged=!0;this._geometryInitialized=!1;this._maxInstanceCount=e;this._maxVertexCount=t;this._maxIndexCount=n;this._multiDrawCounts=new Int32Array(e);this._multiDrawStarts=new Int32Array(e);this._multiDrawCount=0;this._multiDrawBytesPerElement=1;this._matricesTexture=null;this._indirectTexture=null;this._colorsTexture=null;this._initMatricesTexture();this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4;e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new di(t,e,e,Es,is);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new di(t,e,e,qa,tr);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new di(t,e,e,Es,is);n.colorSpace=Jn.workingColorSpace;this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const r=e.getAttribute(s),{array:o,itemSize:l,normalized:c}=r,u=new o.constructor(n*l),d=new Jt(u,l,c);t.setAttribute(s,d)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new Jt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(Boolean(e.getIndex())!==Boolean(t.getIndex()))throw Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){this.customSort=e;return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new nt;const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,$n);this.getBoundingBoxAt(s,Lo).applyMatrix4($n);e.union(Lo)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new En;const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,$n);this.getBoundingSphereAt(s,Ys).applyMatrix4($n);e.union(Ys)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;if(this._availableInstanceIds.length>0){this._availableInstanceIds.sort(th);i=this._availableInstanceIds.shift();this._instanceInfo[i]=n}else{i=this._instanceInfo.length;this._instanceInfo.push(n)}const s=this._matricesTexture;$n.identity().toArray(s.image.data,i*16);s.needsUpdate=!0;const r=this._colorsTexture;if(r){vu.toArray(r.image.data,i*4);r.needsUpdate=!0}this._visibilityChanged=!0;return i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e);this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart;i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const r=e.getIndex();if(r!==null){i.indexStart=this._nextIndexStart;i.reservedIndexCount=n===-1?r.count:n}if(i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;if(this._availableGeometryIds.length>0){this._availableGeometryIds.sort(th);l=this._availableGeometryIds.shift();s[l]=i}else{l=this._geometryCount;this._geometryCount++;s.push(i)}this.setGeometryAt(l,e);this._nextIndexStart=i.indexStart+i.reservedIndexCount;this._nextVertexStart=i.vertexStart+i.reservedVertexCount;return l}setGeometryAt(e,t){if(e>=this._geometryCount)throw Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),r=t.getIndex(),o=this._geometryInfo[e];if(i&&r.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const{vertexStart:l,reservedVertexCount:c}=o;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const d=t.getAttribute(u),p=n.getAttribute(u);uf(d,p,l);const m=d.itemSize;for(let _=d.count,v=c;_<v;_++){const T=l+_;for(let I=0;I<m;I++)p.setComponent(T,I,0)}p.needsUpdate=!0;p.addUpdateRange(l*m,c*m)}if(i){const{indexStart:u,reservedIndexCount:d}=o;o.indexCount=t.getIndex().count;for(let p=0;p<r.count;p++)s.setX(u+p,l+r.getX(p));for(let p=r.count,m=d;p<m;p++)s.setX(u+p,l);s.needsUpdate=!0;s.addUpdateRange(u,o.reservedIndexCount)}o.start=i?o.indexStart:o.vertexStart;o.count=i?o.indexCount:o.vertexCount;o.boundingBox=null;if(t.boundingBox!==null)o.boundingBox=t.boundingBox.clone();o.boundingSphere=null;if(t.boundingSphere!==null)o.boundingSphere=t.boundingSphere.clone();this._visibilityChanged=!0;return e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)if(n[i].active&&n[i].geometryIndex===e)this.deleteInstance(i);t[e].active=!1;this._availableGeometryIds.push(e);this._visibilityChanged=!0;return this}deleteInstance(e){this.validateInstanceId(e);this._instanceInfo[e].active=!1;this._availableInstanceIds.push(e);this._visibilityChanged=!0;return this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((r,o)=>o).sort((r,o)=>{return n[r].vertexStart-n[o].vertexStart}),s=this.geometry;for(let r=0,o=n.length;r<o;r++){const l=i[r],c=n[l];if(c.active===!1)continue;if(s.index!==null){if(c.indexStart!==t){const{indexStart:u,vertexStart:d,reservedIndexCount:p}=c,m=s.index,_=m.array,v=e-d;for(let T=u;T<u+p;T++)_[T]=_[T]+v;m.array.copyWithin(t,u,u+p);m.addUpdateRange(t,p);m.needsUpdate=!0;c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:u,reservedVertexCount:d}=c,p=s.attributes;for(const m in p){const _=p[m],{array:v,itemSize:T}=_;v.copyWithin(e*T,u*T,(u+d)*T);_.addUpdateRange(e*T,d*T);_.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount;c.start=s.index?c.indexStart:c.vertexStart}this._nextIndexStart=t;this._nextVertexStart=e;this._visibilityChanged=!0;return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new nt,r=n.index,o=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let u=l;if(r)u=r.getX(u);s.expandByPoint(ga.fromBufferAttribute(o,u))}i.boundingBox=s}t.copy(i.boundingBox);return t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new En;this.getBoundingBoxAt(e,Lo);Lo.getCenter(s.center);const r=n.index,o=n.attributes.position;let l=0;for(let c=i.start,u=i.start+i.count;c<u;c++){let d=c;if(r)d=r.getX(d);ga.fromBufferAttribute(o,d);l=Math.max(l,s.center.distanceToSquared(ga))}s.radius=Math.sqrt(l);i.boundingSphere=s}t.copy(i.boundingSphere);return t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;t.toArray(i,e*16);n.needsUpdate=!0;return this}getMatrixAt(e,t){this.validateInstanceId(e);return t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){this.validateInstanceId(e);if(this._colorsTexture===null)this._initColorsTexture();t.toArray(this._colorsTexture.image.data,e*4);this._colorsTexture.needsUpdate=!0;return this}getColorAt(e,t){this.validateInstanceId(e);if(this._colorsTexture===null)if(t.isVector4)return t.set(1,1,1,1);else return t.setRGB(1,1,1);else return t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){this.validateInstanceId(e);if(this._instanceInfo[e].visible===t)return this;this._instanceInfo[e].visible=t;this._visibilityChanged=!0;return this}getVisibleAt(e){this.validateInstanceId(e);return this._instanceInfo[e].visible}setGeometryIdAt(e,t){this.validateInstanceId(e);this.validateGeometryId(t);this._instanceInfo[e].geometryIndex=t;this._visibilityChanged=!0;return this}getGeometryIdAt(e){this.validateInstanceId(e);return this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];t.vertexStart=n.vertexStart;t.vertexCount=n.vertexCount;t.reservedVertexCount=n.reservedVertexCount;t.indexStart=n.indexStart;t.indexCount=n.indexCount;t.reservedIndexCount=n.reservedIndexCount;t.start=n.start;t.count=n.count;return t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;t.sort(th);while(t[t.length-1]===n.length-1){n.pop();t.pop()}if(e<n.length)throw Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);ms(this._multiDrawCounts,i);ms(this._multiDrawStarts,s);this._multiDrawCounts=i;this._multiDrawStarts=s;this._maxInstanceCount=e;const r=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;r.dispose();this._initIndirectTexture();ms(r.image.data,this._indirectTexture.image.data);o.dispose();this._initMatricesTexture();ms(o.image.data,this._matricesTexture.image.data);if(l){l.dispose();this._initColorsTexture();ms(l.image.data,this._colorsTexture.image.data)}}setGeometrySize(e,t){const n=[...this._geometryInfo].filter((o)=>o.active);if(Math.max(...n.map((o)=>o.vertexStart+o.reservedVertexCount))>e)throw Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...n.map((l)=>l.indexStart+l.reservedIndexCount))>t)throw Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`)}const s=this.geometry;s.dispose();this._maxVertexCount=e;this._maxIndexCount=t;if(this._geometryInitialized){this._geometryInitialized=!1;this.geometry=new St;this._initializeGeometry(s)}const r=this.geometry;if(s.index)ms(s.index.array,r.index.array);for(const o in s.attributes)ms(s.attributes[o].array,r.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,r=this.geometry;Fn.material=this.material;Fn.geometry.index=r.index;Fn.geometry.attributes=r.attributes;if(Fn.geometry.boundingBox===null)Fn.geometry.boundingBox=new nt;if(Fn.geometry.boundingSphere===null)Fn.geometry.boundingSphere=new En;for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,u=i[c];Fn.geometry.setDrawRange(u.start,u.count);this.getMatrixAt(o,Fn.matrixWorld).premultiply(s);this.getBoundingBoxAt(c,Fn.geometry.boundingBox);this.getBoundingSphereAt(c,Fn.geometry.boundingSphere);Fn.raycast(e,Do);for(let d=0,p=Do.length;d<p;d++){const m=Do[d];m.object=this;m.batchId=o;t.push(m)}Do.length=0}Fn.material=null;Fn.geometry.index=null;Fn.geometry.attributes={};Fn.geometry.setDrawRange(0,1/0)}copy(e){super.copy(e);this.geometry=e.geometry.clone();this.perObjectFrustumCulled=e.perObjectFrustumCulled;this.sortObjects=e.sortObjects;this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null;this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null;this._geometryInfo=e._geometryInfo.map((t)=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null}));this._instanceInfo=e._instanceInfo.map((t)=>({...t}));this._availableInstanceIds=e._availableInstanceIds.slice();this._availableGeometryIds=e._availableGeometryIds.slice();this._nextIndexStart=e._nextIndexStart;this._nextVertexStart=e._nextVertexStart;this._geometryCount=e._geometryCount;this._maxInstanceCount=e._maxInstanceCount;this._maxVertexCount=e._maxVertexCount;this._maxIndexCount=e._maxIndexCount;this._geometryInitialized=e._geometryInitialized;this._multiDrawCounts=e._multiDrawCounts.slice();this._multiDrawStarts=e._multiDrawStarts.slice();this._multiDrawBytesPerElement=e._multiDrawBytesPerElement;this._indirectTexture=e._indirectTexture.clone();this._indirectTexture.image.data=this._indirectTexture.image.data.slice();this._matricesTexture=e._matricesTexture.clone();this._matricesTexture.image.data=this._matricesTexture.image.data.slice();if(this._colorsTexture!==null){this._colorsTexture=e._colorsTexture.clone();this._colorsTexture.image.data=this._colorsTexture.image.data.slice()}return this}dispose(){super.dispose();this.geometry.dispose();this._matricesTexture.dispose();this._matricesTexture=null;this._indirectTexture.dispose();this._indirectTexture=null;if(this._colorsTexture!==null){this._colorsTexture.dispose();this._colorsTexture=null}}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=i.getIndex();let o=r===null?1:r.array.BYTES_PER_ELEMENT,l=1;if(s.wireframe){l=2;o=i.attributes.position.count>65535?4:2}const c=this._instanceInfo,u=this._multiDrawStarts,d=this._multiDrawCounts,p=this._geometryInfo,m=this.perObjectFrustumCulled,_=this._indirectTexture,v=_.image.data,T=n.isArrayCamera?cf:lf;if(m)if(n.isArrayCamera)T.setFromArrayCamera(n);else{$n.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld);T.setFromProjectionMatrix($n,n.coordinateSystem,n.reversedDepth)}let I=0;if(this.sortObjects){$n.copy(this.matrixWorld).invert();ga.setFromMatrixPosition(n.matrixWorld).applyMatrix4($n);yu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection($n);for(let F=0,W=c.length;F<W;F++)if(c[F].visible&&c[F].active){const oe=c[F].geometryIndex;this.getMatrixAt(F,$n);this.getBoundingSphereAt(oe,Ys).applyMatrix4($n);let ve=!1;if(m)ve=!T.intersectsSphere(Ys);if(!ve){const le=p[oe],Me=hf.subVectors(Ys.center,ga).dot(yu);ih.push(le.start,le.count,Me,F)}}const C=ih.list,B=this.customSort;if(B===null)C.sort(s.transparent?of:af);else B.call(this,C,n);for(let F=0,W=C.length;F<W;F++){const oe=C[F];u[I]=oe.start*o*l;d[I]=oe.count*l;v[I]=oe.index;I++}ih.reset()}else for(let C=0,B=c.length;C<B;C++)if(c[C].visible&&c[C].active){const F=c[C].geometryIndex;let W=!1;if(m){this.getMatrixAt(C,$n);this.getBoundingSphereAt(F,Ys).applyMatrix4($n);W=!T.intersectsSphere(Ys)}if(!W){const oe=p[F];u[I]=oe.start*o*l;d[I]=oe.count*l;v[I]=C;I++}}_.needsUpdate=!0;this._multiDrawCount=I;this._multiDrawBytesPerElement=o;this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,r){this.onBeforeRender(e,null,i,s,r)}}class On extends Ct{constructor(e){super();this.isLineBasicMaterial=!0;this.type="LineBasicMaterial";this.color=new gt(16777215);this.map=null;this.linewidth=1;this.linecap="round";this.linejoin="round";this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.linewidth=e.linewidth;this.linecap=e.linecap;this.linejoin=e.linejoin;this.fog=e.fog;return this}}const Uo=new U,Fo=new U,Su=new yt,Er=new Gs,_a=new En,sh=new U,Mu=new U;class Qi extends Gt{constructor(e=new St,t=new On){super();this.isLine=!0;this.type="Line";this.geometry=e;this.material=t;this.morphTargetDictionary=void 0;this.morphTargetInfluences=void 0;this.updateMorphTargets()}copy(e,t){super.copy(e,t);this.material=Array.isArray(e.material)?e.material.slice():e.material;this.geometry=e.geometry;return this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++){Uo.fromBufferAttribute(t,i-1);Fo.fromBufferAttribute(t,i);n[i]=n[i-1];n[i]+=Uo.distanceTo(Fo)}e.setAttribute("lineDistance",new Ye(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();_a.copy(n.boundingSphere);_a.applyMatrix4(i);_a.radius+=s;if(e.ray.intersectsSphere(_a)===!1)return;Su.copy(i).invert();Er.copy(e.ray).applyMatrix4(Su);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const m=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let v=m,T=_-1;v<T;v+=c){const I=u.getX(v),C=u.getX(v+1),B=Oo(this,e,Er,l,I,C,v);if(B)t.push(B)}if(this.isLineLoop){const v=u.getX(_-1),T=u.getX(m),I=Oo(this,e,Er,l,v,T,_-1);if(I)t.push(I)}}else{const m=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let v=m,T=_-1;v<T;v+=c){const I=Oo(this,e,Er,l,v,v+1,v);if(I)t.push(I)}if(this.isLineLoop){const v=Oo(this,e,Er,l,_-1,m,_-1);if(v)t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0);this.morphTargetDictionary[o]=s}}}}}function Oo(e,t,n,i,s,r,o){const l=e.geometry.attributes.position;Uo.fromBufferAttribute(l,s);Fo.fromBufferAttribute(l,r);if(n.distanceSqToSegment(Uo,Fo,sh,Mu)>i)return;sh.applyMatrix4(e.matrixWorld);const u=t.ray.origin.distanceTo(sh);if(u<t.near||u>t.far)return;return{distance:u,point:Mu.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}const bu=new U,Tu=new U;class fi extends Qi{constructor(e,t){super(e,t);this.isLineSegments=!0;this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2){bu.fromBufferAttribute(t,i);Tu.fromBufferAttribute(t,i+1);n[i]=i===0?0:n[i-1];n[i+1]=n[i]+bu.distanceTo(Tu)}e.setAttribute("lineDistance",new Ye(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rh extends Qi{constructor(e,t){super(e,t);this.isLineLoop=!0;this.type="LineLoop"}}class Bo extends Ct{constructor(e){super();this.isPointsMaterial=!0;this.type="PointsMaterial";this.color=new gt(16777215);this.map=null;this.alphaMap=null;this.size=1;this.sizeAttenuation=!0;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.alphaMap=e.alphaMap;this.size=e.size;this.sizeAttenuation=e.sizeAttenuation;this.fog=e.fog;return this}}const Au=new yt,ah=new Gs,zo=new En,xa=new U;class Zs extends Gt{constructor(e=new St,t=new Bo){super();this.isPoints=!0;this.type="Points";this.geometry=e;this.material=t;this.morphTargetDictionary=void 0;this.morphTargetInfluences=void 0;this.updateMorphTargets()}copy(e,t){super.copy(e,t);this.material=Array.isArray(e.material)?e.material.slice():e.material;this.geometry=e.geometry;return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();zo.copy(n.boundingSphere);zo.applyMatrix4(i);zo.radius+=s;if(e.ray.intersectsSphere(zo)===!1)return;Au.copy(i).invert();ah.copy(e.ray).applyMatrix4(Au);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let _=p,v=m;_<v;_++){const T=c.getX(_);xa.fromBufferAttribute(d,T);Go(xa,T,l,i,e,t,this)}}else{const p=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=p,v=m;_<v;_++){xa.fromBufferAttribute(d,_);Go(xa,_,l,i,e,t,this)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0);this.morphTargetDictionary[o]=s}}}}}function Go(e,t,n,i,s,r,o){const l=ah.distanceSqToPoint(e);if(l<n){const c=new U;ah.closestPointToPoint(e,c);c.applyMatrix4(i);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class oh extends hn{constructor(e,t,n,i,s=Gn,r=Gn,o,l,c){super(e,t,n,i,s,r,o,l,c);this.isVideoTexture=!0;this.generateMipmaps=!1;this._requestVideoFrameCallbackId=0;const u=this;function d(){u.needsUpdate=!0;u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}if("requestVideoFrameCallback"in e)this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;if("requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA)this.needsUpdate=!0}dispose(){if(this._requestVideoFrameCallbackId!==0){this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId);this._requestVideoFrameCallbackId=0}super.dispose()}}class Eu extends oh{constructor(e,t,n,i,s,r,o,l){super({},e,t,n,i,s,r,o,l);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e;this.needsUpdate=!0}}class wu extends hn{constructor(e,t){super({width:e,height:t});this.isFramebufferTexture=!0;this.magFilter=Pn;this.minFilter=Pn;this.generateMipmaps=!1;this.needsUpdate=!0}}class wr extends hn{constructor(e,t,n,i,s,r,o,l,c,u,d,p){super(null,r,o,l,c,u,i,s,d,p);this.isCompressedTexture=!0;this.image={width:t,height:n};this.mipmaps=e;this.flipY=!1;this.generateMipmaps=!1}}class Cu extends wr{constructor(e,t,n,i,s,r){super(e,t,n,s,r);this.isCompressedArrayTexture=!0;this.image.depth=i;this.wrapR=yn;this.layerUpdates=new Set}copy(e){super.copy(e);this.wrapR=e.wrapR;return this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ru extends wr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Vi);this.isCompressedCubeTexture=!0;this.isCubeTexture=!0;this.image=e}}class va extends hn{constructor(e=[],t=Vi,n,i,s,r,o,l,c,u){super(e,t,n,i,s,r,o,l,c,u);this.isCubeTexture=!0;this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lh extends hn{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c);this.isCanvasTexture=!0;this.needsUpdate=!0}}class Iu extends hn{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c);this.isHTMLTexture=!0;this.generateMipmaps=!1;this.needsUpdate=!0;const u=e?e.parentNode:null;if(u!==null&&"requestPaint"in u){u.onpaint=()=>{this.needsUpdate=!0};u.requestPaint()}}dispose(){const e=this.image?this.image.parentNode:null;if(e!==null&&"onpaint"in e)e.onpaint=null;super.dispose()}}class ko extends hn{constructor(e,t,n=tr,i,s,r,o=Pn,l=Pn,c,u=kr,d=1){if(u!==kr&&u!==Pl)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:d};super(p,i,s,r,o,l,u,n,c);this.isDepthTexture=!0;this.flipY=!1;this.generateMipmaps=!1;this.compareFunction=null}copy(e){super.copy(e);this.source=new Bi(Object.assign({},e.image));this.compareFunction=e.compareFunction;return this}toJSON(e){const t=super.toJSON(e);t.compareFunction=this.compareFunction;return t}}class Pu extends ko{constructor(e,t=tr,n=Vi,i,s,r=Pn,o=Pn,l,c=kr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,r,o,l,c);this.image=d;this.isCubeDepthTexture=!0;this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lu extends hn{constructor(e=null){super();this.sourceTexture=e;this.isExternalTexture=!0}copy(e){super.copy(e);this.sourceTexture=e.sourceTexture;return this}}class Ho extends St{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry";this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i);s=Math.floor(s);r=Math.floor(r);const l=[],c=[],u=[],d=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,r,s,0);_("z","y","x",1,-1,n,t,-e,r,s,1);_("x","z","y",1,1,e,n,t,i,r,2);_("x","z","y",1,-1,e,n,-t,i,r,3);_("x","y","z",1,-1,e,t,n,i,s,4);_("x","y","z",-1,-1,e,t,-n,i,s,5);this.setIndex(l);this.setAttribute("position",new Ye(c,3));this.setAttribute("normal",new Ye(u,3));this.setAttribute("uv",new Ye(d,2));function _(v,T,I,C,B,F,W,oe,ve,le,Me){const Ae=F/ve,je=W/le,rt=F/2,dt=W/2,Lt=oe/2,ht=ve+1,nn=le+1;let cn=0,Bn=0;const an=new U;for(let pn=0;pn<nn;pn++){const mn=pn*je-dt;for(let _i=0;_i<ht;_i++){const oi=_i*Ae-rt;an[v]=oi*C;an[T]=mn*B;an[I]=Lt;c.push(an.x,an.y,an.z);an[v]=0;an[T]=0;an[I]=oe>0?1:-1;u.push(an.x,an.y,an.z);d.push(_i/ve);d.push(1-pn/le);cn+=1}}for(let pn=0;pn<le;pn++)for(let mn=0;mn<ve;mn++){const _i=p+mn+ht*pn,oi=p+mn+ht*(pn+1),$s=p+(mn+1)+ht*(pn+1),Pr=p+(mn+1)+ht*pn;l.push(_i,oi,Pr);l.push(oi,$s,Pr);Bn+=6}o.addGroup(m,Bn,Me);m+=Bn;p+=cn}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class si extends St{constructor(e=1,t=1,n=4,i=8,s=1){super();this.type="CapsuleGeometry";this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s};t=Math.max(0,t);n=Math.max(1,Math.floor(n));i=Math.max(3,Math.floor(i));s=Math.max(1,Math.floor(s));const r=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,p=t,m=2*d+p,_=n*2+s,v=i+1,T=new U,I=new U;for(let C=0;C<=_;C++){let B=0,F=0,W=0,oe=0;if(C<=n){const Me=C/n,Ae=Me*Math.PI/2;F=-u-e*Math.cos(Ae);W=e*Math.sin(Ae);oe=-e*Math.cos(Ae);B=Me*d}else if(C<=n+s){const Me=(C-n)/s;F=-u+Me*t;W=e;oe=0;B=d+Me*p}else{const Me=(C-n-s)/n,Ae=Me*Math.PI/2;F=u+e*Math.sin(Ae);W=e*Math.cos(Ae);oe=e*Math.sin(Ae);B=d+p+Me*d}const ve=Math.max(0,Math.min(1,B/m));let le=0;if(C===0)le=0.5/i;else if(C===_)le=-0.5/i;for(let Me=0;Me<=i;Me++){const Ae=Me/i,je=Ae*Math.PI*2,rt=Math.sin(je),dt=Math.cos(je);I.x=-W*dt;I.y=F;I.z=W*rt;o.push(I.x,I.y,I.z);T.set(-W*dt,oe,W*rt);T.normalize();l.push(T.x,T.y,T.z);c.push(Ae+le,ve)}if(C>0){const Me=(C-1)*v;for(let Ae=0;Ae<i;Ae++){const je=Me+Ae,rt=Me+Ae+1,dt=C*v+Ae,Lt=C*v+Ae+1;r.push(je,rt,dt);r.push(rt,Lt,dt)}}}this.setIndex(r);this.setAttribute("position",new Ye(o,3));this.setAttribute("normal",new Ye(l,3));this.setAttribute("uv",new Ye(c,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new si(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vo extends St{constructor(e=1,t=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry";this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i};t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new U,u=new we;r.push(0,0,0);o.push(0,0,1);l.push(0.5,0.5);for(let d=0,p=3;d<=t;d++,p+=3){const m=n+d/t*i;c.x=e*Math.cos(m);c.y=e*Math.sin(m);r.push(c.x,c.y,c.z);o.push(0,0,1);u.x=(r[p]/e+1)/2;u.y=(r[p+1]/e+1)/2;l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s);this.setAttribute("position",new Ye(r,3));this.setAttribute("normal",new Ye(o,3));this.setAttribute("uv",new Ye(l,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Vo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cr extends St{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super();this.type="CylinderGeometry";this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i);s=Math.floor(s);const u=[],d=[],p=[],m=[];let _=0;const v=[],T=n/2;let I=0;C();if(r===!1){if(e>0)B(!0);if(t>0)B(!1)}this.setIndex(u);this.setAttribute("position",new Ye(d,3));this.setAttribute("normal",new Ye(p,3));this.setAttribute("uv",new Ye(m,2));function C(){const F=new U,W=new U;let oe=0;const ve=(t-e)/n;for(let le=0;le<=s;le++){const Me=[],Ae=le/s,je=Ae*(t-e)+e;for(let rt=0;rt<=i;rt++){const dt=rt/i,Lt=dt*l+o,ht=Math.sin(Lt),nn=Math.cos(Lt);W.x=je*ht;W.y=-Ae*n+T;W.z=je*nn;d.push(W.x,W.y,W.z);F.set(ht,ve,nn).normalize();p.push(F.x,F.y,F.z);m.push(dt,1-Ae);Me.push(_++)}v.push(Me)}for(let le=0;le<i;le++)for(let Me=0;Me<s;Me++){const Ae=v[Me][le],je=v[Me+1][le],rt=v[Me+1][le+1],dt=v[Me][le+1];if(e>0||Me!==0){u.push(Ae,je,dt);oe+=3}if(t>0||Me!==s-1){u.push(je,rt,dt);oe+=3}}c.addGroup(I,oe,0);I+=oe}function B(F){const W=_,oe=new we,ve=new U;let le=0;const Me=F===!0?e:t,Ae=F===!0?1:-1;for(let rt=1;rt<=i;rt++){d.push(0,T*Ae,0);p.push(0,Ae,0);m.push(0.5,0.5);_++}const je=_;for(let rt=0;rt<=i;rt++){const Lt=rt/i*l+o,ht=Math.cos(Lt),nn=Math.sin(Lt);ve.x=Me*nn;ve.y=T*Ae;ve.z=Me*ht;d.push(ve.x,ve.y,ve.z);p.push(0,Ae,0);oe.x=ht*0.5+0.5;oe.y=nn*0.5*Ae+0.5;m.push(oe.x,oe.y);_++}for(let rt=0;rt<i;rt++){const dt=W+rt,Lt=je+rt;if(F===!0)u.push(Lt,Lt+1,dt);else u.push(Lt+1,Lt,dt);le+=3}c.addGroup(I,le,F===!0?1:2);I+=le}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Cr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class a extends Cr{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o);this.type="ConeGeometry";this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class f extends St{constructor(e=[],t=[],n=1,i=0){super();this.type="PolyhedronGeometry";this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i);c(n);u();this.setAttribute("position",new Ye(s,3));this.setAttribute("normal",new Ye(s.slice(),3));this.setAttribute("uv",new Ye(r,2));if(i===0)this.computeVertexNormals();else this.normalizeNormals();function o(C){const B=new U,F=new U,W=new U;for(let oe=0;oe<t.length;oe+=3){m(t[oe+0],B);m(t[oe+1],F);m(t[oe+2],W);l(B,F,W,C)}}function l(C,B,F,W){const oe=W+1,ve=[];for(let le=0;le<=oe;le++){ve[le]=[];const Me=C.clone().lerp(F,le/oe),Ae=B.clone().lerp(F,le/oe),je=oe-le;for(let rt=0;rt<=je;rt++)if(rt===0&&le===oe)ve[le][rt]=Me;else ve[le][rt]=Me.clone().lerp(Ae,rt/je)}for(let le=0;le<oe;le++)for(let Me=0;Me<2*(oe-le)-1;Me++){const Ae=Math.floor(Me/2);if(Me%2===0){p(ve[le][Ae+1]);p(ve[le+1][Ae]);p(ve[le][Ae])}else{p(ve[le][Ae+1]);p(ve[le+1][Ae+1]);p(ve[le+1][Ae])}}}function c(C){const B=new U;for(let F=0;F<s.length;F+=3){B.x=s[F+0];B.y=s[F+1];B.z=s[F+2];B.normalize().multiplyScalar(C);s[F+0]=B.x;s[F+1]=B.y;s[F+2]=B.z}}function u(){const C=new U;for(let B=0;B<s.length;B+=3){C.x=s[B+0];C.y=s[B+1];C.z=s[B+2];const F=T(C)/2/Math.PI+0.5,W=I(C)/Math.PI+0.5;r.push(F,1-W)}_();d()}function d(){for(let C=0;C<r.length;C+=6){const B=r[C+0],F=r[C+2],W=r[C+4],oe=Math.max(B,F,W),ve=Math.min(B,F,W);if(oe>0.9&&ve<0.1){if(B<0.2)r[C+0]+=1;if(F<0.2)r[C+2]+=1;if(W<0.2)r[C+4]+=1}}}function p(C){s.push(C.x,C.y,C.z)}function m(C,B){const F=C*3;B.x=e[F+0];B.y=e[F+1];B.z=e[F+2]}function _(){const C=new U,B=new U,F=new U,W=new U,oe=new we,ve=new we,le=new we;for(let Me=0,Ae=0;Me<s.length;Me+=9,Ae+=6){C.set(s[Me+0],s[Me+1],s[Me+2]);B.set(s[Me+3],s[Me+4],s[Me+5]);F.set(s[Me+6],s[Me+7],s[Me+8]);oe.set(r[Ae+0],r[Ae+1]);ve.set(r[Ae+2],r[Ae+3]);le.set(r[Ae+4],r[Ae+5]);W.copy(C).add(B).add(F).divideScalar(3);const je=T(W);v(oe,Ae+0,C,je);v(ve,Ae+2,B,je);v(le,Ae+4,F,je)}}function v(C,B,F,W){if(W<0&&C.x===1)r[B]=C.x-1;if(F.x===0&&F.z===0)r[B]=W/2/Math.PI+0.5}function T(C){return Math.atan2(C.z,-C.x)}function I(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new f(e.vertices,e.indices,e.radius,e.detail)}}class h extends f{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t);this.type="DodecahedronGeometry";this.parameters={radius:e,detail:t}}static fromJSON(e){return new h(e.radius,e.detail)}}const g=new U,E=new U,b=new U,R=new ti;class O extends St{constructor(e=null,t=1){super();this.type="EdgesGeometry";this.parameters={geometry:e,thresholdAngle:t};if(e!==null){const i=Math.pow(10,4),s=Math.cos(Ps*t),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],u=["a","b","c"],d=Array(3),p={},m=[];for(let _=0;_<l;_+=3){if(r){c[0]=r.getX(_);c[1]=r.getX(_+1);c[2]=r.getX(_+2)}else{c[0]=_;c[1]=_+1;c[2]=_+2}const{a:v,b:T,c:I}=R;v.fromBufferAttribute(o,c[0]);T.fromBufferAttribute(o,c[1]);I.fromBufferAttribute(o,c[2]);R.getNormal(b);d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`;d[1]=`${Math.round(T.x*i)},${Math.round(T.y*i)},${Math.round(T.z*i)}`;d[2]=`${Math.round(I.x*i)},${Math.round(I.y*i)},${Math.round(I.z*i)}`;if(d[0]===d[1]||d[1]===d[2]||d[2]===d[0])continue;for(let C=0;C<3;C++){const B=(C+1)%3,F=d[C],W=d[B],oe=R[u[C]],ve=R[u[B]],le=`${F}_${W}`,Me=`${W}_${F}`;if(Me in p&&p[Me]){if(b.dot(p[Me].normal)<=s){m.push(oe.x,oe.y,oe.z);m.push(ve.x,ve.y,ve.z)}p[Me]=null}else if(!(le in p))p[le]={index0:c[C],index1:c[B],normal:b.clone()}}}for(const _ in p)if(p[_]){const{index0:v,index1:T}=p[_];g.fromBufferAttribute(o,v);E.fromBufferAttribute(o,T);m.push(g.x,g.y,g.z);m.push(E.x,E.y,E.z)}this.setAttribute("position",new Ye(m,3))}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}}class ie{constructor(){this.type="Curve";this.arcLengthDivisions=200;this.needsUpdate=!1;this.cacheArcLengths=null}getPoint(){lt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++){n=this.getPoint(r/e);s+=n.distanceTo(i);t.push(s);i=n}this.cacheArcLengths=t;return t}updateArcLengths(){this.needsUpdate=!0;this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let r;if(t)r=t;else r=e*n[s-1];let o=0,l=s-1,c;while(o<=l){i=Math.floor(o+(l-o)/2);c=n[i]-r;if(c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}}i=l;if(n[i]===r)return i/(s-1);const u=n[i],p=n[i+1]-u,m=(r-u)/p;return(i+m)/(s-1)}getTangent(e,t){const n=0.0001;let i=e-n,s=e+n;if(i<0)i=0;if(s>1)s=1;const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new we:new U);l.copy(o).sub(r).normalize();return l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],r=[],o=new U,l=new yt;for(let m=0;m<=e;m++){const _=m/e;i[m]=this.getTangentAt(_,new U)}s[0]=new U;r[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);if(u<=c){c=u;n.set(1,0,0)}if(d<=c){c=d;n.set(0,1,0)}if(p<=c)n.set(0,0,1);o.crossVectors(i[0],n).normalize();s[0].crossVectors(i[0],o);r[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){s[m]=s[m-1].clone();r[m]=r[m-1].clone();o.crossVectors(i[m-1],i[m]);if(o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ut(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}r[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(ut(s[0].dot(s[e]),-1,1));m/=e;if(i[0].dot(o.crossVectors(s[0],s[e]))>0)m=-m;for(let _=1;_<=e;_++){s[_].applyMatrix4(l.makeRotationAxis(i[_],m*_));r[_].crossVectors(i[_],s[_])}}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){this.arcLengthDivisions=e.arcLengthDivisions;return this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};e.arcLengthDivisions=this.arcLengthDivisions;e.type=this.type;return e}fromJSON(e){this.arcLengthDivisions=e.arcLengthDivisions;return this}}class X extends ie{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super();this.isEllipseCurve=!0;this.type="EllipseCurve";this.aX=e;this.aY=t;this.xRadius=n;this.yRadius=i;this.aStartAngle=s;this.aEndAngle=r;this.aClockwise=o;this.aRotation=l}getPoint(e,t=new we){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*d+this.aX;c=p*d+m*u+this.aY}return n.set(l,c)}copy(e){super.copy(e);this.aX=e.aX;this.aY=e.aY;this.xRadius=e.xRadius;this.yRadius=e.yRadius;this.aStartAngle=e.aStartAngle;this.aEndAngle=e.aEndAngle;this.aClockwise=e.aClockwise;this.aRotation=e.aRotation;return this}toJSON(){const e=super.toJSON();e.aX=this.aX;e.aY=this.aY;e.xRadius=this.xRadius;e.yRadius=this.yRadius;e.aStartAngle=this.aStartAngle;e.aEndAngle=this.aEndAngle;e.aClockwise=this.aClockwise;e.aRotation=this.aRotation;return e}fromJSON(e){super.fromJSON(e);this.aX=e.aX;this.aY=e.aY;this.xRadius=e.xRadius;this.yRadius=e.yRadius;this.aStartAngle=e.aStartAngle;this.aEndAngle=e.aEndAngle;this.aClockwise=e.aClockwise;this.aRotation=e.aRotation;return this}}class ae extends X{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r);this.isArcCurve=!0;this.type="ArcCurve"}}function re(){let e=0,t=0,n=0,i=0;function s(r,o,l,c){e=r;t=l;n=-3*r+3*o-2*l-c;i=2*r-2*o+l+c}return{initCatmullRom:function(r,o,l,c,u){s(o,l,u*(l-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,l,c,u,d,p){let m=(o-r)/u-(l-r)/(u+d)+(l-o)/d,_=(l-o)/d-(c-o)/(d+p)+(c-l)/p;m*=d;_*=d;s(o,l,m,_)},calc:function(r){const o=r*r,l=o*r;return e+t*r+n*o+i*l}}}const D=new U,Y=new U,K=new re,pe=new re,w=new re;class S extends ie{constructor(e=[],t=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0;this.type="CatmullRomCurve3";this.points=e;this.closed=t;this.curveType=n;this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s;else if(l===0&&o===s-1){o=s-2;l=1}let c,u;if(this.closed||o>0)c=i[(o-1)%s];else{Y.subVectors(i[0],i[1]).add(i[0]);c=Y}const d=i[o%s],p=i[(o+1)%s];if(this.closed||o+2<s)u=i[(o+2)%s];else{D.subVectors(i[s-1],i[s-2]).add(i[s-1]);u=D}if(this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?0.5:0.25;let _=Math.pow(c.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(p),m),T=Math.pow(p.distanceToSquared(u),m);if(v<0.0001)v=1;if(_<0.0001)_=v;if(T<0.0001)T=v;K.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,_,v,T);pe.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,_,v,T);w.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,_,v,T)}else if(this.curveType==="catmullrom"){K.initCatmullRom(c.x,d.x,p.x,u.x,this.tension);pe.initCatmullRom(c.y,d.y,p.y,u.y,this.tension);w.initCatmullRom(c.z,d.z,p.z,u.z,this.tension)}n.set(K.calc(l),pe.calc(l),w.calc(l));return n}copy(e){super.copy(e);this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}this.closed=e.closed;this.curveType=e.curveType;this.tension=e.tension;return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}e.closed=this.closed;e.curveType=this.curveType;e.tension=this.tension;return e}fromJSON(e){super.fromJSON(e);this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}this.closed=e.closed;this.curveType=e.curveType;this.tension=e.tension;return this}}function te(e,t,n,i,s){const r=(i-t)*0.5,o=(s-n)*0.5,l=e*e,c=e*l;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*l+r*e+n}function _e(e,t){const n=1-e;return n*n*t}function N(e,t){return 2*(1-e)*e*t}function z(e,t){return e*e*t}function q(e,t,n,i){return _e(e,t)+N(e,n)+z(e,i)}function ee(e,t){const n=1-e;return n*n*n*t}function A(e,t){const n=1-e;return 3*n*n*e*t}function L(e,t){return 3*(1-e)*e*e*t}function be(e,t){return e*e*e*t}function Q(e,t,n,i,s){return ee(e,t)+A(e,n)+L(e,i)+be(e,s)}class he extends ie{constructor(e=new we,t=new we,n=new we,i=new we){super();this.isCubicBezierCurve=!0;this.type="CubicBezierCurve";this.v0=e;this.v1=t;this.v2=n;this.v3=i}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;n.set(Q(e,i.x,s.x,r.x,o.x),Q(e,i.y,s.y,r.y,o.y));return n}copy(e){super.copy(e);this.v0.copy(e.v0);this.v1.copy(e.v1);this.v2.copy(e.v2);this.v3.copy(e.v3);return this}toJSON(){const e=super.toJSON();e.v0=this.v0.toArray();e.v1=this.v1.toArray();e.v2=this.v2.toArray();e.v3=this.v3.toArray();return e}fromJSON(e){super.fromJSON(e);this.v0.fromArray(e.v0);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);this.v3.fromArray(e.v3);return this}}class Ie extends ie{constructor(e=new U,t=new U,n=new U,i=new U){super();this.isCubicBezierCurve3=!0;this.type="CubicBezierCurve3";this.v0=e;this.v1=t;this.v2=n;this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;n.set(Q(e,i.x,s.x,r.x,o.x),Q(e,i.y,s.y,r.y,o.y),Q(e,i.z,s.z,r.z,o.z));return n}copy(e){super.copy(e);this.v0.copy(e.v0);this.v1.copy(e.v1);this.v2.copy(e.v2);this.v3.copy(e.v3);return this}toJSON(){const e=super.toJSON();e.v0=this.v0.toArray();e.v1=this.v1.toArray();e.v2=this.v2.toArray();e.v3=this.v3.toArray();return e}fromJSON(e){super.fromJSON(e);this.v0.fromArray(e.v0);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);this.v3.fromArray(e.v3);return this}}class Z extends ie{constructor(e=new we,t=new we){super();this.isLineCurve=!0;this.type="LineCurve";this.v1=e;this.v2=t}getPoint(e,t=new we){const n=t;if(e===1)n.copy(this.v2);else{n.copy(this.v2).sub(this.v1);n.multiplyScalar(e).add(this.v1)}return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){super.copy(e);this.v1.copy(e.v1);this.v2.copy(e.v2);return this}toJSON(){const e=super.toJSON();e.v1=this.v1.toArray();e.v2=this.v2.toArray();return e}fromJSON(e){super.fromJSON(e);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);return this}}class me extends ie{constructor(e=new U,t=new U){super();this.isLineCurve3=!0;this.type="LineCurve3";this.v1=e;this.v2=t}getPoint(e,t=new U){const n=t;if(e===1)n.copy(this.v2);else{n.copy(this.v2).sub(this.v1);n.multiplyScalar(e).add(this.v1)}return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){super.copy(e);this.v1.copy(e.v1);this.v2.copy(e.v2);return this}toJSON(){const e=super.toJSON();e.v1=this.v1.toArray();e.v2=this.v2.toArray();return e}fromJSON(e){super.fromJSON(e);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);return this}}class Te extends ie{constructor(e=new we,t=new we,n=new we){super();this.isQuadraticBezierCurve=!0;this.type="QuadraticBezierCurve";this.v0=e;this.v1=t;this.v2=n}getPoint(e,t=new we){const n=t,i=this.v0,s=this.v1,r=this.v2;n.set(q(e,i.x,s.x,r.x),q(e,i.y,s.y,r.y));return n}copy(e){super.copy(e);this.v0.copy(e.v0);this.v1.copy(e.v1);this.v2.copy(e.v2);return this}toJSON(){const e=super.toJSON();e.v0=this.v0.toArray();e.v1=this.v1.toArray();e.v2=this.v2.toArray();return e}fromJSON(e){super.fromJSON(e);this.v0.fromArray(e.v0);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);return this}}class ue extends ie{constructor(e=new U,t=new U,n=new U){super();this.isQuadraticBezierCurve3=!0;this.type="QuadraticBezierCurve3";this.v0=e;this.v1=t;this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,r=this.v2;n.set(q(e,i.x,s.x,r.x),q(e,i.y,s.y,r.y),q(e,i.z,s.z,r.z));return n}copy(e){super.copy(e);this.v0.copy(e.v0);this.v1.copy(e.v1);this.v2.copy(e.v2);return this}toJSON(){const e=super.toJSON();e.v0=this.v0.toArray();e.v1=this.v1.toArray();e.v2=this.v2.toArray();return e}fromJSON(e){super.fromJSON(e);this.v0.fromArray(e.v0);this.v1.fromArray(e.v1);this.v2.fromArray(e.v2);return this}}class We extends ie{constructor(e=[]){super();this.isSplineCurve=!0;this.type="SplineCurve";this.points=e}getPoint(e,t=new we){const n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];n.set(te(o,l.x,c.x,u.x,d.x),te(o,l.y,c.y,u.y,d.y));return n}copy(e){super.copy(e);this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e);this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new we().fromArray(i))}return this}}var xe=Object.freeze({__proto__:null,ArcCurve:ae,CatmullRomCurve3:S,CubicBezierCurve:he,CubicBezierCurve3:Ie,EllipseCurve:X,LineCurve:Z,LineCurve3:me,QuadraticBezierCurve:Te,QuadraticBezierCurve3:ue,SplineCurve:We});class Ee extends ie{constructor(){super();this.type="CurvePath";this.curves=[];this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xe[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;while(s<i.length){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++){t+=this.curves[n].getLength();e.push(t)}this.cacheLengths=e;return e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];if(n&&n.equals(u))continue;t.push(u);n=u}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e);this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}this.autoClose=e.autoClose;return this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose;e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e);this.autoClose=e.autoClose;this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new xe[i.type]().fromJSON(i))}return this}}class Ce extends Ee{constructor(e){super();this.type="Path";this.currentPoint=new we;if(e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){this.currentPoint.set(e,t);return this}lineTo(e,t){const n=new Z(this.currentPoint.clone(),new we(e,t));this.curves.push(n);this.currentPoint.set(e,t);return this}quadraticCurveTo(e,t,n,i){const s=new Te(this.currentPoint.clone(),new we(e,t),new we(n,i));this.curves.push(s);this.currentPoint.set(n,i);return this}bezierCurveTo(e,t,n,i,s,r){const o=new he(this.currentPoint.clone(),new we(e,t),new we(n,i),new we(s,r));this.curves.push(o);this.currentPoint.set(s,r);return this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new We(t);this.curves.push(n);this.currentPoint.copy(e[e.length-1]);return this}arc(e,t,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;this.absarc(e+o,t+l,n,i,s,r);return this}absarc(e,t,n,i,s,r){this.absellipse(e,t,n,n,i,s,r);return this}ellipse(e,t,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;this.absellipse(e+c,t+u,n,i,s,r,o,l);return this}absellipse(e,t,n,i,s,r,o,l){const c=new X(e,t,n,i,s,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);if(!d.equals(this.currentPoint))this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);this.currentPoint.copy(u);return this}copy(e){super.copy(e);this.currentPoint.copy(e.currentPoint);return this}toJSON(){const e=super.toJSON();e.currentPoint=this.currentPoint.toArray();return e}fromJSON(e){super.fromJSON(e);this.currentPoint.fromArray(e.currentPoint);return this}}class pt extends Ce{constructor(e){super(e);this.uuid=Qn();this.type="Shape";this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e);this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid;e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e);this.uuid=e.uuid;this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ce().fromJSON(i))}return this}}function ft(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let r=xn(e,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let l,c,u;if(i)r=ct(e,t,r,n);if(e.length>80*n){l=e[0];c=e[1];let d=l,p=c;for(let m=n;m<s;m+=n){const _=e[m],v=e[m+1];if(_<l)l=_;if(v<c)c=v;if(_>d)d=_;if(v>p)p=v}u=Math.max(d-l,p-c);u=u!==0?32767/u:0}fe(r,o,n,l,c,u,0);return o}function xn(e,t,n,i,s){let r;if(s===Ve(e,t,n,i)>0)for(let o=t;o<n;o+=i)r=Ge(o/i|0,e[o],e[o+1],r);else for(let o=n-i;o>=t;o-=i)r=Ge(o/i|0,e[o],e[o+1],r);if(r&&Dt(r,r.next)){ce(r);r=r.next}return r}function Mt(e,t){if(!e)return e;if(!t)t=e;let n=e,i;do{i=!1;if(!n.steiner&&(Dt(n,n.next)||It(n.prev,n,n.next)===0)){ce(n);n=t=n.prev;if(n===n.next)break;i=!0}else n=n.next}while(i||n!==t);return t}function fe(e,t,n,i,s,r,o){if(!e)return;if(!o&&r)Ft(e,i,s,r);let l=e;while(e.prev!==e.next){const c=e.prev,u=e.next;if(r?Be(e,i,s,r):Ne(e)){t.push(c.i,e.i,u.i);ce(e);e=u.next;l=u.next;continue}e=u;if(e===l){if(!o)fe(Mt(e),t,n,i,s,r,1);else if(o===1){e=mt(Mt(e),t);fe(e,t,n,i,s,r,2)}else if(o===2)_t(e,t,n,i,s,r);break}}}function Ne(e){const t=e.prev,n=e,i=e.next;if(It(t,n,i)>=0)return!1;const s=t.x,r=n.x,o=i.x,l=t.y,c=n.y,u=i.y,d=Math.min(s,r,o),p=Math.min(l,c,u),m=Math.max(s,r,o),_=Math.max(l,c,u);let v=i.next;while(v!==t){if(v.x>=d&&v.x<=m&&v.y>=p&&v.y<=_&&on(s,l,r,c,o,u,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Be(e,t,n,i){const s=e.prev,r=e,o=e.next;if(It(s,r,o)>=0)return!1;const l=s.x,c=r.x,u=o.x,d=s.y,p=r.y,m=o.y,_=Math.min(l,c,u),v=Math.min(d,p,m),T=Math.max(l,c,u),I=Math.max(d,p,m),C=Qt(_,v,t,n,i),B=Qt(T,I,t,n,i);let{prevZ:F,nextZ:W}=e;while(F&&F.z>=C&&W&&W.z<=B){if(F.x>=_&&F.x<=T&&F.y>=v&&F.y<=I&&F!==s&&F!==o&&on(l,d,c,p,u,m,F.x,F.y)&&It(F.prev,F,F.next)>=0)return!1;F=F.prevZ;if(W.x>=_&&W.x<=T&&W.y>=v&&W.y<=I&&W!==s&&W!==o&&on(l,d,c,p,u,m,W.x,W.y)&&It(W.prev,W,W.next)>=0)return!1;W=W.nextZ}while(F&&F.z>=C){if(F.x>=_&&F.x<=T&&F.y>=v&&F.y<=I&&F!==s&&F!==o&&on(l,d,c,p,u,m,F.x,F.y)&&It(F.prev,F,F.next)>=0)return!1;F=F.prevZ}while(W&&W.z<=B){if(W.x>=_&&W.x<=T&&W.y>=v&&W.y<=I&&W!==s&&W!==o&&on(l,d,c,p,u,m,W.x,W.y)&&It(W.prev,W,W.next)>=0)return!1;W=W.nextZ}return!0}function mt(e,t){let n=e;do{const i=n.prev,s=n.next.next;if(!Dt(i,s)&&sn(i,n,n.next,s)&&ne(i,s)&&ne(s,i)){t.push(i.i,n.i,s.i);ce(n);ce(n.next);n=e=s}n=n.next}while(n!==e);return Mt(n)}function _t(e,t,n,i,s,r){let o=e;do{let l=o.next.next;while(l!==o.prev){if(o.i!==l.i&&H(o,l)){let c=Pe(o,l);o=Mt(o,o.next);c=Mt(c,c.next);fe(o,t,n,i,s,r,0);fe(c,t,n,i,s,r,0);return}l=l.next}o=o.next}while(o!==e)}function ct(e,t,n,i){const s=[];for(let r=0,o=t.length;r<o;r++){const l=t[r]*i,c=r<o-1?t[r+1]*i:e.length,u=xn(e,l,c,i,!1);if(u===u.next)u.steiner=!0;s.push(Kn(u))}s.sort(Tn);for(let r=0;r<s.length;r++)n=Rt(s[r],n);return n}function Tn(e,t){let n=e.x-t.x;if(n===0){n=e.y-t.y;if(n===0){const i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}}return n}function Rt(e,t){const n=Ut(e,t);if(!n)return t;const i=Pe(n,e);Mt(i,i.next);return Mt(n,n.next)}function Ut(e,t){let n=t;const{x:i,y:s}=e;let r=-1/0,o;if(Dt(e,n))return n;do{if(Dt(e,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const p=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=i&&p>r){r=p;o=n.x<n.next.x?n:n.next;if(p===i)return o}}n=n.next}while(n!==t);if(!o)return null;const l=o,c=o.x,u=o.y;let d=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&Mn(s<u?i:r,s,c,u,s<u?r:i,s,n.x,n.y)){const p=Math.abs(s-n.y)/(i-n.x);if(ne(n,e)&&(p<d||p===d&&(n.x>o.x||n.x===o.x&&Zt(o,n)))){o=n;d=p}}n=n.next}while(n!==l);return o}function Zt(e,t){return It(e.prev,e,t.prev)<0&&It(t.next,e,e.next)<0}function Ft(e,t,n,i){let s=e;do{if(s.z===0)s.z=Qt(s.x,s.y,t,n,i);s.prevZ=s.prev;s.nextZ=s.next;s=s.next}while(s!==e);s.prevZ.nextZ=null;s.prevZ=null;Rn(s)}function Rn(e){let t,n=1;do{let i=e,s;e=null;let r=null;t=0;while(i){t++;let o=i,l=0;for(let u=0;u<n;u++){l++;o=o.nextZ;if(!o)break}let c=n;while(l>0||c>0&&o){if(l!==0&&(c===0||!o||i.z<=o.z)){s=i;i=i.nextZ;l--}else{s=o;o=o.nextZ;c--}if(r)r.nextZ=s;else e=s;s.prevZ=r;r=s}i=o}r.nextZ=null;n*=2}while(t>1);return e}function Qt(e,t,n,i,s){e=(e-n)*s|0;t=(t-i)*s|0;e=(e|e<<8)&16711935;e=(e|e<<4)&252645135;e=(e|e<<2)&858993459;e=(e|e<<1)&1431655765;t=(t|t<<8)&16711935;t=(t|t<<4)&252645135;t=(t|t<<2)&858993459;t=(t|t<<1)&1431655765;return e|t<<1}function Kn(e){let t=e,n=e;do{if(t.x<n.x||t.x===n.x&&t.y<n.y)n=t;t=t.next}while(t!==e);return n}function Mn(e,t,n,i,s,r,o,l){return(s-o)*(t-l)>=(e-o)*(r-l)&&(e-o)*(i-l)>=(n-o)*(t-l)&&(n-o)*(r-l)>=(s-o)*(i-l)}function on(e,t,n,i,s,r,o,l){return!(e===o&&t===l)&&Mn(e,t,n,i,s,r,o,l)}function H(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!k(e,t)&&(ne(e,t)&&ne(t,e)&&ye(e,t)&&(It(e.prev,e,t.prev)||It(e,t.prev,t))||Dt(e,t)&&It(e.prev,e,e.next)>0&&It(t.prev,t,t.next)>0)}function It(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Dt(e,t){return e.x===t.x&&e.y===t.y}function sn(e,t,n,i){const s=x(It(e,t,n)),r=x(It(e,t,i)),o=x(It(n,i,e)),l=x(It(n,i,t));if(s!==r&&o!==l)return!0;if(s===0&&M(e,n,t))return!0;if(r===0&&M(e,i,t))return!0;if(o===0&&M(n,e,i))return!0;if(l===0&&M(n,t,i))return!0;return!1}function M(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function x(e){return e>0?1:e<0?-1:0}function k(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&sn(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ne(e,t){return It(e.prev,e,e.next)<0?It(e,t,e.next)>=0&&It(e,e.prev,t)>=0:It(e,t,e.prev)<0||It(e,e.next,t)<0}function ye(e,t){let n=e,i=!1;const s=(e.x+t.x)/2,r=(e.y+t.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==e);return i}function Pe(e,t){const n=ge(e.i,e.x,e.y),i=ge(t.i,t.x,t.y),s=e.next,r=t.prev;e.next=t;t.prev=e;n.next=s;s.prev=n;i.next=n;n.prev=i;r.next=i;i.prev=r;return i}function Ge(e,t,n,i){const s=ge(e,t,n);if(!i){s.prev=s;s.next=s}else{s.next=i.next;s.prev=i;i.next.prev=s;i.next=s}return s}function ce(e){e.next.prev=e.prev;e.prev.next=e.next;if(e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function ge(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ve(e,t,n,i){let s=0;for(let r=t,o=n-i;r<n;r+=i){s+=(e[o]-e[r])*(e[r+1]+e[o+1]);o=r}return s}class tt{static triangulate(e,t,n=2){return ft(e,t,n)}}class Le{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*0.5}static isClockWise(e){return Le.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Re(e);it(n,e);let r=e.length;t.forEach(Re);for(let l=0;l<t.length;l++){i.push(r);r+=t[l].length;it(n,t[l])}const o=tt.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Re(e){const t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function it(e,t){for(let n=0;n<t.length;n++){e.push(t[n].x);e.push(t[n].y)}}class st extends St{constructor(e=new pt([new we(0.5,0.5),new we(-0.5,0.5),new we(-0.5,-0.5),new we(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry";this.parameters={shapes:e,options:t};e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r(c)}this.setAttribute("position",new Ye(i,3));this.setAttribute("uv",new Ye(s,2));this.computeVertexNormals();function r(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:0.2,_=t.bevelSize!==void 0?t.bevelSize:m-0.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,T=t.bevelSegments!==void 0?t.bevelSegments:3;const I=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:kt;let B,F=!1,W,oe,ve,le;if(I){B=I.getSpacedPoints(u);F=!0;p=!1;const He=I.isCatmullRomCurve3?I.closed:!1;W=I.computeFrenetFrames(u,He);oe=new U;ve=new U;le=new U}if(!p){T=0;m=0;_=0;v=0}const Me=o.extractPoints(c);let Ae=Me.shape;const je=Me.holes;if(!Le.isClockWise(Ae)){Ae=Ae.reverse();for(let He=0,Je=je.length;He<Je;He++){const Qe=je[He];if(Le.isClockWise(Qe))je[He]=Qe.reverse()}}function dt(He){const Je=0.0000000001,Qe=Je*Je;let ot=He[0];for(let at=1;at<=He.length;at++){const qt=at%He.length,Et=He[qt],gn=Et.x-ot.x,vn=Et.y-ot.y,In=gn*gn+vn*vn,Pi=Math.max(Math.abs(Et.x),Math.abs(Et.y),Math.abs(ot.x),Math.abs(ot.y)),Ca=Qe*Pi*Pi;if(In<=Ca){He.splice(qt,1);at--;continue}ot=Et}}dt(Ae);je.forEach(dt);const Lt=je.length,ht=Ae;for(let He=0;He<Lt;He++){const Je=je[He];Ae=Ae.concat(Je)}function nn(He,Je,Qe){if(!Je)Nt("ExtrudeGeometry: vec does not exist");return He.clone().addScaledVector(Je,Qe)}const cn=Ae.length;function Bn(He,Je,Qe){let ot,at,qt;const Et=He.x-Je.x,gn=He.y-Je.y,vn=Qe.x-He.x,In=Qe.y-He.y,Pi=Et*Et+gn*gn,Ca=Et*In-gn*vn;if(Math.abs(Ca)>Number.EPSILON){const Li=Math.sqrt(Pi),nm=Math.sqrt(vn*vn+In*In),im=Je.x-gn/Li,sm=Je.y+Et/Li,Rm=Qe.x-In/nm,Im=Qe.y+vn/nm,rm=((Rm-im)*In-(Im-sm)*vn)/(Et*In-gn*vn);ot=im+Et*rm-He.x;at=sm+gn*rm-He.y;const am=ot*ot+at*at;if(am<=2)return new we(ot,at);else qt=Math.sqrt(am/2)}else{let Li=!1;if(Et>Number.EPSILON){if(vn>Number.EPSILON)Li=!0}else if(Et<-Number.EPSILON){if(vn<-Number.EPSILON)Li=!0}else if(Math.sign(gn)===Math.sign(In))Li=!0;if(Li){ot=-gn;at=Et;qt=Math.sqrt(Pi)}else{ot=Et;at=gn;qt=Math.sqrt(Pi/2)}}return new we(ot/qt,at/qt)}const an=[];for(let He=0,Je=ht.length,Qe=Je-1,ot=He+1;He<Je;He++,Qe++,ot++){if(Qe===Je)Qe=0;if(ot===Je)ot=0;an[He]=Bn(ht[He],ht[Qe],ht[ot])}const pn=[];let mn,_i=an.concat();for(let He=0,Je=Lt;He<Je;He++){const Qe=je[He];mn=[];for(let ot=0,at=Qe.length,qt=at-1,Et=ot+1;ot<at;ot++,qt++,Et++){if(qt===at)qt=0;if(Et===at)Et=0;mn[ot]=Bn(Qe[ot],Qe[qt],Qe[Et])}pn.push(mn);_i=_i.concat(mn)}let oi;if(T===0)oi=Le.triangulateShape(ht,je);else{const He=[],Je=[];for(let Qe=0;Qe<T;Qe++){const ot=Qe/T,at=m*Math.cos(ot*Math.PI/2),qt=_*Math.sin(ot*Math.PI/2)+v;for(let Et=0,gn=ht.length;Et<gn;Et++){const vn=nn(ht[Et],an[Et],qt);li(vn.x,vn.y,-at);if(ot===0)He.push(vn)}for(let Et=0,gn=Lt;Et<gn;Et++){const vn=je[Et];mn=pn[Et];const In=[];for(let Pi=0,Ca=vn.length;Pi<Ca;Pi++){const Li=nn(vn[Pi],mn[Pi],qt);li(Li.x,Li.y,-at);if(ot===0)In.push(Li)}if(ot===0)Je.push(In)}}oi=Le.triangulateShape(He,Je)}const $s=oi.length,Pr=_+v;for(let He=0;He<cn;He++){const Je=p?nn(Ae[He],_i[He],Pr):Ae[He];if(!F)li(Je.x,Je.y,0);else{ve.copy(W.normals[0]).multiplyScalar(Je.x);oe.copy(W.binormals[0]).multiplyScalar(Je.y);le.copy(B[0]).add(ve).add(oe);li(le.x,le.y,le.z)}}for(let He=1;He<=u;He++)for(let Je=0;Je<cn;Je++){const Qe=p?nn(Ae[Je],_i[Je],Pr):Ae[Je];if(!F)li(Qe.x,Qe.y,d/u*He);else{ve.copy(W.normals[He]).multiplyScalar(Qe.x);oe.copy(W.binormals[He]).multiplyScalar(Qe.y);le.copy(B[He]).add(ve).add(oe);li(le.x,le.y,le.z)}}for(let He=T-1;He>=0;He--){const Je=He/T,Qe=m*Math.cos(Je*Math.PI/2),ot=_*Math.sin(Je*Math.PI/2)+v;for(let at=0,qt=ht.length;at<qt;at++){const Et=nn(ht[at],an[at],ot);li(Et.x,Et.y,d+Qe)}for(let at=0,qt=je.length;at<qt;at++){const Et=je[at];mn=pn[at];for(let gn=0,vn=Et.length;gn<vn;gn++){const In=nn(Et[gn],mn[gn],ot);if(!F)li(In.x,In.y,d+Qe);else li(In.x,In.y+B[u-1].y,B[u-1].x+Qe)}}}Qu();ed();function Qu(){const He=i.length/3;if(p){let Je=0,Qe=cn*Je;for(let ot=0;ot<$s;ot++){const at=oi[ot];ys(at[2]+Qe,at[1]+Qe,at[0]+Qe)}Je=u+T*2;Qe=cn*Je;for(let ot=0;ot<$s;ot++){const at=oi[ot];ys(at[0]+Qe,at[1]+Qe,at[2]+Qe)}}else{for(let Je=0;Je<$s;Je++){const Qe=oi[Je];ys(Qe[2],Qe[1],Qe[0])}for(let Je=0;Je<$s;Je++){const Qe=oi[Je];ys(Qe[0]+cn*u,Qe[1]+cn*u,Qe[2]+cn*u)}}n.addGroup(He,i.length/3-He,0)}function ed(){const He=i.length/3;let Je=0;Lr(ht,Je);Je+=ht.length;for(let Qe=0,ot=je.length;Qe<ot;Qe++){const at=je[Qe];Lr(at,Je);Je+=at.length}n.addGroup(He,i.length/3-He,1)}function Lr(He,Je){let Qe=He.length;while(--Qe>=0){const ot=Qe;let at=Qe-1;if(at<0)at=He.length-1;for(let qt=0,Et=u+T*2;qt<Et;qt++){const gn=cn*qt,vn=cn*(qt+1),In=Je+ot+gn,Pi=Je+at+gn,Ca=Je+at+vn,Li=Je+ot+vn;ph(In,Pi,Ca,Li)}}}function li(He,Je,Qe){l.push(He);l.push(Je);l.push(Qe)}function ys(He,Je,Qe){Ii(He);Ii(Je);Ii(Qe);const ot=i.length/3,at=C.generateTopUV(n,i,ot-3,ot-2,ot-1);Ks(at[0]);Ks(at[1]);Ks(at[2])}function ph(He,Je,Qe,ot){Ii(He);Ii(Je);Ii(ot);Ii(Je);Ii(Qe);Ii(ot);const at=i.length/3,qt=C.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);Ks(qt[0]);Ks(qt[1]);Ks(qt[3]);Ks(qt[1]);Ks(qt[2]);Ks(qt[3])}function Ii(He){i.push(l[He*3+0]);i.push(l[He*3+1]);i.push(l[He*3+2])}function Ks(He){s.push(He.x);s.push(He.y)}}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return V(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;if(i!==void 0)e.options.extrudePath=new xe[i.type]().fromJSON(i);return new st(n,e.options)}}const kt={generateTopUV:function(e,t,n,i,s){const r=t[n*3],o=t[n*3+1],l=t[i*3],c=t[i*3+1],u=t[s*3],d=t[s*3+1];return[new we(r,o),new we(l,c),new we(u,d)]},generateSideWallUV:function(e,t,n,i,s,r){const o=t[n*3],l=t[n*3+1],c=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],_=t[s*3+1],v=t[s*3+2],T=t[r*3],I=t[r*3+1],C=t[r*3+2];if(Math.abs(l-d)<Math.abs(o-u))return[new we(o,1-c),new we(u,1-p),new we(m,1-v),new we(T,1-C)];else return[new we(l,1-c),new we(d,1-p),new we(_,1-v),new we(I,1-C)]}};function V(e,t,n){n.shapes=[];if(Array.isArray(e))for(let i=0,s=e.length;i<s;i++){const r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);n.options=Object.assign({},t);if(t.extrudePath!==void 0)n.options.extrudePath=t.extrudePath.toJSON();return n}class Oe extends f{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t);this.type="IcosahedronGeometry";this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oe(e.radius,e.detail)}}class de extends St{constructor(e=[new we(0,-0.5),new we(0.5,0),new we(0,0.5)],t=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry";this.parameters={points:e,segments:t,phiStart:n,phiLength:i};t=Math.floor(t);i=ut(i,0,Math.PI*2);const s=[],r=[],o=[],l=[],c=[],u=1/t,d=new U,p=new we,m=new U,_=new U,v=new U;let T=0,I=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:T=e[C+1].x-e[C].x;I=e[C+1].y-e[C].y;m.x=I*1;m.y=-T;m.z=I*0;v.copy(m);m.normalize();l.push(m.x,m.y,m.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:T=e[C+1].x-e[C].x;I=e[C+1].y-e[C].y;m.x=I*1;m.y=-T;m.z=I*0;_.copy(m);m.x+=v.x;m.y+=v.y;m.z+=v.z;m.normalize();l.push(m.x,m.y,m.z);v.copy(_)}for(let C=0;C<=t;C++){const B=n+C*u*i,F=Math.sin(B),W=Math.cos(B);for(let oe=0;oe<=e.length-1;oe++){d.x=e[oe].x*F;d.y=e[oe].y;d.z=e[oe].x*W;r.push(d.x,d.y,d.z);p.x=C/t;p.y=oe/(e.length-1);o.push(p.x,p.y);const ve=l[3*oe+0]*F,le=l[3*oe+1],Me=l[3*oe+0]*W;c.push(ve,le,Me)}}for(let C=0;C<t;C++)for(let B=0;B<e.length-1;B++){const F=B+C*e.length,W=F,oe=F+e.length,ve=F+e.length+1,le=F+1;s.push(W,oe,le);s.push(ve,le,oe)}this.setIndex(s);this.setAttribute("position",new Ye(r,3));this.setAttribute("uv",new Ye(o,2));this.setAttribute("normal",new Ye(c,3))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new de(e.points,e.segments,e.phiStart,e.phiLength)}}class Fe extends f{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t);this.type="OctahedronGeometry";this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fe(e.radius,e.detail)}}class Xe extends St{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry";this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,p=t/l,m=[],_=[],v=[],T=[];for(let I=0;I<u;I++){const C=I*p-r;for(let B=0;B<c;B++){const F=B*d-s;_.push(F,-C,0);v.push(0,0,1);T.push(B/o);T.push(1-I/l)}}for(let I=0;I<l;I++)for(let C=0;C<o;C++){const B=C+c*I,F=C+c*(I+1),W=C+1+c*(I+1),oe=C+1+c*I;m.push(B,F,oe);m.push(F,W,oe)}this.setIndex(m);this.setAttribute("position",new Ye(_,3));this.setAttribute("normal",new Ye(v,3));this.setAttribute("uv",new Ye(T,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Xe(e.width,e.height,e.widthSegments,e.heightSegments)}}class Se extends St{constructor(e=0.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry";this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r};n=Math.max(3,n);i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const p=(t-e)/i,m=new U,_=new we;for(let v=0;v<=i;v++){for(let T=0;T<=n;T++){const I=s+T/n*r;m.x=d*Math.cos(I);m.y=d*Math.sin(I);l.push(m.x,m.y,m.z);c.push(0,0,1);_.x=(m.x/t+1)/2;_.y=(m.y/t+1)/2;u.push(_.x,_.y)}d+=p}for(let v=0;v<i;v++){const T=v*(n+1);for(let I=0;I<n;I++){const C=I+T,B=C,F=C+n+1,W=C+n+2,oe=C+1;o.push(B,F,oe);o.push(F,W,oe)}}this.setIndex(o);this.setAttribute("position",new Ye(l,3));this.setAttribute("normal",new Ye(c,3));this.setAttribute("uv",new Ye(u,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Se(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ze extends St{constructor(e=new pt([new we(0,0.5),new we(-0.5,-0.5),new we(0.5,-0.5)]),t=12){super();this.type="ShapeGeometry";this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],r=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++){c(e[u]);this.addGroup(o,l,u);o+=l;l=0}this.setIndex(n);this.setAttribute("position",new Ye(i,3));this.setAttribute("normal",new Ye(s,3));this.setAttribute("uv",new Ye(r,2));function c(u){const d=i.length/3,p=u.extractPoints(t);let m=p.shape;const _=p.holes;if(Le.isClockWise(m)===!1)m=m.reverse();for(let T=0,I=_.length;T<I;T++){const C=_[T];if(Le.isClockWise(C)===!0)_[T]=C.reverse()}const v=Le.triangulateShape(m,_);for(let T=0,I=_.length;T<I;T++){const C=_[T];m=m.concat(C)}for(let T=0,I=m.length;T<I;T++){const C=m[T];i.push(C.x,C.y,0);s.push(0,0,1);r.push(C.x,C.y)}for(let T=0,I=v.length;T<I;T++){const C=v[T],B=C[0]+d,F=C[1]+d,W=C[2]+d;n.push(B,F,W);l+=3}}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xt(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const r=t[e.shapes[i]];n.push(r)}return new ze(n,e.curveSegments)}}function xt(e,t){t.shapes=[];if(Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}class Xt extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry";this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o};t=Math.max(3,Math.floor(t));n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],d=new U,p=new U,m=[],_=[],v=[],T=[];for(let I=0;I<=n;I++){const C=[],B=I/n,F=r+B*o,W=e*Math.cos(F),oe=Math.sqrt(e*e-W*W);let ve=0;if(I===0&&r===0)ve=0.5/t;else if(I===n&&l===Math.PI)ve=-0.5/t;for(let le=0;le<=t;le++){const Me=le/t,Ae=i+Me*s;d.x=-oe*Math.cos(Ae);d.y=W;d.z=oe*Math.sin(Ae);_.push(d.x,d.y,d.z);p.copy(d).normalize();v.push(p.x,p.y,p.z);T.push(Me+ve,1-B);C.push(c++)}u.push(C)}for(let I=0;I<n;I++)for(let C=0;C<t;C++){const B=u[I][C+1],F=u[I][C],W=u[I+1][C],oe=u[I+1][C+1];if(I!==0||r>0)m.push(B,F,oe);if(I!==n-1||l<Math.PI)m.push(F,W,oe)}this.setIndex(m);this.setAttribute("position",new Ye(_,3));this.setAttribute("normal",new Ye(v,3));this.setAttribute("uv",new Ye(T,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ot extends f{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t);this.type="TetrahedronGeometry";this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ot(e.radius,e.detail)}}class ri extends St{constructor(e=1,t=0.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super();this.type="TorusGeometry";this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o};n=Math.floor(n);i=Math.floor(i);const l=[],c=[],u=[],d=[],p=new U,m=new U,_=new U;for(let v=0;v<=n;v++){const T=r+v/n*o;for(let I=0;I<=i;I++){const C=I/i*s;m.x=(e+t*Math.cos(T))*Math.cos(C);m.y=(e+t*Math.cos(T))*Math.sin(C);m.z=t*Math.sin(T);c.push(m.x,m.y,m.z);p.x=e*Math.cos(C);p.y=e*Math.sin(C);_.subVectors(m,p).normalize();u.push(_.x,_.y,_.z);d.push(I/i);d.push(v/n)}}for(let v=1;v<=n;v++)for(let T=1;T<=i;T++){const I=(i+1)*v+T-1,C=(i+1)*(v-1)+T-1,B=(i+1)*(v-1)+T,F=(i+1)*v+T;l.push(I,C,F);l.push(C,B,F)}this.setIndex(l);this.setAttribute("position",new Ye(c,3));this.setAttribute("normal",new Ye(u,3));this.setAttribute("uv",new Ye(d,2))}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class pi extends St{constructor(e=1,t=0.4,n=64,i=8,s=2,r=3){super();this.type="TorusKnotGeometry";this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:r};n=Math.floor(n);i=Math.floor(i);const o=[],l=[],c=[],u=[],d=new U,p=new U,m=new U,_=new U,v=new U,T=new U,I=new U;for(let B=0;B<=n;++B){const F=B/n*s*Math.PI*2;C(F,s,r,e,m);C(F+0.01,s,r,e,_);T.subVectors(_,m);I.addVectors(_,m);v.crossVectors(T,I);I.crossVectors(v,T);v.normalize();I.normalize();for(let W=0;W<=i;++W){const oe=W/i*Math.PI*2,ve=-t*Math.cos(oe),le=t*Math.sin(oe);d.x=m.x+(ve*I.x+le*v.x);d.y=m.y+(ve*I.y+le*v.y);d.z=m.z+(ve*I.z+le*v.z);l.push(d.x,d.y,d.z);p.subVectors(d,m).normalize();c.push(p.x,p.y,p.z);u.push(B/n);u.push(W/i)}}for(let B=1;B<=n;B++)for(let F=1;F<=i;F++){const W=(i+1)*(B-1)+(F-1),oe=(i+1)*B+(F-1),ve=(i+1)*B+F,le=(i+1)*(B-1)+F;o.push(W,oe,le);o.push(oe,ve,le)}this.setIndex(o);this.setAttribute("position",new Ye(l,3));this.setAttribute("normal",new Ye(c,3));this.setAttribute("uv",new Ye(u,2));function C(B,F,W,oe,ve){const le=Math.cos(B),Me=Math.sin(B),Ae=W/F*B,je=Math.cos(Ae);ve.x=oe*(2+je)*0.5*le;ve.y=oe*(2+je)*Me*0.5;ve.z=oe*Math.sin(Ae)*0.5}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}static fromJSON(e){return new pi(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Wo extends St{constructor(e=new ue(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super();this.type="TubeGeometry";this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const r=e.computeFrenetFrames(t,s);this.tangents=r.tangents;this.normals=r.normals;this.binormals=r.binormals;const o=new U,l=new U,c=new we;let u=new U;const d=[],p=[],m=[],_=[];v();this.setIndex(_);this.setAttribute("position",new Ye(d,3));this.setAttribute("normal",new Ye(p,3));this.setAttribute("uv",new Ye(m,2));function v(){for(let B=0;B<t;B++)T(B);T(s===!1?t:0);C();I()}function T(B){u=e.getPointAt(B/t,u);const F=r.normals[B],W=r.binormals[B];for(let oe=0;oe<=i;oe++){const ve=oe/i*Math.PI*2,le=Math.sin(ve),Me=-Math.cos(ve);l.x=Me*F.x+le*W.x;l.y=Me*F.y+le*W.y;l.z=Me*F.z+le*W.z;l.normalize();p.push(l.x,l.y,l.z);o.x=u.x+n*l.x;o.y=u.y+n*l.y;o.z=u.z+n*l.z;d.push(o.x,o.y,o.z)}}function I(){for(let B=1;B<=t;B++)for(let F=1;F<=i;F++){const W=(i+1)*(B-1)+(F-1),oe=(i+1)*B+(F-1),ve=(i+1)*B+F,le=(i+1)*(B-1)+F;_.push(W,oe,le);_.push(oe,ve,le)}}function C(){for(let B=0;B<=t;B++)for(let F=0;F<=i;F++){c.x=B/t;c.y=F/i;m.push(c.x,c.y)}}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}toJSON(){const e=super.toJSON();e.path=this.parameters.path.toJSON();return e}static fromJSON(e){return new Wo(new xe[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Xo extends St{constructor(e=null){super();this.type="WireframeGeometry";this.parameters={geometry:e};if(e!==null){const t=[],n=new Set,i=new U,s=new U;if(e.index!==null){const r=e.attributes.position,o=e.index;let l=e.groups;if(l.length===0)l=[{start:0,count:o.count,materialIndex:0}];for(let c=0,u=l.length;c<u;++c){const d=l[c],{start:p,count:m}=d;for(let _=p,v=p+m;_<v;_+=3)for(let T=0;T<3;T++){const I=o.getX(_+T),C=o.getX(_+(T+1)%3);i.fromBufferAttribute(r,I);s.fromBufferAttribute(r,C);if(qo(i,s,n)===!0){t.push(i.x,i.y,i.z);t.push(s.x,s.y,s.z)}}}}else{const r=e.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(r,u);s.fromBufferAttribute(r,d);if(qo(i,s,n)===!0){t.push(i.x,i.y,i.z);t.push(s.x,s.y,s.z)}}}this.setAttribute("position",new Ye(t,3))}}copy(e){super.copy(e);this.parameters=Object.assign({},e.parameters);return this}}function qo(e,t,n){const i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;if(n.has(i)===!0||n.has(s)===!0)return!1;else{n.add(i);n.add(s);return!0}}var Du=Object.freeze({__proto__:null,BoxGeometry:Ho,CapsuleGeometry:si,CircleGeometry:Vo,ConeGeometry:a,CylinderGeometry:Cr,DodecahedronGeometry:h,EdgesGeometry:O,ExtrudeGeometry:st,IcosahedronGeometry:Oe,LatheGeometry:de,OctahedronGeometry:Fe,PlaneGeometry:Xe,PolyhedronGeometry:f,RingGeometry:Se,ShapeGeometry:ze,SphereGeometry:Xt,TetrahedronGeometry:Ot,TorusGeometry:ri,TorusKnotGeometry:pi,TubeGeometry:Wo,WireframeGeometry:Xo});class Yo extends Ct{constructor(e){super();this.isShadowMaterial=!0;this.type="ShadowMaterial";this.color=new gt(0);this.transparent=!0;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.fog=e.fog;return this}}function ya(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(Zo(s))if(s.isRenderTargetTexture){lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().");t[n][i]=null}else t[n][i]=s.clone();else if(Array.isArray(s))if(Zo(s[0])){const r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function gs(e){const t={};for(let n=0;n<e.length;n++){const i=ya(e[n]);for(const s in i)t[s]=i[s]}return t}function Zo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Nu(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Uu(e){const t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return Jn.workingColorSpace}const jo={clone:ya,merge:gs};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Ct{constructor(e){super();this.isShaderMaterial=!0;this.type="ShaderMaterial";this.defines={};this.uniforms={};this.uniformsGroups=[];this.vertexShader=Fu;this.fragmentShader=Jo;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.lights=!1;this.clipping=!1;this.forceSinglePass=!0;this.extensions={clipCullDistance:!1,multiDraw:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;this.glslVersion=null;if(e!==void 0)this.setValues(e)}copy(e){super.copy(e);this.fragmentShader=e.fragmentShader;this.vertexShader=e.vertexShader;this.uniforms=ya(e.uniforms);this.uniformsGroups=Nu(e.uniformsGroups);this.defines=Object.assign({},e.defines);this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.fog=e.fog;this.lights=e.lights;this.clipping=e.clipping;this.extensions=Object.assign({},e.extensions);this.glslVersion=e.glslVersion;this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues);this.index0AttributeName=e.index0AttributeName;this.uniformsNeedUpdate=e.uniformsNeedUpdate;return this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion;t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader;t.fragmentShader=this.fragmentShader;t.lights=this.lights;t.clipping=this.clipping;const n={};for(const i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){super.fromJSON(e,t);if(e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];this.uniforms[n]={};switch(i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new gt().setHex(i.value);break;case"v2":this.uniforms[n].value=new we().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Vn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ti().fromArray(i.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class $o extends Sa{constructor(e){super(e);this.isRawShaderMaterial=!0;this.type="RawShaderMaterial"}}class Ko extends Ct{constructor(e){super();this.isMeshStandardMaterial=!0;this.type="MeshStandardMaterial";this.defines={STANDARD:""};this.color=new gt(16777215);this.roughness=1;this.metalness=0;this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new gt(0);this.emissiveIntensity=1;this.emissiveMap=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.roughnessMap=null;this.metalnessMap=null;this.alphaMap=null;this.envMap=null;this.envMapRotation=new Ei;this.envMapIntensity=1;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.flatShading=!1;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.defines={STANDARD:""};this.color.copy(e.color);this.roughness=e.roughness;this.metalness=e.metalness;this.map=e.map;this.lightMap=e.lightMap;this.lightMapIntensity=e.lightMapIntensity;this.aoMap=e.aoMap;this.aoMapIntensity=e.aoMapIntensity;this.emissive.copy(e.emissive);this.emissiveMap=e.emissiveMap;this.emissiveIntensity=e.emissiveIntensity;this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.roughnessMap=e.roughnessMap;this.metalnessMap=e.metalnessMap;this.alphaMap=e.alphaMap;this.envMap=e.envMap;this.envMapRotation.copy(e.envMapRotation);this.envMapIntensity=e.envMapIntensity;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.wireframeLinecap=e.wireframeLinecap;this.wireframeLinejoin=e.wireframeLinejoin;this.flatShading=e.flatShading;this.fog=e.fog;return this}}class ch extends Ko{constructor(e){super();this.isMeshPhysicalMaterial=!0;this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.anisotropyRotation=0;this.anisotropyMap=null;this.clearcoatMap=null;this.clearcoatRoughness=0;this.clearcoatRoughnessMap=null;this.clearcoatNormalScale=new we(1,1);this.clearcoatNormalMap=null;this.ior=1.5;Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}});this.iridescenceMap=null;this.iridescenceIOR=1.3;this.iridescenceThicknessRange=[100,400];this.iridescenceThicknessMap=null;this.sheenColor=new gt(0);this.sheenColorMap=null;this.sheenRoughness=1;this.sheenRoughnessMap=null;this.transmissionMap=null;this.thickness=0;this.thicknessMap=null;this.attenuationDistance=1/0;this.attenuationColor=new gt(1,1,1);this.specularIntensity=1;this.specularIntensityMap=null;this.specularColor=new gt(1,1,1);this.specularColorMap=null;this._anisotropy=0;this._clearcoat=0;this._dispersion=0;this._iridescence=0;this._retroreflectivity=0;this._sheen=0;this._transmission=0;this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}copy(e){super.copy(e);this.defines={STANDARD:"",PHYSICAL:""};this.anisotropy=e.anisotropy;this.anisotropyRotation=e.anisotropyRotation;this.anisotropyMap=e.anisotropyMap;this.clearcoat=e.clearcoat;this.clearcoatMap=e.clearcoatMap;this.clearcoatRoughness=e.clearcoatRoughness;this.clearcoatRoughnessMap=e.clearcoatRoughnessMap;this.clearcoatNormalMap=e.clearcoatNormalMap;this.clearcoatNormalScale.copy(e.clearcoatNormalScale);this.dispersion=e.dispersion;this.ior=e.ior;this.iridescence=e.iridescence;this.iridescenceMap=e.iridescenceMap;this.iridescenceIOR=e.iridescenceIOR;this.iridescenceThicknessRange=[...e.iridescenceThicknessRange];this.iridescenceThicknessMap=e.iridescenceThicknessMap;this.retroreflectivity=e.retroreflectivity;this.sheen=e.sheen;this.sheenColor.copy(e.sheenColor);this.sheenColorMap=e.sheenColorMap;this.sheenRoughness=e.sheenRoughness;this.sheenRoughnessMap=e.sheenRoughnessMap;this.transmission=e.transmission;this.transmissionMap=e.transmissionMap;this.thickness=e.thickness;this.thicknessMap=e.thicknessMap;this.attenuationDistance=e.attenuationDistance;this.attenuationColor.copy(e.attenuationColor);this.specularIntensity=e.specularIntensity;this.specularIntensityMap=e.specularIntensityMap;this.specularColor.copy(e.specularColor);this.specularColorMap=e.specularColorMap;return this}}class hh extends Ct{constructor(e){super();this.isMeshPhongMaterial=!0;this.type="MeshPhongMaterial";this.color=new gt(16777215);this.specular=new gt(1118481);this.shininess=30;this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new gt(0);this.emissiveIntensity=1;this.emissiveMap=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.envMapRotation=new Ei;this.combine=er;this.reflectivity=1;this.envMapIntensity=1;this.refractionRatio=0.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.flatShading=!1;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.specular.copy(e.specular);this.shininess=e.shininess;this.map=e.map;this.lightMap=e.lightMap;this.lightMapIntensity=e.lightMapIntensity;this.aoMap=e.aoMap;this.aoMapIntensity=e.aoMapIntensity;this.emissive.copy(e.emissive);this.emissiveMap=e.emissiveMap;this.emissiveIntensity=e.emissiveIntensity;this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.specularMap=e.specularMap;this.alphaMap=e.alphaMap;this.envMap=e.envMap;this.envMapRotation.copy(e.envMapRotation);this.combine=e.combine;this.reflectivity=e.reflectivity;this.envMapIntensity=e.envMapIntensity;this.refractionRatio=e.refractionRatio;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.wireframeLinecap=e.wireframeLinecap;this.wireframeLinejoin=e.wireframeLinejoin;this.flatShading=e.flatShading;this.fog=e.fog;return this}}class uh extends Ct{constructor(e){super();this.isMeshToonMaterial=!0;this.defines={TOON:""};this.type="MeshToonMaterial";this.color=new gt(16777215);this.map=null;this.gradientMap=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new gt(0);this.emissiveIntensity=1;this.emissiveMap=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.gradientMap=e.gradientMap;this.lightMap=e.lightMap;this.lightMapIntensity=e.lightMapIntensity;this.aoMap=e.aoMap;this.aoMapIntensity=e.aoMapIntensity;this.emissive.copy(e.emissive);this.emissiveMap=e.emissiveMap;this.emissiveIntensity=e.emissiveIntensity;this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.alphaMap=e.alphaMap;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.wireframeLinecap=e.wireframeLinecap;this.wireframeLinejoin=e.wireframeLinejoin;this.fog=e.fog;return this}}class Qo extends Ct{constructor(e){super();this.isMeshNormalMaterial=!0;this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.flatShading=!1;this.setValues(e)}copy(e){super.copy(e);this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.flatShading=e.flatShading;return this}}class y extends Ct{constructor(e){super();this.isMeshLambertMaterial=!0;this.type="MeshLambertMaterial";this.color=new gt(16777215);this.map=null;this.lightMap=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new gt(0);this.emissiveIntensity=1;this.emissiveMap=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.envMapRotation=new Ei;this.combine=er;this.reflectivity=1;this.envMapIntensity=1;this.refractionRatio=0.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";this.flatShading=!1;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.color.copy(e.color);this.map=e.map;this.lightMap=e.lightMap;this.lightMapIntensity=e.lightMapIntensity;this.aoMap=e.aoMap;this.aoMapIntensity=e.aoMapIntensity;this.emissive.copy(e.emissive);this.emissiveMap=e.emissiveMap;this.emissiveIntensity=e.emissiveIntensity;this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.specularMap=e.specularMap;this.alphaMap=e.alphaMap;this.envMap=e.envMap;this.envMapRotation.copy(e.envMapRotation);this.combine=e.combine;this.reflectivity=e.reflectivity;this.envMapIntensity=e.envMapIntensity;this.refractionRatio=e.refractionRatio;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.wireframeLinecap=e.wireframeLinecap;this.wireframeLinejoin=e.wireframeLinejoin;this.flatShading=e.flatShading;this.fog=e.fog;return this}}class G extends Ct{constructor(e){super();this.isMeshDepthMaterial=!0;this.type="MeshDepthMaterial";this.depthPacking=no;this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(e)}copy(e){super.copy(e);this.depthPacking=e.depthPacking;this.map=e.map;this.alphaMap=e.alphaMap;this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;return this}}class se extends Ct{constructor(e){super();this.isMeshDistanceMaterial=!0;this.type="MeshDistanceMaterial";this.map=null;this.alphaMap=null;this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.setValues(e)}copy(e){super.copy(e);this.map=e.map;this.alphaMap=e.alphaMap;this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;return this}}class j extends Ct{constructor(e){super();this.isMeshMatcapMaterial=!0;this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new gt(16777215);this.matcap=null;this.map=null;this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=Yi;this.normalScale=new we(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.flatShading=!1;this.fog=!0;this.setValues(e)}copy(e){super.copy(e);this.defines={MATCAP:""};this.color.copy(e.color);this.matcap=e.matcap;this.map=e.map;this.bumpMap=e.bumpMap;this.bumpScale=e.bumpScale;this.normalMap=e.normalMap;this.normalMapType=e.normalMapType;this.normalScale.copy(e.normalScale);this.displacementMap=e.displacementMap;this.displacementScale=e.displacementScale;this.displacementBias=e.displacementBias;this.alphaMap=e.alphaMap;this.wireframe=e.wireframe;this.wireframeLinewidth=e.wireframeLinewidth;this.flatShading=e.flatShading;this.fog=e.fog;return this}}class J extends On{constructor(e){super();this.isLineDashedMaterial=!0;this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(e)}copy(e){super.copy(e);this.scale=e.scale;this.dashSize=e.dashSize;this.gapSize=e.gapSize;return this}}function Ue(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function qe(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ke(e){function t(s,r){return e[s]-e[r]}const n=e.length,i=Array(n);for(let s=0;s!==n;++s)i[s]=s;i.sort(t);return i}function $e(e,t,n){const i=e.length,s=new e.constructor(i);for(let r=0,o=0;o!==i;++r){const l=n[r]*t;for(let c=0;c!==t;++c)s[o++]=e[l+c]}return s}function et(e,t,n,i){let s=1,r=e[0];while(r!==void 0&&r[i]===void 0)r=e[s++];if(r===void 0)return;let o=r[i];if(o===void 0)return;if(Array.isArray(o))do{o=r[i];if(o!==void 0){t.push(r.time);n.push(...o)}r=e[s++]}while(r!==void 0);else if(o.toArray!==void 0)do{o=r[i];if(o!==void 0){t.push(r.time);o.toArray(n,n.length)}r=e[s++]}while(r!==void 0);else do{o=r[i];if(o!==void 0){t.push(r.time);n.push(o)}r=e[s++]}while(r!==void 0)}function bt(e,t,n,i,s=30){const r=e.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],d=u.getValueSize(),p=[],m=[];for(let _=0;_<u.times.length;++_){const v=u.times[_]*s;if(v<n||v>=i)continue;p.push(u.times[_]);for(let T=0;T<d;++T)m.push(u.values[_*d+T])}if(p.length===0)continue;u.times=Ue(p,u.times.constructor);u.values=Ue(m,u.values.constructor);o.push(u)}r.tracks=o;let l=1/0;for(let c=0;c<r.tracks.length;++c)if(l>r.tracks[c].times[0])l=r.tracks[c].times[0];for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*l);r.resetDuration();return r}function At(e,t=0,n=e,i=30){if(i<=0)i=30;const s=n.tracks.length,r=t/i;for(let o=0;o<s;++o){const l=n.tracks[o],c=l.ValueTypeName;if(c==="bool"||c==="string")continue;const u=e.tracks.find(function(C){return C.name===l.name&&C.ValueTypeName===c});if(u===void 0)continue;let d=0;const p=l.getValueSize();if(l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)d=p/3;let m=0;const _=u.getValueSize();if(u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)m=_/3;const v=l.times.length-1;let T;if(r<=l.times[0]){const C=d,B=p-d;T=l.values.slice(C,B)}else if(r>=l.times[v]){const C=v*p+d,B=C+p-d;T=l.values.slice(C,B)}else{const C=l.createInterpolant(),B=d,F=p-d;C.evaluate(r);T=C.resultBuffer.slice(B,F)}if(c==="quaternion")new Dn().fromArray(T).normalize().conjugate().toArray(T);const I=u.times.length;for(let C=0;C<I;++C){const B=C*_+m;if(c==="quaternion")Dn.multiplyQuaternionsFlat(u.values,B,T,0,u.values,B);else{const F=_-m*2;for(let W=0;W<F;++W)u.values[B+W]-=T[W]}}}e.blendMode=rr;return e}class Ke{static convertArray(e,t){return Ue(e,t)}static isTypedArray(e){return Cc(e)}static hasTangents(e){return qe(e)}static getKeyframeOrder(e){return ke(e)}static sortedArray(e,t,n){return $e(e,t,n)}static flattenJSON(e,t,n,i){et(e,t,n,i)}static subclip(e,t,n,i,s=30){return bt(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return At(e,t,n,i)}}class Pt{constructor(e,t,n,i){this.parameterPositions=e;this._cachedIndex=0;this.resultBuffer=i!==void 0?i:new t.constructor(n);this.sampleValues=t;this.valueSize=n;this.settings=null;this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;n=t.length;this._cachedIndex=n;return this.copySampleValue_(n-1)}if(n===o)break;s=i;i=t[++n];if(e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];if(e<o){n=2;s=o}for(let l=n-2;;){if(s===void 0){this._cachedIndex=0;return this.copySampleValue_(0)}if(n===l)break;i=s;s=t[--n-1];if(e>=s)break t}r=n;n=0;break n}break e}while(n<r){const o=n+r>>>1;if(e<t[o])r=o;else n=o+1}i=t[n];s=t[n-1];if(s===void 0){this._cachedIndex=0;return this.copySampleValue_(0)}if(i===void 0){n=t.length;this._cachedIndex=n;return this.copySampleValue_(n-1)}}this._cachedIndex=n;this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fn extends Pt{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0;this._offsetPrev=-0;this._weightNext=-0;this._offsetNext=-0;this.DefaultSettings_={endingStart:Xi,endingEnd:Xi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case qi:s=e;o=2*t-n;break;case Cs:s=i.length-2;o=t+i[s]-i[s+1];break;default:s=e;o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qi:r=e;l=2*n-t;break;case Cs:r=1;l=n+i[1]-i[0];break;default:r=e-1;l=t}const c=(n-t)*0.5,u=this.valueSize;this._weightPrev=c/(t-o);this._weightNext=c/(l-n);this._offsetPrev=s*u;this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,_=(n-t)/(i-t),v=_*_,T=v*_,I=-p*T+2*p*v-p*_,C=(1+p)*T+(-1.5-2*p)*v+(-0.5+p)*_+1,B=(-1-m)*T+(1.5+m)*v+0.5*_,F=m*T-m*v;for(let W=0;W!==o;++W)s[W]=I*r[u+W]+C*r[c+W]+B*r[l+W]+F*r[d+W];return s}}class $t extends Pt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let p=0;p!==o;++p)s[p]=r[c+p]*d+r[l+p]*u;return s}}class jt extends Pt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn extends Pt{interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){const _=(n-t)/(i-t),v=1-_;for(let T=0;T!==o;++T)s[T]=r[c+T]*v+r[l+T]*_;return s}const p=o*2,m=e-1;for(let _=0;_!==o;++_){const v=r[c+_],T=r[l+_],I=m*p+_*2,C=d[I],B=d[I+1],F=e*p+_*2,W=u[F],oe=u[F+1],ve=Bt(n,t,C,W,i);s[_]=Ze(ve,v,B,oe,T)}return s}}function Ze(e,t,n,i,s){const r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Xn(e,t,n,i,s){const r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Bt(e,t,n,i,s){let r=(e-t)/(s-t);for(let o=0;o<8;o++){const l=Ze(r,t,n,i,s)-e;if(Math.abs(l)<0.0000000001)break;const c=Xn(r,t,n,i,s);if(Math.abs(c)<0.0000000001)break;r=Math.max(0,Math.min(1,r-l/c))}return r}class rn{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e;this.times=Ue(t,this.TimeBufferType);this.values=Ue(n,this.ValueBufferType);this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ue(e.times,Array),values:Ue(e.values,Array)};const i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(qe(e.settings))n.settings={inTangents:Ue(e.settings.inTangents,Array),outTangents:Ue(e.settings.outTangents,Array)}}n.type=e.ValueTypeName;return n}InterpolantFactoryMethodDiscrete(e){return new jt(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $t(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fn(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new wn(this.times,this.values,this.getValueSize(),e);if(this.settings){t.inTangents=this.settings.inTangents;t.outTangents=this.settings.outTangents}return t}setInterpolation(e){let t;switch(e){case sr:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case Xr:t=this.InterpolantFactoryMethodSmooth;break;case Qa:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);lt("KeyframeTrack:",n);return this}this.createInterpolant=t;return this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(qe(this.settings)){wi(this.settings.inTangents,e);wi(this.settings.outTangents,e)}}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;++r;if(s!==0||r!==i){if(s>=r){r=Math.max(r,1);s=r-1}const o=this.getValueSize();this.times=n.slice(s,r);this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();if(t-Math.floor(t)!==0){Nt("KeyframeTrack: Invalid value size in track.",this);e=!1}const n=this.times,i=this.values,s=n.length;if(s===0){Nt("KeyframeTrack: Track is empty.",this);e=!1}let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l==="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l);e=!1;break}if(r!==null&&r>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,r);e=!1;break}r=l}if(i!==void 0){if(Cc(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c);e=!1;break}}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(!i){const d=o*n,p=d-n,m=d+n;for(let _=0;_!==n;++_){const v=t[d+_];if(v!==t[p+_]||v!==t[m+_]){l=!0;break}}}else l=!0;if(l){if(o!==r){e[r]=e[o];const d=o*n,p=r*n;for(let m=0;m!==n;++m)t[p+m]=t[d+m]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}if(r!==e.length){this.times=e.slice(0,r);this.values=t.slice(0,r*n)}else{this.times=e;this.values=t}return this}clone(){const e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);i.createInterpolant=this.createInterpolant;if(qe(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function wi(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Wr;class qn extends rn{constructor(e,t,n){super(e,t,n)}}qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=sr;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends rn{constructor(e,t,n,i){super(e,t,n,i)}}es.prototype.ValueTypeName="color";class Ht extends rn{constructor(e,t,n,i){super(e,t,n,i)}}Ht.prototype.ValueTypeName="number";class ln extends Pt{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Dn.slerpFlat(s,0,r,c-o,r,c,l);return s}}class mi extends rn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ln(this.times,this.values,this.getValueSize(),e)}}mi.prototype.ValueTypeName="quaternion";mi.prototype.InterpolantFactoryMethodSmooth=void 0;class zt extends rn{constructor(e,t,n){super(e,t,n)}}zt.prototype.ValueTypeName="string";zt.prototype.ValueBufferType=Array;zt.prototype.DefaultInterpolation=sr;zt.prototype.InterpolantFactoryMethodLinear=void 0;zt.prototype.InterpolantFactoryMethodSmooth=void 0;class Ci extends rn{constructor(e,t,n,i){super(e,t,n,i)}}Ci.prototype.ValueTypeName="vector";class Ri{constructor(e="",t=-1,n=[],i=Rs){this.name=e;this.tracks=n;this.duration=t;this.blendMode=i;this.uuid=Qn();this.userData={};if(this.duration<0)this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(om(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);s.uuid=e.uuid;s.userData=JSON.parse(e.userData||"{}");return s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s);c.push(0,1,0);const u=ke(l);l=$e(l,1,u);c=$e(c,1,u);if(!i&&l[0]===0){l.push(s);c.push(c[0])}r.push(new Ht(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let p=i[d];if(!p)i[d]=p=[];p.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}this.duration=t;return this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);t.userData=JSON.parse(JSON.stringify(this.userData));return t}toJSON(){return this.constructor.toJSON(this)}}function Ou(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ht;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return es;case"quaternion":return mi;case"bool":case"boolean":return qn;case"string":return zt}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function om(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ou(e.type);if(e.times===void 0){const i=[],s=[];et(e.keys,i,s,"value");e.times=i;e.values=s}let n;if(t.parse!==void 0)n=t.parse(e);else n=new t(e.name,e.times,e.values,e.interpolation);if(qe(e.settings))n.settings={inTangents:Ue(e.settings.inTangents,Float32Array),outTangents:Ue(e.settings.outTangents,Float32Array)};return n}const _s={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Gf(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Gf(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Gf(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Bu{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l=void 0;const c=[];this.onStart=void 0;this.onLoad=e;this.onProgress=t;this.onError=n;this._abortController=null;this.itemStart=function(u){o++;if(s===!1){if(i.onStart!==void 0)i.onStart(u,r,o)}s=!0};this.itemEnd=function(u){r++;if(i.onProgress!==void 0)i.onProgress(u,r,o);if(r===o){s=!1;if(i.onLoad!==void 0)i.onLoad()}};this.itemError=function(u){if(i.onError!==void 0)i.onError(u)};this.resolveURL=function(u){u=u.normalize("NFC");if(l)return l(u);return u};this.setURLModifier=function(u){l=u;return this};this.addHandler=function(u,d){c.push(u,d);return this};this.removeHandler=function(u){const d=c.indexOf(u);if(d!==-1)c.splice(d,2);return this};this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const m=c[d],_=c[d+1];if(m.global)m.lastIndex=0;if(m.test(u))return _}return null};this.abort=function(){this.abortController.abort();this._abortController=null;return this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}const kf=new Bu;class ai{constructor(e){this.manager=e!==void 0?e:kf;this.crossOrigin="anonymous";this.withCredentials=!1;this.path="";this.resourcePath="";this.requestHeader={};if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){this.crossOrigin=e;return this}setWithCredentials(e){this.withCredentials=e;return this}setPath(e){this.path=e;return this}setResourcePath(e){this.resourcePath=e;return this}setRequestHeader(e){this.requestHeader=e;return this}abort(){return this}}ai.DEFAULT_MATERIAL_NAME="__DEFAULT";const js={};class Hf extends Error{constructor(e,t){super(e);this.response=t}}class xs extends ai{constructor(e){super(e);this.mimeType="";this.responseType="";this._abortController=new AbortController}load(e,t,n,i){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);const s=_s.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e);setTimeout(()=>{if(t)t(s);this.manager.itemEnd(e)},0);return}if(js[e]!==void 0){js[e].push({onLoad:t,onProgress:n,onError:i});return}js[e]=[];js[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then((c)=>{if(c.status===200||c.status===0){if(c.status===0)lt("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=js[e],d=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,_=m!==0;let v=0;const T=new ReadableStream({start(I){C();function C(){d.read().then(({done:B,value:F})=>{if(B)I.close();else{v+=F.byteLength;const W=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let oe=0,ve=u.length;oe<ve;oe++){const le=u[oe];if(le.onProgress)le.onProgress(W)}I.enqueue(F);C()}},(B)=>{I.error(B)})}}});return new Response(T)}else throw new Hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then((c)=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((u)=>{return new DOMParser().parseFromString(u,o)});case"json":return c.json();default:if(o==="")return c.text();else{const d=/charset="?([^;"\s]*)"?/i.exec(o),p=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then((_)=>m.decode(_))}}}).then((c)=>{_s.add(`file:${e}`,c);const u=js[e];delete js[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];if(m.onLoad)m.onLoad(c)}}).catch((c)=>{const u=js[e];if(u===void 0){this.manager.itemError(e);throw c}delete js[e];for(let d=0,p=u.length;d<p;d++){const m=u[d];if(m.onError)m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)});this.manager.itemStart(e)}setResponseType(e){this.responseType=e;return this}setMimeType(e){this.mimeType=e;return this}abort(){this._abortController.abort();this._abortController=new AbortController;return this}}class Vf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new xs(this.manager);r.setPath(this.path);r.setRequestHeader(this.requestHeader);r.setWithCredentials(this.withCredentials);r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){if(i)i(l);else Nt(l);s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Ri.parse(e[n]);t.push(i)}return t}}class Wf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=[],o=new wr,l=new xs(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");l.setRequestHeader(this.requestHeader);l.setWithCredentials(s.withCredentials);let c=0;function u(d){l.load(e[d],function(p){const m=s.parse(p,!0);r[d]={width:m.width,height:m.height,format:m.format,mipmaps:m.mipmaps};c+=1;if(c===6){if(m.mipmapCount===1)o.minFilter=Gn;o.image=r;o.format=m.format;o.needsUpdate=!0;if(t)t(o)}},n,i)}if(Array.isArray(e))for(let d=0,p=e.length;d<p;++d)u(d);else l.load(e,function(d){const p=s.parse(d,!0);if(p.isCubemap){const m=p.mipmaps.length/p.mipmapCount;for(let _=0;_<m;_++){r[_]={mipmaps:[]};for(let v=0;v<p.mipmapCount;v++){r[_].mipmaps.push(p.mipmaps[_*p.mipmapCount+v]);r[_].format=p.format;r[_].width=p.width;r[_].height=p.height}}o.image=r}else{o.image.width=p.width;o.image.height=p.height;o.mipmaps=p.mipmaps}if(p.mipmapCount===1)o.minFilter=Gn;o.format=p.format;o.needsUpdate=!0;if(t)t(o)},n,i);return o}}const el=new WeakMap;class tl extends ai{constructor(e){super(e)}load(e,t,n,i){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);const s=this,r=_s.get(`image:${e}`);if(r!==void 0){if(r.complete===!0){s.manager.itemStart(e);setTimeout(function(){if(t)t(r);s.manager.itemEnd(e)},0)}else{let d=el.get(r);if(d===void 0){d=[];el.set(r,d)}d.push({onLoad:t,onError:i})}return r}const o=jr("img");function l(){u();if(t)t(this);const d=el.get(this)||[];for(let p=0;p<d.length;p++){const m=d[p];if(m.onLoad)m.onLoad(this)}el.delete(this);s.manager.itemEnd(e)}function c(d){u();if(i)i(d);_s.remove(`image:${e}`);const p=el.get(this)||[];for(let m=0;m<p.length;m++){const _=p[m];if(_.onError)_.onError(d)}el.delete(this);s.manager.itemError(e);s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1);o.removeEventListener("error",c,!1)}o.addEventListener("load",l,!1);o.addEventListener("error",c,!1);if(e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}_s.add(`image:${e}`,o);s.manager.itemStart(e);o.src=e;return o}}class Xf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new va;s.colorSpace=kn;const r=new tl(this.manager);r.setCrossOrigin(this.crossOrigin);r.setPath(this.path);let o=0;function l(c){r.load(e[c],function(u){s.images[c]=u;o++;if(o===6){s.needsUpdate=!0;if(t)t(s)}},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class qf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new di,o=new xs(this.manager);o.setResponseType("arraybuffer");o.setRequestHeader(this.requestHeader);o.setPath(this.path);o.setWithCredentials(s.withCredentials);o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else Nt(u);return}s._applyTexData(r,c);if(t)t(r,c)},n,i);return r}createDataTexture(e){const t=new di;this._applyTexData(t,this.parse(e));return t}_applyTexData(e,t){if(t.image!==void 0)e.image=t.image;else if(t.data!==void 0){e.image.width=t.width;e.image.height=t.height;e.image.data=t.data}e.wrapS=t.wrapS!==void 0?t.wrapS:yn;e.wrapT=t.wrapT!==void 0?t.wrapT:yn;e.magFilter=t.magFilter!==void 0?t.magFilter:Gn;e.minFilter=t.minFilter!==void 0?t.minFilter:Gn;e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.mipmaps!==void 0){e.mipmaps=t.mipmaps;e.minFilter=Gr}if(t.mipmapCount===1)e.minFilter=Gn;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;e.needsUpdate=!0}}class Yf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=new hn,r=new tl(this.manager);r.setCrossOrigin(this.crossOrigin);r.setPath(this.path);r.load(e,function(o){s.image=o;s.needsUpdate=!0;if(t!==void 0)t(s)},n,i);return s}}class Js extends Gt{constructor(e,t=1){super();this.isLight=!0;this.type="Light";this.color=new gt(e);this.intensity=t}copy(e,t){super.copy(e,t);this.color.copy(e.color);this.intensity=e.intensity;return this}toJSON(e){const t=super.toJSON(e);t.object.color=this.color.getHex();t.object.intensity=this.intensity;return t}}class df extends Js{constructor(e,t,n){super(e,n);this.isHemisphereLight=!0;this.type="HemisphereLight";this.position.copy(Gt.DEFAULT_UP);this.updateMatrix();this.groundColor=new gt(t)}copy(e,t){super.copy(e,t);this.groundColor.copy(e.groundColor);return this}toJSON(e){const t=super.toJSON(e);t.object.groundColor=this.groundColor.getHex();return t}}const ff=new yt,Zf=new U,jf=new U;class dh{constructor(e){this.camera=e;this.intensity=1;this.bias=0;this.biasNode=null;this.normalBias=0;this.radius=1;this.blurSamples=8;this.mapSize=new we(512,512);this.mapType=Si;this.map=null;this.mapPass=null;this.matrix=new yt;this.autoUpdate=!0;this.needsUpdate=!1;this._frustum=new qs;this._frameExtents=new we(1,1);this._viewportCount=1;this._viewports=[new Vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Zf.setFromMatrixPosition(e.matrixWorld);t.position.copy(Zf);jf.setFromMatrixPosition(e.target.matrixWorld);t.lookAt(jf);t.updateMatrixWorld();this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);n.setFromProjectionMatrix(ff,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;if(e.coordinateSystem===Is||e.reversedDepth)t.set(0.5*r,0,0,0.5*r+l,0,0.5*o,0,0.5*o+c,0,0,1,0,0,0,0,1);else t.set(0.5*r,0,0,0.5*r+l,0,0.5*o,0,0.5*o+c,0,0,0.5,0.5,0,0,0,1);t.multiply(ff)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){this.camera=e.camera.clone();this.intensity=e.intensity;this.bias=e.bias;this.radius=e.radius;this.autoUpdate=e.autoUpdate;this.needsUpdate=e.needsUpdate;this.normalBias=e.normalBias;this.blurSamples=e.blurSamples;this.mapSize.copy(e.mapSize);this.biasNode=e.biasNode;return this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};e.intensity=this.intensity;e.bias=this.bias;e.normalBias=this.normalBias;e.radius=this.radius;e.blurSamples=this.blurSamples;e.mapSize=this.mapSize.toArray();e.camera=this.camera.toJSON(!1).object;delete e.camera.matrix;return e}}const zu=new U,Gu=new Dn,vs=new U;class fh extends Gt{constructor(){super();this.isCamera=!0;this.type="Camera";this.matrixWorldInverse=new yt;this.projectionMatrix=new yt;this.projectionMatrixInverse=new yt;this.coordinateSystem=Mi;this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){super.copy(e,t);this.matrixWorldInverse.copy(e.matrixWorldInverse);this.projectionMatrix.copy(e.projectionMatrix);this.projectionMatrixInverse.copy(e.projectionMatrixInverse);this.coordinateSystem=e.coordinateSystem;return this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e);this.matrixWorld.decompose(zu,Gu,vs);if(vs.x===1&&vs.y===1&&vs.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(zu,Gu,vs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n);this.matrixWorld.decompose(zu,Gu,vs);if(vs.x===1&&vs.y===1&&vs.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(zu,Gu,vs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new U,Jf=new we,$f=new we;class gi extends fh{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0;this.type="PerspectiveCamera";this.fov=e;this.zoom=1;this.near=n;this.far=i;this.focus=10;this.aspect=t;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}copy(e,t){super.copy(e,t);this.fov=e.fov;this.zoom=e.zoom;this.near=e.near;this.far=e.far;this.focus=e.focus;this.aspect=e.aspect;this.view=e.view===null?null:Object.assign({},e.view);this.filmGauge=e.filmGauge;this.filmOffset=e.filmOffset;return this}setFocalLength(e){const t=0.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t);this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Ps*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rr.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse);t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z);Rr.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse);n.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){this.getViewBounds(e,Jf,$f);return t.subVectors($f,Jf)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t;if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0;this.view.fullWidth=e;this.view.fullHeight=t;this.view.offsetX=n;this.view.offsetY=i;this.view.width=s;this.view.height=r;this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const{fullWidth:l,fullHeight:c}=r;s+=r.offsetX*i/l;t-=r.offsetY*n/c;i*=r.width/l;n*=r.height/c}const o=this.filmOffset;if(o!==0)s+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth);this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);t.object.fov=this.fov;t.object.zoom=this.zoom;t.object.near=this.near;t.object.far=this.far;t.object.focus=this.focus;t.object.aspect=this.aspect;if(this.view!==null)t.object.view=Object.assign({},this.view);t.object.filmGauge=this.filmGauge;t.object.filmOffset=this.filmOffset;return t}}class Kf extends dh{constructor(){super(new gi(50,1,0.5,500));this.isSpotLightShadow=!0;this.focus=1;this.aspect=1}updateMatrices(e){const t=this.camera,n=hr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;if(n!==t.fov||i!==t.aspect||s!==t.far){t.fov=n;t.aspect=i;t.far=s;t.updateProjectionMatrix()}super.updateMatrices(e)}copy(e){super.copy(e);this.focus=e.focus;this.aspect=e.aspect;return this}toJSON(){const e=super.toJSON();e.focus=this.focus;e.aspect=this.aspect;return e}}class pf extends Js{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t);this.isSpotLight=!0;this.type="SpotLight";this.position.copy(Gt.DEFAULT_UP);this.updateMatrix();this.target=new Gt;this.distance=n;this.angle=i;this.penumbra=s;this.decay=r;this.map=null;this.shadow=new Kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose();this.shadow.dispose()}copy(e,t){super.copy(e,t);this.distance=e.distance;this.angle=e.angle;this.penumbra=e.penumbra;this.decay=e.decay;this.target=e.target.clone();this.map=e.map;this.shadow=e.shadow.clone();return this}toJSON(e){const t=super.toJSON(e);t.object.distance=this.distance;t.object.angle=this.angle;t.object.decay=this.decay;t.object.penumbra=this.penumbra;t.object.target=this.target.uuid;if(this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;t.object.shadow=this.shadow.toJSON();return t}}class Qf extends dh{constructor(){super(new gi(90,1,0.5,500));this.isPointLightShadow=!0}}class mf extends Js{constructor(e,t,n=0,i=2){super(e,t);this.isPointLight=!0;this.type="PointLight";this.distance=n;this.decay=i;this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose();this.shadow.dispose()}copy(e,t){super.copy(e,t);this.distance=e.distance;this.decay=e.decay;this.shadow=e.shadow.clone();return this}toJSON(e){const t=super.toJSON(e);t.object.distance=this.distance;t.object.decay=this.decay;t.object.shadow=this.shadow.toJSON();return t}}class ku extends fh{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0;this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=e;this.right=t;this.top=n;this.bottom=i;this.near=s;this.far=r;this.updateProjectionMatrix()}copy(e,t){super.copy(e,t);this.left=e.left;this.right=e.right;this.top=e.top;this.bottom=e.bottom;this.near=e.near;this.far=e.far;this.zoom=e.zoom;this.view=e.view===null?null:Object.assign({},e.view);return this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0;this.view.fullWidth=e;this.view.fullHeight=t;this.view.offsetX=n;this.view.offsetY=i;this.view.width=s;this.view.height=r;this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX;r=s+c*this.view.width;o-=u*this.view.offsetY;l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth);this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);t.object.zoom=this.zoom;t.object.left=this.left;t.object.right=this.right;t.object.top=this.top;t.object.bottom=this.bottom;t.object.near=this.near;t.object.far=this.far;if(this.view!==null)t.object.view=Object.assign({},this.view);return t}}class ep extends dh{constructor(){super(new ku(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class gf extends Js{constructor(e,t){super(e,t);this.isDirectionalLight=!0;this.type="DirectionalLight";this.position.copy(Gt.DEFAULT_UP);this.updateMatrix();this.target=new Gt;this.shadow=new ep}dispose(){super.dispose();this.shadow.dispose()}copy(e){super.copy(e);this.target=e.target.clone();this.shadow=e.shadow.clone();return this}toJSON(e){const t=super.toJSON(e);t.object.shadow=this.shadow.toJSON();t.object.target=this.target.uuid;return t}}class _f extends Js{constructor(e,t){super(e,t);this.isAmbientLight=!0;this.type="AmbientLight"}}class xf extends Js{constructor(e,t,n=10,i=10){super(e,t);this.isRectAreaLight=!0;this.type="RectAreaLight";this.width=n;this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){super.copy(e);this.width=e.width;this.height=e.height;return this}toJSON(e){const t=super.toJSON(e);t.object.width=this.width;t.object.height=this.height;return t}}class Hu{constructor(){this.isSphericalHarmonics3=!0;this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new U)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const{x:n,y:i,z:s}=e,r=this.coefficients;t.copy(r[0]).multiplyScalar(0.282095);t.addScaledVector(r[1],0.488603*i);t.addScaledVector(r[2],0.488603*s);t.addScaledVector(r[3],0.488603*n);t.addScaledVector(r[4],1.092548*(n*i));t.addScaledVector(r[5],1.092548*(i*s));t.addScaledVector(r[6],0.315392*(3*s*s-1));t.addScaledVector(r[7],1.092548*(n*s));t.addScaledVector(r[8],0.546274*(n*n-i*i));return t}getIrradianceAt(e,t){const{x:n,y:i,z:s}=e,r=this.coefficients;t.copy(r[0]).multiplyScalar(0.886227);t.addScaledVector(r[1],1.023328*i);t.addScaledVector(r[2],1.023328*s);t.addScaledVector(r[3],1.023328*n);t.addScaledVector(r[4],0.858086*n*i);t.addScaledVector(r[5],0.858086*i*s);t.addScaledVector(r[6],0.743125*s*s-0.247708);t.addScaledVector(r[7],0.858086*n*s);t.addScaledVector(r[8],0.429043*(n*n-i*i));return t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const{x:n,y:i,z:s}=e;t[0]=0.282095;t[1]=0.488603*i;t[2]=0.488603*s;t[3]=0.488603*n;t[4]=1.092548*n*i;t[5]=1.092548*i*s;t[6]=0.315392*(3*s*s-1);t[7]=1.092548*n*s;t[8]=0.546274*(n*n-i*i)}}class vf extends Js{constructor(e=new Hu,t=1){super(void 0,t);this.isLightProbe=!0;this.sh=e}copy(e){super.copy(e);this.sh.copy(e.sh);return this}toJSON(e){const t=super.toJSON(e);t.object.sh=this.sh.toArray();return t}}const tp={};class Vu extends ai{constructor(e){super(e);this.textures={}}load(e,t,n,i){const s=this,r=new xs(s.manager);r.setPath(s.path);r.setRequestHeader(s.requestHeader);r.setWithCredentials(s.withCredentials);r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){if(i)i(l);else Nt(l);s.manager.itemError(e)}},n,i)}parse(e){const t=this.createMaterialFromType(e.type);t.fromJSON(e,this.textures);return t}setTextures(e){this.textures=e;return this}createMaterialFromType(e){return Vu.createMaterialFromType(e)}static createMaterialFromType(e){const n={ShadowMaterial:Yo,SpriteMaterial:dn,RawShaderMaterial:$o,ShaderMaterial:Sa,PointsMaterial:Bo,MeshPhysicalMaterial:ch,MeshStandardMaterial:Ko,MeshPhongMaterial:hh,MeshToonMaterial:uh,MeshNormalMaterial:Qo,MeshLambertMaterial:y,MeshDepthMaterial:G,MeshDistanceMaterial:se,MeshBasicMaterial:ps,MeshMatcapMaterial:j,LineDashedMaterial:J,LineBasicMaterial:On,Material:Ct,...tp}[e];let i;if(n===void 0){os(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`);i=new Ct}else i=new n;return i}static registerMaterial(e,t){tp[e]=t}}class Wu{static extractUrlBase(e){const t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}class yf extends St{constructor(){super();this.isInstancedBufferGeometry=!0;this.type="InstancedBufferGeometry";this.instanceCount=1/0}copy(e){super.copy(e);this.instanceCount=e.instanceCount;return this}toJSON(){const e=super.toJSON();e.instanceCount=this.instanceCount;e.isInstancedBufferGeometry=!0;return e}}class Sf extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new xs(s.manager);r.setPath(s.path);r.setRequestHeader(s.requestHeader);r.setWithCredentials(s.withCredentials);r.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){if(i)i(l);else Nt(l);s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(m,_){if(t[_]!==void 0)return t[_];const T=m.interleavedBuffers[_],I=s(m,T.buffer),C=cr(T.type,I),B=new yr(C,T.stride);B.uuid=T.uuid;if(T.usage!==void 0)B.setUsage(T.usage);t[_]=B;return B}function s(m,_){if(n[_]!==void 0)return n[_];const T=m.arrayBuffers[_],I=new Uint32Array(T).buffer;n[_]=I;return I}const r=e.isInstancedBufferGeometry?new yf:new St,o=e.data.index;if(o!==void 0){const m=cr(o.type,o.array);r.setIndex(new Jt(m,1))}const l=e.data.attributes;for(const m in l){const _=l[m];let v;if(_.isInterleavedBufferAttribute){const T=i(e.data,_.data);v=new fs(T,_.itemSize,_.offset,_.normalized)}else{const T=cr(_.type,_.array);v=new(_.isInstancedBufferAttribute?Vs:Jt)(T,_.itemSize,_.normalized)}if(_.name!==void 0)v.name=_.name;if(_.usage!==void 0)v.setUsage(_.usage);if(_.gpuType!==void 0)v.gpuType=_.gpuType;r.setAttribute(m,v)}const c=e.data.morphAttributes;if(c)for(const m in c){const _=c[m],v=[];for(let T=0,I=_.length;T<I;T++){const C=_[T];let B;if(C.isInterleavedBufferAttribute){const F=i(e.data,C.data);B=new fs(F,C.itemSize,C.offset,C.normalized)}else{const F=cr(C.type,C.array);B=new Jt(F,C.itemSize,C.normalized)}if(C.name!==void 0)B.name=C.name;if(C.usage!==void 0)B.setUsage(C.usage);if(C.gpuType!==void 0)B.gpuType=C.gpuType;v.push(B)}r.morphAttributes[m]=v}if(e.data.morphTargetsRelative)r.morphTargetsRelative=!0;const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let m=0,_=d.length;m!==_;++m){const v=d[m];r.addGroup(v.start,v.count,v.materialIndex)}const p=e.data.boundingSphere;if(p!==void 0)r.boundingSphere=new En().fromJSON(p);if(e.name)r.name=e.name;if(e.userData)r.userData=e.userData;return r}}const Mf={};class np extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const o=new xs(this.manager);o.setPath(this.path);o.setRequestHeader(this.requestHeader);o.setWithCredentials(this.withCredentials);o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){if(i!==void 0)i(d);Nt("ObjectLoader: Can't parse "+e+".",d.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){if(i!==void 0)i(Error("THREE.ObjectLoader: Can't load "+e));Nt("ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Wu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new xs(this.manager);s.setPath(this.path);s.setRequestHeader(this.requestHeader);s.setWithCredentials(this.withCredentials);const r=await s.loadAsync(e,t);let o;try{o=JSON.parse(r)}catch(c){throw Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}const l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),r=this.parseImages(e.images,function(){if(t!==void 0)t(c)}),o=this.parseTextures(e.textures,r),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);this.bindSkeletons(c,u);this.bindLightTargets(c);if(t!==void 0){let d=!1;for(const p in r)if(r[p].data instanceof HTMLImageElement){d=!0;break}if(d===!1)t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),r=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,r),l=this.parseObject(e.object,i,o,r,t),c=this.parseSkeletons(e.skeletons,l);this.bindSkeletons(l,c);this.bindLightTargets(l);return l}static registerGeometry(e,t){Mf[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new pt().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};t.traverse(function(s){if(s.isBone)i[s.uuid]=s});if(e!==void 0)for(let s=0,r=e.length;s<r;s++){const o=new ua().fromJSON(e[s],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new Sf;for(let s=0,r=e.length;s<r;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:if(l.type in Du)o=Du[l.type].fromJSON(l,t);else if(l.type in Mf)o=Mf[l.type].fromJSON(l,t);else lt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}o.uuid=l.uuid;if(l.name!==void 0)o.name=l.name;if(l.userData!==void 0)o.userData=l.userData;n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new Vu;s.setTextures(t);for(let r=0,o=e.length;r<o;r++){const l=e[r];if(n[l.uuid]===void 0)n[l.uuid]=s.parse(l);i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=Ri.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function r(l){l=n.manager.resolveURL(l);n.manager.itemStart(l);return s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l);n.manager.itemEnd(l)})}function o(l){if(typeof l==="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return r(u)}else if(l.data)return{data:cr(l.type,l.data),width:l.width,height:l.height};else return null}if(e!==void 0&&e.length>0){const l=new Bu(t);s=new tl(l);s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const d=e[c],p=d.url;if(Array.isArray(p)){const m=[];for(let _=0,v=p.length;_<v;_++){const T=p[_],I=o(T);if(I!==null)if(I instanceof HTMLImageElement)m.push(I);else m.push(new di(I.data,I.width,I.height))}i[d.uuid]=new Bi(m)}else{const m=o(d.url);i[d.uuid]=new Bi(m)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(r){if(typeof r==="string"){const o=r,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else if(r.data)return{data:cr(r.type,r.data),width:r.width,height:r.height};else return null}if(e!==void 0&&e.length>0){i=new tl(this.manager);i.setCrossOrigin(this.crossOrigin);for(let r=0,o=e.length;r<o;r++){const l=e[r],c=l.url;if(Array.isArray(c)){const u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d],_=await s(m);if(_!==null)if(_ instanceof HTMLImageElement)u.push(_);else u.push(new di(_.data,_.width,_.height))}n[l.uuid]=new Bi(u)}else{const u=await s(l.url);n[l.uuid]=new Bi(u)}}}return n}parseTextures(e,t){function n(s,r){if(typeof s==="number")return s;lt("ObjectLoader.parseTexture: Constant should be in numeric form.",s);return r[s]}const i={};if(e!==void 0)for(let s=0,r=e.length;s<r;s++){const o=e[s];if(o.image===void 0)lt('ObjectLoader: No "image" specified for',o.uuid);if(t[o.image]===void 0)lt("ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;if(Array.isArray(c)){u=new va;if(c.length===6)u.needsUpdate=!0}else{if(c&&c.data)u=new di;else u=new hn;if(c)u.needsUpdate=!0}u.source=l;u.uuid=o.uuid;if(o.name!==void 0)u.name=o.name;if(o.mapping!==void 0)u.mapping=n(o.mapping,lm);if(o.channel!==void 0)u.channel=o.channel;if(o.offset!==void 0)u.offset.fromArray(o.offset);if(o.repeat!==void 0)u.repeat.fromArray(o.repeat);if(o.center!==void 0)u.center.fromArray(o.center);if(o.rotation!==void 0)u.rotation=o.rotation;if(o.wrap!==void 0){u.wrapS=n(o.wrap[0],ip);u.wrapT=n(o.wrap[1],ip)}if(o.format!==void 0)u.format=o.format;if(o.internalFormat!==void 0)u.internalFormat=o.internalFormat;if(o.type!==void 0)u.type=o.type;if(o.colorSpace!==void 0)u.colorSpace=o.colorSpace;if(o.minFilter!==void 0)u.minFilter=n(o.minFilter,sp);if(o.magFilter!==void 0)u.magFilter=n(o.magFilter,sp);if(o.anisotropy!==void 0)u.anisotropy=o.anisotropy;if(o.flipY!==void 0)u.flipY=o.flipY;if(o.generateMipmaps!==void 0)u.generateMipmaps=o.generateMipmaps;if(o.premultiplyAlpha!==void 0)u.premultiplyAlpha=o.premultiplyAlpha;if(o.unpackAlignment!==void 0)u.unpackAlignment=o.unpackAlignment;if(o.compareFunction!==void 0)u.compareFunction=o.compareFunction;if(o.normalized!==void 0)u.normalized=o.normalized;if(o.userData!==void 0)u.userData=o.userData;i[o.uuid]=u}return i}parseObject(e,t,n,i,s){let r;function o(p){if(t[p]===void 0)lt("ObjectLoader: Undefined geometry",p);return t[p]}function l(p){if(p===void 0)return;if(Array.isArray(p)){const m=[];for(let _=0,v=p.length;_<v;_++){const T=p[_];if(n[T]===void 0)lt("ObjectLoader: Undefined material",T);m.push(n[T])}return m}if(n[p]===void 0)lt("ObjectLoader: Undefined material",p);return n[p]}function c(p){if(i[p]===void 0)lt("ObjectLoader: Undefined texture",p);return i[p]}let u,d;switch(e.type){case"Scene":r=new qh;if(e.background!==void 0)if(Number.isInteger(e.background))r.background=new gt(e.background);else r.background=c(e.background);if(e.environment!==void 0)r.environment=c(e.environment);if(e.fog!==void 0){if(e.fog.type==="Fog")r.fog=new zc(e.fog.color,e.fog.near,e.fog.far);else if(e.fog.type==="FogExp2")r.fog=new Bc(e.fog.color,e.fog.density);if(e.fog.name!=="")r.fog.name=e.fog.name}if(e.backgroundBlurriness!==void 0)r.backgroundBlurriness=e.backgroundBlurriness;if(e.backgroundIntensity!==void 0)r.backgroundIntensity=e.backgroundIntensity;if(e.backgroundRotation!==void 0)r.backgroundRotation.fromArray(e.backgroundRotation);if(e.environmentIntensity!==void 0)r.environmentIntensity=e.environmentIntensity;if(e.environmentRotation!==void 0)r.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":r=new gi(e.fov,e.aspect,e.near,e.far);if(e.focus!==void 0)r.focus=e.focus;if(e.zoom!==void 0)r.zoom=e.zoom;if(e.filmGauge!==void 0)r.filmGauge=e.filmGauge;if(e.filmOffset!==void 0)r.filmOffset=e.filmOffset;if(e.view!==void 0)r.view=Object.assign({},e.view);break;case"OrthographicCamera":r=new ku(e.left,e.right,e.top,e.bottom,e.near,e.far);if(e.zoom!==void 0)r.zoom=e.zoom;if(e.view!==void 0)r.view=Object.assign({},e.view);break;case"AmbientLight":r=new _f(e.color,e.intensity);break;case"DirectionalLight":r=new gf(e.color,e.intensity);r.target=e.target||"";break;case"PointLight":r=new mf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new xf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new pf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);r.target=e.target||"";break;case"HemisphereLight":r=new df(e.color,e.groundColor,e.intensity);break;case"LightProbe":const p=new Hu().fromArray(e.sh);r=new vf(p,e.intensity);break;case"SkinnedMesh":u=o(e.geometry);d=l(e.material);r=new Hs(u,d);if(e.bindMode!==void 0)r.bindMode=e.bindMode;if(e.bindMatrix!==void 0)r.bindMatrix.fromArray(e.bindMatrix);if(e.skeleton!==void 0)r.skeleton=e.skeleton;break;case"Mesh":u=o(e.geometry);d=l(e.material);r=new ui(u,d);break;case"InstancedMesh":u=o(e.geometry);d=l(e.material);const{count:m,instanceMatrix:_,instanceColor:v}=e;r=new eh(u,d,m);r.instanceMatrix=new Vs(new Float32Array(_.array),16);if(v!==void 0)r.instanceColor=new Vs(new Float32Array(v.array),v.itemSize);break;case"BatchedMesh":u=o(e.geometry);d=l(e.material);r=new No(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d);r.geometry=u;r.perObjectFrustumCulled=e.perObjectFrustumCulled;r.sortObjects=e.sortObjects;r._drawRanges=e.drawRanges;r._reservedRanges=e.reservedRanges;r._geometryInfo=e.geometryInfo.map((T)=>{let I=null,C=null;if(T.boundingBox!==void 0)I=new nt().fromJSON(T.boundingBox);if(T.boundingSphere!==void 0)C=new En().fromJSON(T.boundingSphere);return{...T,boundingBox:I,boundingSphere:C}});r._instanceInfo=e.instanceInfo;r._availableInstanceIds=e._availableInstanceIds;r._availableGeometryIds=e._availableGeometryIds;r._nextIndexStart=e.nextIndexStart;r._nextVertexStart=e.nextVertexStart;r._geometryCount=e.geometryCount;r._maxInstanceCount=e.maxInstanceCount;r._maxVertexCount=e.maxVertexCount;r._maxIndexCount=e.maxIndexCount;r._geometryInitialized=e.geometryInitialized;r._matricesTexture=c(e.matricesTexture.uuid);r._indirectTexture=c(e.indirectTexture.uuid);if(e.colorsTexture!==void 0)r._colorsTexture=c(e.colorsTexture.uuid);if(e.boundingSphere!==void 0)r.boundingSphere=new En().fromJSON(e.boundingSphere);if(e.boundingBox!==void 0)r.boundingBox=new nt().fromJSON(e.boundingBox);break;case"LOD":r=new Zc;break;case"Line":r=new Qi(o(e.geometry),l(e.material));break;case"LineLoop":r=new rh(o(e.geometry),l(e.material));break;case"LineSegments":r=new fi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":r=new Zs(o(e.geometry),l(e.material));break;case"Sprite":r=new Yc(l(e.material));break;case"Group":r=new mr;break;case"Bone":r=new ha;break;default:r=new Gt}r.uuid=e.uuid;if(e.name!==void 0)r.name=e.name;if(e.matrix!==void 0){r.matrix.fromArray(e.matrix);if(e.matrixAutoUpdate!==void 0)r.matrixAutoUpdate=e.matrixAutoUpdate;if(r.matrixAutoUpdate)r.matrix.decompose(r.position,r.quaternion,r.scale)}else{if(e.position!==void 0)r.position.fromArray(e.position);if(e.rotation!==void 0)r.rotation.fromArray(e.rotation);if(e.quaternion!==void 0)r.quaternion.fromArray(e.quaternion);if(e.scale!==void 0)r.scale.fromArray(e.scale)}if(e.up!==void 0)r.up.fromArray(e.up);if(e.pivot!==void 0)r.pivot=new U().fromArray(e.pivot);if(e.morphTargetDictionary!==void 0)r.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);if(e.morphTargetInfluences!==void 0)r.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.castShadow!==void 0)r.castShadow=e.castShadow;if(e.receiveShadow!==void 0)r.receiveShadow=e.receiveShadow;if(e.shadow){if(e.shadow.intensity!==void 0)r.shadow.intensity=e.shadow.intensity;if(e.shadow.bias!==void 0)r.shadow.bias=e.shadow.bias;if(e.shadow.normalBias!==void 0)r.shadow.normalBias=e.shadow.normalBias;if(e.shadow.radius!==void 0)r.shadow.radius=e.shadow.radius;if(e.shadow.blurSamples!==void 0)r.shadow.blurSamples=e.shadow.blurSamples;if(e.shadow.focus!==void 0)r.shadow.focus=e.shadow.focus;if(e.shadow.aspect!==void 0)r.shadow.aspect=e.shadow.aspect;if(e.shadow.mapSize!==void 0)r.shadow.mapSize.fromArray(e.shadow.mapSize);if(e.shadow.camera!==void 0)r.shadow.camera=this.parseObject(e.shadow.camera)}if(e.visible!==void 0)r.visible=e.visible;if(e.frustumCulled!==void 0)r.frustumCulled=e.frustumCulled;if(e.renderOrder!==void 0)r.renderOrder=e.renderOrder;if(e.static!==void 0)r.static=e.static;if(e.userData!==void 0)r.userData=e.userData;if(e.layers!==void 0)r.layers.mask=e.layers;if(e.children!==void 0){const p=e.children;for(let m=0;m<p.length;m++)r.add(this.parseObject(p[m],t,n,i,s))}if(e.animations!==void 0){const p=e.animations;for(let m=0;m<p.length;m++){const _=p[m];r.animations.push(s[_])}}if(e.type==="LOD"){if(e.autoUpdate!==void 0)r.autoUpdate=e.autoUpdate;const p=e.levels;for(let m=0;m<p.length;m++){const _=p[m],v=r.getObjectByProperty("uuid",_.object);if(v!==void 0)r.addLevel(v,_.distance,_.hysteresis)}}return r}bindSkeletons(e,t){if(Object.keys(t).length===0)return;e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];if(i===void 0)lt("ObjectLoader: No skeleton found with UUID:",n.skeleton);else n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);if(i!==void 0)t.target=i;else t.target=new Gt}})}}const lm={UVMapping:Hi,CubeReflectionMapping:Vi,CubeRefractionMapping:vl,EquirectangularReflectionMapping:yl,EquirectangularRefractionMapping:Sl,CubeUVReflectionMapping:ka},ip={RepeatWrapping:zr,ClampToEdgeWrapping:yn,MirroredRepeatWrapping:ts},sp={NearestFilter:Pn,NearestMipmapNearestFilter:Ml,NearestMipmapLinearFilter:ns,LinearFilter:Gn,LinearMipmapNearestFilter:bl,LinearMipmapLinearFilter:Gr},bf=new WeakMap;class rp extends ai{constructor(e){super(e);this.isImageBitmapLoader=!0;if(typeof createImageBitmap>"u")lt("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")lt("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"};this._abortController=new AbortController}setOptions(e){this.options=e;return this}load(e,t,n,i){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);const s=this,r=_s.get(`image-bitmap:${e}`);if(r!==void 0){s.manager.itemStart(e);if(r.then){r.then((c)=>{if(bf.has(r)===!0){if(i)i(bf.get(r));s.manager.itemError(e);s.manager.itemEnd(e)}else{if(t)t(c);s.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(r);s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include";o.headers=this.requestHeader;o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){_s.add(`image-bitmap:${e}`,c);if(t)t(c);s.manager.itemEnd(e);return c}).catch(function(c){if(i)i(c);bf.set(l,c);_s.remove(`image-bitmap:${e}`);s.manager.itemError(e);s.manager.itemEnd(e)});_s.add(`image-bitmap:${e}`,l);s.manager.itemStart(e)}abort(){this._abortController.abort();this._abortController=new AbortController;return this}}let Xu;class qu{static getContext(){if(Xu===void 0)Xu=new(window.AudioContext||window.webkitAudioContext);return Xu}static setContext(e){Xu=e}}class ap extends ai{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new xs(this.manager);r.setResponseType("arraybuffer");r.setPath(this.path);r.setRequestHeader(this.requestHeader);r.setWithCredentials(this.withCredentials);r.load(e,function(l){try{const c=l.slice(0),u=qu.getContext(),d=e+"#decode";s.manager.itemStart(d);u.decodeAudioData(c,function(p){t(p);s.manager.itemEnd(d)}).catch(function(p){o(p);s.manager.itemEnd(d)})}catch(c){o(c)}},n,i);function o(l){if(i)i(l);else Nt(l);s.manager.itemError(e)}}}const op=new yt,lp=new yt,Ma=new yt;class cp{constructor(){this.type="StereoCamera";this.aspect=1;this.eyeSep=0.064;this.cameraL=new gi;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new gi;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus;t.fov=e.fov;t.aspect=e.aspect*this.aspect;t.near=e.near;t.far=e.far;t.zoom=e.zoom;t.eyeSep=this.eyeSep;Ma.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,r=t.near*Math.tan(Ps*t.fov*0.5)/t.zoom;let o,l;lp.elements[12]=-i;op.elements[12]=i;o=-r*t.aspect+s;l=r*t.aspect+s;Ma.elements[0]=2*t.near/(l-o);Ma.elements[8]=(l+o)/(l-o);this.cameraL.projectionMatrix.copy(Ma);o=-r*t.aspect-s;l=r*t.aspect-s;Ma.elements[0]=2*t.near/(l-o);Ma.elements[8]=(l+o)/(l-o);this.cameraR.projectionMatrix.copy(Ma)}this.cameraL.matrix.copy(e.matrixWorld).multiply(lp);this.cameraL.matrixWorldNeedsUpdate=!0;this.cameraR.matrix.copy(e.matrixWorld).multiply(op);this.cameraR.matrixWorldNeedsUpdate=!0}}const nl=-90,il=1;class hp extends Gt{constructor(e,t,n){super();this.type="CubeCamera";this.renderTarget=n;this.coordinateSystem=null;this.activeMipmapLevel=0;const i=new gi(nl,il,e,t);i.layers=this.layers;this.add(i);const s=new gi(nl,il,e,t);s.layers=this.layers;this.add(s);const r=new gi(nl,il,e,t);r.layers=this.layers;this.add(r);const o=new gi(nl,il,e,t);o.layers=this.layers;this.add(o);const l=new gi(nl,il,e,t);l.layers=this.layers;this.add(l);const c=new gi(nl,il,e,t);c.layers=this.layers;this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Mi){n.up.set(0,1,0);n.lookAt(1,0,0);i.up.set(0,1,0);i.lookAt(-1,0,0);s.up.set(0,0,-1);s.lookAt(0,1,0);r.up.set(0,0,1);r.lookAt(0,-1,0);o.up.set(0,1,0);o.lookAt(0,0,1);l.up.set(0,1,0);l.lookAt(0,0,-1)}else if(e===Is){n.up.set(0,-1,0);n.lookAt(-1,0,0);i.up.set(0,-1,0);i.lookAt(1,0,0);s.up.set(0,0,1);s.lookAt(0,1,0);r.up.set(0,0,-1);r.lookAt(0,-1,0);o.up.set(0,-1,0);o.lookAt(0,0,1);l.up.set(0,-1,0);l.lookAt(0,0,-1)}else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t){this.add(c);c.updateMatrixWorld()}}update(e,t){if(this.parent===null)this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem){this.coordinateSystem=e.coordinateSystem;this.updateCoordinateSystem()}const[s,r,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let T=!1;if(e.isWebGLRenderer===!0)T=e.state.buffers.depth.getReversed();else T=e.reversedDepthBuffer;e.setRenderTarget(n,0,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,s);e.setRenderTarget(n,1,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,r);e.setRenderTarget(n,2,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,o);e.setRenderTarget(n,3,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,l);e.setRenderTarget(n,4,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,c);n.texture.generateMipmaps=v;e.setRenderTarget(n,5,i);if(T&&e.autoClear===!1)e.clearDepth();e.render(t,u);e.setRenderTarget(d,p,m);e.xr.enabled=_;n.texture.needsPMREMUpdate=!0}}class up extends gi{constructor(e=[]){super();this.isArrayCamera=!0;this.isMultiViewCamera=!1;this.cameras=e}}class Tf{constructor(){this._previousTime=0;this._currentTime=0;this._startTime=performance.now();this._delta=0;this._elapsed=0;this._timescale=1;this._document=null;this._pageVisibilityHandler=null}connect(e){this._document=e;if(e.hidden!==void 0){this._pageVisibilityHandler=cm.bind(this);e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}}disconnect(){if(this._pageVisibilityHandler!==null){this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler);this._pageVisibilityHandler=null}this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){this._timescale=e;return this}reset(){this._currentTime=performance.now()-this._startTime;return this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else{this._previousTime=this._currentTime;this._currentTime=(e!==void 0?e:performance.now())-this._startTime;this._delta=(this._currentTime-this._previousTime)*this._timescale;this._elapsed+=this._delta}return this}}function cm(){if(this._document.hidden===!1)this.reset()}const ba=new U,Af=new Dn,hm=new U,Ta=new U,Aa=new U;class dp extends Gt{constructor(){super();this.type="AudioListener";this.context=qu.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._timer=new Tf}getInput(){return this.gain}removeFilter(){if(this.filter!==null){this.gain.disconnect(this.filter);this.filter.disconnect(this.context.destination);this.gain.connect(this.context.destination);this.filter=null}return this}getFilter(){return this.filter}setFilter(e){if(this.filter!==null){this.gain.disconnect(this.filter);this.filter.disconnect(this.context.destination)}else this.gain.disconnect(this.context.destination);this.filter=e;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){this.gain.gain.setTargetAtTime(e,this.context.currentTime,0.01);return this}updateMatrixWorld(e){super.updateMatrixWorld(e);this._timer.update();const t=this.context.listener;this.timeDelta=this._timer.getDelta();this.matrixWorld.decompose(ba,Af,hm);Ta.set(0,0,-1).applyQuaternion(Af);Aa.set(0,1,0).applyQuaternion(Af);if(t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ba.x,n);t.positionY.linearRampToValueAtTime(ba.y,n);t.positionZ.linearRampToValueAtTime(ba.z,n);t.forwardX.linearRampToValueAtTime(Ta.x,n);t.forwardY.linearRampToValueAtTime(Ta.y,n);t.forwardZ.linearRampToValueAtTime(Ta.z,n);t.upX.linearRampToValueAtTime(Aa.x,n);t.upY.linearRampToValueAtTime(Aa.y,n);t.upZ.linearRampToValueAtTime(Aa.z,n)}else{t.setPosition(ba.x,ba.y,ba.z);t.setOrientation(Ta.x,Ta.y,Ta.z,Aa.x,Aa.y,Aa.z)}}}class Ef extends Gt{constructor(e){super();this.type="Audio";this.listener=e;this.context=e.context;this.gain=this.context.createGain();this.gain.connect(e.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.loopStart=0;this.loopEnd=0;this.offset=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.source=null;this.sourceType="empty";this._startedAt=0;this._progress=0;this._connected=!1;this.filters=[]}getOutput(){return this.gain}setNodeSource(e){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=e;this.connect();return this}setMediaElementSource(e){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(e);this.connect();return this}setMediaStreamSource(e){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(e);this.connect();return this}setBuffer(e){this.buffer=e;this.sourceType="buffer";if(this.autoplay)this.play();return this}play(e=0){if(this.isPlaying===!0){lt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();t.buffer=this.buffer;t.loop=this.loop;t.loopStart=this.loopStart;t.loopEnd=this.loopEnd;t.onended=this.onEnded.bind(this);t.start(this._startedAt,this._progress+this.offset,this.duration);this.isPlaying=!0;this.source=t;this.setDetune(this.detune);this.setPlaybackRate(this.playbackRate);return this.connect()}pause(){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}if(this.isPlaying===!0){this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate;if(this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop();this.source.onended=null;this.isPlaying=!1}return this}stop(e=0){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}this._progress=0;if(this.source!==null){this.source.stop(this.context.currentTime+e);this.source.onended=null}this.isPlaying=!1;return this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());this._connected=!0;return this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());this._connected=!1;return this}getFilters(){return this.filters}setFilters(e){if(!e)e=[];if(this._connected===!0){this.disconnect();this.filters=e.slice();this.connect()}else this.filters=e.slice();return this}setDetune(e){this.detune=e;if(this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}this.playbackRate=e;if(this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1;this._progress=0}getLoop(){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return!1}return this.loop}setLoop(e){if(this.hasPlaybackControl===!1){lt("Audio: this Audio has no playback control.");return}this.loop=e;if(this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(e){this.loopStart=e;return this}setLoopEnd(e){this.loopEnd=e;return this}getVolume(){return this.gain.gain.value}setVolume(e){this.gain.gain.setTargetAtTime(e,this.context.currentTime,0.01);return this}copy(e,t){super.copy(e,t);if(e.sourceType!=="buffer"){lt("Audio: Audio source type cannot be copied.");return this}this.autoplay=e.autoplay;this.buffer=e.buffer;this.detune=e.detune;this.loop=e.loop;this.loopStart=e.loopStart;this.loopEnd=e.loopEnd;this.offset=e.offset;this.duration=e.duration;this.playbackRate=e.playbackRate;this.hasPlaybackControl=e.hasPlaybackControl;this.sourceType=e.sourceType;this.filters=e.filters.slice();return this}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ea=new U,fp=new Dn,um=new U,wa=new U;class pp extends Ef{constructor(e){super(e);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain)}connect(){super.connect();this.panner.connect(this.gain);return this}disconnect(){super.disconnect();this.panner.disconnect(this.gain);return this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){this.panner.refDistance=e;return this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){this.panner.rolloffFactor=e;return this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){this.panner.distanceModel=e;return this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){this.panner.maxDistance=e;return this}setDirectionalCone(e,t,n){this.panner.coneInnerAngle=e;this.panner.coneOuterAngle=t;this.panner.coneOuterGain=n;return this}updateMatrixWorld(e){super.updateMatrixWorld(e);if(this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ea,fp,um);wa.set(0,0,1).applyQuaternion(fp);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ea.x,n);t.positionY.linearRampToValueAtTime(Ea.y,n);t.positionZ.linearRampToValueAtTime(Ea.z,n);t.orientationX.linearRampToValueAtTime(wa.x,n);t.orientationY.linearRampToValueAtTime(wa.y,n);t.orientationZ.linearRampToValueAtTime(wa.z,n)}else{t.setPosition(Ea.x,Ea.y,Ea.z);t.setOrientation(wa.x,wa.y,wa.z)}}}class mp{constructor(e,t=2048){this.analyser=e.context.createAnalyser();this.analyser.fftSize=t;this.data=new Uint8Array(this.analyser.frequencyBinCount);e.getOutput().connect(this.analyser)}getFrequencyData(){this.analyser.getByteFrequencyData(this.data);return this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class wf{constructor(e,t,n){this.binding=e;this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp;s=this._slerpAdditive;r=this._setAdditiveIdentityQuaternion;this.buffer=new Float64Array(n*6);this._workIndex=5;break;case"string":case"bool":i=this._select;s=this._select;r=this._setAdditiveIdentityOther;this.buffer=Array(n*5);break;default:i=this._lerp;s=this._lerpAdditive;r=this._setAdditiveIdentityNumeric;this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i;this._mixBufferRegionAdditive=s;this._setIdentity=r;this._origIndex=3;this._addIndex=4;this.cumulativeWeight=0;this.cumulativeWeightAdditive=0;this.useCount=0;this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(t,i,0,e,n);this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;this.cumulativeWeight=0;this.cumulativeWeightAdditive=0;if(s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}if(r>0)this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity();this.cumulativeWeight=0;this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric();this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=0.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Dn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Dn.multiplyQuaternionsFlat(e,r,e,t,e,n);Dn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Cf="\\[\\]\\.:\\/",dm=new RegExp("["+Cf+"]","g"),Rf="[^"+Cf+"]",fm="[^"+Cf.replace("\\.","")+"]",pm=/((?:WC+[\/:])*)/.source.replace("WC",Rf),mm=/(WCOD+)?/.source.replace("WCOD",fm),gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rf),_m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rf),xm=new RegExp("^"+pm+mm+gm+_m+"$"),vm=["material","materials","bones","map"];class gp{constructor(e,t,n){const i=n||Vt.parseTrackName(t);this._targetGroup=e;this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t;this.parsedPath=n||Vt.parseTrackName(t);this.node=Vt.findNode(e,this.parsedPath.nodeName);this.rootNode=e;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Vt(e,t,n);else return new Vt.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){const t=xm.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);if(vm.indexOf(s)!==-1){n.nodeName=n.nodeName.substring(0,i);n.objectName=s}}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t];this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t];this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t);this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t);this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind();this.getValue(e,t)}_setValue_unbound(e,t){this.bind();this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,{objectName:n,propertyName:i}=t;let s=t.propertyIndex;if(!e){e=Vt.findNode(this.rootNode,t.nodeName);this.node=e}this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e;if(e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}l=this.BindingType.ArrayElement;this.resolvedProperty=r;this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0){l=this.BindingType.HasFromToArray;this.resolvedProperty=r}else if(Array.isArray(r)){l=this.BindingType.EntireArray;this.resolvedProperty=r}else this.propertyName=i;this.getValue=this.GetterByBindingType[l];this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}}Vt.Composite=gp;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _p{constructor(){this.isAnimationObjectGroup=!0;this.uuid=Qn();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,r=s.length;let o=void 0,l=e.length,c=this.nCachedObjects_;for(let u=0,d=arguments.length;u!==d;++u){const p=arguments[u],m=p.uuid;let _=t[m];if(_===void 0){_=l++;t[m]=_;e.push(p);for(let v=0,T=r;v!==T;++v)s[v].push(new Vt(p,n[v],i[v]))}else if(_<c){o=e[_];const v=--c,T=e[v];t[T.uuid]=_;e[_]=T;t[m]=v;e[v]=p;for(let I=0,C=r;I!==C;++I){const B=s[I],F=B[v];let W=B[_];B[_]=F;if(W===void 0)W=new Vt(p,n[I],i[I]);B[v]=W}}else if(e[_]!==o)Nt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let r=0,o=arguments.length;r!==o;++r){const l=arguments[r],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const d=s++,p=e[d];t[p.uuid]=u;e[u]=p;t[c]=d;e[d]=l;for(let m=0,_=i;m!==_;++m){const v=n[m],T=v[d],I=v[u];v[u]=T;v[d]=I}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,r=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,d=t[u];if(d!==void 0){delete t[u];if(d<s){const p=--s,m=e[p],_=--r,v=e[_];if(d!==p)t[m.uuid]=d;e[d]=m;if(p!==_)t[v.uuid]=p;e[p]=v;e.pop();for(let T=0,I=i;T!==I;++T){const C=n[T],B=C[p],F=C[_];C[d]=B;C[p]=F;C.pop()}}else{const p=--r,m=e[p];if(d!==p)t[m.uuid]=d;e[d]=m;e.pop();for(let _=0,v=i;_!==v;++_){const T=n[_];T[d]=T[p];T.pop()}}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const r=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,d=Array(c);i=s.length;n[e]=i;r.push(e);o.push(t);s.push(d);for(let p=u,m=l.length;p!==m;++p){const _=l[p];d[p]=new Vt(_,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length-1,l=r[o],c=i[o];t[c]=n;r[n]=l;r.pop();s[n]=s[o];s.pop();i[n]=i[o];i.pop()}}}class If{constructor(e,t,n=null,i=t.blendMode){this._mixer=e;this._clip=t;this._localRoot=n;this.blendMode=i;const s=t.tracks,r=s.length,o=Array(r),l={endingStart:Xi,endingEnd:Xi};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);o[c]=u;u.settings=l}this._interpolantSettings=l;this._interpolants=o;this._propertyBindings=Array(r);this._cacheIndex=null;this._byClipCacheIndex=null;this._timeScaleInterpolant=null;this._restoreTimeScale=null;this._weightInterpolant=null;this.loop=ic;this._loopCount=-1;this._startTime=null;this.time=0;this.timeScale=1;this._effectiveTimeScale=1;this.weight=1;this._effectiveWeight=1;this.repetitions=1/0;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtStart=!0;this.zeroSlopeAtEnd=!0}play(){this._mixer._activateAction(this);return this}stop(){this._mixer._deactivateAction(this);return this.reset()}reset(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){this._startTime=e;return this}setLoop(e,t){this.loop=e;this.repetitions=t;return this}setEffectiveWeight(e){this.weight=e;this._effectiveWeight=this.enabled?e:0;return this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){e.fadeOut(t);this.fadeIn(t);if(n===!0){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale;this._restoreTimeScale=this.timeScale;e.warp(1,r,t);this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;if(e!==null){this._weightInterpolant=null;this._mixer._takeBackControlInterpolant(e)}return this}setEffectiveTimeScale(e){this.timeScale=e;this._effectiveTimeScale=this.paused?0:e;return this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){this.timeScale=this._clip.duration/e;return this.stopWarping()}syncWith(e){this.time=e.time;this.timeScale=e.timeScale;return this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;if(o===null){o=i._lendControlInterpolant();this._timeScaleInterpolant=o}const l=o.parameterPositions,c=o.sampleValues;l[0]=s;l[1]=s+n;c[0]=e/r;c[1]=t/r;return this}stopWarping(){const e=this._timeScaleInterpolant;if(e!==null){this._timeScaleInterpolant=null;this._mixer._takeBackControlInterpolant(e)}this._restoreTimeScale=null;return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)t=0;else{this._startTime=null;t=n*l}}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case rr:for(let u=0,d=l.length;u!==d;++u){l[u].evaluate(r);c[u].accumulateAdditive(o)}break;case Rs:default:for(let u=0,d=l.length;u!==d;++u){l[u].evaluate(r);c[u].accumulate(i,o)}}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i;if(e>n.parameterPositions[1]){this.stopFading();if(i===0)this.enabled=!1}}}this._effectiveWeight=t;return t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i;if(e>n.parameterPositions[1]){if(t===0)this.paused=!0;else{if(this._restoreTimeScale!==null)t=this._restoreTimeScale;this.timeScale=t}this.stopWarping()}}}this._effectiveTimeScale=t;return t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===sc;if(e===0){if(s===-1)return i;return r&&(s&1)===1?t-i:i}if(n===nc){if(s===-1){this._loopCount=0;this._setEndings(!0,!0,!1)}e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=i;this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1)if(e>=0){s=0;this._setEndings(!0,this.repetitions===0,r)}else this._setEndings(this.repetitions===0,!0,r);if(i>=t||i<0){const o=Math.floor(i/t);i-=t*o;s+=Math.abs(o);const l=this.repetitions-s;if(l<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;i=e>0?t:0;this.time=i;this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1})}else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s;this.time=i;this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else{this._loopCount=s;this.time=i}if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;if(n){i.endingStart=qi;i.endingEnd=qi}else{if(e)i.endingStart=this.zeroSlopeAtStart?qi:Xi;else i.endingStart=Cs;if(t)i.endingEnd=this.zeroSlopeAtEnd?qi:Xi;else i.endingEnd=Cs}}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;if(r===null){r=i._lendControlInterpolant();this._weightInterpolant=r}const o=r.parameterPositions,l=r.sampleValues;o[0]=s;l[0]=t;o[1]=s+e;l[1]=n;return this}}const ym=new Float32Array(1);class xp extends bi{constructor(e){super();this._root=e;this._initMemoryManager();this._accuIndex=0;this.time=0;this.timeScale=1;if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,{_propertyBindings:r,_interpolants:o}=e,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];if(u===void 0){u={};c[l]=u}for(let d=0;d!==s;++d){const p=i[d],m=p.name;let _=u[m];if(_!==void 0){++_.referenceCount;r[d]=_}else{_=r[d];if(_!==void 0){if(_._cacheIndex===null){++_.referenceCount;this._addInactiveBinding(_,l,m)}continue}const v=t&&t._propertyBindings[d].binding.parsedPath;_=new wf(Vt.create(n,m,v),p.ValueTypeName,p.getValueSize());++_.referenceCount;this._addInactiveBinding(_,l,m);r[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]);this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];if(s.useCount++===0){this._lendBinding(s);s.saveOriginalState()}}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];if(--s.useCount===0){s.restoreOriginalState();this._takeBackBinding(s)}}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0){r={knownActions:[e],actionByRoot:{}};e._byClipCacheIndex=0;s[t]=r}else{const o=r.knownActions;e._byClipCacheIndex=o.length;o.push(e)}e._cacheIndex=i.length;i.push(e);r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i;t[i]=n;t.pop();e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u;l[u]=c;l.pop();e._byClipCacheIndex=null;const d=o.actionByRoot,p=(e._localRoot||this._root).uuid;delete d[p];if(l.length===0)delete r[s];this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];if(--s.referenceCount===0)this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i;t[i]=e;s._cacheIndex=n;t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i;t[i]=e;s._cacheIndex=n;t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];if(r===void 0){r={};i[t]=r}r[n]=e;e._cacheIndex=s.length;s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c;t[c]=l;t.pop();delete o[s];if(Object.keys(o).length===0)delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i;t[i]=e;s._cacheIndex=n;t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i;t[i]=e;s._cacheIndex=n;t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];if(n===void 0){n=new $t(new Float32Array(2),new Float32Array(2),1,ym);n.__cacheIndex=t;e[t]=n}return n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i;t[i]=e;s.__cacheIndex=n;t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e==="string"?Ri.findByName(i,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0)if(r!==null)n=r.blendMode;else n=Rs;if(l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0];if(r===null)r=c._clip}if(r===null)return null;const u=new If(this,r,t,n);this._bindAction(u,c);this._addInactiveAction(u,o,s);return u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e==="string"?Ri.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];if(o!==void 0)return o.actionByRoot[i]||null;return null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null;c._byClipCacheIndex=null;d._cacheIndex=u;t[u]=d;t.pop();this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,l=o[t];if(l!==void 0){this._deactivateAction(l);this._removeInactiveAction(l)}}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState();this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);if(n!==null){this._deactivateAction(n);this._removeInactiveAction(n)}}}class vp extends ro{constructor(e=1,t=1,n=1,i={}){super(e,t,i);this.isRenderTarget3D=!0;this.depth=n;for(let s=0;s<this.textures.length;s++){const r=new oo(null,e,t,n);r.isRenderTargetTexture=!0;r.renderTarget=this;this.textures[s]=r}this._setTextureOptions(i)}}class Pf{constructor(e){this.value=e}clone(){return new Pf(this.value.clone===void 0?this.value:this.value.clone())}}let Sm=0;class yp extends bi{constructor(){super();this.isUniformsGroup=!0;Object.defineProperty(this,"id",{value:Sm++});this.name="";this.usage=lr;this.uniforms=[]}add(e){this.uniforms.push(e);return this}remove(e){const t=this.uniforms.indexOf(e);if(t!==-1)this.uniforms.splice(t,1);return this}setName(e){this.name=e;return this}setUsage(e){this.usage=e;return this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name;this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let r=0;r<s.length;r++)this.uniforms.push(s[r].clone())}return this}clone(){return new this.constructor().copy(this)}}class Sp extends yr{constructor(e,t,n=1){super(e,t);this.isInstancedInterleavedBuffer=!0;this.meshPerAttribute=n}copy(e){super.copy(e);this.meshPerAttribute=e.meshPerAttribute;return this}clone(e){const t=super.clone(e);t.meshPerAttribute=this.meshPerAttribute;return t}toJSON(e){const t=super.toJSON(e);t.isInstancedInterleavedBuffer=!0;t.meshPerAttribute=this.meshPerAttribute;return t}}class Mp{constructor(e,t,n,i,s,r=!1){this.isGLBufferAttribute=!0;this.name="";this.buffer=e;this.type=t;this.itemSize=n;this.elementSize=i;this.count=s;this.normalized=r;this.version=0}set needsUpdate(e){if(e===!0)this.version++}setBuffer(e){this.buffer=e;return this}setType(e,t){this.type=e;this.elementSize=t;return this}setItemSize(e){this.itemSize=e;return this}setCount(e){this.count=e;return this}}const bp=new yt;class Tp{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t);this.near=n;this.far=i;this.camera=null;this.layers=new co;this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera){this.ray.origin.setFromMatrixPosition(t.matrixWorld);this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize();this.camera=t}else if(t.isOrthographicCamera){this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t);this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld);this.camera=t}else Nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){bp.identity().extractRotation(e.matrixWorld);this.ray.origin.setFromMatrixPosition(e.matrixWorld);this.ray.direction.set(0,0,-1).applyMatrix4(bp);return this}intersectObject(e,t=!0,n=[]){Lf(e,this,n,t);n.sort(Ap);return n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Lf(e[i],this,n,t);n.sort(Ap);return n}}function Ap(e,t){return e.distance-t.distance}function Lf(e,t,n,i){let s=!0;if(e.layers.test(t.layers)){if(e.raycast(t,n)===!1)s=!1}if(s===!0&&i===!0){const r=e.children;for(let o=0,l=r.length;o<l;o++)Lf(r[o],t,n,!0)}}class Ep{constructor(e=!0){this.autoStart=e;this.startTime=0;this.oldTime=0;this.elapsedTime=0;this.running=!1;lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now();this.oldTime=this.startTime;this.elapsedTime=0;this.running=!0}stop(){this.getElapsedTime();this.running=!1;this.autoStart=!1}getElapsedTime(){this.getDelta();return this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running){this.start();return 0}if(this.running){const t=performance.now();e=(t-this.oldTime)/1000;this.oldTime=t;this.elapsedTime+=e}return e}}class wp{constructor(e=1,t=0,n=0){this.radius=e;this.phi=t;this.theta=n}set(e,t,n){this.radius=e;this.phi=t;this.theta=n;return this}copy(e){this.radius=e.radius;this.phi=e.phi;this.theta=e.theta;return this}makeSafe(){const e=0.000001;this.phi=ut(this.phi,e,Math.PI-e);return this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){this.radius=Math.sqrt(e*e+t*t+n*n);if(this.radius===0){this.theta=0;this.phi=0}else{this.theta=Math.atan2(e,n);this.phi=Math.acos(ut(t/this.radius,-1,1))}return this}clone(){return new this.constructor().copy(this)}}class Cp{constructor(e=1,t=0,n=0){this.radius=e;this.theta=t;this.y=n}set(e,t,n){this.radius=e;this.theta=t;this.y=n;return this}copy(e){this.radius=e.radius;this.theta=e.theta;this.y=e.y;return this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){this.radius=Math.sqrt(e*e+n*n);this.theta=Math.atan2(e,n);this.y=t;return this}clone(){return new this.constructor().copy(this)}}class Df{static{Df.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1];if(e!==void 0)this.set(e,t,n,i)}identity(){this.set(1,0,0,1);return this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;s[0]=e;s[2]=t;s[1]=n;s[3]=i;return this}}const Rp=new we;class Nf{constructor(e=new we(1/0,1/0),t=new we(-1/0,-1/0)){this.isBox2=!0;this.min=e;this.max=t}set(e,t){this.min.copy(e);this.max.copy(t);return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rp.copy(t).multiplyScalar(0.5);this.min.copy(e).sub(n);this.max.copy(e).add(n);return this}clone(){return new this.constructor().copy(this)}copy(e){this.min.copy(e.min);this.max.copy(e.max);return this}makeEmpty(){this.min.x=this.min.y=1/0;this.max.x=this.max.y=-1/0;return this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){this.min.min(e);this.max.max(e);return this}expandByVector(e){this.min.sub(e);this.max.add(e);return this}expandByScalar(e){this.min.addScalar(-e);this.max.addScalar(e);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rp).distanceTo(e)}intersect(e){this.min.max(e.min);this.max.min(e.max);if(this.isEmpty())this.makeEmpty();return this}union(e){this.min.min(e.min);this.max.max(e.max);return this}translate(e){this.min.add(e);this.max.add(e);return this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ip=new U,Yu=new U,sl=new U,rl=new U,Uf=new U,Mm=new U,bm=new U;class Pp{constructor(e=new U,t=new U){this.start=e;this.end=t}set(e,t){this.start.copy(e);this.end.copy(t);return this}copy(e){this.start.copy(e.start);this.end.copy(e.end);return this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ip.subVectors(e,this.start);Yu.subVectors(this.end,this.start);const n=Yu.dot(Yu);if(n===0)return 0;let s=Yu.dot(Ip)/n;if(t)s=ut(s,0,1);return s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Mm,n=bm){const i=0.00000000000000010000000000000001;let s,r;const o=this.start,l=e.start,c=this.end,u=e.end;sl.subVectors(c,o);rl.subVectors(u,l);Uf.subVectors(o,l);const d=sl.dot(sl),p=rl.dot(rl),m=rl.dot(Uf);if(d<=i&&p<=i){t.copy(o);n.copy(l);t.sub(n);return t.dot(t)}if(d<=i){s=0;r=m/p;r=ut(r,0,1)}else{const _=sl.dot(Uf);if(p<=i){r=0;s=ut(-_/d,0,1)}else{const v=sl.dot(rl),T=d*p-v*v;if(T!==0)s=ut((v*m-_*p)/T,0,1);else s=0;r=(v*s+m)/p;if(r<0){r=0;s=ut(-_/d,0,1)}else if(r>1){r=1;s=ut((v-_)/d,0,1)}}}t.copy(o).addScaledVector(sl,s);n.copy(l).addScaledVector(rl,r);return t.distanceToSquared(n)}applyMatrix4(e){this.start.applyMatrix4(e);this.end.applyMatrix4(e);return this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Lp=new U;class Dp extends Gt{constructor(e,t){super();this.light=e;this.matrixAutoUpdate=!1;this.color=t;this.type="SpotLightHelper";const n=new St,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let r=0,o=1,l=32;r<l;r++,o++){const c=r/l*Math.PI*2,u=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Ye(i,3));const s=new On({fog:!1,toneMapped:!1});this.cone=new fi(n,s);this.add(this.cone);this.update()}dispose(){super.dispose();this.cone.geometry.dispose();this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1);this.light.target.updateWorldMatrix(!0,!1);if(this.parent){this.parent.updateWorldMatrix(!0);this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)}else this.matrix.copy(this.light.matrixWorld);this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1000,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e);Lp.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(Lp);if(this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}const Ir=new U,Zu=new yt,Ff=new yt;class Np extends fi{constructor(e){const t=Up(e),n=new St,i=[],s=[];for(let c=0;c<t.length;c++){const u=t[c];if(u.parent&&u.parent.isBone){i.push(0,0,0);i.push(0,0,0);s.push(0,0,0);s.push(0,0,0)}}n.setAttribute("position",new Ye(i,3));n.setAttribute("color",new Ye(s,3));const r=new On({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,r);this.isSkeletonHelper=!0;this.type="SkeletonHelper";this.root=e;this.bones=t;this.matrix=e.matrixWorld;this.matrixAutoUpdate=!1;const o=new gt(255),l=new gt(65280);this.setColors(o,l)}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ff.copy(this.root.matrixWorld).invert();for(let s=0,r=0;s<t.length;s++){const o=t[s];if(o.parent&&o.parent.isBone){Zu.multiplyMatrices(Ff,o.matrixWorld);Ir.setFromMatrixPosition(Zu);i.setXYZ(r,Ir.x,Ir.y,Ir.z);Zu.multiplyMatrices(Ff,o.parent.matrixWorld);Ir.setFromMatrixPosition(Zu);i.setXYZ(r+1,Ir.x,Ir.y,Ir.z);r+=2}}n.getAttribute("position").needsUpdate=!0;super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2){i.setXYZ(s,e.r,e.g,e.b);i.setXYZ(s+1,t.r,t.g,t.b)}i.needsUpdate=!0;return this}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}function Up(e){const t=[];if(e.isBone===!0)t.push(e);for(let n=0;n<e.children.length;n++)t.push(...Up(e.children[n]));return t}class Fp extends ui{constructor(e,t,n){const i=new Xt(t,4,2),s=new ps({wireframe:!0,fog:!1,toneMapped:!1});super(i,s);this.light=e;this.color=n;this.type="PointLightHelper";this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0;this.light.updateWorldMatrix(!0,!1);if(this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}const Tm=new U,Op=new gt,Bp=new gt;class zp extends Gt{constructor(e,t,n){super();this.light=e;this.matrix=e.matrixWorld;this.matrixAutoUpdate=!1;this.color=n;this.type="HemisphereLightHelper";const i=new Fe(t);i.rotateY(Math.PI*0.5);this.material=new ps({wireframe:!0,fog:!1,toneMapped:!1});if(this.color===void 0)this.material.vertexColors=!0;const s=i.getAttribute("position"),r=new Float32Array(s.count*3);i.setAttribute("color",new Jt(r,3));this.add(new ui(i,this.material));this.update()}dispose(){super.dispose();this.children[0].geometry.dispose();this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Op.copy(this.light.color);Bp.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?Op:Bp;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0;this.light.updateWorldMatrix(!0,!1);e.lookAt(Tm.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Gp extends fi{constructor(e=10,t=10,n=4473924,i=8947848){n=new gt(n);i=new gt(i);const s=t/2,r=e/t,o=e/2,l=[],c=[];for(let p=0,m=0,_=-o;p<=t;p++,_+=r){l.push(-o,0,_,o,0,_);l.push(_,0,-o,_,0,o);const v=p===s?n:i;v.toArray(c,m);m+=3;v.toArray(c,m);m+=3;v.toArray(c,m);m+=3;v.toArray(c,m);m+=3}const u=new St;u.setAttribute("position",new Ye(l,3));u.setAttribute("color",new Ye(c,3));const d=new On({vertexColors:!0,toneMapped:!1});super(u,d);this.type="GridHelper"}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}class kp extends fi{constructor(e=10,t=16,n=8,i=64,s=4473924,r=8947848){s=new gt(s);r=new gt(r);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const p=d/t*(Math.PI*2),m=Math.sin(p)*e,_=Math.cos(p)*e;o.push(0,0,0);o.push(m,0,_);const v=d&1?s:r;l.push(v.r,v.g,v.b);l.push(v.r,v.g,v.b)}for(let d=0;d<n;d++){const p=d&1?s:r,m=e-e/n*d;for(let _=0;_<i;_++){let v=_/i*(Math.PI*2),T=Math.sin(v)*m,I=Math.cos(v)*m;o.push(T,0,I);l.push(p.r,p.g,p.b);v=(_+1)/i*(Math.PI*2);T=Math.sin(v)*m;I=Math.cos(v)*m;o.push(T,0,I);l.push(p.r,p.g,p.b)}}const c=new St;c.setAttribute("position",new Ye(o,3));c.setAttribute("color",new Ye(l,3));const u=new On({vertexColors:!0,toneMapped:!1});super(c,u);this.type="PolarGridHelper"}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}const Hp=new U,ju=new U,Vp=new U;class Wp extends Gt{constructor(e,t,n){super();this.light=e;this.matrix=e.matrixWorld;this.matrixAutoUpdate=!1;this.color=n;this.type="DirectionalLightHelper";if(t===void 0)t=1;let i=new St;i.setAttribute("position",new Ye([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new On({fog:!1,toneMapped:!1});this.lightPlane=new Qi(i,s);this.add(this.lightPlane);i=new St;i.setAttribute("position",new Ye([0,0,0,0,0,1],3));this.targetLine=new Qi(i,s);this.add(this.targetLine);this.update()}dispose(){super.dispose();this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0;this.light.updateWorldMatrix(!0,!1);this.light.target.updateWorldMatrix(!0,!1);Hp.setFromMatrixPosition(this.light.matrixWorld);ju.setFromMatrixPosition(this.light.target.matrixWorld);Vp.subVectors(ju,Hp);this.lightPlane.lookAt(ju);if(this.color!==void 0){this.lightPlane.material.color.set(this.color);this.targetLine.material.color.set(this.color)}else{this.lightPlane.material.color.copy(this.light.color);this.targetLine.material.color.copy(this.light.color)}this.targetLine.lookAt(ju);this.targetLine.scale.z=Vp.length()}}const Ju=new U,bn=new fh;class Xp extends fi{constructor(e){const t=new St,n=new On({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],r={};o("n1","n2");o("n2","n4");o("n4","n3");o("n3","n1");o("f1","f2");o("f2","f4");o("f4","f3");o("f3","f1");o("n1","f1");o("n2","f2");o("n3","f3");o("n4","f4");o("p","n1");o("p","n2");o("p","n3");o("p","n4");o("u1","u2");o("u2","u3");o("u3","u1");o("c","t");o("p","c");o("cn1","cn2");o("cn3","cn4");o("cf1","cf2");o("cf3","cf4");function o(_,v){l(_);l(v)}function l(_){i.push(0,0,0);s.push(0,0,0);if(r[_]===void 0)r[_]=[];r[_].push(i.length/3-1)}t.setAttribute("position",new Ye(i,3));t.setAttribute("color",new Ye(s,3));super(t,n);this.type="CameraHelper";this.camera=e;if(this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=e.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=r;this.update();const c=new gt(16755200),u=new gt(16711680),d=new gt(43775),p=new gt(16777215),m=new gt(3355443);this.setColors(c,u,d,p,m)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b);o.setXYZ(1,e.r,e.g,e.b);o.setXYZ(2,e.r,e.g,e.b);o.setXYZ(3,e.r,e.g,e.b);o.setXYZ(4,e.r,e.g,e.b);o.setXYZ(5,e.r,e.g,e.b);o.setXYZ(6,e.r,e.g,e.b);o.setXYZ(7,e.r,e.g,e.b);o.setXYZ(8,e.r,e.g,e.b);o.setXYZ(9,e.r,e.g,e.b);o.setXYZ(10,e.r,e.g,e.b);o.setXYZ(11,e.r,e.g,e.b);o.setXYZ(12,e.r,e.g,e.b);o.setXYZ(13,e.r,e.g,e.b);o.setXYZ(14,e.r,e.g,e.b);o.setXYZ(15,e.r,e.g,e.b);o.setXYZ(16,e.r,e.g,e.b);o.setXYZ(17,e.r,e.g,e.b);o.setXYZ(18,e.r,e.g,e.b);o.setXYZ(19,e.r,e.g,e.b);o.setXYZ(20,e.r,e.g,e.b);o.setXYZ(21,e.r,e.g,e.b);o.setXYZ(22,e.r,e.g,e.b);o.setXYZ(23,e.r,e.g,e.b);o.setXYZ(24,t.r,t.g,t.b);o.setXYZ(25,t.r,t.g,t.b);o.setXYZ(26,t.r,t.g,t.b);o.setXYZ(27,t.r,t.g,t.b);o.setXYZ(28,t.r,t.g,t.b);o.setXYZ(29,t.r,t.g,t.b);o.setXYZ(30,t.r,t.g,t.b);o.setXYZ(31,t.r,t.g,t.b);o.setXYZ(32,n.r,n.g,n.b);o.setXYZ(33,n.r,n.g,n.b);o.setXYZ(34,n.r,n.g,n.b);o.setXYZ(35,n.r,n.g,n.b);o.setXYZ(36,n.r,n.g,n.b);o.setXYZ(37,n.r,n.g,n.b);o.setXYZ(38,i.r,i.g,i.b);o.setXYZ(39,i.r,i.g,i.b);o.setXYZ(40,s.r,s.g,s.b);o.setXYZ(41,s.r,s.g,s.b);o.setXYZ(42,s.r,s.g,s.b);o.setXYZ(43,s.r,s.g,s.b);o.setXYZ(44,s.r,s.g,s.b);o.setXYZ(45,s.r,s.g,s.b);o.setXYZ(46,s.r,s.g,s.b);o.setXYZ(47,s.r,s.g,s.b);o.setXYZ(48,s.r,s.g,s.b);o.setXYZ(49,s.r,s.g,s.b);o.needsUpdate=!0;return this}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;let s,r;bn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);if(this.camera.reversedDepth===!0){s=1;r=0}else if(this.camera.coordinateSystem===Mi){s=-1;r=1}else if(this.camera.coordinateSystem===Is){s=0;r=1}else throw Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);An("c",t,e,bn,0,0,s);An("t",t,e,bn,0,0,r);An("n1",t,e,bn,-n,-i,s);An("n2",t,e,bn,n,-i,s);An("n3",t,e,bn,-n,i,s);An("n4",t,e,bn,n,i,s);An("f1",t,e,bn,-n,-i,r);An("f2",t,e,bn,n,-i,r);An("f3",t,e,bn,-n,i,r);An("f4",t,e,bn,n,i,r);An("u1",t,e,bn,n*0.7,i*1.1,s);An("u2",t,e,bn,-n*0.7,i*1.1,s);An("u3",t,e,bn,0,i*2,s);An("cf1",t,e,bn,-n,0,r);An("cf2",t,e,bn,n,0,r);An("cf3",t,e,bn,0,-i,r);An("cf4",t,e,bn,0,i,r);An("cn1",t,e,bn,-n,0,s);An("cn2",t,e,bn,n,0,s);An("cn3",t,e,bn,0,-i,s);An("cn4",t,e,bn,0,i,s);e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}function An(e,t,n,i,s,r,o){Ju.set(s,r,o).unproject(i);const l=t[e];if(l!==void 0){const c=n.getAttribute("position");for(let u=0,d=l.length;u<d;u++)c.setXYZ(l[u],Ju.x,Ju.y,Ju.z)}}const $u=new nt;class qp extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new St;s.setIndex(new Jt(n,1));s.setAttribute("position",new Jt(i,3));super(s,new On({color:t,toneMapped:!1}));this.object=e;this.type="BoxHelper";this.matrixAutoUpdate=!1;this.update()}update(){if(this.object!==void 0)$u.setFromObject(this.object);if($u.isEmpty())return;const{min:e,max:t}=$u,n=this.geometry.attributes.position,i=n.array;i[0]=t.x;i[1]=t.y;i[2]=t.z;i[3]=e.x;i[4]=t.y;i[5]=t.z;i[6]=e.x;i[7]=e.y;i[8]=t.z;i[9]=t.x;i[10]=e.y;i[11]=t.z;i[12]=t.x;i[13]=t.y;i[14]=e.z;i[15]=e.x;i[16]=t.y;i[17]=e.z;i[18]=e.x;i[19]=e.y;i[20]=e.z;i[21]=t.x;i[22]=e.y;i[23]=e.z;n.needsUpdate=!0;this.geometry.computeBoundingSphere()}setFromObject(e){this.object=e;this.update();return this}copy(e,t){super.copy(e,t);this.object=e.object;return this}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}class Yp extends fi{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new St;s.setIndex(new Jt(n,1));s.setAttribute("position",new Ye(i,3));super(s,new On({color:t,toneMapped:!1}));this.box=e;this.type="Box3Helper";this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;if(t.isEmpty())return;t.getCenter(this.position);t.getSize(this.scale);this.scale.multiplyScalar(0.5);super.updateMatrixWorld(e)}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}class Zp extends Qi{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],r=new St;r.setAttribute("position",new Ye(s,3));r.computeBoundingSphere();super(r,new On({color:i,toneMapped:!1}));this.type="PlaneHelper";this.plane=e;this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new St;l.setAttribute("position",new Ye(o,3));l.computeBoundingSphere();this.add(new ui(l,new ps({color:i,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0);this.scale.set(0.5*this.size,0.5*this.size,1);this.lookAt(this.plane.normal);this.translateZ(-this.plane.constant);super.updateMatrixWorld(e)}dispose(){super.dispose();this.geometry.dispose();this.material.dispose();this.children[0].geometry.dispose();this.children[0].material.dispose()}}const jp=new U;let Ku,Of;class Jp extends Gt{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,i=16776960,s=n*0.2,r=s*0.2){super();this.type="ArrowHelper";if(Ku===void 0){Ku=new St;Ku.setAttribute("position",new Ye([0,0,0,0,1,0],3));Of=new a(0.5,1,5,1);Of.translate(0,-0.5,0)}this.position.copy(t);this.line=new Qi(Ku,new On({color:i,toneMapped:!1}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ui(Of,new ps({color:i,toneMapped:!1}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(e);this.setLength(n,s,r)}setDirection(e){if(e.y>0.99999)this.quaternion.set(0,0,0,1);else if(e.y<-0.99999)this.quaternion.set(1,0,0,0);else{jp.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(jp,t)}}setLength(e,t=e*0.2,n=t*0.2){this.line.scale.set(1,Math.max(0.0001,e-t),1);this.line.updateMatrix();this.cone.scale.set(n,t,n);this.cone.position.y=e;this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e);this.cone.material.color.set(e)}copy(e){super.copy(e,!1);this.line.copy(e.line);this.cone.copy(e.cone);return this}dispose(){super.dispose();this.line.geometry.dispose();this.line.material.dispose();this.cone.geometry.dispose();this.cone.material.dispose()}}class $p extends fi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],i=new St;i.setAttribute("position",new Ye(t,3));i.setAttribute("color",new Ye(n,3));const s=new On({vertexColors:!0,toneMapped:!1});super(i,s);this.type="AxesHelper"}setColors(e,t,n){const i=new gt,s=this.geometry.attributes.color.array;i.set(e);i.toArray(s,0);i.toArray(s,3);i.set(t);i.toArray(s,6);i.toArray(s,9);i.set(n);i.toArray(s,12);i.toArray(s,15);this.geometry.attributes.color.needsUpdate=!0;return this}dispose(){super.dispose();this.geometry.dispose();this.material.dispose()}}class Kp{constructor(){this.type="ShapePath";this.color=new gt;this.subPaths=[];this.currentPath=null;this.userData={}}moveTo(e,t){this.currentPath=new Ce;this.subPaths.push(this.currentPath);this.currentPath.moveTo(e,t);return this}lineTo(e,t){this.currentPath.lineTo(e,t);return this}quadraticCurveTo(e,t,n,i){this.currentPath.quadraticCurveTo(e,t,n,i);return this}bezierCurveTo(e,t,n,i,s,r){this.currentPath.bezierCurveTo(e,t,n,i,s,r);return this}splineThru(e){this.currentPath.splineThru(e);return this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let p=0,m=d-1;p<d;m=p++){const _=c[p],v=c[m];if(_.y>l.y!==v.y>l.y&&l.x<(v.x-_.x)*(l.y-_.y)/(v.y-_.y)+_.x)u=!u}return u}function t(l,c){const u=c.getCenter(new we);if(e(u,l))return u;const d=u.y,p=[],m=l.length;for(let _=0;_<m;_++){const v=l[_],T=l[(_+1)%m];if(v.y>d!==T.y>d){const I=v.x+(d-v.y)*(T.x-v.x)/(T.y-v.y);p.push(I)}}if(p.length>1){p.sort((_,v)=>_-v);u.x=(p[0]+p[1])/2}return u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";if(n!=="nonzero"&&n!=="evenodd"){lt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".');n="nonzero"}const i=n==="nonzero"?(l)=>l!==0:(l)=>(l&1)!==0,s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=Le.area(c);if(u===0)continue;const d=new Nf;for(let p=0;p<c.length;p++)d.expandByPoint(c[p]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let u=0;for(let d=l-1;d>=0;d--){const p=s[d];if(!p.boundingBox.containsBox(c.boundingBox))continue;if(!e(c.interiorPoint,p.points))continue;c.container=p.exclude?p.container:p;u=p.winding;c.winding+=u;break}if(i(c.winding)===i(u))c.exclude=!0}for(const l of s){if(l.exclude)continue;l.role=l.container===null||l.container.role==="hole"?"outer":"hole"}const r=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new pt;c.curves=l.subPath.curves;r.push(c);o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new Ce;u.curves=l.subPath.curves;c.holes.push(u)}return r}}class Qp extends bi{constructor(e,t=null){super();this.object=e;this.domElement=t;this.enabled=!0;this.state=-1;this.keys={};this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null};this.touches={ONE:null,TWO:null}}connect(e){if(this.domElement!==null)this.disconnect();this.domElement=e}disconnect(){}dispose(){}update(){}}function Am(e,t){const n=e.image&&e.image.width?e.image.width/e.image.height:1;if(n>t){e.repeat.x=1;e.repeat.y=n/t;e.offset.x=0;e.offset.y=(1-e.repeat.y)/2}else{e.repeat.x=t/n;e.repeat.y=1;e.offset.x=(1-e.repeat.x)/2;e.offset.y=0}return e}function Em(e,t){const n=e.image&&e.image.width?e.image.width/e.image.height:1;if(n>t){e.repeat.x=t/n;e.repeat.y=1;e.offset.x=(1-e.repeat.x)/2;e.offset.y=0}else{e.repeat.x=1;e.repeat.y=n/t;e.offset.x=0;e.offset.y=(1-e.repeat.y)/2}return e}function wm(e){e.repeat.x=1;e.repeat.y=1;e.offset.x=0;e.offset.y=0;return e}function em(e,t,n,i){const s=Cm(i);switch(n){case Rl:return e*t;case Xa:return e*t/s.components*s.byteLength;case qa:return e*t/s.components*s.byteLength;case Ll:return e*t*2/s.components*s.byteLength;case Dl:return e*t*2/s.components*s.byteLength;case Il:return e*t*3/s.components*s.byteLength;case Es:return e*t*4/s.components*s.byteLength;case Nl:return e*t*4/s.components*s.byteLength;case Ul:case Fl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ol:case Bl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gl:case Ya:return Math.max(e,16)*Math.max(t,8)/4;case zl:case kl:return Math.max(e,8)*Math.max(t,8)/2;case Hl:case Vl:case ja:case Ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Za:case bh:case Wl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ss:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case rs:case tc:case ws:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ir:case Th:return Math.ceil(e/4)*Math.ceil(t/4)*8;case $a:case Ka:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Cm(e){switch(e){case Si:case Tl:return{byteLength:1,components:1};case Va:case Wi:case As:return{byteLength:2,components:1};case Al:case El:return{byteLength:2,components:4};case tr:case Wa:case is:return{byteLength:4,components:1};case wl:case Cl:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}class tm{static contain(e,t){return Am(e,t)}static cover(e,t){return Em(e,t)}static fill(e){return wm(e)}static getByteLength(e,t,n,i){return em(e,t,n,i)}}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tt}}));if(typeof window<"u")if(window.__THREE__)lt("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__=Tt;return{ACESFilmicToneMapping:xh,AddEquation:Fi,AddOperation:pl,AdditiveAnimationBlendMode:rr,AdditiveBlending:mh,AgXToneMapping:Ba,AlphaFormat:Rl,AlwaysCompare:Ih,AlwaysDepth:Na,AlwaysStencilFunc:io,AmbientLight:_f,AnimationAction:If,AnimationClip:Ri,AnimationLoader:Vf,AnimationMixer:xp,AnimationObjectGroup:_p,AnimationUtils:Ke,ArcCurve:ae,ArrayCamera:up,ArrowHelper:Jp,AttachedBindMode:za,Audio:Ef,AudioAnalyser:mp,AudioContext:qu,AudioListener:dp,AudioLoader:ap,AxesHelper:$p,BackSide:tn,BasicDepthPacking:no,BasicShadowMap:Ra,BatchedMesh:No,BezierInterpolant:wn,Bone:ha,BooleanKeyframeTrack:qn,Box2:Nf,Box3:nt,Box3Helper:Yp,BoxGeometry:Ho,BoxHelper:qp,BufferAttribute:Jt,BufferGeometry:St,BufferGeometryLoader:Sf,ByteType:Tl,Cache:_s,Camera:fh,CameraHelper:Xp,CanvasTexture:lh,CapsuleGeometry:si,CatmullRomCurve3:S,CineonToneMapping:xl,CircleGeometry:Vo,ClampToEdgeWrapping:yn,Clock:Ep,Color:gt,ColorKeyframeTrack:es,ColorManagement:Jn,Compatibility:fd,CompressedArrayTexture:Cu,CompressedCubeTexture:Ru,CompressedTexture:wr,CompressedTextureLoader:Wf,ConeGeometry:a,ConstantAlphaFactor:Pa,ConstantColorFactor:bs,Controls:Qp,CubeCamera:hp,CubeDepthTexture:Pu,CubeReflectionMapping:Vi,CubeRefractionMapping:vl,CubeTexture:va,CubeTextureLoader:Xf,CubeUVReflectionMapping:ka,CubicBezierCurve:he,CubicBezierCurve3:Ie,CubicInterpolant:fn,CullFaceBack:Yn,CullFaceFront:Dr,CullFaceFrontBack:Di,CullFaceNone:wt,Curve:ie,CurvePath:Ee,CustomBlending:Ui,CustomToneMapping:Oa,CylinderGeometry:Cr,Cylindrical:Cp,Data3DTexture:oo,DataArrayTexture:Fc,DataTexture:di,DataTextureLoader:qf,DataUtils:fo,DecrementStencilOp:gc,DecrementWrapStencilOp:xc,DefaultLoadingManager:kf,DepthFormat:kr,DepthStencilFormat:Pl,DepthTexture:ko,DetachedBindMode:Ga,DirectionalLight:gf,DirectionalLightHelper:Wp,DiscreteInterpolant:jt,DodecahedronGeometry:h,DoubleSide:Kt,DstAlphaFactor:ci,DstColorFactor:ul,DynamicCopyUsage:ad,DynamicDrawUsage:wc,DynamicReadUsage:id,EdgesGeometry:O,EllipseCurve:X,EqualCompare:so,EqualDepth:Fr,EqualStencilFunc:Mc,EquirectangularReflectionMapping:yl,EquirectangularRefractionMapping:Sl,Euler:Ei,EventDispatcher:bi,ExternalTexture:Lu,ExtrudeGeometry:st,FileLoader:xs,Float16BufferAttribute:na,Float32BufferAttribute:Ye,FloatType:is,Fog:zc,FogExp2:Bc,FramebufferTexture:wu,FrontSide:ki,Frustum:qs,FrustumArray:Ar,GLBufferAttribute:Mp,GLSL1:ld,GLSL3:cd,GreaterCompare:wh,GreaterDepth:Or,GreaterEqualCompare:Rh,GreaterEqualDepth:Cn,GreaterEqualStencilFunc:Ec,GreaterStencilFunc:Tc,GridHelper:Gp,Group:mr,HTMLTexture:Iu,HalfFloatType:As,HemisphereLight:df,HemisphereLightHelper:zp,IcosahedronGeometry:Oe,ImageBitmapLoader:rp,ImageLoader:tl,ImageUtils:Dc,IncrementStencilOp:mc,IncrementWrapStencilOp:_c,InstancedBufferAttribute:Vs,InstancedBufferGeometry:yf,InstancedInterleavedBuffer:Sp,InstancedMesh:eh,Int16BufferAttribute:nu,Int32BufferAttribute:Vc,Int8BufferAttribute:tu,IntType:Wa,InterleavedBuffer:yr,InterleavedBufferAttribute:fs,Interpolant:Pt,InterpolateBezier:Qa,InterpolateDiscrete:sr,InterpolateLinear:Wr,InterpolateSmooth:Xr,InterpolationSamplingMode:dd,InterpolationSamplingType:ud,InvertStencilOp:vc,KeepStencilOp:or,KeyframeTrack:rn,LOD:Zc,LatheGeometry:de,Layers:co,LessCompare:Eh,LessDepth:Ua,LessEqualCompare:td,LessEqualDepth:Yt,LessEqualStencilFunc:bc,LessStencilFunc:Sc,Light:Js,LightProbe:vf,LightShadow:dh,Line:Qi,Line3:Pp,LineBasicMaterial:On,LineCurve:Z,LineCurve3:me,LineDashedMaterial:J,LineLoop:rh,LineSegments:fi,LinearFilter:Gn,LinearInterpolant:$t,LinearMipMapLinearFilter:Ts,LinearMipMapNearestFilter:yh,LinearMipmapLinearFilter:Gr,LinearMipmapNearestFilter:bl,LinearSRGBColorSpace:Yr,LinearToneMapping:gl,LinearTransfer:Zr,Loader:ai,LoaderUtils:Wu,LoadingManager:Bu,LoopOnce:nc,LoopPingPong:sc,LoopRepeat:ic,MOUSE:zn,Material:Ct,MaterialBlending:xi,MaterialLoader:Vu,MathUtils:zd,Matrix2:Df,Matrix3:Ti,Matrix4:yt,MaxEquation:Ms,Mesh:ui,MeshBasicMaterial:ps,MeshDepthMaterial:G,MeshDistanceMaterial:se,MeshLambertMaterial:y,MeshMatcapMaterial:j,MeshNormalMaterial:Qo,MeshPhongMaterial:hh,MeshPhysicalMaterial:ch,MeshStandardMaterial:Ko,MeshToonMaterial:uh,MinEquation:Qs,MirroredRepeatWrapping:ts,MixOperation:fl,MultiplyBlending:Wt,MultiplyOperation:er,NearestFilter:Pn,NearestMipMapLinearFilter:Ha,NearestMipMapNearestFilter:vh,NearestMipmapLinearFilter:ns,NearestMipmapNearestFilter:Ml,NeutralToneMapping:Br,NeverCompare:Ah,NeverDepth:Da,NeverStencilFunc:yc,NoBlending:ol,NoColorSpace:qr,NoNormalPacking:hc,NoToneMapping:ml,NormalAnimationBlendMode:Rs,NormalBlending:Ss,NormalGAPacking:dc,NormalRGPacking:uc,NotEqualCompare:Ch,NotEqualDepth:Fa,NotEqualStencilFunc:Ac,NumberKeyframeTrack:Ht,Object3D:Gt,ObjectLoader:np,ObjectSpaceNormalMap:cc,OctahedronGeometry:Fe,OneFactor:cl,OneMinusConstantAlphaFactor:La,OneMinusConstantColorFactor:_h,OneMinusDstAlphaFactor:Ia,OneMinusDstColorFactor:jn,OneMinusSrcAlphaFactor:yi,OneMinusSrcColorFactor:vi,OrthographicCamera:ku,PCFShadowMap:Ni,PCFSoftShadowMap:Zn,Path:Ce,PerspectiveCamera:gi,Plane:Gi,PlaneGeometry:Xe,PlaneHelper:Zp,PointLight:mf,PointLightHelper:Fp,Points:Zs,PointsMaterial:Bo,PolarGridHelper:kp,PolyhedronGeometry:f,PositionalAudio:pp,PropertyBinding:Vt,PropertyMixer:wf,QuadraticBezierCurve:Te,QuadraticBezierCurve3:ue,Quaternion:Dn,QuaternionKeyframeTrack:mi,QuaternionLinearInterpolant:ln,R11_EAC_Format:ja,RAD2DEG:hr,RED_GREEN_RGTC2_Format:$a,RED_RGTC1_Format:ir,REVISION:Tt,RG11_EAC_Format:bh,RGBADepthPacking:ac,RGBAFormat:Es,RGBAIntegerFormat:Nl,RGBA_ASTC_10x10_Format:Ql,RGBA_ASTC_10x5_Format:Jl,RGBA_ASTC_10x6_Format:$l,RGBA_ASTC_10x8_Format:Kl,RGBA_ASTC_12x10_Format:ec,RGBA_ASTC_12x12_Format:ss,RGBA_ASTC_4x4_Format:Xl,RGBA_ASTC_5x4_Format:ql,RGBA_ASTC_5x5_Format:Hr,RGBA_ASTC_6x5_Format:Yl,RGBA_ASTC_6x6_Format:Vr,RGBA_ASTC_8x5_Format:nr,RGBA_ASTC_8x6_Format:Zl,RGBA_ASTC_8x8_Format:jl,RGBA_BPTC_Format:rs,RGBA_ETC2_EAC_Format:Za,RGBA_PVRTC_2BPPV1_Format:Ya,RGBA_PVRTC_4BPPV1_Format:kl,RGBA_S3TC_DXT1_Format:Fl,RGBA_S3TC_DXT3_Format:Ol,RGBA_S3TC_DXT5_Format:Bl,RGBDepthPacking:oc,RGBFormat:Il,RGBIntegerFormat:Mh,RGB_BPTC_SIGNED_Format:tc,RGB_BPTC_UNSIGNED_Format:ws,RGB_ETC1_Format:Hl,RGB_ETC2_Format:Vl,RGB_PVRTC_2BPPV1_Format:Gl,RGB_PVRTC_4BPPV1_Format:zl,RGB_S3TC_DXT1_Format:Ul,RGDepthPacking:lc,RGFormat:Ll,RGIntegerFormat:Dl,RawShaderMaterial:$o,Ray:Gs,Raycaster:Tp,RectAreaLight:xf,RedFormat:Xa,RedIntegerFormat:qa,ReinhardToneMapping:_l,RenderObjectRefreshType:pd,RenderTarget:ro,RenderTarget3D:vp,RepeatWrapping:zr,ReplaceStencilOp:pc,ReverseSubtractEquation:gh,ReversedDepthFuncs:Md,RingGeometry:Se,SIGNED_R11_EAC_Format:Ja,SIGNED_RED_GREEN_RGTC2_Format:Ka,SIGNED_RED_RGTC1_Format:Th,SIGNED_RG11_EAC_Format:Wl,SRGBColorSpace:kn,SRGBTransfer:ar,Scene:qh,ShaderMaterial:Sa,ShadowMaterial:Yo,Shape:pt,ShapeGeometry:ze,ShapePath:Kp,ShapeUtils:Le,ShortType:Wi,Skeleton:ua,SkeletonHelper:Np,SkinnedMesh:Hs,Source:Bh,Sphere:En,SphereGeometry:Xt,Spherical:wp,SphericalHarmonics3:Hu,SplineCurve:We,SpotLight:pf,SpotLightHelper:Dp,Sprite:Yc,SpriteMaterial:dn,SrcAlphaFactor:hl,SrcAlphaSaturateFactor:dl,SrcColorFactor:Ur,StaticCopyUsage:rd,StaticDrawUsage:lr,StaticReadUsage:Ph,StereoCamera:cp,StreamCopyUsage:od,StreamDrawUsage:nd,StreamReadUsage:sd,StringKeyframeTrack:zt,SubtractEquation:Oi,SubtractiveBlending:ll,TOUCH:en,TangentSpaceNormalMap:Yi,TetrahedronGeometry:Ot,Texture:hn,TextureLoader:Yf,TextureSource:Bi,TextureUtils:tm,Timer:Tf,TimestampQuery:hd,TorusGeometry:ri,TorusKnotGeometry:pi,Triangle:ti,TriangleFanDrawMode:rc,TriangleStripDrawMode:to,TrianglesDrawMode:eo,TubeGeometry:Wo,UVMapping:Hi,Uint16BufferAttribute:Hc,Uint32BufferAttribute:mo,Uint8BufferAttribute:kc,Uint8ClampedBufferAttribute:zs,Uniform:Pf,UniformsGroup:yp,UniformsUtils:jo,UnsignedByteType:Si,UnsignedInt101111Type:Cl,UnsignedInt248Type:Sh,UnsignedInt5999Type:wl,UnsignedIntType:tr,UnsignedShort4444Type:Al,UnsignedShort5551Type:El,UnsignedShortType:Va,VSMShadowMap:al,Vector2:we,Vector3:U,Vector4:Vn,VectorKeyframeTrack:Ci,VideoFrameTexture:Eu,VideoTexture:oh,WebGL3DRenderTarget:Gh,WebGLArrayRenderTarget:zh,WebGLCoordinateSystem:Mi,WebGLRenderTarget:ao,WebGPUCoordinateSystem:Is,WebXRController:Kd,WireframeGeometry:Xo,WrapAroundEnding:Cs,ZeroCurvatureEnding:Xi,ZeroFactor:Nr,ZeroSlopeEnding:qi,ZeroStencilOp:fc,cloneUniforms:ya,createCanvasElement:_d,createElementNS:jr,error:Nt,getByteLength:em,getConsoleFunction:vd,getUnlitUniformColorSpace:Uu,isTypedArray:Cc,log:Rc,mergeUniforms:gs,probeAsync:Sd,setConsoleFunction:xd,warn:lt,warnOnce:os,yieldToMain:yd}}();P["vendor/three.module.js"]=function(){const{Matrix3:Tt,Vector2:zn,Color:en,Vector3:wt,mergeUniforms:Yn,CubeUVReflectionMapping:Dr,Mesh:Di,BoxGeometry:Ra,ShaderMaterial:Ni,BackSide:Zn,cloneUniforms:al,Matrix4:ki,ColorManagement:tn,SRGBTransfer:Kt,PlaneGeometry:ol,FrontSide:Ss,getUnlitUniformColorSpace:mh,IntType:ll,warn:Wt,HalfFloatType:Ui,UnsignedByteType:xi,FloatType:Fi,RGBAFormat:Oi,Plane:gh,CubeReflectionMapping:Qs,CubeRefractionMapping:Ms,BufferGeometry:Nr,OrthographicCamera:cl,PerspectiveCamera:Ur,NoToneMapping:vi,MeshBasicMaterial:hl,NoBlending:yi,WebGLRenderTarget:ci,BufferAttribute:Ia,LinearSRGBColorSpace:ul,LinearFilter:jn,CubeTexture:dl,LinearMipmapLinearFilter:bs,CubeCamera:_h,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:La,warnOnce:Da,Uint32BufferAttribute:Na,Uint16BufferAttribute:Ua,error:Yt,DataArrayTexture:Fr,Vector4:Cn,Float32BufferAttribute:Or,RawShaderMaterial:Fa,CustomToneMapping:er,NeutralToneMapping:fl,AgXToneMapping:pl,ACESFilmicToneMapping:ml,CineonToneMapping:gl,ReinhardToneMapping:_l,LinearToneMapping:xl,Data3DTexture:xh,GreaterEqualCompare:Oa,LessEqualCompare:Ba,DepthTexture:Br,Texture:za,GLSL3:Ga,VSMShadowMap:Hi,PCFShadowMap:Vi,AddOperation:vl,MixOperation:yl,MultiplyOperation:Sl,LinearTransfer:ka,UniformsUtils:zr,DoubleSide:yn,NormalBlending:ts,TangentSpaceNormalMap:Pn,ObjectSpaceNormalMap:Ml,Layers:vh,RGFormat:ns,RG11_EAC_Format:Ha,RED_GREEN_RGTC2_Format:Gn,MeshDepthMaterial:bl,MeshDistanceMaterial:yh,PCFSoftShadowMap:Gr,DepthFormat:Ts,NearestFilter:Si,CubeDepthTexture:Tl,UnsignedIntType:Wi,Frustum:Va,LessEqualDepth:Wa,ReverseSubtractEquation:tr,SubtractEquation:is,AddEquation:As,OneMinusConstantAlphaFactor:Al,ConstantAlphaFactor:El,OneMinusConstantColorFactor:Sh,ConstantColorFactor:wl,OneMinusDstAlphaFactor:Cl,OneMinusDstColorFactor:Rl,OneMinusSrcAlphaFactor:Il,OneMinusSrcColorFactor:Es,DstAlphaFactor:kr,DstColorFactor:Pl,SrcAlphaSaturateFactor:Xa,SrcAlphaFactor:qa,SrcColorFactor:Ll,OneFactor:Dl,ZeroFactor:Mh,NotEqualDepth:Nl,GreaterDepth:Ul,GreaterEqualDepth:Fl,EqualDepth:Ol,LessDepth:Bl,AlwaysDepth:zl,NeverDepth:Gl,CullFaceNone:kl,CullFaceBack:Ya,CullFaceFront:Hl,CustomBlending:Vl,MultiplyBlending:Za,SubtractiveBlending:ja,AdditiveBlending:Ja,ReversedDepthFuncs:bh,MinEquation:Wl,MaxEquation:Xl,MirroredRepeatWrapping:ql,ClampToEdgeWrapping:Hr,RepeatWrapping:Yl,LinearMipmapNearestFilter:Vr,NearestMipmapLinearFilter:nr,NearestMipmapNearestFilter:Zl,NotEqualCompare:jl,GreaterCompare:Jl,EqualCompare:$l,LessCompare:Kl,AlwaysCompare:Ql,NeverCompare:ec,NoColorSpace:ss,DepthStencilFormat:rs,getByteLength:tc,UnsignedInt248Type:ws,UnsignedShortType:ir,createElementNS:Th,UnsignedShort4444Type:$a,UnsignedShort5551Type:Ka,UnsignedInt5999Type:nc,UnsignedInt101111Type:ic,ByteType:sc,ShortType:sr,AlphaFormat:Wr,RGBFormat:Xr,RedFormat:Qa,RedIntegerFormat:Xi,RGIntegerFormat:qi,RGBAIntegerFormat:Cs,RGB_S3TC_DXT1_Format:Rs,RGBA_S3TC_DXT1_Format:rr,RGBA_S3TC_DXT3_Format:eo,RGBA_S3TC_DXT5_Format:to,RGB_PVRTC_4BPPV1_Format:rc,RGB_PVRTC_2BPPV1_Format:no,RGBA_PVRTC_4BPPV1_Format:ac,RGBA_PVRTC_2BPPV1_Format:oc,RGB_ETC1_Format:lc,RGB_ETC2_Format:Yi,RGBA_ETC2_EAC_Format:cc,R11_EAC_Format:qr,SIGNED_R11_EAC_Format:kn,SIGNED_RG11_EAC_Format:Yr,RGBA_ASTC_4x4_Format:Zr,RGBA_ASTC_5x4_Format:ar,RGBA_ASTC_5x5_Format:hc,RGBA_ASTC_6x5_Format:uc,RGBA_ASTC_6x6_Format:dc,RGBA_ASTC_8x5_Format:fc,RGBA_ASTC_8x6_Format:or,RGBA_ASTC_8x8_Format:pc,RGBA_ASTC_10x5_Format:mc,RGBA_ASTC_10x6_Format:gc,RGBA_ASTC_10x8_Format:_c,RGBA_ASTC_10x10_Format:xc,RGBA_ASTC_12x10_Format:vc,RGBA_ASTC_12x12_Format:yc,RGBA_BPTC_Format:Sc,RGB_BPTC_SIGNED_Format:Mc,RGB_BPTC_UNSIGNED_Format:bc,RED_RGTC1_Format:Tc,SIGNED_RED_RGTC1_Format:Ac,SIGNED_RED_GREEN_RGTC2_Format:Ec,ExternalTexture:io,EventDispatcher:Ah,ArrayCamera:Eh,WebXRController:so,RAD2DEG:td,DataTexture:wh,createCanvasElement:Ch,SRGBColorSpace:Rh,REVISION:Ih,log:lr,WebGLCoordinateSystem:wc,probeAsync:nd}=P["vendor/three.core.js"];function Ph(){let a=null,f=!1,h=null,g=null;function E(b,R){g=a.requestAnimationFrame(E);h(b,R)}return{start:function(){if(f===!0)return;if(h===null)return;if(a===null)return;g=a.requestAnimationFrame(E);f=!0},stop:function(){if(a!==null)a.cancelAnimationFrame(g);f=!1},setAnimationLoop:function(b){h=b},setContext:function(b){a=b}}}function id(a){const f=new WeakMap;function h(O,ie){const{array:X,usage:ae}=O,re=X.byteLength,D=a.createBuffer();a.bindBuffer(ie,D);a.bufferData(ie,X,ae);O.onUploadCallback();let Y;if(X instanceof Float32Array)Y=a.FLOAT;else if(typeof Float16Array<"u"&&X instanceof Float16Array)Y=a.HALF_FLOAT;else if(X instanceof Uint16Array)if(O.isFloat16BufferAttribute)Y=a.HALF_FLOAT;else Y=a.UNSIGNED_SHORT;else if(X instanceof Int16Array)Y=a.SHORT;else if(X instanceof Uint32Array)Y=a.UNSIGNED_INT;else if(X instanceof Int32Array)Y=a.INT;else if(X instanceof Int8Array)Y=a.BYTE;else if(X instanceof Uint8Array)Y=a.UNSIGNED_BYTE;else if(X instanceof Uint8ClampedArray)Y=a.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+X);return{buffer:D,type:Y,bytesPerElement:X.BYTES_PER_ELEMENT,version:O.version,size:re}}function g(O,ie,X){const{array:ae,updateRanges:re}=ie;a.bindBuffer(X,O);if(re.length===0)a.bufferSubData(X,0,ae);else{re.sort((Y,K)=>Y.start-K.start);let D=0;for(let Y=1;Y<re.length;Y++){const K=re[D],pe=re[Y];if(pe.start<=K.start+K.count+1)K.count=Math.max(K.count,pe.start+pe.count-K.start);else{++D;re[D]=pe}}re.length=D+1;for(let Y=0,K=re.length;Y<K;Y++){const pe=re[Y];a.bufferSubData(X,pe.start*ae.BYTES_PER_ELEMENT,ae,pe.start,pe.count)}ie.clearUpdateRanges()}ie.onUploadCallback()}function E(O){if(O.isInterleavedBufferAttribute)O=O.data;return f.get(O)}function b(O){if(O.isInterleavedBufferAttribute)O=O.data;const ie=f.get(O);if(ie){a.deleteBuffer(ie.buffer);f.delete(O)}}function R(O,ie){if(O.isInterleavedBufferAttribute)O=O.data;if(O.isGLBufferAttribute){const ae=f.get(O);if(!ae||ae.version<O.version)f.set(O,{buffer:O.buffer,type:O.type,bytesPerElement:O.elementSize,version:O.version});return}const X=f.get(O);if(X===void 0)f.set(O,h(O,ie));else if(X.version<O.version){if(X.size!==O.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(X.buffer,O,ie);X.version=O.version}}return{get:E,remove:b,update:R}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mi=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Is=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cr=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,as=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Rc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lt=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nt=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,os=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",bi=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ln=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ps=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ut=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jr=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ad=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ud=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hn=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vt=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,we=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dn=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ti=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jn=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zi=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ur=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bi=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hn=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vn=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ro=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ao=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oo=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yt=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fr=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ai=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ls=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lo=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ei=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ei=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,co=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pr=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ji=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ho=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$r=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nt={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:Mi,aomap_pars_fragment:Is,batching_pars_vertex:hd,batching_vertex:ud,begin_vertex:dd,beginnormal_vertex:fd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:cr,clipping_planes_pars_fragment:Cc,clipping_planes_pars_vertex:jr,clipping_planes_vertex:_d,color_fragment:Lh,color_pars_fragment:as,color_pars_vertex:xd,color_vertex:vd,common:Rc,cube_uv_reflection_fragment:Dh,defaultnormal_vertex:lt,displacementmap_pars_vertex:Nt,displacementmap_vertex:os,emissivemap_fragment:yd,emissivemap_pars_fragment:Sd,colorspace_fragment:Md,colorspace_pars_fragment:bi,envmap_fragment:Ln,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Ps,envmap_pars_vertex:hr,envmap_physical_pars_fragment:Rd,envmap_vertex:Qn,fog_vertex:ut,fog_pars_vertex:Ic,fog_fragment:bd,fog_pars_fragment:Td,gradientmap_pars_fragment:Jr,lightmap_pars_fragment:Ad,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:wd,lights_pars_begin:Cd,lights_toon_fragment:Id,lights_toon_pars_fragment:Pd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Dd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,lightprobes_pars_fragment:Hn,logdepthbuf_fragment:vt,logdepthbuf_pars_fragment:zd,logdepthbuf_pars_vertex:we,logdepthbuf_vertex:Dn,map_fragment:U,map_pars_fragment:Pc,map_particle_fragment:Uh,map_particle_pars_fragment:Ti,metalnessmap_fragment:Lc,metalnessmap_pars_fragment:Fh,morphinstance_vertex:Oh,morphcolor_vertex:Gd,morphnormal_vertex:Jn,morphtarget_pars_vertex:Zi,morphtarget_vertex:ur,normal_fragment_begin:dr,normal_fragment_maps:Dc,normal_pars_fragment:kd,normal_pars_vertex:Bi,normal_vertex:Nc,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:Hd,clearcoat_normal_fragment_maps:Uc,clearcoat_pars_fragment:hn,iridescence_pars_fragment:Vn,opaque_fragment:ro,packing:ao,premultiplied_alpha_fragment:Fc,project_vertex:zh,dithering_fragment:oo,dithering_pars_fragment:Gh,roughnessmap_fragment:yt,roughnessmap_pars_fragment:fr,shadowmap_pars_fragment:Ai,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:ls,skinbase_vertex:lo,skinning_pars_vertex:ei,skinning_vertex:kh,skinnormal_vertex:Hh,specularmap_fragment:Ei,specularmap_pars_fragment:co,tonemapping_fragment:Xd,tonemapping_pars_fragment:Vh,transmission_fragment:pr,transmission_pars_fragment:ji,uv_pars_fragment:ho,uv_pars_vertex:$r,uv_vertex:qd,worldpos_vertex:Yd,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},De={common:{diffuse:{value:new en(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new zn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new en(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new wt},probesMax:{value:new wt},probesResolution:{value:new wt}},points:{diffuse:{value:new en(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new en(16777215)},opacity:{value:1},center:{value:new zn(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},_n={basic:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new en(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new en(0)},specular:{value:new en(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new en(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new en(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Yn([De.points,De.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Yn([De.common,De.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Yn([De.sprite,De.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Yn([De.common,De.displacementmap,{referencePosition:{value:new wt},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Yn([De.lights,De.fog,{color:{value:new en(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};_n.physical={uniforms:Yn([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new zn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new en(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new zn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new en(0)},specularColor:{value:new en(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new zn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ds={r:0,b:0,g:0},gr=new ki,Ns=new Tt;Ns.set(-1,0,0,0,1,0,0,0,1);function _r(a,f,h,g,E,b){const R=new en(0);let O=E===!0?0:1,ie,X,ae=null,re=0,D=null;function Y(te){let _e=te.isScene===!0?te.background:null;if(_e&&_e.isTexture){const N=te.backgroundBlurriness>0;_e=f.get(_e,N)}return _e}function K(te){let _e=!1;const N=Y(te);if(N===null)w(R,O);else if(N&&N.isColor){w(N,1);_e=!0}const z=a.xr.getEnvironmentBlendMode();if(z==="additive")h.buffers.color.setClear(0,0,0,1,b);else if(z==="alpha-blend")h.buffers.color.setClear(0,0,0,0,b);if(a.autoClear||_e){h.buffers.depth.setTest(!0);h.buffers.depth.setMask(!0);h.buffers.color.setMask(!0);a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil)}}function pe(te,_e){const N=Y(_e);if(N&&(N.isCubeTexture||N.mapping===Dr)){if(X===void 0){X=new Di(new Ra(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:al(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}));X.geometry.deleteAttribute("normal");X.geometry.deleteAttribute("uv");X.onBeforeRender=function(z,q,ee){this.matrixWorld.copyPosition(ee.matrixWorld)};Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}});g.update(X)}X.material.uniforms.envMap.value=N;X.material.uniforms.backgroundBlurriness.value=_e.backgroundBlurriness;X.material.uniforms.backgroundIntensity.value=_e.backgroundIntensity;X.material.uniforms.backgroundRotation.value.setFromMatrix4(gr.makeRotationFromEuler(_e.backgroundRotation)).transpose();if(N.isCubeTexture&&N.isRenderTargetTexture===!1)X.material.uniforms.backgroundRotation.value.premultiply(Ns);X.material.toneMapped=tn.getTransfer(N.colorSpace)!==Kt;if(ae!==N||re!==N.version||D!==a.toneMapping){X.material.needsUpdate=!0;ae=N;re=N.version;D=a.toneMapping}X.layers.enableAll();te.unshift(X,X.geometry,X.material,0,0,null)}else if(N&&N.isTexture){if(ie===void 0){ie=new Di(new ol(2,2),new Ni({name:"BackgroundMaterial",uniforms:al(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1}));ie.geometry.deleteAttribute("normal");Object.defineProperty(ie.material,"map",{get:function(){return this.uniforms.t2D.value}});g.update(ie)}ie.material.uniforms.t2D.value=N;ie.material.uniforms.backgroundIntensity.value=_e.backgroundIntensity;ie.material.toneMapped=tn.getTransfer(N.colorSpace)!==Kt;if(N.matrixAutoUpdate===!0)N.updateMatrix();ie.material.uniforms.uvTransform.value.copy(N.matrix);if(ae!==N||re!==N.version||D!==a.toneMapping){ie.material.needsUpdate=!0;ae=N;re=N.version;D=a.toneMapping}ie.layers.enableAll();te.unshift(ie,ie.geometry,ie.material,0,0,null)}}function w(te,_e){te.getRGB(Ds,mh(a));h.buffers.color.setClear(Ds.r,Ds.g,Ds.b,_e,b)}function S(){if(X!==void 0){X.geometry.dispose();X.material.dispose();X=void 0}if(ie!==void 0){ie.geometry.dispose();ie.material.dispose();ie=void 0}}return{getClearColor:function(){return R},setClearColor:function(te,_e=1){R.set(te);O=_e;w(R,O)},getClearAlpha:function(){return O},setClearAlpha:function(te){O=te;w(R,O)},render:K,addToRenderList:pe,dispose:S}}function us(a,f){const h=a.getParameter(a.MAX_VERTEX_ATTRIBS),g={},E=D(null);let b=E,R=!1;function O(Q,he,Ie,Z,me){let Te=!1;const ue=re(Q,Z,Ie,he);if(b!==ue){b=ue;X(b.object)}Te=Y(Q,Z,Ie,me);if(Te)K(Q,Z,Ie,me);if(me!==null)f.update(me,a.ELEMENT_ARRAY_BUFFER);if(Te||R){R=!1;N(Q,he,Ie,Z);if(me!==null)a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,f.get(me).buffer)}}function ie(){return a.createVertexArray()}function X(Q){return a.bindVertexArray(Q)}function ae(Q){return a.deleteVertexArray(Q)}function re(Q,he,Ie,Z){const me=Z.wireframe===!0;let Te=g[he.id];if(Te===void 0){Te={};g[he.id]=Te}const ue=Q.isInstancedMesh===!0?Q.id:0;let We=Te[ue];if(We===void 0){We={};Te[ue]=We}let xe=We[Ie.id];if(xe===void 0){xe={};We[Ie.id]=xe}let Ee=xe[me];if(Ee===void 0){Ee=D(ie());xe[me]=Ee}return Ee}function D(Q){const he=[],Ie=[],Z=[];for(let me=0;me<h;me++){he[me]=0;Ie[me]=0;Z[me]=0}return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:Ie,attributeDivisors:Z,object:Q,attributes:{},index:null}}function Y(Q,he,Ie,Z){const me=b.attributes,Te=he.attributes;let ue=0;const We=Ie.getAttributes();for(const xe in We)if(We[xe].location>=0){const Ce=me[xe];let pt=Te[xe];if(pt===void 0){if(xe==="instanceMatrix"&&Q.instanceMatrix)pt=Q.instanceMatrix;if(xe==="instanceColor"&&Q.instanceColor)pt=Q.instanceColor}if(Ce===void 0)return!0;if(Ce.attribute!==pt)return!0;if(pt&&Ce.data!==pt.data)return!0;ue++}if(b.attributesNum!==ue)return!0;if(b.index!==Z)return!0;return!1}function K(Q,he,Ie,Z){const me={},Te=he.attributes;let ue=0;const We=Ie.getAttributes();for(const xe in We)if(We[xe].location>=0){let Ce=Te[xe];if(Ce===void 0){if(xe==="instanceMatrix"&&Q.instanceMatrix)Ce=Q.instanceMatrix;if(xe==="instanceColor"&&Q.instanceColor)Ce=Q.instanceColor}const pt={};pt.attribute=Ce;if(Ce&&Ce.data)pt.data=Ce.data;me[xe]=pt;ue++}b.attributes=me;b.attributesNum=ue;b.index=Z}function pe(){const Q=b.newAttributes;for(let he=0,Ie=Q.length;he<Ie;he++)Q[he]=0}function w(Q){S(Q,0)}function S(Q,he){const Ie=b.newAttributes,Z=b.enabledAttributes,me=b.attributeDivisors;Ie[Q]=1;if(Z[Q]===0){a.enableVertexAttribArray(Q);Z[Q]=1}if(me[Q]!==he){a.vertexAttribDivisor(Q,he);me[Q]=he}}function te(){const Q=b.newAttributes,he=b.enabledAttributes;for(let Ie=0,Z=he.length;Ie<Z;Ie++)if(he[Ie]!==Q[Ie]){a.disableVertexAttribArray(Ie);he[Ie]=0}}function _e(Q,he,Ie,Z,me,Te,ue){if(ue===!0)a.vertexAttribIPointer(Q,he,Ie,me,Te);else a.vertexAttribPointer(Q,he,Ie,Z,me,Te)}function N(Q,he,Ie,Z){pe();const me=Z.attributes,Te=Ie.getAttributes(),ue=he.defaultAttributeValues;for(const We in Te){const xe=Te[We];if(xe.location>=0){let Ee=me[We];if(Ee===void 0){if(We==="instanceMatrix"&&Q.instanceMatrix)Ee=Q.instanceMatrix;if(We==="instanceColor"&&Q.instanceColor)Ee=Q.instanceColor}if(Ee!==void 0){const Ce=Ee.normalized,pt=Ee.itemSize,ft=f.get(Ee);if(ft===void 0)continue;const{buffer:xn,type:Mt,bytesPerElement:fe}=ft,Ne=Mt===a.INT||Mt===a.UNSIGNED_INT||Ee.gpuType===ll;if(Ee.isInterleavedBufferAttribute){const Be=Ee.data,mt=Be.stride,_t=Ee.offset;if(Be.isInstancedInterleavedBuffer){for(let ct=0;ct<xe.locationSize;ct++)S(xe.location+ct,Be.meshPerAttribute);if(Q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0)Z._maxInstanceCount=Be.meshPerAttribute*Be.count}else for(let ct=0;ct<xe.locationSize;ct++)w(xe.location+ct);a.bindBuffer(a.ARRAY_BUFFER,xn);for(let ct=0;ct<xe.locationSize;ct++)_e(xe.location+ct,pt/xe.locationSize,Mt,Ce,mt*fe,(_t+pt/xe.locationSize*ct)*fe,Ne)}else{if(Ee.isInstancedBufferAttribute){for(let Be=0;Be<xe.locationSize;Be++)S(xe.location+Be,Ee.meshPerAttribute);if(Q.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0)Z._maxInstanceCount=Ee.meshPerAttribute*Ee.count}else for(let Be=0;Be<xe.locationSize;Be++)w(xe.location+Be);a.bindBuffer(a.ARRAY_BUFFER,xn);for(let Be=0;Be<xe.locationSize;Be++)_e(xe.location+Be,pt/xe.locationSize,Mt,Ce,pt*fe,pt/xe.locationSize*Be*fe,Ne)}}else if(ue!==void 0){const Ce=ue[We];if(Ce!==void 0)switch(Ce.length){case 2:a.vertexAttrib2fv(xe.location,Ce);break;case 3:a.vertexAttrib3fv(xe.location,Ce);break;case 4:a.vertexAttrib4fv(xe.location,Ce);break;default:a.vertexAttrib1fv(xe.location,Ce)}}}}te()}function z(){L();for(const Q in g){const he=g[Q];for(const Ie in he){const Z=he[Ie];for(const me in Z){const Te=Z[me];for(const ue in Te){ae(Te[ue].object);delete Te[ue]}delete Z[me]}}delete g[Q]}}function q(Q){if(g[Q.id]===void 0)return;const he=g[Q.id];for(const Ie in he){const Z=he[Ie];for(const me in Z){const Te=Z[me];for(const ue in Te){ae(Te[ue].object);delete Te[ue]}delete Z[me]}}delete g[Q.id]}function ee(Q){for(const he in g){const Ie=g[he];for(const Z in Ie){const me=Ie[Z];if(me[Q.id]===void 0)continue;const Te=me[Q.id];for(const ue in Te){ae(Te[ue].object);delete Te[ue]}delete me[Q.id]}}}function A(Q){for(const he in g){const Ie=g[he],Z=Q.isInstancedMesh===!0?Q.id:0,me=Ie[Z];if(me===void 0)continue;for(const Te in me){const ue=me[Te];for(const We in ue){ae(ue[We].object);delete ue[We]}delete me[Te]}delete Ie[Z];if(Object.keys(Ie).length===0)delete g[he]}}function L(){be();R=!0;if(b===E)return;b=E;X(b.object)}function be(){E.geometry=null;E.program=null;E.wireframe=!1}return{setup:O,reset:L,resetDefaultState:be,dispose:z,releaseStatesOfGeometry:q,releaseStatesOfObject:A,releaseStatesOfProgram:ee,initAttributes:pe,enableAttribute:w,disableUnusedAttributes:te}}function ds(a,f,h){let g;function E(ie){g=ie}function b(ie,X){a.drawArrays(g,ie,X);h.update(X,g,1)}function R(ie,X,ae){if(ae===0)return;a.drawArraysInstanced(g,ie,X,ae);h.update(X,g,ae)}function O(ie,X,ae){if(ae===0)return;f.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,ie,0,X,0,ae);let D=0;for(let Y=0;Y<ae;Y++)D+=X[Y];h.update(D,g,1)}this.setMode=E;this.render=b;this.renderInstances=R;this.renderMultiDraw=O}function Us(a,f,h,g){let E;function b(){if(E!==void 0)return E;if(f.has("EXT_texture_filter_anisotropic")===!0){const ee=f.get("EXT_texture_filter_anisotropic");E=a.getParameter(ee.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else E=0;return E}function R(ee){if(ee!==Oi&&g.convert(ee)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function O(ee){const A=ee===Ui&&(f.has("EXT_color_buffer_half_float")||f.has("EXT_color_buffer_float"));if(ee!==xi&&ee!==Fi&&!A&&g.convert(ee)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function ie(ee){if(ee==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";ee="mediump"}if(ee==="mediump"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let X=h.precision!==void 0?h.precision:"highp";const ae=ie(X);if(ae!==X){Wt("WebGLRenderer:",X,"not supported, using",ae,"instead.");X=ae}const re=h.logarithmicDepthBuffer===!0,D=h.reversedDepthBuffer===!0&&f.has("EXT_clip_control");if(h.reversedDepthBuffer===!0&&D===!1)Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const Y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),K=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),pe=a.getParameter(a.MAX_TEXTURE_SIZE),w=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),te=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_e=a.getParameter(a.MAX_VARYING_VECTORS),N=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),z=a.getParameter(a.MAX_SAMPLES),q=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:b,getMaxPrecision:ie,textureFormatReadable:R,textureTypeReadable:O,precision:X,logarithmicDepthBuffer:re,reversedDepthBuffer:D,maxTextures:Y,maxVertexTextures:K,maxTextureSize:pe,maxCubemapSize:w,maxAttributes:S,maxVertexUniforms:te,maxVaryings:_e,maxFragmentUniforms:N,maxSamples:z,samples:q}}function ta(a){const f=this;let h=null,g=0,E=!1,b=!1;const R=new gh,O=new Tt,ie={value:null,needsUpdate:!1};this.uniform=ie;this.numPlanes=0;this.numIntersection=0;this.init=function(re,D){const Y=re.length!==0||D||g!==0||E;E=D;g=re.length;return Y};this.beginShadows=function(){b=!0;ae(null)};this.endShadows=function(){b=!1};this.setGlobalState=function(re,D){h=ae(re,D,0)};this.setState=function(re,D,Y){const{clippingPlanes:K,clipIntersection:pe,clipShadows:w}=re,S=a.get(re);if(!E||K===null||K.length===0||b&&!w)if(b)ae(null);else X();else{const te=b?0:g,_e=te*4;let N=S.clippingState||null;ie.value=N;N=ae(K,D,_e,Y);for(let z=0;z!==_e;++z)N[z]=h[z];S.clippingState=N;this.numIntersection=pe?this.numPlanes:0;this.numPlanes+=te}};function X(){if(ie.value!==h){ie.value=h;ie.needsUpdate=g>0}f.numPlanes=g;f.numIntersection=0}function ae(re,D,Y,K){const pe=re!==null?re.length:0;let w=null;if(pe!==0){w=ie.value;if(K!==!0||w===null){const S=Y+pe*4,te=D.matrixWorldInverse;O.getNormalMatrix(te);if(w===null||w.length<S)w=new Float32Array(S);for(let _e=0,N=Y;_e!==pe;++_e,N+=4){R.copy(re[_e]).applyMatrix4(te,O);R.normal.toArray(w,N);w[N+3]=R.constant}}ie.value=w;ie.needsUpdate=!0}f.numPlanes=pe;f.numIntersection=0;return w}}const Ji=4,uo=6,Fs=20,Gc=256,ni=new cl,eu=new en;let Nn=null,Os=0,fo=0,un=!1;const po=new wt,Bs=new wt;class Jt{constructor(a){this._renderer=a;this._pingPongRenderTarget=null;this._lodMax=0;this._cubeSize=0;this._sizeLods=[];this._lodMeshes=[];this._backgroundBox=null;this._cubemapMaterial=null;this._equirectMaterial=null;this._blurMaterial=null;this._ggxMaterial=null}fromScene(a,f=0,h=0.1,g=100,E={}){const{size:b=256,position:R=po}=E;Nn=this._renderer.getRenderTarget();Os=this._renderer.getActiveCubeFace();fo=this._renderer.getActiveMipmapLevel();un=this._renderer.xr.enabled;this._renderer.xr.enabled=!1;this._setSize(b);const O=this._allocateTargets();O.depthBuffer=!0;this._sceneToCubeUV(a,h,g,O,R);if(f>0)this._blur(O,0,0,f);this._applyPMREM(O);this._cleanup(O);return O}fromEquirectangular(a,f=null){return this._fromTexture(a,f)}fromCubemap(a,f=null){return this._fromTexture(a,f)}compileCubemapShader(){if(this._cubemapMaterial===null){this._cubemapMaterial=mo();this._compileMaterial(this._cubemapMaterial)}}compileEquirectangularShader(){if(this._equirectMaterial===null){this._equirectMaterial=Vc();this._compileMaterial(this._equirectMaterial)}}dispose(){this._dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null){this._backgroundBox.geometry.dispose();this._backgroundBox.material.dispose()}}_setSize(a){this._lodMax=Math.floor(Math.log2(a));this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodMeshes.length;a++)this._lodMeshes[a].geometry.dispose()}_cleanup(a){this._renderer.setRenderTarget(Nn,Os,fo);this._renderer.xr.enabled=un;a.scissorTest=!1;zs(a,0,0,a.width,a.height)}_fromTexture(a,f){if(a.mapping===Qs||a.mapping===Ms)this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width);else this._setSize(a.image.width/4);Nn=this._renderer.getRenderTarget();Os=this._renderer.getActiveCubeFace();fo=this._renderer.getActiveMipmapLevel();un=this._renderer.xr.enabled;this._renderer.xr.enabled=!1;const h=f||this._allocateTargets();this._textureToCubeUV(a,h);this._applyPMREM(h);this._cleanup(h);return h}_allocateTargets(){const a=3*Math.max(this._cubeSize,112),f=4*this._cubeSize,h={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ui,format:Oi,colorSpace:ul,depthBuffer:!1},g=kc(a,f,h);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==f){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=kc(a,f,h);const{_lodMax:E}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tu(E));this._blurMaterial=Hc(E,a,f);this._ggxMaterial=nu(E,a,f)}return g}_compileMaterial(a){const f=new Di(new Nr,a);this._renderer.compile(f,ni)}_sceneToCubeUV(a,f,h,g,E){const O=new Ur(90,1,f,h),ie=[1,-1,1,1,1,1],X=[1,1,1,-1,-1,-1],ae=this._renderer,{autoClear:re,toneMapping:D}=ae;ae.getClearColor(eu);ae.toneMapping=vi;ae.autoClear=!1;if(ae.state.buffers.depth.getReversed()){ae.setRenderTarget(g);ae.clearDepth();ae.setRenderTarget(null)}if(this._backgroundBox===null)this._backgroundBox=new Di(new Ra,new hl({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}));const K=this._backgroundBox,pe=K.material;let w=!1;const S=a.background;if(S){if(S.isColor){pe.color.copy(S);a.background=null;w=!0}}else{pe.color.copy(eu);w=!0}for(let te=0;te<6;te++){const _e=te%3;if(_e===0){O.up.set(0,ie[te],0);O.position.set(E.x,E.y,E.z);O.lookAt(E.x+X[te],E.y,E.z)}else if(_e===1){O.up.set(0,0,ie[te]);O.position.set(E.x,E.y,E.z);O.lookAt(E.x,E.y+X[te],E.z)}else{O.up.set(0,ie[te],0);O.position.set(E.x,E.y,E.z);O.lookAt(E.x,E.y,E.z+X[te])}const N=this._cubeSize;zs(g,_e*N,te>2?N:0,N,N);ae.setRenderTarget(g);if(w)ae.render(K,O);ae.render(a,O)}ae.toneMapping=D;ae.autoClear=re;a.background=S}_textureToCubeUV(a,f){const h=this._renderer,g=a.mapping===Qs||a.mapping===Ms;if(g){if(this._cubemapMaterial===null)this._cubemapMaterial=mo();this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Vc();const E=g?this._cubemapMaterial:this._equirectMaterial,b=this._lodMeshes[0];b.material=E;const R=E.uniforms;R.envMap.value=a;const O=this._cubeSize;zs(f,0,0,3*O,2*O);h.setRenderTarget(f);h.render(b,ni)}_applyPMREM(a){const f=this._renderer,h=f.autoClear;f.autoClear=!1;const g=this._lodMeshes.length;for(let E=1;E<g;E++)this._applyGGXFilter(a,E-1,E);f.autoClear=h}_applyGGXFilter(a,f,h){const g=this._renderer,E=this._pingPongRenderTarget,b=this._ggxMaterial,R=this._lodMeshes[h];R.material=b;const O=b.uniforms,ie=h/(this._lodMeshes.length-1),X=f/(this._lodMeshes.length-1),ae=Math.sqrt(ie*ie-X*X),re=ie*1.25,D=ae*re,{_lodMax:Y}=this,K=this._sizeLods[h],pe=3*K*(h>Y-Ji?h-Y+Ji:0),w=4*(this._cubeSize-K);O.envMap.value=a.texture;O.roughness.value=D;O.mipInt.value=Y-f;zs(E,pe,w,3*K,2*K);g.setRenderTarget(E);g.render(R,ni);O.envMap.value=E.texture;O.roughness.value=0;O.mipInt.value=Y-h;zs(a,pe,w,3*K,2*K);g.setRenderTarget(a);g.render(R,ni)}_blur(a,f,h,g){const E=this._pingPongRenderTarget,b=Math.min(g,Math.PI)/Math.SQRT2;this._blurPass(a,E,f,h,b);this._blurPass(E,a,h,h,b)}_blurPass(a,f,h,g,E){const b=this._renderer,R=this._blurMaterial,O=this._lodMeshes[g];O.material=R;const ie=R.uniforms;ie.envMap.value=a.texture;ie.sigma.value=E;ie.mipInt.value=this._lodMax-h;const X=this._sizeLods[g],ae=3*X*(g>this._lodMax-Ji?g-this._lodMax+Ji:0),re=4*(this._cubeSize-X);zs(f,ae,re,3*X,2*X);b.setRenderTarget(f);b.render(O,ni)}}function tu(a){const f=[],h=[];let g=a;const E=a-Ji+1+uo;for(let b=0;b<E;b++){const R=Math.pow(2,g);f.push(R);const O=1/(R-2),ie=-O,X=1+O,ae=[ie,ie,X,ie,X,X,ie,ie,X,X,ie,X],re=6,D=6,Y=3,K=new Float32Array(Y*D*re),pe=new Float32Array(Y*D*re);for(let S=0;S<re;S++){const te=S%3*2/3-1,_e=S>2?0:-1,N=[te,_e,0,te+0.6666666666666666,_e,0,te+0.6666666666666666,_e+1,0,te,_e,0,te+0.6666666666666666,_e+1,0,te,_e+1,0];K.set(N,Y*D*S);for(let z=0;z<D;z++){const q=ae[z*2]*2-1,ee=ae[z*2+1]*2-1;if(S===0)Bs.set(1,ee,q);else if(S===1)Bs.set(-q,1,-ee);else if(S===2)Bs.set(-q,ee,1);else if(S===3)Bs.set(-1,ee,-q);else if(S===4)Bs.set(-q,-1,ee);else Bs.set(q,ee,-1);Bs.toArray(pe,(S*D+z)*Y)}}const w=new Nr;w.setAttribute("position",new Ia(K,Y));w.setAttribute("outputDirection",new Ia(pe,Y));h.push(new Di(w,null));if(g>Ji)g--}return{lodMeshes:h,sizeLods:f}}function kc(a,f,h){const g=new ci(a,f,h);g.texture.mapping=Dr;g.texture.name="PMREM.cubeUv";g.scissorTest=!0;return g}function zs(a,f,h,g,E){a.viewport.set(f,h,g,E);a.scissor.set(f,h,g,E)}function nu(a,f,h){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gc,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/h,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Hc(a,f,h){return new Ni({name:"SphericalGaussianBlur",defines:{SAMPLES:Fs,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/h,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Vc(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function mo(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ye extends ci{constructor(a=1,f={}){super(a,a,f);this.isWebGLCubeRenderTarget=!0;const h={width:a,height:a,depth:1},g=[h,h,h,h,h,h];this.texture=new dl(g);this._setTextureOptions(f);this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(a,f){this.texture.type=f.type;this.texture.colorSpace=f.colorSpace;this.texture.generateMipmaps=f.generateMipmaps;this.texture.minFilter=f.minFilter;this.texture.magFilter=f.magFilter;const h={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},g=new Ra(5,5,5),E=new Ni({name:"CubemapFromEquirect",uniforms:al(h.uniforms),vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,side:Zn,blending:yi});E.uniforms.tEquirect.value=f;const b=new Di(g,E),R=f.minFilter;if(f.minFilter===bs)f.minFilter=jn;new _h(1,10,this).update(a,b);f.minFilter=R;b.geometry.dispose();b.material.dispose();return this}clear(a,f=!0,h=!0,g=!0){const E=a.getRenderTarget();for(let b=0;b<6;b++){a.setRenderTarget(this,b);a.clear(f,h,g)}a.setRenderTarget(E)}}function tf(a){let f=new WeakMap,h=new WeakMap,g=null;function E(D,Y=!1){if(D===null||D===void 0)return null;if(Y)return R(D);return b(D)}function b(D){if(D&&D.isTexture){const Y=D.mapping;if(Y===Pa||Y===La)if(f.has(D)){const K=f.get(D).texture;return O(K,D.mapping)}else{const K=D.image;if(K&&K.height>0){const pe=new Ye(K.height);pe.fromEquirectangularTexture(a,D);f.set(D,pe);D.addEventListener("dispose",X);return O(pe.texture,D.mapping)}else return null}}return D}function R(D){if(D&&D.isTexture){const Y=D.mapping,K=Y===Pa||Y===La,pe=Y===Qs||Y===Ms;if(K||pe){let w=h.get(D);const S=w!==void 0?w.texture.pmremVersion:0;if(D.isRenderTargetTexture&&D.pmremVersion!==S){if(g===null)g=new Jt(a);w=K?g.fromEquirectangular(D,w):g.fromCubemap(D,w);w.texture.pmremVersion=D.pmremVersion;h.set(D,w);return w.texture}else if(w!==void 0)return w.texture;else{const te=D.image;if(K&&te&&te.height>0||pe&&te&&ie(te)){if(g===null)g=new Jt(a);w=K?g.fromEquirectangular(D):g.fromCubemap(D);w.texture.pmremVersion=D.pmremVersion;h.set(D,w);D.addEventListener("dispose",ae);return w.texture}else return null}}}return D}function O(D,Y){if(Y===Pa)D.mapping=Qs;else if(Y===La)D.mapping=Ms;return D}function ie(D){let Y=0;const K=6;for(let pe=0;pe<K;pe++)if(D[pe]!==void 0)Y++;return Y===K}function X(D){const Y=D.target;Y.removeEventListener("dispose",X);const K=f.get(Y);if(K!==void 0){f.delete(Y);K.dispose()}}function ae(D){const Y=D.target;Y.removeEventListener("dispose",ae);const K=h.get(Y);if(K!==void 0){h.delete(Y);K.dispose()}}function re(){f=new WeakMap;h=new WeakMap;if(g!==null){g.dispose();g=null}}return{get:E,dispose:re}}function ia(a){const f={};function h(g){if(f[g]!==void 0)return f[g];const E=a.getExtension(g);f[g]=E;return E}return{has:function(g){return h(g)!==null},init:function(){h("EXT_color_buffer_float");h("WEBGL_clip_cull_distance");h("OES_texture_float_linear");h("EXT_color_buffer_half_float");h("WEBGL_multisampled_render_to_texture");h("WEBGL_render_shared_exponent")},get:function(g){const E=h(g);if(E===null)Da("WebGLRenderer: "+g+" extension not supported.");return E}}}function Wc(a,f,h,g){const E={},b=new WeakMap;function R(re){const D=re.target;if(D.index!==null)f.remove(D.index);for(const K in D.attributes)f.remove(D.attributes[K]);D.removeEventListener("dispose",R);delete E[D.id];const Y=b.get(D);if(Y){f.remove(Y);b.delete(D)}g.releaseStatesOfGeometry(D);if(D.isInstancedBufferGeometry===!0)delete D._maxInstanceCount;h.memory.geometries--}function O(re,D){if(E[D.id]===!0)return D;D.addEventListener("dispose",R);E[D.id]=!0;h.memory.geometries++;return D}function ie(re){const D=re.attributes;for(const Y in D)f.update(D[Y],a.ARRAY_BUFFER)}function X(re){const D=[],Y=re.index,K=re.attributes.position;let pe=0;if(K===void 0)return;if(Y!==null){const te=Y.array;pe=Y.version;for(let _e=0,N=te.length;_e<N;_e+=3){const z=te[_e+0],q=te[_e+1],ee=te[_e+2];D.push(z,q,q,ee,ee,z)}}else{const te=K.array;pe=K.version;for(let _e=0,N=te.length/3-1;_e<N;_e+=3){const z=_e+0,q=_e+1,ee=_e+2;D.push(z,q,q,ee,ee,z)}}const w=new(K.count>=65535?Na:Ua)(D,1);w.version=pe;const S=b.get(re);if(S)f.remove(S);b.set(re,w)}function ae(re){const D=b.get(re);if(D){const Y=re.index;if(Y!==null){if(D.version<Y.version)X(re)}}else X(re);return b.get(re)}return{get:O,update:ie,getWireframeAttribute:ae}}function En(a,f,h){let g;function E(re){g=re}let b,R;function O(re){b=re.type;R=re.bytesPerElement}function ie(re,D){a.drawElements(g,D,b,re*R);h.update(D,g,1)}function X(re,D,Y){if(Y===0)return;a.drawElementsInstanced(g,D,b,re*R,Y);h.update(D,g,Y)}function ae(re,D,Y){if(Y===0)return;f.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,D,0,b,re,0,Y);let pe=0;for(let w=0;w<Y;w++)pe+=D[w];h.update(pe,g,1)}this.setMode=E;this.setIndex=O;this.render=ie;this.renderInstances=X;this.renderMultiDraw=ae}function nf(a){const f={geometries:0,textures:0},h={frame:0,calls:0,triangles:0,points:0,lines:0};function g(b,R,O){h.calls++;switch(R){case a.TRIANGLES:h.triangles+=O*(b/3);break;case a.LINES:h.lines+=O*(b/2);break;case a.LINE_STRIP:h.lines+=O*(b-1);break;case a.LINE_LOOP:h.lines+=O*b;break;case a.POINTS:h.points+=O*b;break;default:Yt("WebGLInfo: Unknown draw mode:",R);break}}function E(){h.calls=0;h.triangles=0;h.points=0;h.lines=0}return{memory:f,render:h,programs:null,autoReset:!0,reset:E,update:g}}function hi(a,f,h){const g=new WeakMap,E=new Cn;function b(R,O,ie){const X=R.morphTargetInfluences,ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=ae!==void 0?ae.length:0;let D=g.get(O);if(D===void 0||D.count!==re){let L=function(){ee.dispose();g.delete(O);O.removeEventListener("dispose",L)};if(D!==void 0)D.texture.dispose();const Y=O.morphAttributes.position!==void 0,K=O.morphAttributes.normal!==void 0,pe=O.morphAttributes.color!==void 0,w=O.morphAttributes.position||[],S=O.morphAttributes.normal||[],te=O.morphAttributes.color||[];let _e=0;if(Y===!0)_e=1;if(K===!0)_e=2;if(pe===!0)_e=3;let N=O.attributes.position.count*_e,z=1;if(N>f.maxTextureSize){z=Math.ceil(N/f.maxTextureSize);N=f.maxTextureSize}const q=new Float32Array(N*z*4*re),ee=new Fr(q,N,z,re);ee.type=Fi;ee.needsUpdate=!0;const A=_e*4;for(let be=0;be<re;be++){const Q=w[be],he=S[be],Ie=te[be],Z=N*z*4*be;for(let me=0;me<Q.count;me++){const Te=me*A;if(Y===!0){E.fromBufferAttribute(Q,me);q[Z+Te+0]=E.x;q[Z+Te+1]=E.y;q[Z+Te+2]=E.z;q[Z+Te+3]=0}if(K===!0){E.fromBufferAttribute(he,me);q[Z+Te+4]=E.x;q[Z+Te+5]=E.y;q[Z+Te+6]=E.z;q[Z+Te+7]=0}if(pe===!0){E.fromBufferAttribute(Ie,me);q[Z+Te+8]=E.x;q[Z+Te+9]=E.y;q[Z+Te+10]=E.z;q[Z+Te+11]=Ie.itemSize===4?E.w:1}}}D={count:re,texture:ee,size:new zn(N,z)};g.set(O,D);O.addEventListener("dispose",L)}if(R.isInstancedMesh===!0&&R.morphTexture!==null)ie.getUniforms().setValue(a,"morphTexture",R.morphTexture,h);else{let Y=0;for(let pe=0;pe<X.length;pe++)Y+=X[pe];const K=O.morphTargetsRelative?1:1-Y;ie.getUniforms().setValue(a,"morphTargetBaseInfluence",K);ie.getUniforms().setValue(a,"morphTargetInfluences",X)}ie.getUniforms().setValue(a,"morphTargetsTexture",D.texture,h);ie.getUniforms().setValue(a,"morphTargetsTextureSize",D.size)}return{update:b}}function Xc(a,f,h,g,E){let b=new WeakMap;function R(X){const ae=E.render.frame,re=X.geometry,D=f.get(X,re);if(b.get(D)!==ae){f.update(D);b.set(D,ae)}if(X.isInstancedMesh){if(X.hasEventListener("dispose",ie)===!1)X.addEventListener("dispose",ie);if(b.get(X)!==ae){h.update(X.instanceMatrix,a.ARRAY_BUFFER);if(X.instanceColor!==null)h.update(X.instanceColor,a.ARRAY_BUFFER);b.set(X,ae)}}if(X.isSkinnedMesh){const Y=X.skeleton;if(b.get(Y)!==ae){Y.update();b.set(Y,ae)}}return D}function O(){b=new WeakMap}function ie(X){const ae=X.target;ae.removeEventListener("dispose",ie);g.releaseStatesOfObject(ae);h.remove(ae.instanceMatrix);if(ae.instanceColor!==null)h.remove(ae.instanceColor)}return{update:R,dispose:O}}const xr={[xl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[pl]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[er]:"CUSTOM_TONE_MAPPING"};function ii(a,f,h,g,E,b){const R=new ci(f,h,{type:a,depthBuffer:E,stencilBuffer:b,samples:g?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let O=null,ie=null;const X=new Nr;X.setAttribute("position",new Or([-1,3,0,-1,-1,0,3,-1,0],3));X.setAttribute("uv",new Or([0,2,0,0,2,0],2));const ae=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),re=new Di(X,ae),D=new cl(-1,1,1,-1,0,1);let Y=null,K=null,pe=!1,w,S=null,te=[],_e=!1;this.setSize=function(N,z){R.setSize(N,z);if(O!==null)O.setSize(N,z);if(ie!==null)ie.setSize(N,z);for(let q=0;q<te.length;q++){const ee=te[q];if(ee.setSize)ee.setSize(N,z)}};this.setEffects=function(N){te=N;_e=te.length>0&&te[0].isRenderPass===!0;const{width:z,height:q}=R;if(te.length>0&&O===null){O=new ci(z,q,{type:Ui,depthBuffer:!1,stencilBuffer:!1});ie=new ci(z,q,{type:Ui,depthBuffer:!1,stencilBuffer:!1})}for(let ee=0;ee<te.length;ee++){const A=te[ee];if(A.setSize)A.setSize(z,q)}};this.begin=function(N,z){if(pe)return!1;if(N.toneMapping===vi&&te.length===0)return!1;S=z;if(z!==null){const{width:q,height:ee}=z;if(R.width!==q||R.height!==ee)this.setSize(q,ee)}if(_e===!1)N.setRenderTarget(R);w=N.toneMapping;N.toneMapping=vi;return!0};this.hasRenderPass=function(){return _e};this.end=function(N,z){N.toneMapping=w;pe=!0;let q=R,ee=O;for(let A=0;A<te.length;A++){const L=te[A];if(L.enabled===!1)continue;L.render(N,ee,q,z);if(L.needsSwap!==!1){q=ee;ee=ee===O?ie:O}}if(Y!==N.outputColorSpace||K!==N.toneMapping){Y=N.outputColorSpace;K=N.toneMapping;ae.defines={};if(tn.getTransfer(Y)===Kt)ae.defines.SRGB_TRANSFER="";const A=xr[K];if(A)ae.defines[A]="";ae.needsUpdate=!0}ae.uniforms.tDiffuse.value=q.texture;N.setRenderTarget(S);N.render(re,D);S=null;pe=!1};this.isCompositing=function(){return pe};this.dispose=function(){R.dispose();if(O!==null)O.dispose();if(ie!==null)ie.dispose();X.dispose();ae.dispose()}}const vr=new za,Sn=new Br(1,1),St=new Fr,yr=new xh,Un=new dl,fs=[],go=[],iu=new Float32Array(16),su=new Float32Array(9),Gi=new Float32Array(4);function Sr(a,f,h){const g=a[0];if(g<=0||g>0)return a;const E=f*h;let b=fs[E];if(b===void 0){b=new Float32Array(E);fs[E]=b}if(f!==0){g.toArray(b,0);for(let R=1,O=0;R!==f;++R){O+=h;a[R].toArray(b,O)}}return b}function Ct(a,f){if(a.length!==f.length)return!1;for(let h=0,g=a.length;h<g;h++)if(a[h]!==f[h])return!1;return!0}function dn(a,f){for(let h=0,g=f.length;h<g;h++)a[h]=f[h]}function $i(a,f){let h=go[f];if(h===void 0){h=new Int32Array(f);go[f]=h}for(let g=0;g!==f;++g)h[g]=a.allocateTextureUnit();return h}function sa(a,f){const h=this.cache;if(h[0]===f)return;a.uniform1f(this.addr,f);h[0]=f}function Mr(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y){a.uniform2f(this.addr,f.x,f.y);h[0]=f.x;h[1]=f.y}}else{if(Ct(h,f))return;a.uniform2fv(this.addr,f);dn(h,f)}}function br(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z){a.uniform3f(this.addr,f.x,f.y,f.z);h[0]=f.x;h[1]=f.y;h[2]=f.z}}else if(f.r!==void 0){if(h[0]!==f.r||h[1]!==f.g||h[2]!==f.b){a.uniform3f(this.addr,f.r,f.g,f.b);h[0]=f.r;h[1]=f.g;h[2]=f.b}}else{if(Ct(h,f))return;a.uniform3fv(this.addr,f);dn(h,f)}}function Tr(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z||h[3]!==f.w){a.uniform4f(this.addr,f.x,f.y,f.z,f.w);h[0]=f.x;h[1]=f.y;h[2]=f.z;h[3]=f.w}}else{if(Ct(h,f))return;a.uniform4fv(this.addr,f);dn(h,f)}}function ra(a,f){const h=this.cache,g=f.elements;if(g===void 0){if(Ct(h,f))return;a.uniformMatrix2fv(this.addr,!1,f);dn(h,f)}else{if(Ct(h,g))return;Gi.set(g);a.uniformMatrix2fv(this.addr,!1,Gi);dn(h,g)}}function ru(a,f){const h=this.cache,g=f.elements;if(g===void 0){if(Ct(h,f))return;a.uniformMatrix3fv(this.addr,!1,f);dn(h,f)}else{if(Ct(h,g))return;su.set(g);a.uniformMatrix3fv(this.addr,!1,su);dn(h,g)}}function _o(a,f){const h=this.cache,g=f.elements;if(g===void 0){if(Ct(h,f))return;a.uniformMatrix4fv(this.addr,!1,f);dn(h,f)}else{if(Ct(h,g))return;iu.set(g);a.uniformMatrix4fv(this.addr,!1,iu);dn(h,g)}}function aa(a,f){const h=this.cache;if(h[0]===f)return;a.uniform1i(this.addr,f);h[0]=f}function xo(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y){a.uniform2i(this.addr,f.x,f.y);h[0]=f.x;h[1]=f.y}}else{if(Ct(h,f))return;a.uniform2iv(this.addr,f);dn(h,f)}}function au(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z){a.uniform3i(this.addr,f.x,f.y,f.z);h[0]=f.x;h[1]=f.y;h[2]=f.z}}else{if(Ct(h,f))return;a.uniform3iv(this.addr,f);dn(h,f)}}function qc(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z||h[3]!==f.w){a.uniform4i(this.addr,f.x,f.y,f.z,f.w);h[0]=f.x;h[1]=f.y;h[2]=f.z;h[3]=f.w}}else{if(Ct(h,f))return;a.uniform4iv(this.addr,f);dn(h,f)}}function ou(a,f){const h=this.cache;if(h[0]===f)return;a.uniform1ui(this.addr,f);h[0]=f}function Yc(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y){a.uniform2ui(this.addr,f.x,f.y);h[0]=f.x;h[1]=f.y}}else{if(Ct(h,f))return;a.uniform2uiv(this.addr,f);dn(h,f)}}function vo(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z){a.uniform3ui(this.addr,f.x,f.y,f.z);h[0]=f.x;h[1]=f.y;h[2]=f.z}}else{if(Ct(h,f))return;a.uniform3uiv(this.addr,f);dn(h,f)}}function yo(a,f){const h=this.cache;if(f.x!==void 0){if(h[0]!==f.x||h[1]!==f.y||h[2]!==f.z||h[3]!==f.w){a.uniform4ui(this.addr,f.x,f.y,f.z,f.w);h[0]=f.x;h[1]=f.y;h[2]=f.z;h[3]=f.w}}else{if(Ct(h,f))return;a.uniform4uiv(this.addr,f);dn(h,f)}}function lu(a,f,h){const g=this.cache,E=h.allocateTextureUnit();if(g[0]!==E){a.uniform1i(this.addr,E);g[0]=E}let b;if(this.type===a.SAMPLER_2D_SHADOW){Sn.compareFunction=h.isReversedDepthBuffer()?Oa:Ba;b=Sn}else b=vr;h.setTexture2D(f||b,E)}function Zc(a,f,h){const g=this.cache,E=h.allocateTextureUnit();if(g[0]!==E){a.uniform1i(this.addr,E);g[0]=E}h.setTexture3D(f||yr,E)}function Ki(a,f,h){const g=this.cache,E=h.allocateTextureUnit();if(g[0]!==E){a.uniform1i(this.addr,E);g[0]=E}h.setTextureCube(f||Un,E)}function jc(a,f,h){const g=this.cache,E=h.allocateTextureUnit();if(g[0]!==E){a.uniform1i(this.addr,E);g[0]=E}h.setTexture2DArray(f||St,E)}function So(a){switch(a){case 5126:return sa;case 35664:return Mr;case 35665:return br;case 35666:return Tr;case 35674:return ra;case 35675:return ru;case 35676:return _o;case 5124:case 35670:return aa;case 35667:case 35671:return xo;case 35668:case 35672:return au;case 35669:case 35673:return qc;case 5125:return ou;case 36294:return Yc;case 36295:return vo;case 36296:return yo;case 35678:case 36198:case 36298:case 36306:case 35682:return lu;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Ki;case 36289:case 36303:case 36311:case 36292:return jc}}function Mo(a,f){a.uniform1fv(this.addr,f)}function Gs(a,f){const h=Sr(f,this.size,2);a.uniform2fv(this.addr,h)}function ps(a,f){const h=Sr(f,this.size,3);a.uniform3fv(this.addr,h)}function cu(a,f){const h=Sr(f,this.size,4);a.uniform4fv(this.addr,h)}function ks(a,f){const h=Sr(f,this.size,4);a.uniformMatrix2fv(this.addr,!1,h)}function bo(a,f){const h=Sr(f,this.size,9);a.uniformMatrix3fv(this.addr,!1,h)}function hu(a,f){const h=Sr(f,this.size,16);a.uniformMatrix4fv(this.addr,!1,h)}function To(a,f){a.uniform1iv(this.addr,f)}function Ao(a,f){a.uniform2iv(this.addr,f)}function Eo(a,f){a.uniform3iv(this.addr,f)}function Jc(a,f){a.uniform4iv(this.addr,f)}function wo(a,f){a.uniform1uiv(this.addr,f)}function uu(a,f){a.uniform2uiv(this.addr,f)}function Co(a,f){a.uniform3uiv(this.addr,f)}function ui(a,f){a.uniform4uiv(this.addr,f)}function sf(a,f,h){const g=this.cache,E=f.length,b=$i(h,E);if(!Ct(g,b)){a.uniform1iv(this.addr,b);dn(g,b)}let R;if(this.type===a.SAMPLER_2D_SHADOW)R=Sn;else R=vr;for(let O=0;O!==E;++O)h.setTexture2D(f[O]||R,b[O])}function Ro(a,f,h){const g=this.cache,E=f.length,b=$i(h,E);if(!Ct(g,b)){a.uniform1iv(this.addr,b);dn(g,b)}for(let R=0;R!==E;++R)h.setTexture3D(f[R]||yr,b[R])}function oa(a,f,h){const g=this.cache,E=f.length,b=$i(h,E);if(!Ct(g,b)){a.uniform1iv(this.addr,b);dn(g,b)}for(let R=0;R!==E;++R)h.setTextureCube(f[R]||Un,b[R])}function du(a,f,h){const g=this.cache,E=f.length,b=$i(h,E);if(!Ct(g,b)){a.uniform1iv(this.addr,b);dn(g,b)}for(let R=0;R!==E;++R)h.setTexture2DArray(f[R]||St,b[R])}function fu(a){switch(a){case 5126:return Mo;case 35664:return Gs;case 35665:return ps;case 35666:return cu;case 35674:return ks;case 35675:return bo;case 35676:return hu;case 5124:case 35670:return To;case 35667:case 35671:return Ao;case 35668:case 35672:return Eo;case 35669:case 35673:return Jc;case 5125:return wo;case 36294:return uu;case 36295:return Co;case 36296:return ui;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return Ro;case 35680:case 36300:case 36308:case 36293:return oa;case 36289:case 36303:case 36311:case 36292:return du}}class pu{constructor(a,f,h){this.id=a;this.addr=h;this.cache=[];this.type=f.type;this.setValue=So(f.type)}}class $c{constructor(a,f,h){this.id=a;this.addr=h;this.cache=[];this.type=f.type;this.size=f.size;this.setValue=fu(f.type)}}class la{constructor(a){this.id=a;this.seq=[];this.map={}}setValue(a,f,h){const g=this.seq;for(let E=0,b=g.length;E!==b;++E){const R=g[E];R.setValue(a,f[R.id],h)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Kc(a,f){a.seq.push(f);a.map[f.id]=f}function Qc(a,f,h){const g=a.name,E=g.length;ca.lastIndex=0;while(!0){const b=ca.exec(g),R=ca.lastIndex;let O=b[1];const ie=b[2]==="]",X=b[3];if(ie)O=O|0;if(X===void 0||X==="["&&R+2===E){Kc(h,X===void 0?new pu(O,a,f):new $c(O,a,f));break}else{let re=h.map[O];if(re===void 0){re=new la(O);Kc(h,re)}h=re}}}class Hs{constructor(a,f){this.seq=[];this.map={};const h=a.getProgramParameter(f,a.ACTIVE_UNIFORMS);for(let b=0;b<h;++b){const R=a.getActiveUniform(f,b),O=a.getUniformLocation(f,R.name);Qc(R,O,this)}const g=[],E=[];for(const b of this.seq)if(b.type===a.SAMPLER_2D_SHADOW||b.type===a.SAMPLER_CUBE_SHADOW||b.type===a.SAMPLER_2D_ARRAY_SHADOW)g.push(b);else E.push(b);if(g.length>0)this.seq=g.concat(E)}setValue(a,f,h,g){const E=this.map[f];if(E!==void 0)E.setValue(a,h,g)}setOptional(a,f,h){const g=f[h];if(g!==void 0)this.setValue(a,h,g)}static upload(a,f,h,g){for(let E=0,b=f.length;E!==b;++E){const R=f[E],O=h[R.id];if(O.needsUpdate!==!1)R.setValue(a,O.value,g)}}static seqWithValue(a,f){const h=[];for(let g=0,E=a.length;g!==E;++g){const b=a[g];if(b.id in f)h.push(b)}return h}}function ha(a,f,h){const g=a.createShader(f);a.shaderSource(g,h);a.compileShader(g);return g}const di=37297;let mu=0;function rf(a,f){const h=a.split(`
`),g=[],E=Math.max(f-6,0),b=Math.min(f+6,h.length);for(let R=E;R<b;R++){const O=R+1;g.push(`${O===f?">":" "} ${O}: ${h[R]}`)}return g.join(`
`)}const ua=new Tt;function Vs(a){tn._getMatrix(ua,tn.workingColorSpace,a);const f=`mat3( ${ua.elements.map((h)=>h.toFixed(4))} )`;switch(tn.getTransfer(a)){case ka:return[f,"LinearTransferOETF"];case Kt:return[f,"sRGBTransferOETF"];default:Wt("WebGLProgram: Unsupported color space: ",a);return[f,"LinearTransferOETF"]}}function Ws(a,f,h){const g=a.getShaderParameter(f,a.COMPILE_STATUS),b=(a.getShaderInfoLog(f)||"").trim();if(g&&b==="")return"";const R=/ERROR: 0:(\d+)/.exec(b);if(R){const O=parseInt(R[1]);return h.toUpperCase()+`

`+b+`

`+rf(a.getShaderSource(f),O)}else return b}function gu(a,f){const h=Vs(f);return[`vec4 ${a}( vec4 value ) {`,`	return ${h[1]}( vec4( value.rgb * ${h[0]}, value.a ) );`,"}"].join(`
`)}const Io={[xl]:"Linear",[_l]:"Reinhard",[gl]:"Cineon",[ml]:"ACESFilmic",[pl]:"AgX",[fl]:"Neutral",[er]:"Custom"};function _u(a,f){const h=Io[f];if(h===void 0){Wt("WebGLProgram: Unsupported toneMapping:",f);return"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"}return"vec3 "+a+"( vec3 color ) { return "+h+"ToneMapping( color ); }"}const Po=new wt;function da(){tn.getLuminanceCoefficients(Po);const a=Po.x.toFixed(4),f=Po.y.toFixed(4),h=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${f}, ${h} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function fa(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function eh(a){const f=[];for(const h in a){const g=a[h];if(g===!1)continue;f.push("#define "+h+" "+g)}return f.join(`
`)}function Xs(a,f){const h={},g=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(let E=0;E<g;E++){const b=a.getActiveAttrib(f,E),R=b.name;let O=1;if(b.type===a.FLOAT_MAT2)O=2;if(b.type===a.FLOAT_MAT3)O=3;if(b.type===a.FLOAT_MAT4)O=4;h[R]={type:b.type,location:a.getAttribLocation(f,R),locationSize:O}}return h}function pa(a){return a!==""}function ma(a,f){const h=f.numSpotLightShadows+f.numSpotLightMaps-f.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,f.numSunLights).replace(/NUM_DIR_LIGHTS/g,f.numDirLights).replace(/NUM_SPOT_LIGHTS/g,f.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,f.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,h).replace(/NUM_RECT_AREA_LIGHTS/g,f.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,f.numPointLights).replace(/NUM_HEMI_LIGHTS/g,f.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,f.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,f.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,f.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,f.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,f.numPointLightShadows)}function qs(a,f){return a.replace(/NUM_CLIPPING_PLANES/g,f.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,f.numClippingPlanes-f.numClipIntersection)}const xu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ar(a){return a.replace(xu,af)}const th=new Map;function af(a,f){let h=nt[f];if(h===void 0){const g=th.get(f);if(g!==void 0){h=nt[g];Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',f,g)}else throw Error("THREE.WebGLProgram: Can not resolve #include <"+f+">")}return Ar(h)}const of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(a){return a.replace(of,$n)}function $n(a,f,h,g){let E="";for(let b=parseInt(f);b<parseInt(h);b++)E+=g.replace(/\[\s*i\s*\]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,b);return E}function vu(a){let f=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;if(a.precision==="highp")f+=`
#define HIGH_PRECISION`;else if(a.precision==="mediump")f+=`
#define MEDIUM_PRECISION`;else if(a.precision==="lowp")f+=`
#define LOW_PRECISION`;return f}const lf={[Vi]:"SHADOWMAP_TYPE_PCF",[Hi]:"SHADOWMAP_TYPE_VSM"};function cf(a){return lf[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lo={[Qs]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function Ys(a){if(a.envMap===!1)return"ENVMAP_TYPE_CUBE";return Lo[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const ga={[Ms]:"ENVMAP_MODE_REFRACTION"};function yu(a){if(a.envMap===!1)return"ENVMAP_MODE_REFLECTION";return ga[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hf={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[yl]:"ENVMAP_BLENDING_MIX",[vl]:"ENVMAP_BLENDING_ADD"};function ih(a){if(a.envMap===!1)return"ENVMAP_BLENDING_NONE";return hf[a.combine]||"ENVMAP_BLENDING_NONE"}function Fn(a){const f=a.envMapCubeUVHeight;if(f===null)return null;const h=Math.log2(f)-2,g=1/f;return{texelWidth:1/(3*Math.max(Math.pow(2,h),112)),texelHeight:g,maxMip:h}}function Do(a,f,h,g){const E=a.getContext(),b=h.defines;let{vertexShader:R,fragmentShader:O}=h;const ie=cf(h),X=Ys(h),ae=yu(h),re=ih(h),D=Fn(h),Y=fa(h),K=eh(b),pe=E.createProgram();let w,S,te=h.glslVersion?"#version "+h.glslVersion+`
`:"";if(h.isRawShaderMaterial){w=["#define SHADER_TYPE "+h.shaderType,"#define SHADER_NAME "+h.shaderName,K].filter(pa).join(`
`);if(w.length>0)w+=`
`;S=["#define SHADER_TYPE "+h.shaderType,"#define SHADER_NAME "+h.shaderName,K].filter(pa).join(`
`);if(S.length>0)S+=`
`}else{w=[vu(h),"#define SHADER_TYPE "+h.shaderType,"#define SHADER_NAME "+h.shaderName,K,h.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",h.batching?"#define USE_BATCHING":"",h.batchingColor?"#define USE_BATCHING_COLOR":"",h.instancing?"#define USE_INSTANCING":"",h.instancingColor?"#define USE_INSTANCING_COLOR":"",h.instancingMorph?"#define USE_INSTANCING_MORPH":"",h.useFog&&h.fog?"#define USE_FOG":"",h.useFog&&h.fogExp2?"#define FOG_EXP2":"",h.map?"#define USE_MAP":"",h.envMap?"#define USE_ENVMAP":"",h.envMap?"#define "+ae:"",h.lightMap?"#define USE_LIGHTMAP":"",h.aoMap?"#define USE_AOMAP":"",h.bumpMap?"#define USE_BUMPMAP":"",h.normalMap?"#define USE_NORMALMAP":"",h.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",h.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",h.displacementMap?"#define USE_DISPLACEMENTMAP":"",h.emissiveMap?"#define USE_EMISSIVEMAP":"",h.anisotropy?"#define USE_ANISOTROPY":"",h.anisotropyMap?"#define USE_ANISOTROPYMAP":"",h.clearcoatMap?"#define USE_CLEARCOATMAP":"",h.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",h.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",h.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",h.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",h.specularMap?"#define USE_SPECULARMAP":"",h.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",h.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",h.roughnessMap?"#define USE_ROUGHNESSMAP":"",h.metalnessMap?"#define USE_METALNESSMAP":"",h.alphaMap?"#define USE_ALPHAMAP":"",h.alphaHash?"#define USE_ALPHAHASH":"",h.transmission?"#define USE_TRANSMISSION":"",h.transmissionMap?"#define USE_TRANSMISSIONMAP":"",h.thicknessMap?"#define USE_THICKNESSMAP":"",h.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",h.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",h.mapUv?"#define MAP_UV "+h.mapUv:"",h.alphaMapUv?"#define ALPHAMAP_UV "+h.alphaMapUv:"",h.lightMapUv?"#define LIGHTMAP_UV "+h.lightMapUv:"",h.aoMapUv?"#define AOMAP_UV "+h.aoMapUv:"",h.emissiveMapUv?"#define EMISSIVEMAP_UV "+h.emissiveMapUv:"",h.bumpMapUv?"#define BUMPMAP_UV "+h.bumpMapUv:"",h.normalMapUv?"#define NORMALMAP_UV "+h.normalMapUv:"",h.displacementMapUv?"#define DISPLACEMENTMAP_UV "+h.displacementMapUv:"",h.metalnessMapUv?"#define METALNESSMAP_UV "+h.metalnessMapUv:"",h.roughnessMapUv?"#define ROUGHNESSMAP_UV "+h.roughnessMapUv:"",h.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+h.anisotropyMapUv:"",h.clearcoatMapUv?"#define CLEARCOATMAP_UV "+h.clearcoatMapUv:"",h.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+h.clearcoatNormalMapUv:"",h.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+h.clearcoatRoughnessMapUv:"",h.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+h.iridescenceMapUv:"",h.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+h.iridescenceThicknessMapUv:"",h.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+h.sheenColorMapUv:"",h.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+h.sheenRoughnessMapUv:"",h.specularMapUv?"#define SPECULARMAP_UV "+h.specularMapUv:"",h.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+h.specularColorMapUv:"",h.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+h.specularIntensityMapUv:"",h.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+h.transmissionMapUv:"",h.thicknessMapUv?"#define THICKNESSMAP_UV "+h.thicknessMapUv:"",h.vertexTangents&&h.flatShading===!1?"#define USE_TANGENT":"",h.vertexNormals?"#define HAS_NORMAL":"",h.vertexColors?"#define USE_COLOR":"",h.vertexAlphas?"#define USE_COLOR_ALPHA":"",h.vertexUv1s?"#define USE_UV1":"",h.vertexUv2s?"#define USE_UV2":"",h.vertexUv3s?"#define USE_UV3":"",h.pointsUvs?"#define USE_POINTS_UV":"",h.flatShading?"#define FLAT_SHADED":"",h.skinning?"#define USE_SKINNING":"",h.morphTargets?"#define USE_MORPHTARGETS":"",h.morphNormals&&h.flatShading===!1?"#define USE_MORPHNORMALS":"",h.morphColors?"#define USE_MORPHCOLORS":"",h.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+h.morphTextureStride:"",h.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+h.morphTargetsCount:"",h.doubleSided?"#define DOUBLE_SIDED":"",h.flipSided?"#define FLIP_SIDED":"",h.shadowMapEnabled?"#define USE_SHADOWMAP":"",h.shadowMapEnabled?"#define "+ie:"",h.sizeAttenuation?"#define USE_SIZEATTENUATION":"",h.numLightProbes>0?"#define USE_LIGHT_PROBES":"",h.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",h.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`);S=[vu(h),"#define SHADER_TYPE "+h.shaderType,"#define SHADER_NAME "+h.shaderName,K,h.useFog&&h.fog?"#define USE_FOG":"",h.useFog&&h.fogExp2?"#define FOG_EXP2":"",h.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",h.map?"#define USE_MAP":"",h.matcap?"#define USE_MATCAP":"",h.envMap?"#define USE_ENVMAP":"",h.envMap?"#define "+X:"",h.envMap?"#define "+ae:"",h.envMap?"#define "+re:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",h.lightMap?"#define USE_LIGHTMAP":"",h.aoMap?"#define USE_AOMAP":"",h.bumpMap?"#define USE_BUMPMAP":"",h.normalMap?"#define USE_NORMALMAP":"",h.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",h.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",h.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",h.emissiveMap?"#define USE_EMISSIVEMAP":"",h.anisotropy?"#define USE_ANISOTROPY":"",h.anisotropyMap?"#define USE_ANISOTROPYMAP":"",h.clearcoat?"#define USE_CLEARCOAT":"",h.clearcoatMap?"#define USE_CLEARCOATMAP":"",h.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",h.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",h.dispersion?"#define USE_DISPERSION":"",h.retroreflection?"#define USE_RETROREFLECTION":"",h.iridescence?"#define USE_IRIDESCENCE":"",h.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",h.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",h.specularMap?"#define USE_SPECULARMAP":"",h.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",h.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",h.roughnessMap?"#define USE_ROUGHNESSMAP":"",h.metalnessMap?"#define USE_METALNESSMAP":"",h.alphaMap?"#define USE_ALPHAMAP":"",h.alphaTest?"#define USE_ALPHATEST":"",h.alphaHash?"#define USE_ALPHAHASH":"",h.sheen?"#define USE_SHEEN":"",h.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",h.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",h.transmission?"#define USE_TRANSMISSION":"",h.transmissionMap?"#define USE_TRANSMISSIONMAP":"",h.thicknessMap?"#define USE_THICKNESSMAP":"",h.vertexTangents&&h.flatShading===!1?"#define USE_TANGENT":"",h.vertexColors||h.instancingColor?"#define USE_COLOR":"",h.vertexAlphas||h.batchingColor?"#define USE_COLOR_ALPHA":"",h.vertexUv1s?"#define USE_UV1":"",h.vertexUv2s?"#define USE_UV2":"",h.vertexUv3s?"#define USE_UV3":"",h.pointsUvs?"#define USE_POINTS_UV":"",h.gradientMap?"#define USE_GRADIENTMAP":"",h.flatShading?"#define FLAT_SHADED":"",h.doubleSided?"#define DOUBLE_SIDED":"",h.flipSided?"#define FLIP_SIDED":"",h.shadowMapEnabled?"#define USE_SHADOWMAP":"",h.shadowMapEnabled?"#define "+ie:"",h.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",h.numLightProbes>0?"#define USE_LIGHT_PROBES":"",h.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",h.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",h.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",h.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",h.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",h.toneMapping!==vi?"#define TONE_MAPPING":"",h.toneMapping!==vi?nt.tonemapping_pars_fragment:"",h.toneMapping!==vi?_u("toneMapping",h.toneMapping):"",h.dithering?"#define DITHERING":"",h.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,gu("linearToOutputTexel",h.outputColorSpace),da(),h.useDepthPacking?"#define DEPTH_PACKING "+h.depthPacking:"",`
`].filter(pa).join(`
`)}R=Ar(R);R=ma(R,h);R=qs(R,h);O=Ar(O);O=ma(O,h);O=qs(O,h);R=nh(R);O=nh(O);if(h.isRawShaderMaterial!==!0){te=`#version 300 es
`;w=[Y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w;S=["#define varying in",h.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",h.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S}const _e=te+w+R,N=te+S+O,z=ha(E,E.VERTEX_SHADER,_e),q=ha(E,E.FRAGMENT_SHADER,N);E.attachShader(pe,z);E.attachShader(pe,q);if(h.index0AttributeName!==void 0)E.bindAttribLocation(pe,0,h.index0AttributeName);else if(h.hasPositionAttribute===!0)E.bindAttribLocation(pe,0,"position");E.linkProgram(pe);function ee(Q){if(a.debug.checkShaderErrors){const he=E.getProgramInfoLog(pe)||"",Ie=E.getShaderInfoLog(z)||"",Z=E.getShaderInfoLog(q)||"",me=he.trim(),Te=Ie.trim(),ue=Z.trim();let We=!0,xe=!0;if(E.getProgramParameter(pe,E.LINK_STATUS)===!1){We=!1;if(typeof a.debug.onShaderError==="function")a.debug.onShaderError(E,pe,z,q);else{const Ee=Ws(E,z,"vertex"),Ce=Ws(E,q,"fragment");Yt("WebGLProgram: Shader Error "+E.getError()+" - VALIDATE_STATUS "+E.getProgramParameter(pe,E.VALIDATE_STATUS)+`

Material Name: `+Q.name+`
Material Type: `+Q.type+`

Program Info Log: `+me+`
`+Ee+`
`+Ce)}}else if(me!=="")Wt("WebGLProgram: Program Info Log:",me);else if(Te===""||ue==="")xe=!1;if(xe)Q.diagnostics={runnable:We,programLog:me,vertexShader:{log:Te,prefix:w},fragmentShader:{log:ue,prefix:S}}}E.deleteShader(z);E.deleteShader(q);A=new Hs(E,pe);L=Xs(E,pe)}let A;this.getUniforms=function(){if(A===void 0)ee(this);return A};let L;this.getAttributes=function(){if(L===void 0)ee(this);return L};let be=h.rendererExtensionParallelShaderCompile===!1;this.isReady=function(){if(be===!1)be=E.getProgramParameter(pe,di);return be};this.destroy=function(){g.releaseStatesOfProgram(this);E.deleteProgram(pe);this.program=void 0};this.type=h.shaderType;this.name=h.shaderName;this.id=mu++;this.cacheKey=f;this.usedTimes=1;this.program=pe;this.vertexShader=z;this.fragmentShader=q;return this}let uf=0;class ms{constructor(){this.shaderCache=new Map;this.materialCache=new Map}update(a,f,h){const g=this._getShaderCacheForMaterial(a);if(g.has(f)===!1){g.add(f);f.usedTimes++}if(g.has(h)===!1){g.add(h);h.usedTimes++}return this}remove(a){const f=this.materialCache.get(a);for(const h of f){h.usedTimes--;if(h.usedTimes===0)this.shaderCache.delete(h.code)}this.materialCache.delete(a);return this}getVertexShaderStage(a){return this._getShaderStage(a.vertexShader)}getFragmentShaderStage(a){return this._getShaderStage(a.fragmentShader)}dispose(){this.shaderCache.clear();this.materialCache.clear()}_getShaderCacheForMaterial(a){const f=this.materialCache;let h=f.get(a);if(h===void 0){h=new Set;f.set(a,h)}return h}_getShaderStage(a){const f=this.shaderCache;let h=f.get(a);if(h===void 0){h=new No(a);f.set(a,h)}return h}}class No{constructor(a){this.id=uf++;this.code=a;this.usedTimes=0}}function On(a){return a===ns||a===Ha||a===Gn}function Uo(a,f,h,g,E,b){const R=new vh,O=new ms,ie=new Set,X=[],ae=new Map,re=g.logarithmicDepthBuffer;let D=g.precision;const Y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function K(A){ie.add(A);if(A===0)return"uv";return`uv${A}`}function pe(A,L,be,Q,he,Ie){const Z=Q.fog,me=he.geometry,Te=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Q.environment:null,ue=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,We=f.get(A.envMap||Te,ue),xe=!!We&&We.mapping===Dr?We.image.height:null,Ee=Y[A.type];if(A.precision!==null){D=g.getMaxPrecision(A.precision);if(D!==A.precision)Wt("WebGLProgram.getParameters:",A.precision,"not supported, using",D,"instead.")}const Ce=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,pt=Ce!==void 0?Ce.length:0;let ft=0;if(me.morphAttributes.position!==void 0)ft=1;if(me.morphAttributes.normal!==void 0)ft=2;if(me.morphAttributes.color!==void 0)ft=3;let xn,Mt,fe,Ne;if(Ee){const Xt=_n[Ee];xn=Xt.vertexShader;Mt=Xt.fragmentShader}else{xn=A.vertexShader;Mt=A.fragmentShader;const Xt=O.getVertexShaderStage(A),Ot=O.getFragmentShaderStage(A);O.update(A,Xt,Ot);fe=Xt.id;Ne=Ot.id}const Be=a.getRenderTarget(),mt=a.state.buffers.depth.getReversed(),_t=he.isInstancedMesh===!0,ct=he.isBatchedMesh===!0,Tn=!!A.map,Rt=!!A.matcap,Ut=!!We,Zt=!!A.aoMap,Ft=!!A.lightMap,Rn=!!A.bumpMap&&A.wireframe===!1,Qt=!!A.normalMap,Kn=!!A.displacementMap,Mn=!!A.emissiveMap,on=!!A.metalnessMap,H=!!A.roughnessMap,It=A.anisotropy>0,Dt=A.clearcoat>0,sn=A.dispersion>0,M=A.retroreflectivity>0,x=A.iridescence>0,k=A.sheen>0,ne=A.transmission>0,ye=It&&!!A.anisotropyMap,Pe=Dt&&!!A.clearcoatMap,Ge=Dt&&!!A.clearcoatNormalMap,ce=Dt&&!!A.clearcoatRoughnessMap,ge=x&&!!A.iridescenceMap,Ve=x&&!!A.iridescenceThicknessMap,tt=k&&!!A.sheenColorMap,Le=k&&!!A.sheenRoughnessMap,Re=!!A.specularMap,it=!!A.specularColorMap,st=!!A.specularIntensityMap,kt=ne&&!!A.transmissionMap,V=ne&&!!A.thicknessMap,Oe=!!A.gradientMap,de=!!A.alphaMap,Fe=A.alphaTest>0,Xe=!!A.alphaHash,Se=!!A.extensions;let ze=vi;if(A.toneMapped){if(Be===null||Be.isXRRenderTarget===!0)ze=a.toneMapping}const xt={shaderID:Ee,shaderType:A.type,shaderName:A.name,vertexShader:xn,fragmentShader:Mt,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:Ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:D,batching:ct,batchingColor:ct&&he._colorsTexture!==null,instancing:_t,instancingColor:_t&&he.instanceColor!==null,instancingMorph:_t&&he.morphTexture!==null,outputColorSpace:Be===null?a.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:tn.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Tn,matcap:Rt,envMap:Ut,envMapMode:Ut&&We.mapping,envMapCubeUVHeight:xe,aoMap:Zt,lightMap:Ft,bumpMap:Rn,normalMap:Qt,displacementMap:Kn,emissiveMap:Mn,normalMapObjectSpace:Qt&&A.normalMapType===Ml,normalMapTangentSpace:Qt&&A.normalMapType===Pn,packedNormalMap:Qt&&A.normalMapType===Pn&&On(A.normalMap.format),metalnessMap:on,roughnessMap:H,anisotropy:It,anisotropyMap:ye,clearcoat:Dt,clearcoatMap:Pe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ce,dispersion:sn,retroreflection:M,iridescence:x,iridescenceMap:ge,iridescenceThicknessMap:Ve,sheen:k,sheenColorMap:tt,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:it,specularIntensityMap:st,transmission:ne,transmissionMap:kt,thicknessMap:V,gradientMap:Oe,opaque:A.transparent===!1&&A.blending===ts&&A.alphaToCoverage===!1,alphaMap:de,alphaTest:Fe,alphaHash:Xe,combine:A.combine,mapUv:Tn&&K(A.map.channel),aoMapUv:Zt&&K(A.aoMap.channel),lightMapUv:Ft&&K(A.lightMap.channel),bumpMapUv:Rn&&K(A.bumpMap.channel),normalMapUv:Qt&&K(A.normalMap.channel),displacementMapUv:Kn&&K(A.displacementMap.channel),emissiveMapUv:Mn&&K(A.emissiveMap.channel),metalnessMapUv:on&&K(A.metalnessMap.channel),roughnessMapUv:H&&K(A.roughnessMap.channel),anisotropyMapUv:ye&&K(A.anisotropyMap.channel),clearcoatMapUv:Pe&&K(A.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&K(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&K(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&K(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&K(A.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&K(A.sheenColorMap.channel),sheenRoughnessMapUv:Le&&K(A.sheenRoughnessMap.channel),specularMapUv:Re&&K(A.specularMap.channel),specularColorMapUv:it&&K(A.specularColorMap.channel),specularIntensityMapUv:st&&K(A.specularIntensityMap.channel),transmissionMapUv:kt&&K(A.transmissionMap.channel),thicknessMapUv:V&&K(A.thicknessMap.channel),alphaMapUv:de&&K(A.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(Qt||It),vertexNormals:!!me.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!me.attributes.uv&&(Tn||de),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||me.attributes.normal===void 0&&Qt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:re,reversedDepthBuffer:mt,skinning:he.isSkinnedMesh===!0,hasPositionAttribute:me.attributes.position!==void 0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:ft,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Ie.length,numClippingPlanes:b.numPlanes,numClipIntersection:b.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&be.length>0,shadowMapType:a.shadowMap.type,toneMapping:ze,decodeVideoTexture:Tn&&A.map.isVideoTexture===!0&&tn.getTransfer(A.map.colorSpace)===Kt,decodeVideoTextureEmissive:Mn&&A.emissiveMap.isVideoTexture===!0&&tn.getTransfer(A.emissiveMap.colorSpace)===Kt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===yn,flipSided:A.side===Zn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Se&&A.extensions.clipCullDistance===!0&&h.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&A.extensions.multiDraw===!0||ct)&&h.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:h.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};xt.vertexUv1s=ie.has(1);xt.vertexUv2s=ie.has(2);xt.vertexUv3s=ie.has(3);ie.clear();return xt}function w(A){const L=[];if(A.shaderID)L.push(A.shaderID);else{L.push(A.customVertexShaderID);L.push(A.customFragmentShaderID)}if(A.defines!==void 0)for(const be in A.defines){L.push(be);L.push(A.defines[be])}if(A.isRawShaderMaterial===!1){S(L,A);te(L,A);L.push(a.outputColorSpace)}L.push(A.customProgramCacheKey);return L.join()}function S(A,L){A.push(L.precision);A.push(L.outputColorSpace);A.push(L.envMapMode);A.push(L.envMapCubeUVHeight);A.push(L.mapUv);A.push(L.alphaMapUv);A.push(L.lightMapUv);A.push(L.aoMapUv);A.push(L.bumpMapUv);A.push(L.normalMapUv);A.push(L.displacementMapUv);A.push(L.emissiveMapUv);A.push(L.metalnessMapUv);A.push(L.roughnessMapUv);A.push(L.anisotropyMapUv);A.push(L.clearcoatMapUv);A.push(L.clearcoatNormalMapUv);A.push(L.clearcoatRoughnessMapUv);A.push(L.iridescenceMapUv);A.push(L.iridescenceThicknessMapUv);A.push(L.sheenColorMapUv);A.push(L.sheenRoughnessMapUv);A.push(L.specularMapUv);A.push(L.specularColorMapUv);A.push(L.specularIntensityMapUv);A.push(L.transmissionMapUv);A.push(L.thicknessMapUv);A.push(L.combine);A.push(L.fogExp2);A.push(L.sizeAttenuation);A.push(L.morphTargetsCount);A.push(L.morphAttributeCount);A.push(L.numSunLights);A.push(L.numDirLights);A.push(L.numPointLights);A.push(L.numSpotLights);A.push(L.numSpotLightMaps);A.push(L.numHemiLights);A.push(L.numRectAreaLights);A.push(L.numSunLightShadows);A.push(L.numDirLightShadows);A.push(L.numPointLightShadows);A.push(L.numSpotLightShadows);A.push(L.numSpotLightShadowsWithMaps);A.push(L.numLightProbes);A.push(L.shadowMapType);A.push(L.toneMapping);A.push(L.numClippingPlanes);A.push(L.numClipIntersection);A.push(L.depthPacking)}function te(A,L){R.disableAll();if(L.instancing)R.enable(0);if(L.instancingColor)R.enable(1);if(L.instancingMorph)R.enable(2);if(L.matcap)R.enable(3);if(L.envMap)R.enable(4);if(L.normalMapObjectSpace)R.enable(5);if(L.normalMapTangentSpace)R.enable(6);if(L.clearcoat)R.enable(7);if(L.iridescence)R.enable(8);if(L.alphaTest)R.enable(9);if(L.vertexColors)R.enable(10);if(L.vertexAlphas)R.enable(11);if(L.vertexUv1s)R.enable(12);if(L.vertexUv2s)R.enable(13);if(L.vertexUv3s)R.enable(14);if(L.vertexTangents)R.enable(15);if(L.anisotropy)R.enable(16);if(L.alphaHash)R.enable(17);if(L.batching)R.enable(18);if(L.dispersion)R.enable(19);if(L.retroreflection)R.enable(24);if(L.batchingColor)R.enable(20);if(L.gradientMap)R.enable(21);if(L.packedNormalMap)R.enable(22);if(L.vertexNormals)R.enable(23);A.push(R.mask);R.disableAll();if(L.fog)R.enable(0);if(L.useFog)R.enable(1);if(L.flatShading)R.enable(2);if(L.logarithmicDepthBuffer)R.enable(3);if(L.reversedDepthBuffer)R.enable(4);if(L.skinning)R.enable(5);if(L.morphTargets)R.enable(6);if(L.morphNormals)R.enable(7);if(L.morphColors)R.enable(8);if(L.premultipliedAlpha)R.enable(9);if(L.shadowMapEnabled)R.enable(10);if(L.doubleSided)R.enable(11);if(L.flipSided)R.enable(12);if(L.useDepthPacking)R.enable(13);if(L.dithering)R.enable(14);if(L.transmission)R.enable(15);if(L.sheen)R.enable(16);if(L.opaque)R.enable(17);if(L.pointsUvs)R.enable(18);if(L.decodeVideoTexture)R.enable(19);if(L.decodeVideoTextureEmissive)R.enable(20);if(L.alphaToCoverage)R.enable(21);if(L.numLightProbeGrids>0)R.enable(22);if(L.hasPositionAttribute)R.enable(23);A.push(R.mask)}function _e(A){const L=Y[A.type];let be;if(L){const Q=_n[L];be=zr.clone(Q.uniforms)}else be=A.uniforms;return be}function N(A,L){let be=ae.get(L);if(be!==void 0)++be.usedTimes;else{be=new Do(a,L,A,E);X.push(be);ae.set(L,be)}return be}function z(A){if(--A.usedTimes===0){const L=X.indexOf(A);X[L]=X[X.length-1];X.pop();ae.delete(A.cacheKey);A.destroy()}}function q(A){O.remove(A)}function ee(){O.dispose()}return{getParameters:pe,getProgramCacheKey:w,getUniforms:_e,acquireProgram:N,releaseProgram:z,releaseShaderCache:q,programs:X,dispose:ee}}function Fo(){let a=new WeakMap;function f(R){return a.has(R)}function h(R){let O=a.get(R);if(O===void 0){O={};a.set(R,O)}return O}function g(R){a.delete(R)}function E(R,O,ie){a.get(R)[O]=ie}function b(){a=new WeakMap}return{has:f,get:h,remove:g,update:E,dispose:b}}function Su(a,f){if(a.groupOrder!==f.groupOrder)return a.groupOrder-f.groupOrder;else if(a.renderOrder!==f.renderOrder)return a.renderOrder-f.renderOrder;else if(a.material.id!==f.material.id)return a.material.id-f.material.id;else if(a.materialVariant!==f.materialVariant)return a.materialVariant-f.materialVariant;else if(a.z!==f.z)return a.z-f.z;else return a.id-f.id}function Er(a,f){if(a.groupOrder!==f.groupOrder)return a.groupOrder-f.groupOrder;else if(a.renderOrder!==f.renderOrder)return a.renderOrder-f.renderOrder;else if(a.z!==f.z)return f.z-a.z;else return a.id-f.id}function _a(){const a=[];let f=0;const h=[],g=[],E=[];function b(){f=0;h.length=0;g.length=0;E.length=0}function R(D){let Y=0;if(D.isInstancedMesh)Y+=2;if(D.isSkinnedMesh)Y+=1;return Y}function O(D,Y,K,pe,w,S){let te=a[f];if(te===void 0){te={id:D.id,object:D,geometry:Y,material:K,materialVariant:R(D),groupOrder:pe,renderOrder:D.renderOrder,z:w,group:S};a[f]=te}else{te.id=D.id;te.object=D;te.geometry=Y;te.material=K;te.materialVariant=R(D);te.groupOrder=pe;te.renderOrder=D.renderOrder;te.z=w;te.group=S}f++;return te}function ie(D,Y,K,pe,w,S,te){if(te.reversedDepth===!0)w=-w;const _e=O(D,Y,K,pe,w,S);if(K.transmission>0)g.push(_e);else if(K.transparent===!0)E.push(_e);else h.push(_e)}function X(D,Y,K,pe,w,S){const te=O(D,Y,K,pe,w,S);if(K.transmission>0)g.unshift(te);else if(K.transparent===!0)E.unshift(te);else h.unshift(te)}function ae(D,Y){if(h.length>1)h.sort(D||Su);if(g.length>1)g.sort(Y||Er);if(E.length>1)E.sort(Y||Er)}function re(){for(let D=f,Y=a.length;D<Y;D++){const K=a[D];if(K.id===null)break;K.id=null;K.object=null;K.geometry=null;K.material=null;K.group=null}}return{opaque:h,transmissive:g,transparent:E,init:b,push:ie,unshift:X,finish:re,sort:ae}}function sh(){let a=new WeakMap;function f(g,E){const b=a.get(g);let R;if(b===void 0){R=new _a;a.set(g,[R])}else if(E>=b.length){R=new _a;b.push(R)}else R=b[E];return R}function h(){a=new WeakMap}return{get:f,dispose:h}}function Mu(){const a={};return{get:function(f){if(a[f.id]!==void 0)return a[f.id];let h;switch(f.type){case"SunLight":case"DirectionalLight":h={direction:new wt,color:new en};break;case"SpotLight":h={position:new wt,direction:new wt,color:new en,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":h={position:new wt,color:new en,distance:0,decay:0};break;case"HemisphereLight":h={direction:new wt,skyColor:new en,groundColor:new en};break;case"RectAreaLight":h={color:new en,position:new wt,halfWidth:new wt,halfHeight:new wt};break}a[f.id]=h;return h}}}function Qi(){const a={};return{get:function(f){if(a[f.id]!==void 0)return a[f.id];let h;switch(f.type){case"SunLight":case"DirectionalLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zn};break;case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zn};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zn,shadowCameraNear:1,shadowCameraFar:1000};break}a[f.id]=h;return h}}}let Oo=0;function bu(a,f){return(f.castShadow?2:0)-(a.castShadow?2:0)+(f.map?1:0)-(a.map?1:0)}function Tu(a){const f=new Mu,h=Qi(),g={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let X=0;X<9;X++)g.probe.push(new wt);const E=new wt,b=new ki,R=new ki;function O(X){let ae=0,re=0,D=0;for(let he=0;he<9;he++)g.probe[he].set(0,0,0);let Y=0,K=0,pe=0,w=0,S=0,te=0,_e=0,N=0,z=0,q=0,ee=0,A=0,L=0,be=0;X.sort(bu);for(let he=0,Ie=X.length;he<Ie;he++){const Z=X[he],{color:me,intensity:Te,distance:ue}=Z;let We=null;if(Z.shadow&&Z.shadow.map)if(Z.shadow.map.texture.format===ns)We=Z.shadow.map.texture;else We=Z.shadow.map.depthTexture||Z.shadow.map.texture;if(Z.isAmbientLight){ae+=me.r*Te;re+=me.g*Te;D+=me.b*Te}else if(Z.isLightProbe){for(let xe=0;xe<9;xe++)g.probe[xe].addScaledVector(Z.sh.coefficients[xe],Te);be++}else if(Z.isSunLight){const xe=f.get(Z);xe.color.copy(Z.color).multiplyScalar(Z.intensity);if(Z.castShadow){const Ee=Z.shadow,Ce=h.get(Z);Ce.shadowIntensity=Ee.intensity;Ce.shadowBias=Ee.bias;Ce.shadowNormalBias=Ee.normalBias;Ce.shadowRadius=Ee.radius;Ce.shadowMapSize.copy(Ee.mapSize).multiply(Ee.getFrameExtents());g.sunShadow[K]=Ce;g.sunShadowMap[K]=We;const pt=Ee.getViewportCount();for(let ft=0;ft<pt;ft++){g.sunShadowMatrix[pe+ft]=Ee.getMatrix(ft);g.sunShadowCascade[pe+ft]=Ee._cascadeData[ft]}pe+=pt;K++}g.sun[Y]=xe;Y++}else if(Z.isDirectionalLight){const xe=f.get(Z);xe.color.copy(Z.color).multiplyScalar(Z.intensity);if(Z.castShadow){const Ee=Z.shadow,Ce=h.get(Z);Ce.shadowIntensity=Ee.intensity;Ce.shadowBias=Ee.bias;Ce.shadowNormalBias=Ee.normalBias;Ce.shadowRadius=Ee.radius;Ce.shadowMapSize=Ee.mapSize;g.directionalShadow[w]=Ce;g.directionalShadowMap[w]=We;g.directionalShadowMatrix[w]=Z.shadow.matrix;z++}g.directional[w]=xe;w++}else if(Z.isSpotLight){const xe=f.get(Z);xe.position.setFromMatrixPosition(Z.matrixWorld);xe.color.copy(me).multiplyScalar(Te);xe.distance=ue;xe.coneCos=Math.cos(Z.angle);xe.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra));xe.decay=Z.decay;g.spot[te]=xe;const Ee=Z.shadow;if(Z.map){g.spotLightMap[A]=Z.map;A++;Ee.updateMatrices(Z);if(Z.castShadow)L++}g.spotLightMatrix[te]=Ee.matrix;if(Z.castShadow){const Ce=h.get(Z);Ce.shadowIntensity=Ee.intensity;Ce.shadowBias=Ee.bias;Ce.shadowNormalBias=Ee.normalBias;Ce.shadowRadius=Ee.radius;Ce.shadowMapSize=Ee.mapSize;g.spotShadow[te]=Ce;g.spotShadowMap[te]=We;ee++}te++}else if(Z.isRectAreaLight){const xe=f.get(Z);xe.color.copy(me).multiplyScalar(Te);xe.halfWidth.set(Z.width*0.5,0,0);xe.halfHeight.set(0,Z.height*0.5,0);g.rectArea[_e]=xe;_e++}else if(Z.isPointLight){const xe=f.get(Z);xe.color.copy(Z.color).multiplyScalar(Z.intensity);xe.distance=Z.distance;xe.decay=Z.decay;if(Z.castShadow){const Ee=Z.shadow,Ce=h.get(Z);Ce.shadowIntensity=Ee.intensity;Ce.shadowBias=Ee.bias;Ce.shadowNormalBias=Ee.normalBias;Ce.shadowRadius=Ee.radius;Ce.shadowMapSize=Ee.mapSize;Ce.shadowCameraNear=Ee.camera.near;Ce.shadowCameraFar=Ee.camera.far;g.pointShadow[S]=Ce;g.pointShadowMap[S]=We;g.pointShadowMatrix[S]=Z.shadow.matrix;q++}g.point[S]=xe;S++}else if(Z.isHemisphereLight){const xe=f.get(Z);xe.skyColor.copy(Z.color).multiplyScalar(Te);xe.groundColor.copy(Z.groundColor).multiplyScalar(Te);g.hemi[N]=xe;N++}}if(_e>0)if(a.has("OES_texture_float_linear")===!0){g.rectAreaLTC1=De.LTC_FLOAT_1;g.rectAreaLTC2=De.LTC_FLOAT_2}else{g.rectAreaLTC1=De.LTC_HALF_1;g.rectAreaLTC2=De.LTC_HALF_2}g.ambient[0]=ae;g.ambient[1]=re;g.ambient[2]=D;const Q=g.hash;if(Q.sunLength!==Y||Q.directionalLength!==w||Q.pointLength!==S||Q.spotLength!==te||Q.rectAreaLength!==_e||Q.hemiLength!==N||Q.numSunShadows!==K||Q.numDirectionalShadows!==z||Q.numPointShadows!==q||Q.numSpotShadows!==ee||Q.numSpotMaps!==A||Q.numLightProbes!==be){g.sun.length=Y;g.directional.length=w;g.spot.length=te;g.rectArea.length=_e;g.point.length=S;g.hemi.length=N;g.sunShadow.length=K;g.sunShadowMap.length=K;g.sunShadowMatrix.length=pe;g.sunShadowCascade.length=pe;g.directionalShadow.length=z;g.directionalShadowMap.length=z;g.directionalShadowMatrix.length=z;g.pointShadow.length=q;g.pointShadowMap.length=q;g.pointShadowMatrix.length=q;g.spotShadow.length=ee;g.spotShadowMap.length=ee;g.spotLightMatrix.length=ee+A-L;g.spotLightMap.length=A;g.numSpotLightShadowsWithMaps=L;g.numLightProbes=be;Q.sunLength=Y;Q.directionalLength=w;Q.pointLength=S;Q.spotLength=te;Q.rectAreaLength=_e;Q.hemiLength=N;Q.numSunShadows=K;Q.numDirectionalShadows=z;Q.numPointShadows=q;Q.numSpotShadows=ee;Q.numSpotMaps=A;Q.numLightProbes=be;g.version=Oo++}}function ie(X,ae){let re=0,D=0,Y=0,K=0,pe=0,w=0;const S=ae.matrixWorldInverse;for(let te=0,_e=X.length;te<_e;te++){const N=X[te];if(N.isSunLight){const z=g.sun[re];z.direction.setFromMatrixPosition(N.matrixWorld);z.direction.transformDirection(S);re++}else if(N.isDirectionalLight){const z=g.directional[D];z.direction.setFromMatrixPosition(N.matrixWorld);E.setFromMatrixPosition(N.target.matrixWorld);z.direction.sub(E);z.direction.transformDirection(S);D++}else if(N.isSpotLight){const z=g.spot[K];z.position.setFromMatrixPosition(N.matrixWorld);z.position.applyMatrix4(S);z.direction.setFromMatrixPosition(N.matrixWorld);E.setFromMatrixPosition(N.target.matrixWorld);z.direction.sub(E);z.direction.transformDirection(S);K++}else if(N.isRectAreaLight){const z=g.rectArea[pe];z.position.setFromMatrixPosition(N.matrixWorld);z.position.applyMatrix4(S);R.identity();b.copy(N.matrixWorld);b.premultiply(S);R.extractRotation(b);z.halfWidth.set(N.width*0.5,0,0);z.halfHeight.set(0,N.height*0.5,0);z.halfWidth.applyMatrix4(R);z.halfHeight.applyMatrix4(R);pe++}else if(N.isPointLight){const z=g.point[Y];z.position.setFromMatrixPosition(N.matrixWorld);z.position.applyMatrix4(S);Y++}else if(N.isHemisphereLight){const z=g.hemi[w];z.direction.setFromMatrixPosition(N.matrixWorld);z.direction.transformDirection(S);w++}}}return{setup:O,setupView:ie,state:g}}function fi(a){const f=new Tu(a),h=[],g=[],E=[];function b(D){re.camera=D;h.length=0;g.length=0;E.length=0}function R(D){h.push(D)}function O(D){g.push(D)}function ie(D){E.push(D)}function X(){f.setup(h)}function ae(D){f.setupView(h,D)}const re={lightsArray:h,shadowsArray:g,lightProbeGridArray:E,camera:null,lights:f,transmissionRenderTarget:{},textureUnits:0};return{init:b,state:re,setupLights:X,setupLightsView:ae,pushLight:R,pushShadow:O,pushLightProbeGrid:ie}}function rh(a){let f=new WeakMap;function h(E,b=0){const R=f.get(E);let O;if(R===void 0){O=new fi(a);f.set(E,[O])}else if(b>=R.length){O=new fi(a);R.push(O)}else O=R[b];return O}function g(){f=new WeakMap}return{get:h,dispose:g}}const Bo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Au=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ah=[new wt(1,0,0),new wt(-1,0,0),new wt(0,1,0),new wt(0,-1,0),new wt(0,0,1),new wt(0,0,-1)],zo=[new wt(0,-1,0),new wt(0,-1,0),new wt(0,0,1),new wt(0,0,-1),new wt(0,-1,0),new wt(0,-1,0)],xa=new ki,Zs=new wt,Go=new wt;function oh(a,f,h){let g=new Va;const E=new zn,b=new zn,R=new Cn,O=new bl,ie=new yh,X={},ae=h.maxTextureSize,re={[Ss]:Zn,[Zn]:Ss,[yn]:yn},D=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zn},radius:{value:4}},vertexShader:Bo,fragmentShader:Au}),Y=D.clone();Y.defines.HORIZONTAL_PASS=1;const K=new Nr;K.setAttribute("position",new Ia(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));const pe=new Di(K,D),w=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=Vi;let S=this.type;this.render=function(q,ee,A){if(w.enabled===!1)return;if(w.autoUpdate===!1&&w.needsUpdate===!1)return;if(q.length===0)return;if(this.type===Gr){Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.");this.type=Vi}const L=a.getRenderTarget(),be=a.getActiveCubeFace(),Q=a.getActiveMipmapLevel(),he=a.state;he.setBlending(yi);if(he.buffers.depth.getReversed()===!0)he.buffers.color.setClear(0,0,0,0);else he.buffers.color.setClear(1,1,1,1);he.buffers.depth.setTest(!0);he.setScissorTest(!1);const Ie=S!==this.type;if(Ie)ee.traverse(function(Z){if(Z.material)if(Array.isArray(Z.material))Z.material.forEach((me)=>me.needsUpdate=!0);else Z.material.needsUpdate=!0});for(let Z=0,me=q.length;Z<me;Z++){const Te=q[Z],ue=Te.shadow;if(ue===void 0){Wt("WebGLShadowMap:",Te,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;E.copy(ue.mapSize);const We=ue.getFrameExtents();E.multiply(We);b.copy(ue.mapSize);if(E.x>ae||E.y>ae){if(E.x>ae){b.x=Math.floor(ae/We.x);E.x=b.x*We.x;ue.mapSize.x=b.x}if(E.y>ae){b.y=Math.floor(ae/We.y);E.y=b.y*We.y;ue.mapSize.y=b.y}}const xe=a.state.buffers.depth.getReversed();ue.camera._reversedDepth=xe;if(ue.map===null||Ie===!0){if(ue.map!==null){if(ue.map.depthTexture!==null){ue.map.depthTexture.dispose();ue.map.depthTexture=null}ue.map.dispose()}if(this.type===Hi){if(Te.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ue.map=new ci(E.x,E.y,{format:ns,type:Ui,minFilter:jn,magFilter:jn,generateMipmaps:!1});ue.map.texture.name=Te.name+".shadowMap";ue.map.depthTexture=new Br(E.x,E.y,Fi);ue.map.depthTexture.name=Te.name+".shadowMapDepth";ue.map.depthTexture.format=Ts;ue.map.depthTexture.compareFunction=null;ue.map.depthTexture.minFilter=Si;ue.map.depthTexture.magFilter=Si}else{if(Te.isPointLight){ue.map=new Ye(E.x);ue.map.depthTexture=new Tl(E.x,Wi)}else{ue.map=new ci(E.x,E.y);ue.map.depthTexture=new Br(E.x,E.y,Wi)}ue.map.depthTexture.name=Te.name+".shadowMap";ue.map.depthTexture.format=Ts;if(this.type===Vi){ue.map.depthTexture.compareFunction=xe?Oa:Ba;ue.map.depthTexture.minFilter=jn;ue.map.depthTexture.magFilter=jn}else{ue.map.depthTexture.compareFunction=null;ue.map.depthTexture.minFilter=Si;ue.map.depthTexture.magFilter=Si}}ue.camera.updateProjectionMatrix()}if(ue.map.isWebGLCubeRenderTarget!==!0&&(ue.map.width!==E.x||ue.map.height!==E.y))ue.map.setSize(E.x,E.y);const Ee=ue.map.isWebGLCubeRenderTarget?6:ue.getViewportCount();if(Te.isPointLight!==!0)ue.updateMatrices(Te,A);for(let Ce=0;Ce<Ee;Ce++){const pt=ue.getCamera(Ce);if(Te.isPointLight){const{camera:ft,matrix:xn}=ue,Mt=Te.distance||ft.far;if(Mt!==ft.far){ft.far=Mt;ft.updateProjectionMatrix()}Zs.setFromMatrixPosition(Te.matrixWorld);ft.position.copy(Zs);Go.copy(ft.position);Go.add(ah[Ce]);ft.up.copy(zo[Ce]);ft.lookAt(Go);ft.updateMatrixWorld();xn.makeTranslation(-Zs.x,-Zs.y,-Zs.z);xa.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse);ue._frustum.setFromProjectionMatrix(xa,ft.coordinateSystem,ft.reversedDepth)}if(ue.map.isWebGLCubeRenderTarget){a.setRenderTarget(ue.map,Ce);a.clear()}else{if(Ce===0){a.setRenderTarget(ue.map);a.clear()}const ft=ue.getViewport(Ce);R.set(b.x*ft.x,b.y*ft.y,b.x*ft.z,b.y*ft.w);he.viewport(R)}g=ue.getFrustum(Ce);N(ee,A,pt,Te,this.type)}if(ue.isPointLightShadow!==!0&&this.type===Hi)te(ue,A);ue.needsUpdate=!1}S=this.type;w.needsUpdate=!1;a.setRenderTarget(L,be,Q)};function te(q,ee){const A=f.update(pe);if(D.defines.VSM_SAMPLES!==q.blurSamples){D.defines.VSM_SAMPLES=q.blurSamples;Y.defines.VSM_SAMPLES=q.blurSamples;D.needsUpdate=!0;Y.needsUpdate=!0}if(q.mapPass===null)q.mapPass=new ci(E.x,E.y,{format:ns,type:Ui});else if(q.mapPass.width!==q.map.width||q.mapPass.height!==q.map.height)q.mapPass.setSize(q.map.width,q.map.height);D.uniforms.shadow_pass.value=q.map.depthTexture;D.uniforms.resolution.value.set(q.map.width,q.map.height);D.uniforms.radius.value=q.radius;a.setRenderTarget(q.mapPass);a.clear();a.renderBufferDirect(ee,null,A,D,pe,null);Y.uniforms.shadow_pass.value=q.mapPass.texture;Y.uniforms.resolution.value.set(q.map.width,q.map.height);Y.uniforms.radius.value=q.radius;a.setRenderTarget(q.map);a.clear();a.renderBufferDirect(ee,null,A,Y,pe,null)}function _e(q,ee,A,L){let be=null;const Q=A.isPointLight===!0?q.customDistanceMaterial:q.customDepthMaterial;if(Q!==void 0)be=Q;else{be=A.isPointLight===!0?ie:O;if(a.localClippingEnabled&&ee.clipShadows===!0&&Array.isArray(ee.clippingPlanes)&&ee.clippingPlanes.length!==0||ee.displacementMap&&ee.displacementScale!==0||ee.alphaMap&&ee.alphaTest>0||ee.map&&ee.alphaTest>0||ee.alphaToCoverage===!0){const he=be.uuid,Ie=ee.uuid;let Z=X[he];if(Z===void 0){Z={};X[he]=Z}let me=Z[Ie];if(me===void 0){me=be.clone();Z[Ie]=me;ee.addEventListener("dispose",z)}be=me}}be.visible=ee.visible;be.wireframe=ee.wireframe;if(L===Hi)be.side=ee.shadowSide!==null?ee.shadowSide:ee.side;else be.side=ee.shadowSide!==null?ee.shadowSide:re[ee.side];be.alphaMap=ee.alphaMap;be.alphaTest=ee.alphaToCoverage===!0?0.5:ee.alphaTest;be.map=ee.map;be.clipShadows=ee.clipShadows;be.clippingPlanes=ee.clippingPlanes;be.clipIntersection=ee.clipIntersection;be.displacementMap=ee.displacementMap;be.displacementScale=ee.displacementScale;be.displacementBias=ee.displacementBias;be.wireframeLinewidth=ee.wireframeLinewidth;be.linewidth=ee.linewidth;if(A.isPointLight===!0&&be.isMeshDistanceMaterial===!0){const he=a.properties.get(be);he.light=A}return be}function N(q,ee,A,L,be){if(q.visible===!1)return;if(q.layers.test(ee.layers)&&(q.isMesh||q.isLine||q.isPoints)){if((q.castShadow||q.receiveShadow&&be===Hi)&&(!q.frustumCulled||q.intersectsFrustum(g))){q.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,q.matrixWorld);const Ie=f.update(q),Z=q.material;if(Array.isArray(Z)){const me=Ie.groups;for(let Te=0,ue=me.length;Te<ue;Te++){const We=me[Te],xe=Z[We.materialIndex];if(xe&&xe.visible){const Ee=_e(q,xe,L,be);q.onBeforeShadow(a,q,ee,A,Ie,Ee,We);a.renderBufferDirect(A,null,Ie,Ee,q,We);q.onAfterShadow(a,q,ee,A,Ie,Ee,We)}}}else if(Z.visible){const me=_e(q,Z,L,be);q.onBeforeShadow(a,q,ee,A,Ie,me,null);a.renderBufferDirect(A,null,Ie,me,q,null);q.onAfterShadow(a,q,ee,A,Ie,me,null)}}}const he=q.children;for(let Ie=0,Z=he.length;Ie<Z;Ie++)N(he[Ie],ee,A,L,be)}function z(q){q.target.removeEventListener("dispose",z);for(const A in X){const L=X[A],be=q.target.uuid;if(be in L){L[be].dispose();delete L[be]}}}}function Eu(a,f){function h(){let V=!1;const Oe=new Cn;let de=null;const Fe=new Cn(0,0,0,0);return{setMask:function(Xe){if(de!==Xe&&!V){a.colorMask(Xe,Xe,Xe,Xe);de=Xe}},setLocked:function(Xe){V=Xe},setClear:function(Xe,Se,ze,xt,Xt){if(Xt===!0){Xe*=xt;Se*=xt;ze*=xt}Oe.set(Xe,Se,ze,xt);if(Fe.equals(Oe)===!1){a.clearColor(Xe,Se,ze,xt);Fe.copy(Oe)}},reset:function(){V=!1;de=null;Fe.set(-1,0,0,0)}}}function g(){let V=!1,Oe=!1,de=null,Fe=null,Xe=null;return{setReversed:function(Se){if(Oe!==Se){const ze=f.get("EXT_clip_control");if(Se)ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT);else ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);Oe=Se;const xt=Xe;Xe=null;this.setClear(xt)}},getReversed:function(){return Oe},setTest:function(Se){if(Se)Be(a.DEPTH_TEST);else mt(a.DEPTH_TEST)},setMask:function(Se){if(de!==Se&&!V){a.depthMask(Se);de=Se}},setFunc:function(Se){if(Oe)Se=bh[Se];if(Fe!==Se){switch(Se){case Gl:a.depthFunc(a.NEVER);break;case zl:a.depthFunc(a.ALWAYS);break;case Bl:a.depthFunc(a.LESS);break;case Wa:a.depthFunc(a.LEQUAL);break;case Ol:a.depthFunc(a.EQUAL);break;case Fl:a.depthFunc(a.GEQUAL);break;case Ul:a.depthFunc(a.GREATER);break;case Nl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=Se}},setLocked:function(Se){V=Se},setClear:function(Se){if(Xe!==Se){Xe=Se;if(Oe)Se=1-Se;a.clearDepth(Se)}},reset:function(){V=!1;de=null;Fe=null;Xe=null;Oe=!1}}}function E(){let V=!1,Oe=null,de=null,Fe=null,Xe=null,Se=null,ze=null,xt=null,Xt=null;return{setTest:function(Ot){if(!V)if(Ot)Be(a.STENCIL_TEST);else mt(a.STENCIL_TEST)},setMask:function(Ot){if(Oe!==Ot&&!V){a.stencilMask(Ot);Oe=Ot}},setFunc:function(Ot,ri,pi){if(de!==Ot||Fe!==ri||Xe!==pi){a.stencilFunc(Ot,ri,pi);de=Ot;Fe=ri;Xe=pi}},setOp:function(Ot,ri,pi){if(Se!==Ot||ze!==ri||xt!==pi){a.stencilOp(Ot,ri,pi);Se=Ot;ze=ri;xt=pi}},setLocked:function(Ot){V=Ot},setClear:function(Ot){if(Xt!==Ot){a.clearStencil(Ot);Xt=Ot}},reset:function(){V=!1;Oe=null;de=null;Fe=null;Xe=null;Se=null;ze=null;xt=null;Xt=null}}}const b=new h,R=new g,O=new E,ie=new WeakMap,X=new WeakMap;let ae={},re={},D={},Y=new WeakMap,K=[],pe=null,w=!1,S=null,te=null,_e=null,N=null,z=null,q=null,ee=null,A=new en(0,0,0),L=0,be=!1,Q=null,he=null,Ie=null,Z=null,me=null;const Te=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,We=0;const xe=a.getParameter(a.VERSION);if(xe.indexOf("WebGL")!==-1){We=parseFloat(/^WebGL (\d)/.exec(xe)[1]);ue=We>=1}else if(xe.indexOf("OpenGL ES")!==-1){We=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]);ue=We>=2}let Ee=null,Ce={};const pt=a.getParameter(a.SCISSOR_BOX),ft=a.getParameter(a.VIEWPORT),xn=new Cn().fromArray(pt),Mt=new Cn().fromArray(ft);function fe(V,Oe,de,Fe){const Xe=new Uint8Array(4),Se=a.createTexture();a.bindTexture(V,Se);a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ze=0;ze<de;ze++)if(V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY)a.texImage3D(Oe,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,Xe);else a.texImage2D(Oe+ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Xe);return Se}const Ne={};Ne[a.TEXTURE_2D]=fe(a.TEXTURE_2D,a.TEXTURE_2D,1);Ne[a.TEXTURE_CUBE_MAP]=fe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);Ne[a.TEXTURE_2D_ARRAY]=fe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1);Ne[a.TEXTURE_3D]=fe(a.TEXTURE_3D,a.TEXTURE_3D,1,1);b.setClear(0,0,0,1);R.setClear(1);O.setClear(0);Be(a.DEPTH_TEST);R.setFunc(Wa);Rn(!1);Qt(Ya);Be(a.CULL_FACE);Zt(yi);function Be(V){if(ae[V]!==!0){a.enable(V);ae[V]=!0}}function mt(V){if(ae[V]!==!1){a.disable(V);ae[V]=!1}}function _t(V,Oe){if(D[V]!==Oe){a.bindFramebuffer(V,Oe);D[V]=Oe;if(V===a.DRAW_FRAMEBUFFER)D[a.FRAMEBUFFER]=Oe;if(V===a.FRAMEBUFFER)D[a.DRAW_FRAMEBUFFER]=Oe;return!0}return!1}function ct(V,Oe){let de=K,Fe=!1;if(V){de=Y.get(Oe);if(de===void 0){de=[];Y.set(Oe,de)}const Xe=V.textures;if(de.length!==Xe.length||de[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,ze=Xe.length;Se<ze;Se++)de[Se]=a.COLOR_ATTACHMENT0+Se;de.length=Xe.length;Fe=!0}}else if(de[0]!==a.BACK){de[0]=a.BACK;Fe=!0}if(Fe)a.drawBuffers(de)}function Tn(V){if(pe!==V){a.useProgram(V);pe=V;return!0}return!1}const Rt={[As]:a.FUNC_ADD,[is]:a.FUNC_SUBTRACT,[tr]:a.FUNC_REVERSE_SUBTRACT};Rt[Wl]=a.MIN;Rt[Xl]=a.MAX;const Ut={[Mh]:a.ZERO,[Dl]:a.ONE,[Ll]:a.SRC_COLOR,[qa]:a.SRC_ALPHA,[Xa]:a.SRC_ALPHA_SATURATE,[Pl]:a.DST_COLOR,[kr]:a.DST_ALPHA,[Es]:a.ONE_MINUS_SRC_COLOR,[Il]:a.ONE_MINUS_SRC_ALPHA,[Rl]:a.ONE_MINUS_DST_COLOR,[Cl]:a.ONE_MINUS_DST_ALPHA,[wl]:a.CONSTANT_COLOR,[Sh]:a.ONE_MINUS_CONSTANT_COLOR,[El]:a.CONSTANT_ALPHA,[Al]:a.ONE_MINUS_CONSTANT_ALPHA};function Zt(V,Oe,de,Fe,Xe,Se,ze,xt,Xt,Ot){if(V===yi){if(w===!0){mt(a.BLEND);w=!1}return}if(w===!1){Be(a.BLEND);w=!0}if(V!==Vl){if(V!==S||Ot!==be){if(te!==As||z!==As){a.blendEquation(a.FUNC_ADD);te=As;z=As}if(Ot)switch(V){case ts:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ja:a.blendFunc(a.ONE,a.ONE);break;case ja:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Za:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Yt("WebGLState: Invalid blending: ",V);break}else switch(V){case ts:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ja:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case ja:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Za:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",V);break}_e=null;N=null;q=null;ee=null;A.set(0,0,0);L=0;S=V;be=Ot}return}Xe=Xe||Oe;Se=Se||de;ze=ze||Fe;if(Oe!==te||Xe!==z){a.blendEquationSeparate(Rt[Oe],Rt[Xe]);te=Oe;z=Xe}if(de!==_e||Fe!==N||Se!==q||ze!==ee){a.blendFuncSeparate(Ut[de],Ut[Fe],Ut[Se],Ut[ze]);_e=de;N=Fe;q=Se;ee=ze}if(xt.equals(A)===!1||Xt!==L){a.blendColor(xt.r,xt.g,xt.b,Xt);A.copy(xt);L=Xt}S=V;be=!1}function Ft(V,Oe){V.side===yn?mt(a.CULL_FACE):Be(a.CULL_FACE);let de=V.side===Zn;if(Oe)de=!de;Rn(de);V.blending===ts&&V.transparent===!1?Zt(yi):Zt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha);R.setFunc(V.depthFunc);R.setTest(V.depthTest);R.setMask(V.depthWrite);b.setMask(V.colorWrite);const Fe=V.stencilWrite;O.setTest(Fe);if(Fe){O.setMask(V.stencilWriteMask);O.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask);O.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)}Mn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits);V.alphaToCoverage===!0?Be(a.SAMPLE_ALPHA_TO_COVERAGE):mt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Rn(V){if(Q!==V){if(V)a.frontFace(a.CW);else a.frontFace(a.CCW);Q=V}}function Qt(V){if(V!==kl){Be(a.CULL_FACE);if(V!==he)if(V===Ya)a.cullFace(a.BACK);else if(V===Hl)a.cullFace(a.FRONT);else a.cullFace(a.FRONT_AND_BACK)}else mt(a.CULL_FACE);he=V}function Kn(V){if(V!==Ie){if(ue)a.lineWidth(V);Ie=V}}function Mn(V,Oe,de){if(V){Be(a.POLYGON_OFFSET_FILL);if(Z!==Oe||me!==de){Z=Oe;me=de;if(R.getReversed())Oe=-Oe;a.polygonOffset(Oe,de)}}else mt(a.POLYGON_OFFSET_FILL)}function on(V){if(V)Be(a.SCISSOR_TEST);else mt(a.SCISSOR_TEST)}function H(V){if(V===void 0)V=a.TEXTURE0+Te-1;if(Ee!==V){a.activeTexture(V);Ee=V}}function It(V,Oe,de){if(de===void 0)if(Ee===null)de=a.TEXTURE0+Te-1;else de=Ee;let Fe=Ce[de];if(Fe===void 0){Fe={type:void 0,texture:void 0};Ce[de]=Fe}if(Fe.type!==V||Fe.texture!==Oe){if(Ee!==de){a.activeTexture(de);Ee=de}a.bindTexture(V,Oe||Ne[V]);Fe.type=V;Fe.texture=Oe}}function Dt(){const V=Ce[Ee];if(V!==void 0&&V.type!==void 0){a.bindTexture(V.type,null);V.type=void 0;V.texture=void 0}}function sn(){try{a.compressedTexImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function M(){try{a.compressedTexImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function x(){try{a.texSubImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function k(){try{a.texSubImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function ne(){try{a.compressedTexSubImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function ye(){try{a.compressedTexSubImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function Pe(){try{a.texStorage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function Ge(){try{a.texStorage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function ce(){try{a.texImage2D(...arguments)}catch(V){Yt("WebGLState:",V)}}function ge(){try{a.texImage3D(...arguments)}catch(V){Yt("WebGLState:",V)}}function Ve(V){if(re[V]!==void 0)return re[V];else return a.getParameter(V)}function tt(V,Oe){if(re[V]!==Oe){a.pixelStorei(V,Oe);re[V]=Oe}}function Le(V){if(xn.equals(V)===!1){a.scissor(V.x,V.y,V.z,V.w);xn.copy(V)}}function Re(V){if(Mt.equals(V)===!1){a.viewport(V.x,V.y,V.z,V.w);Mt.copy(V)}}function it(V,Oe){let de=X.get(Oe);if(de===void 0){de=new WeakMap;X.set(Oe,de)}let Fe=de.get(V);if(Fe===void 0){Fe=a.getUniformBlockIndex(Oe,V.name);de.set(V,Fe)}}function st(V,Oe){const Fe=X.get(Oe).get(V);if(ie.get(Oe)!==Fe){a.uniformBlockBinding(Oe,Fe,V.__bindingPointIndex);ie.set(Oe,Fe)}}function kt(){a.disable(a.BLEND);a.disable(a.CULL_FACE);a.disable(a.DEPTH_TEST);a.disable(a.POLYGON_OFFSET_FILL);a.disable(a.SCISSOR_TEST);a.disable(a.STENCIL_TEST);a.disable(a.SAMPLE_ALPHA_TO_COVERAGE);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.ONE,a.ZERO);a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO);a.blendColor(0,0,0,0);a.colorMask(!0,!0,!0,!0);a.clearColor(0,0,0,0);a.depthMask(!0);a.depthFunc(a.LESS);R.setReversed(!1);a.clearDepth(1);a.stencilMask(4294967295);a.stencilFunc(a.ALWAYS,0,4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP);a.clearStencil(0);a.cullFace(a.BACK);a.frontFace(a.CCW);a.polygonOffset(0,0);a.activeTexture(a.TEXTURE0);a.bindFramebuffer(a.FRAMEBUFFER,null);a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null);a.bindFramebuffer(a.READ_FRAMEBUFFER,null);a.useProgram(null);a.lineWidth(1);a.scissor(0,0,a.canvas.width,a.canvas.height);a.viewport(0,0,a.canvas.width,a.canvas.height);a.pixelStorei(a.PACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);a.pixelStorei(a.PACK_ROW_LENGTH,0);a.pixelStorei(a.PACK_SKIP_PIXELS,0);a.pixelStorei(a.PACK_SKIP_ROWS,0);a.pixelStorei(a.UNPACK_ROW_LENGTH,0);a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0);a.pixelStorei(a.UNPACK_SKIP_PIXELS,0);a.pixelStorei(a.UNPACK_SKIP_ROWS,0);a.pixelStorei(a.UNPACK_SKIP_IMAGES,0);ae={};re={};Ee=null;Ce={};D={};Y=new WeakMap;K=[];pe=null;w=!1;S=null;te=null;_e=null;N=null;z=null;q=null;ee=null;A=new en(0,0,0);L=0;be=!1;Q=null;he=null;Ie=null;Z=null;me=null;xn.set(0,0,a.canvas.width,a.canvas.height);Mt.set(0,0,a.canvas.width,a.canvas.height);b.reset();R.reset();O.reset()}return{buffers:{color:b,depth:R,stencil:O},enable:Be,disable:mt,bindFramebuffer:_t,drawBuffers:ct,useProgram:Tn,setBlending:Zt,setMaterial:Ft,setFlipSided:Rn,setCullFace:Qt,setLineWidth:Kn,setPolygonOffset:Mn,setScissorTest:on,activeTexture:H,bindTexture:It,unbindTexture:Dt,compressedTexImage2D:sn,compressedTexImage3D:M,texImage2D:ce,texImage3D:ge,pixelStorei:tt,getParameter:Ve,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Pe,texStorage3D:Ge,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:ne,compressedTexSubImage3D:ye,scissor:Le,viewport:Re,reset:kt}}function wu(a,f,h,g,E,b,R){const O=f.has("WEBGL_multisampled_render_to_texture")?f.get("WEBGL_multisampled_render_to_texture"):null,ie=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),X=new zn,ae=new WeakMap,re=new Set;let D;const Y=new WeakMap;let K=!1;try{K=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function pe(M,x){return K?new OffscreenCanvas(M,x):Th("canvas")}function w(M,x,k){let ne=1;const ye=sn(M);if(ye.width>k||ye.height>k)ne=k/Math.max(ye.width,ye.height);if(ne<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Pe=Math.floor(ne*ye.width),Ge=Math.floor(ne*ye.height);if(D===void 0)D=pe(Pe,Ge);const ce=x?pe(Pe,Ge):D;ce.width=Pe;ce.height=Ge;ce.getContext("2d").drawImage(M,0,0,Pe,Ge);Wt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Pe+"x"+Ge+").");return ce}else{if("data"in M)Wt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+").");return M}return M}function S(M){return M.generateMipmaps}function te(M){a.generateMipmap(M)}function _e(M){if(M.isWebGLCubeRenderTarget)return a.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return a.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return a.TEXTURE_2D_ARRAY;return a.TEXTURE_2D}function N(M,x,k,ne,ye,Pe=!1){if(M!==null){if(a[M]!==void 0)return a[M];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Ge;if(ne){Ge=f.get("EXT_texture_norm16");if(!Ge)Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let ce=x;if(x===a.RED){if(k===a.FLOAT)ce=a.R32F;if(k===a.HALF_FLOAT)ce=a.R16F;if(k===a.UNSIGNED_BYTE)ce=a.R8;if(k===a.UNSIGNED_SHORT&&Ge)ce=Ge.R16_EXT;if(k===a.SHORT&&Ge)ce=Ge.R16_SNORM_EXT}if(x===a.RED_INTEGER){if(k===a.UNSIGNED_BYTE)ce=a.R8UI;if(k===a.UNSIGNED_SHORT)ce=a.R16UI;if(k===a.UNSIGNED_INT)ce=a.R32UI;if(k===a.BYTE)ce=a.R8I;if(k===a.SHORT)ce=a.R16I;if(k===a.INT)ce=a.R32I}if(x===a.RG){if(k===a.FLOAT)ce=a.RG32F;if(k===a.HALF_FLOAT)ce=a.RG16F;if(k===a.UNSIGNED_BYTE)ce=a.RG8;if(k===a.UNSIGNED_SHORT&&Ge)ce=Ge.RG16_EXT;if(k===a.SHORT&&Ge)ce=Ge.RG16_SNORM_EXT}if(x===a.RG_INTEGER){if(k===a.UNSIGNED_BYTE)ce=a.RG8UI;if(k===a.UNSIGNED_SHORT)ce=a.RG16UI;if(k===a.UNSIGNED_INT)ce=a.RG32UI;if(k===a.BYTE)ce=a.RG8I;if(k===a.SHORT)ce=a.RG16I;if(k===a.INT)ce=a.RG32I}if(x===a.RGB_INTEGER){if(k===a.UNSIGNED_BYTE)ce=a.RGB8UI;if(k===a.UNSIGNED_SHORT)ce=a.RGB16UI;if(k===a.UNSIGNED_INT)ce=a.RGB32UI;if(k===a.BYTE)ce=a.RGB8I;if(k===a.SHORT)ce=a.RGB16I;if(k===a.INT)ce=a.RGB32I}if(x===a.RGBA_INTEGER){if(k===a.UNSIGNED_BYTE)ce=a.RGBA8UI;if(k===a.UNSIGNED_SHORT)ce=a.RGBA16UI;if(k===a.UNSIGNED_INT)ce=a.RGBA32UI;if(k===a.BYTE)ce=a.RGBA8I;if(k===a.SHORT)ce=a.RGBA16I;if(k===a.INT)ce=a.RGBA32I}if(x===a.RGB){if(k===a.UNSIGNED_SHORT&&Ge)ce=Ge.RGB16_EXT;if(k===a.SHORT&&Ge)ce=Ge.RGB16_SNORM_EXT;if(k===a.UNSIGNED_INT_5_9_9_9_REV)ce=a.RGB9_E5;if(k===a.UNSIGNED_INT_10F_11F_11F_REV)ce=a.R11F_G11F_B10F}if(x===a.RGBA){const ge=Pe?ka:tn.getTransfer(ye);if(k===a.FLOAT)ce=a.RGBA32F;if(k===a.HALF_FLOAT)ce=a.RGBA16F;if(k===a.UNSIGNED_BYTE)ce=ge===Kt?a.SRGB8_ALPHA8:a.RGBA8;if(k===a.UNSIGNED_SHORT&&Ge)ce=Ge.RGBA16_EXT;if(k===a.SHORT&&Ge)ce=Ge.RGBA16_SNORM_EXT;if(k===a.UNSIGNED_SHORT_4_4_4_4)ce=a.RGBA4;if(k===a.UNSIGNED_SHORT_5_5_5_1)ce=a.RGB5_A1}if(ce===a.R16F||ce===a.R32F||ce===a.RG16F||ce===a.RG32F||ce===a.RGBA16F||ce===a.RGBA32F)f.get("EXT_color_buffer_float");return ce}function z(M,x){let k;if(M){if(x===null||x===Wi||x===ws)k=a.DEPTH24_STENCIL8;else if(x===Fi)k=a.DEPTH32F_STENCIL8;else if(x===ir){k=a.DEPTH24_STENCIL8;Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}}else if(x===null||x===Wi||x===ws)k=a.DEPTH_COMPONENT24;else if(x===Fi)k=a.DEPTH_COMPONENT32F;else if(x===ir)k=a.DEPTH_COMPONENT16;return k}function q(M,x){if(S(M)===!0||M.isFramebufferTexture&&M.minFilter!==Si&&M.minFilter!==jn)return Math.log2(Math.max(x.width,x.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return x.mipmaps.length;else return 1}function ee(M){const x=M.target;x.removeEventListener("dispose",ee);L(x);if(x.isVideoTexture)ae.delete(x);if(x.isHTMLTexture)re.delete(x)}function A(M){const x=M.target;x.removeEventListener("dispose",A);Q(x)}function L(M){const x=g.get(M);if(x.__webglInit===void 0)return;const k=M.source,ne=Y.get(k);if(ne){const ye=ne[x.__cacheKey];ye.usedTimes--;if(ye.usedTimes===0)be(M);if(Object.keys(ne).length===0)Y.delete(k)}g.remove(M)}function be(M){const x=g.get(M);a.deleteTexture(x.__webglTexture);const k=M.source,ne=Y.get(k);delete ne[x.__cacheKey];R.memory.textures--}function Q(M){const x=g.get(M);if(M.depthTexture){M.depthTexture.dispose();g.remove(M.depthTexture)}if(M.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(x.__webglFramebuffer[ne]))for(let ye=0;ye<x.__webglFramebuffer[ne].length;ye++)a.deleteFramebuffer(x.__webglFramebuffer[ne][ye]);else a.deleteFramebuffer(x.__webglFramebuffer[ne]);if(x.__webglDepthbuffer)a.deleteRenderbuffer(x.__webglDepthbuffer[ne])}else{if(Array.isArray(x.__webglFramebuffer))for(let ne=0;ne<x.__webglFramebuffer.length;ne++)a.deleteFramebuffer(x.__webglFramebuffer[ne]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer)a.deleteRenderbuffer(x.__webglDepthbuffer);if(x.__webglMultisampledFramebuffer)a.deleteFramebuffer(x.__webglMultisampledFramebuffer);if(x.__webglColorRenderbuffer){for(let ne=0;ne<x.__webglColorRenderbuffer.length;ne++)if(x.__webglColorRenderbuffer[ne])a.deleteRenderbuffer(x.__webglColorRenderbuffer[ne])}if(x.__webglDepthRenderbuffer)a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=M.textures;for(let ne=0,ye=k.length;ne<ye;ne++){const Pe=g.get(k[ne]);if(Pe.__webglTexture){a.deleteTexture(Pe.__webglTexture);R.memory.textures--}g.remove(k[ne])}g.remove(M)}let he=0;function Ie(){he=0}function Z(){return he}function me(M){he=M}function Te(){const M=he;if(M>=E.maxTextures)Wt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+E.maxTextures);he+=1;return M}function ue(M){const x=[];x.push(M.wrapS);x.push(M.wrapT);x.push(M.wrapR||0);x.push(M.magFilter);x.push(M.minFilter);x.push(M.anisotropy);x.push(M.internalFormat);x.push(M.format);x.push(M.type);x.push(M.generateMipmaps);x.push(M.premultiplyAlpha);x.push(M.flipY);x.push(M.unpackAlignment);x.push(M.colorSpace);return x.join()}function We(M,x){const k=g.get(M);if(M.isVideoTexture)It(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&k.__version!==M.version){const ne=M.image;if(ne===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(k,M,x);return}}else if(M.isExternalTexture)k.__webglTexture=M.sourceTexture?M.sourceTexture:null;h.bindTexture(a.TEXTURE_2D,k.__webglTexture,a.TEXTURE0+x)}function xe(M,x){const k=g.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){mt(k,M,x);return}else if(M.isExternalTexture)k.__webglTexture=M.sourceTexture?M.sourceTexture:null;h.bindTexture(a.TEXTURE_2D_ARRAY,k.__webglTexture,a.TEXTURE0+x)}function Ee(M,x){const k=g.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){mt(k,M,x);return}h.bindTexture(a.TEXTURE_3D,k.__webglTexture,a.TEXTURE0+x)}function Ce(M,x){const k=g.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&k.__version!==M.version){_t(k,M,x);return}h.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+x)}const pt={[Yl]:a.REPEAT,[Hr]:a.CLAMP_TO_EDGE,[ql]:a.MIRRORED_REPEAT},ft={[Si]:a.NEAREST,[Zl]:a.NEAREST_MIPMAP_NEAREST,[nr]:a.NEAREST_MIPMAP_LINEAR,[jn]:a.LINEAR,[Vr]:a.LINEAR_MIPMAP_NEAREST,[bs]:a.LINEAR_MIPMAP_LINEAR},xn={[ec]:a.NEVER,[Ql]:a.ALWAYS,[Kl]:a.LESS,[Ba]:a.LEQUAL,[$l]:a.EQUAL,[Oa]:a.GEQUAL,[Jl]:a.GREATER,[jl]:a.NOTEQUAL};function Mt(M,x){if(x.type===Fi&&f.has("OES_texture_float_linear")===!1&&(x.magFilter===jn||x.magFilter===Vr||x.magFilter===nr||x.magFilter===bs||x.minFilter===jn||x.minFilter===Vr||x.minFilter===nr||x.minFilter===bs))Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");a.texParameteri(M,a.TEXTURE_WRAP_S,pt[x.wrapS]);a.texParameteri(M,a.TEXTURE_WRAP_T,pt[x.wrapT]);if(M===a.TEXTURE_3D||M===a.TEXTURE_2D_ARRAY)a.texParameteri(M,a.TEXTURE_WRAP_R,pt[x.wrapR]);a.texParameteri(M,a.TEXTURE_MAG_FILTER,ft[x.magFilter]);a.texParameteri(M,a.TEXTURE_MIN_FILTER,ft[x.minFilter]);if(x.compareFunction){a.texParameteri(M,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE);a.texParameteri(M,a.TEXTURE_COMPARE_FUNC,xn[x.compareFunction])}if(f.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Si)return;if(x.minFilter!==nr&&x.minFilter!==bs)return;if(x.type===Fi&&f.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||g.get(x).__currentAnisotropy){const k=f.get("EXT_texture_filter_anisotropic");a.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,E.getMaxAnisotropy()));g.get(x).__currentAnisotropy=x.anisotropy}}}function fe(M,x){let k=!1;if(M.__webglInit===void 0){M.__webglInit=!0;x.addEventListener("dispose",ee)}const ne=x.source;let ye=Y.get(ne);if(ye===void 0){ye={};Y.set(ne,ye)}const Pe=ue(x);if(Pe!==M.__cacheKey){if(ye[Pe]===void 0){ye[Pe]={texture:a.createTexture(),usedTimes:0};R.memory.textures++;k=!0}ye[Pe].usedTimes++;const Ge=ye[M.__cacheKey];if(Ge!==void 0){ye[M.__cacheKey].usedTimes--;if(Ge.usedTimes===0)be(x)}M.__cacheKey=Pe;M.__webglTexture=ye[Pe].texture}return k}function Ne(M,x,k){return Math.floor(Math.floor(M/k)/x)}function Be(M,x,k,ne){const ye=4,Pe=M.updateRanges;if(Pe.length===0)h.texSubImage2D(a.TEXTURE_2D,0,0,0,x.width,x.height,k,ne,x.data);else{Pe.sort((tt,Le)=>tt.start-Le.start);let Ge=0;for(let tt=1;tt<Pe.length;tt++){const Le=Pe[Ge],Re=Pe[tt],it=Le.start+Le.count,st=Ne(Re.start,x.width,ye),kt=Ne(Le.start,x.width,ye);if(Re.start<=it+1&&st===kt&&Ne(Re.start+Re.count-1,x.width,ye)===st)Le.count=Math.max(Le.count,Re.start+Re.count-Le.start);else{++Ge;Pe[Ge]=Re}}Pe.length=Ge+1;const ce=h.getParameter(a.UNPACK_ROW_LENGTH),ge=h.getParameter(a.UNPACK_SKIP_PIXELS),Ve=h.getParameter(a.UNPACK_SKIP_ROWS);h.pixelStorei(a.UNPACK_ROW_LENGTH,x.width);for(let tt=0,Le=Pe.length;tt<Le;tt++){const Re=Pe[tt],it=Math.floor(Re.start/ye),st=Math.ceil(Re.count/ye),kt=it%x.width,V=Math.floor(it/x.width),Oe=st,de=1;h.pixelStorei(a.UNPACK_SKIP_PIXELS,kt);h.pixelStorei(a.UNPACK_SKIP_ROWS,V);h.texSubImage2D(a.TEXTURE_2D,0,kt,V,Oe,de,k,ne,x.data)}M.clearUpdateRanges();h.pixelStorei(a.UNPACK_ROW_LENGTH,ce);h.pixelStorei(a.UNPACK_SKIP_PIXELS,ge);h.pixelStorei(a.UNPACK_SKIP_ROWS,Ve)}}function mt(M,x,k){let ne=a.TEXTURE_2D;if(x.isDataArrayTexture||x.isCompressedArrayTexture)ne=a.TEXTURE_2D_ARRAY;if(x.isData3DTexture)ne=a.TEXTURE_3D;const ye=fe(M,x),Pe=x.source;h.bindTexture(ne,M.__webglTexture,a.TEXTURE0+k);const Ge=g.get(Pe);if(Pe.version!==Ge.__version||ye===!0){h.activeTexture(a.TEXTURE0+k);if((typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const de=tn.getPrimaries(tn.workingColorSpace),Fe=x.colorSpace===ss?null:tn.getPrimaries(x.colorSpace),Xe=x.colorSpace===ss||de===Fe?a.NONE:a.BROWSER_DEFAULT_WEBGL;h.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY);h.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha);h.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}h.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment);let ge=w(x.image,!1,E.maxTextureSize);ge=Dt(x,ge);const Ve=b.convert(x.format,x.colorSpace),tt=b.convert(x.type);let Le=N(x.internalFormat,Ve,tt,x.normalized,x.colorSpace,x.isVideoTexture);Mt(ne,x);let Re;const it=x.mipmaps,st=x.isVideoTexture!==!0,kt=Ge.__version===void 0||ye===!0,V=Pe.dataReady,Oe=q(x,ge);if(x.isDepthTexture){Le=z(x.format===rs,x.type);if(kt)if(st)h.texStorage2D(a.TEXTURE_2D,1,Le,ge.width,ge.height);else h.texImage2D(a.TEXTURE_2D,0,Le,ge.width,ge.height,0,Ve,tt,null)}else if(x.isDataTexture)if(it.length>0){if(st&&kt)h.texStorage2D(a.TEXTURE_2D,Oe,Le,it[0].width,it[0].height);for(let de=0,Fe=it.length;de<Fe;de++){Re=it[de];if(st){if(V)h.texSubImage2D(a.TEXTURE_2D,de,0,0,Re.width,Re.height,Ve,tt,Re.data)}else h.texImage2D(a.TEXTURE_2D,de,Le,Re.width,Re.height,0,Ve,tt,Re.data)}x.generateMipmaps=!1}else if(st){if(kt)h.texStorage2D(a.TEXTURE_2D,Oe,Le,ge.width,ge.height);if(V)Be(x,ge,Ve,tt)}else h.texImage2D(a.TEXTURE_2D,0,Le,ge.width,ge.height,0,Ve,tt,ge.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){if(st&&kt)h.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Le,it[0].width,it[0].height,ge.depth);for(let de=0,Fe=it.length;de<Fe;de++){Re=it[de];if(x.format!==Oi)if(Ve!==null)if(st){if(V)if(x.layerUpdates.size>0){const Xe=tc(Re.width,Re.height,x.format,x.type);for(const Se of x.layerUpdates){const ze=Re.data.subarray(Se*Xe/Re.data.BYTES_PER_ELEMENT,(Se+1)*Xe/Re.data.BYTES_PER_ELEMENT);h.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,Se,Re.width,Re.height,1,Ve,ze)}}else h.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,Re.width,Re.height,ge.depth,Ve,Re.data)}else h.compressedTexImage3D(a.TEXTURE_2D_ARRAY,de,Le,Re.width,Re.height,ge.depth,0,Re.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(st){if(V)h.texSubImage3D(a.TEXTURE_2D_ARRAY,de,0,0,0,Re.width,Re.height,ge.depth,Ve,tt,Re.data)}else h.texImage3D(a.TEXTURE_2D_ARRAY,de,Le,Re.width,Re.height,ge.depth,0,Ve,tt,Re.data)}if(x.layerUpdates.size>0)x.clearLayerUpdates()}else{if(st&&kt)h.texStorage2D(a.TEXTURE_2D,Oe,Le,it[0].width,it[0].height);for(let de=0,Fe=it.length;de<Fe;de++){Re=it[de];if(x.format!==Oi)if(Ve!==null)if(st){if(V)h.compressedTexSubImage2D(a.TEXTURE_2D,de,0,0,Re.width,Re.height,Ve,Re.data)}else h.compressedTexImage2D(a.TEXTURE_2D,de,Le,Re.width,Re.height,0,Re.data);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(st){if(V)h.texSubImage2D(a.TEXTURE_2D,de,0,0,Re.width,Re.height,Ve,tt,Re.data)}else h.texImage2D(a.TEXTURE_2D,de,Le,Re.width,Re.height,0,Ve,tt,Re.data)}}else if(x.isDataArrayTexture)if(st){if(kt)h.texStorage3D(a.TEXTURE_2D_ARRAY,Oe,Le,ge.width,ge.height,ge.depth);if(V)if(x.layerUpdates.size>0){const de=tc(ge.width,ge.height,x.format,x.type);for(const Fe of x.layerUpdates){const Xe=ge.data.subarray(Fe*de/ge.data.BYTES_PER_ELEMENT,(Fe+1)*de/ge.data.BYTES_PER_ELEMENT);h.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Fe,ge.width,ge.height,1,Ve,tt,Xe)}x.clearLayerUpdates()}else h.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ve,tt,ge.data)}else h.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Ve,tt,ge.data);else if(x.isData3DTexture)if(st){if(kt)h.texStorage3D(a.TEXTURE_3D,Oe,Le,ge.width,ge.height,ge.depth);if(V)h.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ve,tt,ge.data)}else h.texImage3D(a.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Ve,tt,ge.data);else if(x.isFramebufferTexture){if(kt)if(st)h.texStorage2D(a.TEXTURE_2D,Oe,Le,ge.width,ge.height);else{let de=ge.width,Fe=ge.height;for(let Xe=0;Xe<Oe;Xe++){h.texImage2D(a.TEXTURE_2D,Xe,Le,de,Fe,0,Ve,tt,null);de>>=1;Fe>>=1}}}else if(x.isHTMLTexture){if("texElementImage2D"in a){const de=a.canvas;if(!de.hasAttribute("layoutsubtree"))de.setAttribute("layoutsubtree","true");if(ge.parentNode!==de){de.appendChild(ge);re.add(x);de.onpaint=(Fe)=>{const Xe=Fe.changedElements;for(const Se of re)if(Xe.includes(Se.image))Se.needsUpdate=!0};de.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ge);else{const Fe=0,{RGBA:Xe,RGBA:Se,UNSIGNED_BYTE:ze}=a;a.texElementImage2D(a.TEXTURE_2D,Fe,Xe,Se,ze,ge)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&kt){const de=sn(it[0]);h.texStorage2D(a.TEXTURE_2D,Oe,Le,de.width,de.height)}for(let de=0,Fe=it.length;de<Fe;de++){Re=it[de];if(st){if(V)h.texSubImage2D(a.TEXTURE_2D,de,0,0,Ve,tt,Re)}else h.texImage2D(a.TEXTURE_2D,de,Le,Ve,tt,Re)}x.generateMipmaps=!1}else if(st){if(kt){const de=sn(ge);h.texStorage2D(a.TEXTURE_2D,Oe,Le,de.width,de.height)}if(V)h.texSubImage2D(a.TEXTURE_2D,0,0,0,Ve,tt,ge)}else h.texImage2D(a.TEXTURE_2D,0,Le,Ve,tt,ge);if(S(x))te(ne);Ge.__version=Pe.version;if(x.onUpdate)x.onUpdate(x)}M.__version=x.version}function _t(M,x,k){if(x.image.length!==6)return;const ne=fe(M,x),ye=x.source;h.bindTexture(a.TEXTURE_CUBE_MAP,M.__webglTexture,a.TEXTURE0+k);const Pe=g.get(ye);if(ye.version!==Pe.__version||ne===!0){h.activeTexture(a.TEXTURE0+k);const Ge=tn.getPrimaries(tn.workingColorSpace),ce=x.colorSpace===ss?null:tn.getPrimaries(x.colorSpace),ge=x.colorSpace===ss||Ge===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;h.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY);h.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha);h.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment);h.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,Le=[];for(let Se=0;Se<6;Se++){if(!Ve&&!tt)Le[Se]=w(x.image[Se],!0,E.maxCubemapSize);else Le[Se]=tt?x.image[Se].image:x.image[Se];Le[Se]=Dt(x,Le[Se])}const Re=Le[0],it=b.convert(x.format,x.colorSpace),st=b.convert(x.type),kt=N(x.internalFormat,it,st,x.normalized,x.colorSpace),V=x.isVideoTexture!==!0,Oe=Pe.__version===void 0||ne===!0,de=ye.dataReady;let Fe=q(x,Re);Mt(a.TEXTURE_CUBE_MAP,x);let Xe;if(Ve){if(V&&Oe)h.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,kt,Re.width,Re.height);for(let Se=0;Se<6;Se++){Xe=Le[Se].mipmaps;for(let ze=0;ze<Xe.length;ze++){const xt=Xe[ze];if(x.format!==Oi)if(it!==null)if(V){if(de)h.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze,0,0,xt.width,xt.height,it,xt.data)}else h.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze,kt,xt.width,xt.height,0,xt.data);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(V){if(de)h.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze,0,0,xt.width,xt.height,it,st,xt.data)}else h.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze,kt,xt.width,xt.height,0,it,st,xt.data)}}}else{Xe=x.mipmaps;if(V&&Oe){if(Xe.length>0)Fe++;const Se=sn(Le[0]);h.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,kt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(tt){if(V){if(de)h.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Le[Se].width,Le[Se].height,it,st,Le[Se].data)}else h.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,kt,Le[Se].width,Le[Se].height,0,it,st,Le[Se].data);for(let ze=0;ze<Xe.length;ze++){const Xt=Xe[ze].image[Se].image;if(V){if(de)h.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze+1,0,0,Xt.width,Xt.height,it,st,Xt.data)}else h.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze+1,kt,Xt.width,Xt.height,0,it,st,Xt.data)}}else{if(V){if(de)h.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,it,st,Le[Se])}else h.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,kt,it,st,Le[Se]);for(let ze=0;ze<Xe.length;ze++){const xt=Xe[ze];if(V){if(de)h.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze+1,0,0,it,st,xt.image[Se])}else h.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ze+1,kt,it,st,xt.image[Se])}}}if(S(x))te(a.TEXTURE_CUBE_MAP);Pe.__version=ye.version;if(x.onUpdate)x.onUpdate(x)}M.__version=x.version}function ct(M,x,k,ne,ye,Pe){const Ge=b.convert(k.format,k.colorSpace),ce=b.convert(k.type),ge=N(k.internalFormat,Ge,ce,k.normalized,k.colorSpace),Ve=g.get(x),tt=g.get(k);tt.__renderTarget=x;if(!Ve.__hasExternalTextures){const Le=Math.max(1,x.width>>Pe),Re=Math.max(1,x.height>>Pe);if(ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY)h.texImage3D(ye,Pe,ge,Le,Re,x.depth,0,Ge,ce,null);else h.texImage2D(ye,Pe,ge,Le,Re,0,Ge,ce,null)}h.bindFramebuffer(a.FRAMEBUFFER,M);if(H(x))O.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ne,ye,tt.__webglTexture,0,on(x));else if(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)a.framebufferTexture2D(a.FRAMEBUFFER,ne,ye,tt.__webglTexture,Pe);h.bindFramebuffer(a.FRAMEBUFFER,null)}function Tn(M,x,k){a.bindRenderbuffer(a.RENDERBUFFER,M);if(x.depthBuffer){const ne=x.depthTexture,ye=ne&&ne.isDepthTexture?ne.type:null,Pe=z(x.stencilBuffer,ye),Ge=x.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(H(x))O.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,on(x),Pe,x.width,x.height);else if(k)a.renderbufferStorageMultisample(a.RENDERBUFFER,on(x),Pe,x.width,x.height);else a.renderbufferStorage(a.RENDERBUFFER,Pe,x.width,x.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,M)}else{const ne=x.textures;for(let ye=0;ye<ne.length;ye++){const Pe=ne[ye],Ge=b.convert(Pe.format,Pe.colorSpace),ce=b.convert(Pe.type),ge=N(Pe.internalFormat,Ge,ce,Pe.normalized,Pe.colorSpace);if(H(x))O.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,on(x),ge,x.width,x.height);else if(k)a.renderbufferStorageMultisample(a.RENDERBUFFER,on(x),ge,x.width,x.height);else a.renderbufferStorage(a.RENDERBUFFER,ge,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Rt(M,x,k){const ne=x.isWebGLCubeRenderTarget===!0;h.bindFramebuffer(a.FRAMEBUFFER,M);if(!(x.depthTexture&&x.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=g.get(x.depthTexture);ye.__renderTarget=x;if(!ye.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height){x.depthTexture.image.width=x.width;x.depthTexture.image.height=x.height;x.depthTexture.needsUpdate=!0}if(ne){if(ye.__webglInit===void 0){ye.__webglInit=!0;x.depthTexture.addEventListener("dispose",ee)}if(ye.__webglTexture===void 0){ye.__webglTexture=a.createTexture();h.bindTexture(a.TEXTURE_CUBE_MAP,ye.__webglTexture);Mt(a.TEXTURE_CUBE_MAP,x.depthTexture);const Ve=b.convert(x.depthTexture.format),tt=b.convert(x.depthTexture.type);let Le;if(x.depthTexture.format===Ts)Le=a.DEPTH_COMPONENT24;else if(x.depthTexture.format===rs)Le=a.DEPTH24_STENCIL8;for(let Re=0;Re<6;Re++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Le,x.width,x.height,0,Ve,tt,null)}}else We(x.depthTexture,0);const Pe=ye.__webglTexture,Ge=on(x),ce=ne?a.TEXTURE_CUBE_MAP_POSITIVE_X+k:a.TEXTURE_2D,ge=x.depthTexture.format===rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ts)if(H(x))O.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,ce,Pe,0,Ge);else a.framebufferTexture2D(a.FRAMEBUFFER,ge,ce,Pe,0);else if(x.depthTexture.format===rs)if(H(x))O.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,ce,Pe,0,Ge);else a.framebufferTexture2D(a.FRAMEBUFFER,ge,ce,Pe,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(M){const x=g.get(M),k=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const ne=M.depthTexture;if(x.__depthDisposeCallback)x.__depthDisposeCallback();if(ne){const ye=()=>{delete x.__boundDepthTexture;delete x.__depthDisposeCallback;ne.removeEventListener("dispose",ye)};ne.addEventListener("dispose",ye);x.__depthDisposeCallback=ye}x.__boundDepthTexture=ne}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)Rt(x.__webglFramebuffer[ne],M,ne);else{const ne=M.texture.mipmaps;if(ne&&ne.length>0)Rt(x.__webglFramebuffer[0],M,0);else Rt(x.__webglFramebuffer,M,0)}else if(k){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++){h.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[ne]);if(x.__webglDepthbuffer[ne]===void 0){x.__webglDepthbuffer[ne]=a.createRenderbuffer();Tn(x.__webglDepthbuffer[ne],M,!1)}else{const ye=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=x.__webglDepthbuffer[ne];a.bindRenderbuffer(a.RENDERBUFFER,Pe);a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,Pe)}}}else{const ne=M.texture.mipmaps;if(ne&&ne.length>0)h.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[0]);else h.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer);if(x.__webglDepthbuffer===void 0){x.__webglDepthbuffer=a.createRenderbuffer();Tn(x.__webglDepthbuffer,M,!1)}else{const ye=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=x.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Pe);a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,Pe)}}h.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(M,x,k){const ne=g.get(M);if(x!==void 0)ct(ne.__webglFramebuffer,M,M.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0);if(k!==void 0)Ut(M)}function Ft(M){const x=M.texture,k=g.get(M),ne=g.get(x);M.addEventListener("dispose",A);const ye=M.textures,Pe=M.isWebGLCubeRenderTarget===!0,Ge=ye.length>1;if(!Ge){if(ne.__webglTexture===void 0)ne.__webglTexture=a.createTexture();ne.__version=x.version;R.memory.textures++}if(Pe){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)k.__webglFramebuffer[ce][ge]=a.createFramebuffer()}else k.__webglFramebuffer[ce]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)k.__webglFramebuffer[ce]=a.createFramebuffer()}else k.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let ce=0,ge=ye.length;ce<ge;ce++){const Ve=g.get(ye[ce]);if(Ve.__webglTexture===void 0){Ve.__webglTexture=a.createTexture();R.memory.textures++}}if(M.samples>0&&H(M)===!1){k.__webglMultisampledFramebuffer=a.createFramebuffer();k.__webglColorRenderbuffer=[];h.bindFramebuffer(a.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<ye.length;ce++){const ge=ye[ce];k.__webglColorRenderbuffer[ce]=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const Ve=b.convert(ge.format,ge.colorSpace),tt=b.convert(ge.type),Le=N(ge.internalFormat,Ve,tt,ge.normalized,ge.colorSpace,M.isXRRenderTarget===!0),Re=on(M);a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,Le,M.width,M.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}a.bindRenderbuffer(a.RENDERBUFFER,null);if(M.depthBuffer){k.__webglDepthRenderbuffer=a.createRenderbuffer();Tn(k.__webglDepthRenderbuffer,M,!0)}h.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Pe){h.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture);Mt(a.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ct(k.__webglFramebuffer[ce][ge],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ct(k.__webglFramebuffer[ce],M,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);if(S(x))te(a.TEXTURE_CUBE_MAP);h.unbindTexture()}else if(Ge){for(let ce=0,ge=ye.length;ce<ge;ce++){const Ve=ye[ce],tt=g.get(Ve);let Le=a.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)Le=M.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;h.bindTexture(Le,tt.__webglTexture);Mt(Le,Ve);ct(k.__webglFramebuffer,M,Ve,a.COLOR_ATTACHMENT0+ce,Le,0);if(S(Ve))te(Le)}h.unbindTexture()}else{let ce=a.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)ce=M.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY;h.bindTexture(ce,ne.__webglTexture);Mt(ce,x);if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ct(k.__webglFramebuffer[ge],M,x,a.COLOR_ATTACHMENT0,ce,ge);else ct(k.__webglFramebuffer,M,x,a.COLOR_ATTACHMENT0,ce,0);if(S(x))te(ce);h.unbindTexture()}if(M.depthBuffer)Ut(M)}function Rn(M){const x=M.textures;for(let k=0,ne=x.length;k<ne;k++){const ye=x[k];if(S(ye)){const Pe=_e(M),Ge=g.get(ye).__webglTexture;h.bindTexture(Pe,Ge);te(Pe);h.unbindTexture()}}}const Qt=[],Kn=[];function Mn(M){if(M.samples>0){if(H(M)===!1){const{textures:x,width:k,height:ne}=M;let ye=a.COLOR_BUFFER_BIT;const Pe=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=g.get(M),ce=x.length>1;if(ce)for(let Ve=0;Ve<x.length;Ve++){h.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.RENDERBUFFER,null);h.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer);a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.TEXTURE_2D,null,0)}h.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const ge=M.texture.mipmaps;if(ge&&ge.length>0)h.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]);else h.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ve=0;Ve<x.length;Ve++){if(M.resolveDepthBuffer){if(M.depthBuffer)ye|=a.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)ye|=a.STENCIL_BUFFER_BIT}if(ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const tt=g.get(x[Ve]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,tt,0)}a.blitFramebuffer(0,0,k,ne,0,0,k,ne,ye,a.NEAREST);if(ie===!0){Qt.length=0;Kn.length=0;Qt.push(a.COLOR_ATTACHMENT0+Ve);if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1){Qt.push(Pe);Kn.push(Pe);a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Kn)}a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Qt)}}h.bindFramebuffer(a.READ_FRAMEBUFFER,null);h.bindFramebuffer(a.DRAW_FRAMEBUFFER,null);if(ce)for(let Ve=0;Ve<x.length;Ve++){h.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ve]);const tt=g.get(x[Ve]).__webglTexture;h.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer);a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ve,a.TEXTURE_2D,tt,0)}h.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&ie){const x=M.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[x])}}}function on(M){return Math.min(E.maxSamples,M.samples)}function H(M){const x=g.get(M);return M.samples>0&&f.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(M){const x=R.render.frame;if(ae.get(M)!==x){ae.set(M,x);M.update()}}function Dt(M,x){const{colorSpace:k,format:ne,type:ye}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return x;if(k!==ul&&k!==ss)if(tn.getTransfer(k)===Kt){if(ne!==Oi||ye!==xi)Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Yt("WebGLTextures: Unsupported texture color space:",k);return x}function sn(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement){X.width=M.naturalWidth||M.width;X.height=M.naturalHeight||M.height}else if(typeof VideoFrame<"u"&&M instanceof VideoFrame){X.width=M.displayWidth;X.height=M.displayHeight}else{X.width=M.width;X.height=M.height}return X}this.allocateTextureUnit=Te;this.resetTextureUnits=Ie;this.getTextureUnits=Z;this.setTextureUnits=me;this.setTexture2D=We;this.setTexture2DArray=xe;this.setTexture3D=Ee;this.setTextureCube=Ce;this.rebindTextures=Zt;this.setupRenderTarget=Ft;this.updateRenderTargetMipmap=Rn;this.updateMultisampleRenderTarget=Mn;this.setupDepthRenderbuffer=Ut;this.setupFrameBufferTexture=ct;this.useMultisampledRTT=H;this.isReversedDepthBuffer=function(){return h.buffers.depth.getReversed()}}function wr(a,f){function h(g,E=ss){let b;const R=tn.getTransfer(E);if(g===xi)return a.UNSIGNED_BYTE;if(g===$a)return a.UNSIGNED_SHORT_4_4_4_4;if(g===Ka)return a.UNSIGNED_SHORT_5_5_5_1;if(g===nc)return a.UNSIGNED_INT_5_9_9_9_REV;if(g===ic)return a.UNSIGNED_INT_10F_11F_11F_REV;if(g===sc)return a.BYTE;if(g===sr)return a.SHORT;if(g===ir)return a.UNSIGNED_SHORT;if(g===ll)return a.INT;if(g===Wi)return a.UNSIGNED_INT;if(g===Fi)return a.FLOAT;if(g===Ui)return a.HALF_FLOAT;if(g===Wr)return a.ALPHA;if(g===Xr)return a.RGB;if(g===Oi)return a.RGBA;if(g===Ts)return a.DEPTH_COMPONENT;if(g===rs)return a.DEPTH_STENCIL;if(g===Qa)return a.RED;if(g===Xi)return a.RED_INTEGER;if(g===ns)return a.RG;if(g===qi)return a.RG_INTEGER;if(g===Cs)return a.RGBA_INTEGER;if(g===Rs||g===rr||g===eo||g===to)if(R===Kt){b=f.get("WEBGL_compressed_texture_s3tc_srgb");if(b!==null){if(g===Rs)return b.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===rr)return b.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===eo)return b.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===to)return b.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else{b=f.get("WEBGL_compressed_texture_s3tc");if(b!==null){if(g===Rs)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===rr)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===eo)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===to)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(g===rc||g===no||g===ac||g===oc){b=f.get("WEBGL_compressed_texture_pvrtc");if(b!==null){if(g===rc)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===no)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===ac)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===oc)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(g===lc||g===Yi||g===cc||g===qr||g===kn||g===Ha||g===Yr){b=f.get("WEBGL_compressed_texture_etc");if(b!==null){if(g===lc||g===Yi)return R===Kt?b.COMPRESSED_SRGB8_ETC2:b.COMPRESSED_RGB8_ETC2;if(g===cc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:b.COMPRESSED_RGBA8_ETC2_EAC;if(g===qr)return b.COMPRESSED_R11_EAC;if(g===kn)return b.COMPRESSED_SIGNED_R11_EAC;if(g===Ha)return b.COMPRESSED_RG11_EAC;if(g===Yr)return b.COMPRESSED_SIGNED_RG11_EAC}else return null}if(g===Zr||g===ar||g===hc||g===uc||g===dc||g===fc||g===or||g===pc||g===mc||g===gc||g===_c||g===xc||g===vc||g===yc){b=f.get("WEBGL_compressed_texture_astc");if(b!==null){if(g===Zr)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:b.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===ar)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:b.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===hc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:b.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===uc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:b.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===dc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:b.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===fc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:b.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===or)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:b.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===pc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:b.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===mc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:b.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===gc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:b.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===_c)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:b.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===xc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:b.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===vc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:b.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===yc)return R===Kt?b.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:b.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(g===Sc||g===Mc||g===bc){b=f.get("EXT_texture_compression_bptc");if(b!==null){if(g===Sc)return R===Kt?b.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:b.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===Mc)return b.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===bc)return b.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(g===Tc||g===Ac||g===Gn||g===Ec){b=f.get("EXT_texture_compression_rgtc");if(b!==null){if(g===Tc)return b.COMPRESSED_RED_RGTC1_EXT;if(g===Ac)return b.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===Gn)return b.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Ec)return b.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}if(g===ws)return a.UNSIGNED_INT_24_8;return a[g]!==void 0?a[g]:null}return{convert:h}}const Cu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ru=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class va{constructor(){this.texture=null;this.mesh=null;this.depthNear=0;this.depthFar=0}init(a,f){if(this.texture===null){const h=new io(a.texture);if(a.depthNear!==f.depthNear||a.depthFar!==f.depthFar){this.depthNear=a.depthNear;this.depthFar=a.depthFar}this.texture=h}}getMesh(a){if(this.texture!==null){if(this.mesh===null){const f=a.cameras[0].viewport,h=new Ni({vertexShader:Cu,fragmentShader:Ru,uniforms:{depthColor:{value:this.texture},depthWidth:{value:f.z},depthHeight:{value:f.w}}});this.mesh=new Di(new ol(20,20),h)}}return this.mesh}reset(){this.texture=null;this.mesh=null}getDepthTexture(){return this.texture}}class lh extends Ah{constructor(a,f){super();const h=this;let g=null,E=1,b=null,R="local-floor",O=1,ie=null,X=null,ae=null,re=null,D=null,Y=null;const K=typeof XRWebGLBinding<"u",pe=new va,w={},S=f.getContextAttributes();let te=null,_e=null;const N=[],z=[],q=new zn;let ee=null,A=null;const L=new Ur;L.viewport=new Cn;const be=new Ur;be.viewport=new Cn;const Q=[L,be],he=new Eh;let Ie=null,Z=null;this.cameraAutoUpdate=!0;this.enabled=!1;this.isPresenting=!1;this.getController=function(fe){let Ne=N[fe];if(Ne===void 0){Ne=new so;N[fe]=Ne}return Ne.getTargetRaySpace()};this.getControllerGrip=function(fe){let Ne=N[fe];if(Ne===void 0){Ne=new so;N[fe]=Ne}return Ne.getGripSpace()};this.getHand=function(fe){let Ne=N[fe];if(Ne===void 0){Ne=new so;N[fe]=Ne}return Ne.getHandSpace()};function me(fe){const Ne=z.indexOf(fe.inputSource);if(Ne===-1)return;const Be=N[Ne];if(Be!==void 0){Be.update(fe.inputSource,fe.frame,ie||b);Be.dispatchEvent({type:fe.type,data:fe.inputSource})}}function Te(){g.removeEventListener("select",me);g.removeEventListener("selectstart",me);g.removeEventListener("selectend",me);g.removeEventListener("squeeze",me);g.removeEventListener("squeezestart",me);g.removeEventListener("squeezeend",me);g.removeEventListener("end",Te);g.removeEventListener("inputsourceschange",ue);for(let fe=0;fe<N.length;fe++){const Ne=z[fe];if(Ne===null)continue;z[fe]=null;N[fe].disconnect(Ne)}Ie=null;Z=null;pe.reset();for(const fe in w)delete w[fe];a.setRenderTarget(te);D=null;re=null;ae=null;g=null;_e=null;Mt.stop();h.isPresenting=!1;a.setPixelRatio(ee);a.setSize(q.width,q.height,!1);if(A!==null){const fe=A.camera;fe.fov=A.fov;fe.zoom=A.zoom;fe.updateProjectionMatrix();A=null}h.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){E=fe;if(h.isPresenting===!0)Wt("WebXRManager: Cannot change framebuffer scale while presenting.")};this.setReferenceSpaceType=function(fe){R=fe;if(h.isPresenting===!0)Wt("WebXRManager: Cannot change reference space type while presenting.")};this.getReferenceSpace=function(){return ie||b};this.setReferenceSpace=function(fe){ie=fe};this.getBaseLayer=function(){return re!==null?re:D};this.getBinding=function(){if(ae===null&&K)ae=new XRWebGLBinding(g,f);return ae};this.getFrame=function(){return Y};this.getSession=function(){return g};this.setSession=async function(fe){g=fe;if(g!==null){te=a.getRenderTarget();g.addEventListener("select",me);g.addEventListener("selectstart",me);g.addEventListener("selectend",me);g.addEventListener("squeeze",me);g.addEventListener("squeezestart",me);g.addEventListener("squeezeend",me);g.addEventListener("end",Te);g.addEventListener("inputsourceschange",ue);if(S.xrCompatible!==!0)await f.makeXRCompatible();ee=a.getPixelRatio();a.getSize(q);if(!(K&&("createProjectionLayer"in XRWebGLBinding.prototype))){const Be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:E};D=new XRWebGLLayer(g,f,Be);g.updateRenderState({baseLayer:D});a.setPixelRatio(1);a.setSize(D.framebufferWidth,D.framebufferHeight,!1);_e=new ci(D.framebufferWidth,D.framebufferHeight,{format:Oi,type:xi,colorSpace:a.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:D.ignoreDepthValues===!1,resolveStencilBuffer:D.ignoreDepthValues===!1,storeMultisampledDepthBuffer:D.ignoreDepthValues===!1,storeMultisampledStencilBuffer:D.ignoreDepthValues===!1})}else{let Be=null,mt=null,_t=null;if(S.depth){_t=S.stencil?f.DEPTH24_STENCIL8:f.DEPTH_COMPONENT24;Be=S.stencil?rs:Ts;mt=S.stencil?ws:Wi}const ct={colorFormat:f.RGBA8,depthFormat:_t,scaleFactor:E};ae=this.getBinding();re=ae.createProjectionLayer(ct);g.updateRenderState({layers:[re]});a.setPixelRatio(1);a.setSize(re.textureWidth,re.textureHeight,!1);_e=new ci(re.textureWidth,re.textureHeight,{format:Oi,type:xi,depthTexture:new Br(re.textureWidth,re.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Be),stencilBuffer:S.stencil,colorSpace:a.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:re.ignoreDepthValues===!1,resolveStencilBuffer:re.ignoreDepthValues===!1,storeMultisampledDepthBuffer:re.ignoreDepthValues===!1,storeMultisampledStencilBuffer:re.ignoreDepthValues===!1})}_e.isXRRenderTarget=!0;this.setFoveation(O);ie=null;b=await g.requestReferenceSpace(R);Mt.setContext(g);Mt.start();h.isPresenting=!0;h.dispatchEvent({type:"sessionstart"})}};this.getEnvironmentBlendMode=function(){if(g!==null)return g.environmentBlendMode};this.getDepthTexture=function(){return pe.getDepthTexture()};function ue(fe){for(let Ne=0;Ne<fe.removed.length;Ne++){const Be=fe.removed[Ne],mt=z.indexOf(Be);if(mt>=0){z[mt]=null;N[mt].disconnect(Be)}}for(let Ne=0;Ne<fe.added.length;Ne++){const Be=fe.added[Ne];let mt=z.indexOf(Be);if(mt===-1){for(let ct=0;ct<N.length;ct++)if(ct>=z.length){z.push(Be);mt=ct;break}else if(z[ct]===null){z[ct]=Be;mt=ct;break}if(mt===-1)break}const _t=N[mt];if(_t)_t.connect(Be)}}const We=new wt,xe=new wt;function Ee(fe,Ne,Be){We.setFromMatrixPosition(Ne.matrixWorld);xe.setFromMatrixPosition(Be.matrixWorld);const mt=We.distanceTo(xe),_t=Ne.projectionMatrix.elements,ct=Be.projectionMatrix.elements,Tn=_t[14]/(_t[10]-1),Rt=_t[14]/(_t[10]+1),Ut=(_t[9]+1)/_t[5],Zt=(_t[9]-1)/_t[5],Ft=(_t[8]-1)/_t[0],Rn=(ct[8]+1)/ct[0],Qt=Tn*Ft,Kn=Tn*Rn,Mn=mt/(-Ft+Rn),on=Mn*-Ft;Ne.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale);fe.translateX(on);fe.translateZ(Mn);fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale);fe.matrixWorldInverse.copy(fe.matrixWorld).invert();if(_t[10]===-1){fe.projectionMatrix.copy(Ne.projectionMatrix);fe.projectionMatrixInverse.copy(Ne.projectionMatrixInverse)}else{const H=Tn+Mn,It=Rt+Mn,Dt=Qt-on,sn=Kn+(mt-on),M=Ut*Rt/It*H,x=Zt*Rt/It*H;fe.projectionMatrix.makePerspective(Dt,sn,M,x,H,It);fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function Ce(fe,Ne){if(Ne===null)fe.matrixWorld.copy(fe.matrix);else fe.matrixWorld.multiplyMatrices(Ne.matrixWorld,fe.matrix);fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(g===null)return;let{near:Ne,far:Be}=fe;if(pe.texture!==null){if(pe.depthNear>0)Ne=pe.depthNear;if(pe.depthFar>0)Be=pe.depthFar}he.near=be.near=L.near=Ne;he.far=be.far=L.far=Be;if(Ie!==he.near||Z!==he.far){g.updateRenderState({depthNear:he.near,depthFar:he.far});Ie=he.near;Z=he.far}he.layers.mask=fe.layers.mask|6;L.layers.mask=he.layers.mask&-5;be.layers.mask=he.layers.mask&-3;const mt=fe.parent,_t=he.cameras;Ce(he,mt);for(let ct=0;ct<_t.length;ct++)Ce(_t[ct],mt);if(_t.length===2)Ee(he,L,be);else he.projectionMatrix.copy(L.projectionMatrix);if(A===null&&fe.isPerspectiveCamera)A={camera:fe,fov:fe.fov,zoom:fe.zoom};pt(fe,he,mt)};function pt(fe,Ne,Be){if(Be===null)fe.matrix.copy(Ne.matrixWorld);else{fe.matrix.copy(Be.matrixWorld);fe.matrix.invert();fe.matrix.multiply(Ne.matrixWorld)}fe.matrix.decompose(fe.position,fe.quaternion,fe.scale);fe.updateMatrixWorld(!0);fe.projectionMatrix.copy(Ne.projectionMatrix);fe.projectionMatrixInverse.copy(Ne.projectionMatrixInverse);if(fe.isPerspectiveCamera){fe.fov=td*2*Math.atan(1/fe.projectionMatrix.elements[5]);fe.zoom=1}}this.getCamera=function(){return he};this.getFoveation=function(){if(re===null&&D===null)return;return O};this.setFoveation=function(fe){O=fe;if(re!==null)re.fixedFoveation=fe;if(D!==null&&D.fixedFoveation!==void 0)D.fixedFoveation=fe};this.hasDepthSensing=function(){return pe.texture!==null};this.getDepthSensingMesh=function(){return pe.getMesh(he)};this.getCameraTexture=function(fe){return w[fe]};let ft=null;function xn(fe,Ne){X=Ne.getViewerPose(ie||b);Y=Ne;if(X!==null){const Be=X.views;if(D!==null){a.setRenderTargetFramebuffer(_e,D.framebuffer);a.setRenderTarget(_e)}let mt=!1;if(Be.length!==he.cameras.length){he.cameras.length=0;mt=!0}for(let Rt=0;Rt<Be.length;Rt++){const Ut=Be[Rt];let Zt=null;if(D!==null)Zt=D.getViewport(Ut);else{const Rn=ae.getViewSubImage(re,Ut);Zt=Rn.viewport;if(Rt===0){a.setRenderTargetTextures(_e,Rn.colorTexture,Rn.depthStencilTexture);a.setRenderTarget(_e)}}let Ft=Q[Rt];if(Ft===void 0){Ft=new Ur;Ft.layers.enable(Rt);Ft.viewport=new Cn;Q[Rt]=Ft}Ft.matrix.fromArray(Ut.transform.matrix);Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale);Ft.projectionMatrix.fromArray(Ut.projectionMatrix);Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert();Ft.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height);if(Rt===0){he.matrix.copy(Ft.matrix);he.matrix.decompose(he.position,he.quaternion,he.scale)}if(mt===!0)he.cameras.push(Ft)}const _t=g.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&g.depthUsage=="gpu-optimized"&&K){ae=h.getBinding();const Rt=ae.getDepthInformation(Be[0]);if(Rt&&Rt.isValid&&Rt.texture)pe.init(Rt,g.renderState)}if(_t&&_t.includes("camera-access")&&K){a.state.unbindTexture();ae=h.getBinding();for(let Rt=0;Rt<Be.length;Rt++){const Ut=Be[Rt].camera;if(Ut){let Zt=w[Ut];if(!Zt){Zt=new io;w[Ut]=Zt}const Ft=ae.getCameraImage(Ut);Zt.sourceTexture=Ft}}}}for(let Be=0;Be<N.length;Be++){const mt=z[Be],_t=N[Be];if(mt!==null&&_t!==void 0)_t.update(mt,Ne,ie||b)}if(ft)ft(fe,Ne);if(Ne.detectedPlanes)h.dispatchEvent({type:"planesdetected",data:Ne});Y=null}const Mt=new Ph;Mt.setAnimationLoop(xn);this.setAnimationLoop=function(fe){ft=fe};this.dispose=function(){}}}const Iu=new ki,ko=new Tt;ko.set(-1,0,0,0,1,0,0,0,1);function Pu(a,f){function h(w,S){if(w.matrixAutoUpdate===!0)w.updateMatrix();S.value.copy(w.matrix)}function g(w,S){S.color.getRGB(w.fogColor.value,mh(a));if(S.isFog){w.fogNear.value=S.near;w.fogFar.value=S.far}else if(S.isFogExp2)w.fogDensity.value=S.density}function E(w,S,te,_e,N){if(S.isNodeMaterial)S.uniformsNeedUpdate=!1;else if(S.isMeshBasicMaterial)b(w,S);else if(S.isMeshLambertMaterial){b(w,S);if(S.envMap)w.envMapIntensity.value=S.envMapIntensity}else if(S.isMeshToonMaterial){b(w,S);re(w,S)}else if(S.isMeshPhongMaterial){b(w,S);ae(w,S);if(S.envMap)w.envMapIntensity.value=S.envMapIntensity}else if(S.isMeshStandardMaterial){b(w,S);D(w,S);if(S.isMeshPhysicalMaterial)Y(w,S,N)}else if(S.isMeshMatcapMaterial){b(w,S);K(w,S)}else if(S.isMeshDepthMaterial)b(w,S);else if(S.isMeshDistanceMaterial){b(w,S);pe(w,S)}else if(S.isMeshNormalMaterial)b(w,S);else if(S.isLineBasicMaterial){R(w,S);if(S.isLineDashedMaterial)O(w,S)}else if(S.isPointsMaterial)ie(w,S,te,_e);else if(S.isSpriteMaterial)X(w,S);else if(S.isShadowMaterial){w.color.value.copy(S.color);w.opacity.value=S.opacity}else if(S.isShaderMaterial)S.uniformsNeedUpdate=!1}function b(w,S){w.opacity.value=S.opacity;if(S.color)w.diffuse.value.copy(S.color);if(S.emissive)w.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity);if(S.map){w.map.value=S.map;h(S.map,w.mapTransform)}if(S.alphaMap){w.alphaMap.value=S.alphaMap;h(S.alphaMap,w.alphaMapTransform)}if(S.bumpMap){w.bumpMap.value=S.bumpMap;h(S.bumpMap,w.bumpMapTransform);w.bumpScale.value=S.bumpScale;if(S.side===Zn)w.bumpScale.value*=-1}if(S.normalMap){w.normalMap.value=S.normalMap;h(S.normalMap,w.normalMapTransform);w.normalScale.value.copy(S.normalScale);if(S.side===Zn)w.normalScale.value.negate()}if(S.displacementMap){w.displacementMap.value=S.displacementMap;h(S.displacementMap,w.displacementMapTransform);w.displacementScale.value=S.displacementScale;w.displacementBias.value=S.displacementBias}if(S.emissiveMap){w.emissiveMap.value=S.emissiveMap;h(S.emissiveMap,w.emissiveMapTransform)}if(S.specularMap){w.specularMap.value=S.specularMap;h(S.specularMap,w.specularMapTransform)}if(S.alphaTest>0)w.alphaTest.value=S.alphaTest;const te=f.get(S),{envMap:_e,envMapRotation:N}=te;if(_e){w.envMap.value=_e;w.envMapRotation.value.setFromMatrix4(Iu.makeRotationFromEuler(N)).transpose();if(_e.isCubeTexture&&_e.isRenderTargetTexture===!1)w.envMapRotation.value.premultiply(ko);w.reflectivity.value=S.reflectivity;w.ior.value=S.ior;w.refractionRatio.value=S.refractionRatio}if(S.lightMap){w.lightMap.value=S.lightMap;w.lightMapIntensity.value=S.lightMapIntensity;h(S.lightMap,w.lightMapTransform)}if(S.aoMap){w.aoMap.value=S.aoMap;w.aoMapIntensity.value=S.aoMapIntensity;h(S.aoMap,w.aoMapTransform)}}function R(w,S){w.diffuse.value.copy(S.color);w.opacity.value=S.opacity;if(S.map){w.map.value=S.map;h(S.map,w.mapTransform)}}function O(w,S){w.dashSize.value=S.dashSize;w.totalSize.value=S.dashSize+S.gapSize;w.scale.value=S.scale}function ie(w,S,te,_e){w.diffuse.value.copy(S.color);w.opacity.value=S.opacity;w.size.value=S.size*te;w.scale.value=_e*0.5;if(S.map){w.map.value=S.map;h(S.map,w.uvTransform)}if(S.alphaMap){w.alphaMap.value=S.alphaMap;h(S.alphaMap,w.alphaMapTransform)}if(S.alphaTest>0)w.alphaTest.value=S.alphaTest}function X(w,S){w.diffuse.value.copy(S.color);w.opacity.value=S.opacity;w.rotation.value=S.rotation;if(S.map){w.map.value=S.map;h(S.map,w.mapTransform)}if(S.alphaMap){w.alphaMap.value=S.alphaMap;h(S.alphaMap,w.alphaMapTransform)}if(S.alphaTest>0)w.alphaTest.value=S.alphaTest}function ae(w,S){w.specular.value.copy(S.specular);w.shininess.value=Math.max(S.shininess,0.0001)}function re(w,S){if(S.gradientMap)w.gradientMap.value=S.gradientMap}function D(w,S){w.metalness.value=S.metalness;if(S.metalnessMap){w.metalnessMap.value=S.metalnessMap;h(S.metalnessMap,w.metalnessMapTransform)}w.roughness.value=S.roughness;if(S.roughnessMap){w.roughnessMap.value=S.roughnessMap;h(S.roughnessMap,w.roughnessMapTransform)}if(S.envMap)w.envMapIntensity.value=S.envMapIntensity}function Y(w,S,te){w.ior.value=S.ior;if(S.sheen>0){w.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen);w.sheenRoughness.value=S.sheenRoughness;if(S.sheenColorMap){w.sheenColorMap.value=S.sheenColorMap;h(S.sheenColorMap,w.sheenColorMapTransform)}if(S.sheenRoughnessMap){w.sheenRoughnessMap.value=S.sheenRoughnessMap;h(S.sheenRoughnessMap,w.sheenRoughnessMapTransform)}}if(S.clearcoat>0){w.clearcoat.value=S.clearcoat;w.clearcoatRoughness.value=S.clearcoatRoughness;if(S.clearcoatMap){w.clearcoatMap.value=S.clearcoatMap;h(S.clearcoatMap,w.clearcoatMapTransform)}if(S.clearcoatRoughnessMap){w.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap;h(S.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)}if(S.clearcoatNormalMap){w.clearcoatNormalMap.value=S.clearcoatNormalMap;h(S.clearcoatNormalMap,w.clearcoatNormalMapTransform);w.clearcoatNormalScale.value.copy(S.clearcoatNormalScale);if(S.side===Zn)w.clearcoatNormalScale.value.negate()}}if(S.dispersion>0)w.dispersion.value=S.dispersion;if(S.retroreflectivity>0)w.retroreflectivity.value=S.retroreflectivity;if(S.iridescence>0){w.iridescence.value=S.iridescence;w.iridescenceIOR.value=S.iridescenceIOR;w.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0];w.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1];if(S.iridescenceMap){w.iridescenceMap.value=S.iridescenceMap;h(S.iridescenceMap,w.iridescenceMapTransform)}if(S.iridescenceThicknessMap){w.iridescenceThicknessMap.value=S.iridescenceThicknessMap;h(S.iridescenceThicknessMap,w.iridescenceThicknessMapTransform)}}if(S.transmission>0){w.transmission.value=S.transmission;w.transmissionSamplerMap.value=te.texture;w.transmissionSamplerSize.value.set(te.width,te.height);if(S.transmissionMap){w.transmissionMap.value=S.transmissionMap;h(S.transmissionMap,w.transmissionMapTransform)}w.thickness.value=S.thickness;if(S.thicknessMap){w.thicknessMap.value=S.thicknessMap;h(S.thicknessMap,w.thicknessMapTransform)}w.attenuationDistance.value=S.attenuationDistance;w.attenuationColor.value.copy(S.attenuationColor)}if(S.anisotropy>0){w.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation));if(S.anisotropyMap){w.anisotropyMap.value=S.anisotropyMap;h(S.anisotropyMap,w.anisotropyMapTransform)}}w.specularIntensity.value=S.specularIntensity;w.specularColor.value.copy(S.specularColor);if(S.specularColorMap){w.specularColorMap.value=S.specularColorMap;h(S.specularColorMap,w.specularColorMapTransform)}if(S.specularIntensityMap){w.specularIntensityMap.value=S.specularIntensityMap;h(S.specularIntensityMap,w.specularIntensityMapTransform)}}function K(w,S){if(S.matcap)w.matcap.value=S.matcap}function pe(w,S){const te=f.get(S).light;w.referencePosition.value.setFromMatrixPosition(te.matrixWorld);w.nearDistance.value=te.shadow.camera.near;w.farDistance.value=te.shadow.camera.far}return{refreshFogUniforms:g,refreshMaterialUniforms:E}}function Lu(a,f,h,g){let E={},b={},R=[];const O=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function ie(N,z){const q=z.program;g.uniformBlockBinding(N,q)}function X(N,z){let q=E[N.id];if(q===void 0){w(N);q=ae(N);E[N.id]=q;N.addEventListener("dispose",te)}const ee=z.program;g.updateUBOMapping(N,ee);const A=f.render.frame;if(b[N.id]!==A){D(N);b[N.id]=A}}function ae(N){const z=re();N.__bindingPointIndex=z;const q=a.createBuffer(),{__size:ee,usage:A}=N;a.bindBuffer(a.UNIFORM_BUFFER,q);a.bufferData(a.UNIFORM_BUFFER,ee,A);a.bindBuffer(a.UNIFORM_BUFFER,null);a.bindBufferBase(a.UNIFORM_BUFFER,z,q);return q}function re(){for(let N=0;N<O;N++)if(R.indexOf(N)===-1){R.push(N);return N}Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.");return 0}function D(N){const z=E[N.id],{uniforms:q,__cache:ee}=N;a.bindBuffer(a.UNIFORM_BUFFER,z);for(let A=0,L=q.length;A<L;A++){const be=q[A];if(Array.isArray(be))for(let Q=0,he=be.length;Q<he;Q++)Y(be[Q],A,Q,ee);else Y(be,A,0,ee)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function Y(N,z,q,ee){if(pe(N,z,q,ee)===!0){const{__offset:A,value:L}=N;if(Array.isArray(L)){let be=0;for(let Q=0;Q<L.length;Q++){const he=L[Q],Ie=S(he);K(he,N.__data,be);if(typeof he!=="number"&&typeof he!=="boolean"&&!he.isMatrix3&&!ArrayBuffer.isView(he))be+=Ie.storage/Float32Array.BYTES_PER_ELEMENT}}else K(L,N.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,N.__data)}}function K(N,z,q){if(typeof N==="number"||typeof N==="boolean")z[0]=N;else if(N.isMatrix3){z[0]=N.elements[0];z[1]=N.elements[1];z[2]=N.elements[2];z[3]=0;z[4]=N.elements[3];z[5]=N.elements[4];z[6]=N.elements[5];z[7]=0;z[8]=N.elements[6];z[9]=N.elements[7];z[10]=N.elements[8];z[11]=0}else if(ArrayBuffer.isView(N))z.set(new N.constructor(N.buffer,N.byteOffset,z.length));else N.toArray(z,q)}function pe(N,z,q,ee){const A=N.value,L=z+"_"+q;if(ee[L]===void 0){if(typeof A==="number"||typeof A==="boolean")ee[L]=A;else if(ArrayBuffer.isView(A))ee[L]=A.slice();else ee[L]=A.clone();return!0}else{const be=ee[L];if(typeof A==="number"||typeof A==="boolean"){if(be!==A){ee[L]=A;return!0}}else if(ArrayBuffer.isView(A))return!0;else if(be.equals(A)===!1){be.copy(A);return!0}}return!1}function w(N){const z=N.uniforms;let q=0;const ee=16;for(let L=0,be=z.length;L<be;L++){const Q=Array.isArray(z[L])?z[L]:[z[L]];for(let he=0,Ie=Q.length;he<Ie;he++){const Z=Q[he],me=Array.isArray(Z.value)?Z.value:[Z.value];for(let Te=0,ue=me.length;Te<ue;Te++){const We=me[Te],xe=S(We),Ee=q%ee,Ce=Ee%xe.boundary,pt=Ee+Ce;q+=Ce;if(pt!==0&&ee-pt<xe.storage)q+=ee-pt;Z.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT);Z.__offset=q;q+=xe.storage}}}const A=q%ee;if(A>0)q+=ee-A;N.__size=q;N.__cache={};return this}function S(N){const z={boundary:0,storage:0};if(typeof N==="number"||typeof N==="boolean"){z.boundary=4;z.storage=4}else if(N.isVector2){z.boundary=8;z.storage=8}else if(N.isVector3||N.isColor){z.boundary=16;z.storage=12}else if(N.isVector4){z.boundary=16;z.storage=16}else if(N.isMatrix3){z.boundary=48;z.storage=48}else if(N.isMatrix4){z.boundary=64;z.storage=64}else if(N.isTexture)Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(N)){z.boundary=16;z.storage=N.byteLength}else Wt("WebGLRenderer: Unsupported uniform value type.",N);return z}function te(N){const z=N.target;z.removeEventListener("dispose",te);const q=R.indexOf(z.__bindingPointIndex);R.splice(q,1);a.deleteBuffer(E[z.id]);delete E[z.id];delete b[z.id]}function _e(){for(const N in E)a.deleteBuffer(E[N]);R=[];E={};b={}}return{bind:ie,update:X,dispose:_e}}const Ho=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Vo(){if(si===null){si=new wh(Ho,16,16,ns,Ui);si.name="DFG_LUT";si.minFilter=jn;si.magFilter=jn;si.wrapS=Hr;si.wrapT=Hr;si.generateMipmaps=!1;si.needsUpdate=!0}return si}class Cr{constructor(a={}){const{canvas:f=Ch(),context:h=null,depth:g=!0,stencil:E=!1,alpha:b=!1,antialias:R=!1,premultipliedAlpha:O=!0,preserveDrawingBuffer:ie=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:ae=!1,reversedDepthBuffer:re=!1,outputBufferType:D=xi}=a;this.isWebGLRenderer=!0;let Y;if(h!==null){if(typeof WebGLRenderingContext<"u"&&h instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");Y=h.getContextAttributes().alpha}else Y=b;const K=D,pe=new Set([Cs,qi,Xi]),w=new Set([xi,Wi,ir,ws,$a,Ka]),S=new Uint32Array(4),te=new Int32Array(4),_e=new wt;let N=null,z=null;const q=[],ee=[];let A=null;this.domElement=f;this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null};this.autoClear=!0;this.autoClearColor=!0;this.autoClearDepth=!0;this.autoClearStencil=!0;this.sortObjects=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.toneMapping=vi;this.toneMappingExposure=1;this.transmissionResolutionScale=1;const L=this;let be=!1,Q=null,he=null,Ie=null,Z=null;this._outputColorSpace=Rh;let me=0,Te=0,ue=null,We=-1,xe=null;const Ee=new Cn,Ce=new Cn;let pt=null;const ft=new en(0);let xn=0,{width:Mt,height:fe}=f,Ne=1,Be=null,mt=null;const _t=new Cn(0,0,Mt,fe),ct=new Cn(0,0,Mt,fe);let Tn=!1;const Rt=new Va;let Ut=!1,Zt=!1;const Ft=new ki,Rn=new wt,Qt=new Cn,Kn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mn=!1;function on(){return ue===null?Ne:1}let H=h;function It(y,G){return f.getContext(y,G)}let Dt,sn,M,x,k,ne,ye,Pe,Ge,ce,ge,Ve,tt,Le,Re,it,st,kt,V,Oe,de,Fe,Xe;try{const y={alpha:!0,depth:g,stencil:E,antialias:R,premultipliedAlpha:O,preserveDrawingBuffer:ie,powerPreference:X,failIfMajorPerformanceCaveat:ae};if("setAttribute"in f)f.setAttribute("data-engine",`three.js r${Ih}`);f.addEventListener("webglcontextlost",xt,!1);f.addEventListener("webglcontextrestored",Xt,!1);f.addEventListener("webglcontextcreationerror",Ot,!1);if(H===null){const G="webgl2";H=It(G,y);if(H===null)if(It(G))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Se()}catch(y){f.removeEventListener("webglcontextlost",xt,!1);f.removeEventListener("webglcontextrestored",Xt,!1);f.removeEventListener("webglcontextcreationerror",Ot,!1);Yt("WebGLRenderer: "+y.message);throw y}function Se(){Dt=new ia(H);Dt.init();de=new wr(H,Dt);sn=new Us(H,Dt,a,de);M=new Eu(H,Dt);if(sn.reversedDepthBuffer&&re)M.buffers.depth.setReversed(!0);he=H.createFramebuffer();Ie=H.createFramebuffer();Z=H.createFramebuffer();x=new nf(H);k=new Fo;ne=new wu(H,Dt,M,k,sn,de,x);ye=new tf(L);Pe=new id(H);Fe=new us(H,Pe);Ge=new Wc(H,Pe,x,Fe);ce=new Xc(H,Ge,Pe,Fe,x);kt=new hi(H,sn,ne);Re=new ta(k);ge=new Uo(L,ye,Dt,sn,Fe,Re);Ve=new Pu(L,k);tt=new sh;Le=new rh(Dt);st=new _r(L,ye,M,ce,Y,O);it=new oh(L,ce,sn);Xe=new Lu(H,x,sn,M);V=new ds(H,Dt,x);Oe=new En(H,Dt,x);x.programs=ge.programs;L.capabilities=sn;L.extensions=Dt;L.properties=k;L.renderLists=tt;L.shadowMap=it;L.state=M;L.info=x}if(K!==xi)A=new ii(K,f.width,f.height,R,g,E);const ze=new lh(L,H);this.xr=ze;this.getContext=function(){return H};this.getContextAttributes=function(){return H.getContextAttributes()};this.forceContextLoss=function(){const y=Dt.get("WEBGL_lose_context");if(y)y.loseContext()};this.forceContextRestore=function(){const y=Dt.get("WEBGL_lose_context");if(y)y.restoreContext()};this.getPixelRatio=function(){return Ne};this.setPixelRatio=function(y){if(y===void 0)return;Ne=y;this.setSize(Mt,fe,!1)};this.getSize=function(y){return y.set(Mt,fe)};this.setSize=function(y,G,se=!0){if(ze.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=y;fe=G;f.width=Math.floor(y*Ne);f.height=Math.floor(G*Ne);if(se===!0){f.style.width=y+"px";f.style.height=G+"px"}if(A!==null)A.setSize(f.width,f.height);this.setViewport(0,0,y,G)};this.getDrawingBufferSize=function(y){return y.set(Mt*Ne,fe*Ne).floor()};this.setDrawingBufferSize=function(y,G,se){Mt=y;fe=G;Ne=se;f.width=Math.floor(y*se);f.height=Math.floor(G*se);this.setViewport(0,0,y,G)};this.setEffects=function(y){if(K===xi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let G=0;G<y.length;G++)if(y[G].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])};this.getCurrentViewport=function(y){return y.copy(Ee)};this.getViewport=function(y){return y.copy(_t)};this.setViewport=function(y,G,se,j){if(y.isVector4)_t.set(y.x,y.y,y.z,y.w);else _t.set(y,G,se,j);M.viewport(Ee.copy(_t).multiplyScalar(Ne).round())};this.getScissor=function(y){return y.copy(ct)};this.setScissor=function(y,G,se,j){if(y.isVector4)ct.set(y.x,y.y,y.z,y.w);else ct.set(y,G,se,j);M.scissor(Ce.copy(ct).multiplyScalar(Ne).round())};this.getScissorTest=function(){return Tn};this.setScissorTest=function(y){M.setScissorTest(Tn=y)};this.setOpaqueSort=function(y){Be=y};this.setTransparentSort=function(y){mt=y};this.getClearColor=function(y){return y.copy(st.getClearColor())};this.setClearColor=function(){st.setClearColor(...arguments)};this.getClearAlpha=function(){return st.getClearAlpha()};this.setClearAlpha=function(){st.setClearAlpha(...arguments)};this.clear=function(y=!0,G=!0,se=!0){let j=0;if(y){let J=!1;if(ue!==null){const Ue=ue.texture.format;J=pe.has(Ue)}if(J){const Ue=ue.texture.type,qe=w.has(Ue),ke=st.getClearColor(),$e=st.getClearAlpha(),{r:et,g:bt,b:At}=ke;if(qe){S[0]=et;S[1]=bt;S[2]=At;S[3]=$e;H.clearBufferuiv(H.COLOR,0,S)}else{te[0]=et;te[1]=bt;te[2]=At;te[3]=$e;H.clearBufferiv(H.COLOR,0,te)}}else j|=H.COLOR_BUFFER_BIT}if(G){j|=H.DEPTH_BUFFER_BIT;this.state.buffers.depth.setMask(!0)}if(se){j|=H.STENCIL_BUFFER_BIT;this.state.buffers.stencil.setMask(4294967295)}if(j!==0)H.clear(j)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.setNodesHandler=function(y){y.setRenderer(this);Q=y};this.dispose=function(){f.removeEventListener("webglcontextlost",xt,!1);f.removeEventListener("webglcontextrestored",Xt,!1);f.removeEventListener("webglcontextcreationerror",Ot,!1);st.dispose();tt.dispose();Le.dispose();k.dispose();ye.dispose();ce.dispose();Fe.dispose();Xe.dispose();ge.dispose();ze.dispose();ze.removeEventListener("sessionstart",Yo);ze.removeEventListener("sessionend",ya);gs.stop()};function xt(y){y.preventDefault();lr("WebGLRenderer: Context Lost.");be=!0}function Xt(){lr("WebGLRenderer: Context Restored.");be=!1;const y=x.autoReset,G=it.enabled,se=it.autoUpdate,j=it.needsUpdate,J=it.type;Se();x.autoReset=y;it.enabled=G;it.autoUpdate=se;it.needsUpdate=j;it.type=J}function Ot(y){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ri(y){const G=y.target;G.removeEventListener("dispose",ri);pi(G)}function pi(y){Wo(y);k.remove(y)}function Wo(y){const G=k.get(y).programs;if(G!==void 0){G.forEach(function(se){ge.releaseProgram(se)});if(y.isShaderMaterial)ge.releaseShaderCache(y)}}this.renderBufferDirect=function(y,G,se,j,J,Ue){if(G===null)G=Kn;const qe=J.isMesh&&J.matrixWorld.determinantAffine()<0,ke=ch(y,G,se,j,J);M.setMaterial(j,qe);let $e=se.index,et=1;if(j.wireframe===!0){$e=Ge.getWireframeAttribute(se);if($e===void 0)return;et=2}const bt=se.drawRange,At=se.attributes.position;let Ke=bt.start*et,Pt=(bt.start+bt.count)*et;if(Ue!==null){Ke=Math.max(Ke,Ue.start*et);Pt=Math.min(Pt,(Ue.start+Ue.count)*et)}if($e!==null){Ke=Math.max(Ke,0);Pt=Math.min(Pt,$e.count)}else if(At!==void 0&&At!==null){Ke=Math.max(Ke,0);Pt=Math.min(Pt,At.count)}const fn=Pt-Ke;if(fn<0||fn===1/0)return;Fe.setup(J,j,ke,se,$e);let $t,jt=V;if($e!==null){$t=Pe.get($e);jt=Oe;jt.setIndex($t)}if(J.isMesh)if(j.wireframe===!0){M.setLineWidth(j.wireframeLinewidth*on());jt.setMode(H.LINES)}else jt.setMode(H.TRIANGLES);else if(J.isLine){let wn=j.linewidth;if(wn===void 0)wn=1;M.setLineWidth(wn*on());if(J.isLineSegments)jt.setMode(H.LINES);else if(J.isLineLoop)jt.setMode(H.LINE_LOOP);else jt.setMode(H.LINE_STRIP)}else if(J.isPoints)jt.setMode(H.POINTS);else if(J.isSprite)jt.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(!Dt.get("WEBGL_multi_draw")){const{_multiDrawStarts:wn,_multiDrawCounts:Ze,_multiDrawCount:Xn}=J,Bt=$e?Pe.get($e).bytesPerElement:1,rn=k.get(j).currentProgram.getUniforms();for(let wi=0;wi<Xn;wi++){rn.setValue(H,"_gl_DrawID",wi);jt.render(wn[wi]/Bt,Ze[wi])}}else jt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)jt.renderInstances(Ke,fn,J.count);else if(se.isInstancedBufferGeometry){const wn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ze=Math.min(se.instanceCount,wn);jt.renderInstances(Ke,fn,Ze)}else jt.render(Ke,fn)};function Xo(y,G,se,j){if(Q!==null&&y.isNodeMaterial)Q.setObject(j,y);if(Ut===!0)Re.setState(y,se,!1);if(y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1){y.side=Zn;y.needsUpdate=!0;Jo(y,G,j);y.side=Ss;y.needsUpdate=!0;Jo(y,G,j);y.side=yn}else Jo(y,G,j)}this.compile=function(y,G,se=null){if(se===null)se=y;if(Q!==null)Q.renderStart(y,G,se);z=Le.get(se);z.init(G);ee.push(z);se.traverseVisible(function(J){if(J.isLight&&J.layers.test(G.layers)){z.pushLight(J);if(J.castShadow)z.pushShadow(J)}});if(y!==se)y.traverseVisible(function(J){if(J.isLight&&J.layers.test(G.layers)){z.pushLight(J);if(J.castShadow)z.pushShadow(J)}});z.setupLights();if(Q!==null)Q.updateLights(z.state.lightsArray);Zt=this.localClippingEnabled;Ut=Re.init(this.clippingPlanes,Zt);if(Ut===!0)Re.setGlobalState(this.clippingPlanes,G);if(Q!==null)it.render(z.state.shadowsArray,se,G);const j=new Set;y.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){const ke=Ue[qe];Xo(ke,se,G,J);j.add(ke)}else{Xo(Ue,se,G,J);j.add(Ue)}});z=ee.pop();if(Q!==null)Q.renderEnd();return j};this.compileAsync=function(y,G,se=null){const j=this.compile(y,G,se);return new Promise((J)=>{function Ue(){j.forEach(function(qe){const $e=k.get(qe).currentProgram;if($e===void 0||$e.isReady())j.delete(qe)});if(j.size===0){J(y);return}setTimeout(Ue,10)}if(Dt.get("KHR_parallel_shader_compile")!==null)Ue();else setTimeout(Ue,10)})};let qo=null;function Du(y){if(qo)qo(y)}function Yo(){gs.stop()}function ya(){gs.start()}const gs=new Ph;gs.setAnimationLoop(Du);if(typeof self<"u")gs.setContext(self);this.setAnimationLoop=function(y){qo=y;ze.setAnimationLoop(y);y===null?gs.stop():gs.start()};ze.addEventListener("sessionstart",Yo);ze.addEventListener("sessionend",ya);this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(be===!0)return;if(Q!==null)Q.renderStart(y,G);const se=ze.enabled===!0&&ze.isPresenting===!0,j=A!==null&&(ue===null||se)&&A.begin(L,ue);if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(G.parent===null&&G.matrixWorldAutoUpdate===!0)G.updateMatrixWorld();if(ze.enabled===!0&&ze.isPresenting===!0&&(A===null||A.isCompositing()===!1)){if(ze.cameraAutoUpdate===!0)ze.updateCamera(G);G=ze.getCamera()}if(y.isScene===!0)y.onBeforeRender(L,y,G,ue);z=Le.get(y,ee.length);z.init(G);z.state.textureUnits=ne.getTextureUnits();ee.push(z);Ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse);Rt.setFromProjectionMatrix(Ft,wc,G.reversedDepth);Zt=this.localClippingEnabled;Ut=Re.init(this.clippingPlanes,Zt);N=tt.get(y,q.length);N.init();q.push(N);if(ze.enabled===!0&&ze.isPresenting===!0){const qe=L.xr.getDepthSensingMesh();if(qe!==null)Zo(qe,G,-1/0,L.sortObjects)}Zo(y,G,0,L.sortObjects);N.finish();if(Q!==null)Q.updateLights(z.state.lightsArray);if(L.sortObjects===!0)N.sort(Be,mt);Mn=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1;if(Mn)st.addToRenderList(N,y);this.info.render.frame++;if(this.info.autoReset===!0)this.info.reset();if(Ut===!0)Re.beginShadows();const J=z.state.shadowsArray;it.render(J,y,G);if(Ut===!0)Re.endShadows();if((j&&A.hasRenderPass())===!1){const qe=N.opaque,ke=N.transmissive;z.setupLights();if(G.isArrayCamera){const $e=G.cameras;if(ke.length>0)for(let et=0,bt=$e.length;et<bt;et++){const At=$e[et];Uu(qe,ke,y,At)}if(Mn)st.render(y);for(let et=0,bt=$e.length;et<bt;et++){const At=$e[et];Nu(N,y,At,At.viewport)}}else{if(ke.length>0)Uu(qe,ke,y,G);if(Mn)st.render(y);Nu(N,y,G)}}if(ue!==null&&Te===0){ne.updateMultisampleRenderTarget(ue);ne.updateRenderTargetMipmap(ue)}if(j)A.end(L);if(y.isScene===!0)y.onAfterRender(L,y,G);Fe.resetDefaultState();We=-1;xe=null;ee.pop();if(ee.length>0){z=ee[ee.length-1];ne.setTextureUnits(z.state.textureUnits);if(Ut===!0)Re.setGlobalState(L.clippingPlanes,z.state.camera)}else z=null;q.pop();if(q.length>0)N=q[q.length-1];else N=null;if(Q!==null)Q.renderEnd()};function Zo(y,G,se,j){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)se=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(G)}else if(y.isLightProbeGrid)z.pushLightProbeGrid(y);else if(y.isLight){z.pushLight(y);if(y.castShadow)z.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Rt)){if(j)Qt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ft);const qe=ce.update(y),ke=y.material;if(ke.visible)N.push(y,qe,ke,se,Qt.z,null,G)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||y.intersectsFrustum(Rt)){const qe=ce.update(y),ke=y.material;if(j){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();Qt.copy(y.boundingSphere.center)}else{if(qe.boundingSphere===null)qe.computeBoundingSphere();Qt.copy(qe.boundingSphere.center)}Qt.applyMatrix4(y.matrixWorld).applyMatrix4(Ft)}if(Array.isArray(ke)){const $e=qe.groups;for(let et=0,bt=$e.length;et<bt;et++){const At=$e[et],Ke=ke[At.materialIndex];if(Ke&&Ke.visible)N.push(y,qe,Ke,se,Qt.z,At,G)}}else if(ke.visible)N.push(y,qe,ke,se,Qt.z,null,G)}}}const Ue=y.children;for(let qe=0,ke=Ue.length;qe<ke;qe++)Zo(Ue[qe],G,se,j)}function Nu(y,G,se,j){const{opaque:J,transmissive:Ue,transparent:qe}=y;z.setupLightsView(se);if(Ut===!0)Re.setGlobalState(L.clippingPlanes,se);if(j)M.viewport(Ee.copy(j));if(J.length>0)jo(J,G,se);if(Ue.length>0)jo(Ue,G,se);if(qe.length>0)jo(qe,G,se);M.buffers.depth.setTest(!0);M.buffers.depth.setMask(!0);M.buffers.color.setMask(!0);M.setPolygonOffset(!1)}function Uu(y,G,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[j.id]===void 0){const Ke=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:Ke?Ui:xi,minFilter:bs,samples:Math.max(4,sn.samples),stencilBuffer:E,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tn.workingColorSpace})}const Ue=z.state.transmissionRenderTarget[j.id],qe=j.viewport||Ee;Ue.setSize(qe.z*L.transmissionResolutionScale,qe.w*L.transmissionResolutionScale);const ke=L.getRenderTarget(),$e=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(Ue);L.getClearColor(ft);xn=L.getClearAlpha();if(xn<1)L.setClearColor(16777215,0.5);L.clear();if(Mn)st.render(se);const bt=L.toneMapping;L.toneMapping=vi;const At=j.viewport;if(j.viewport!==void 0)j.viewport=void 0;z.setupLightsView(j);if(Ut===!0)Re.setGlobalState(L.clippingPlanes,j);jo(y,se,j);ne.updateMultisampleRenderTarget(Ue);ne.updateRenderTargetMipmap(Ue);if(Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Pt=0,fn=G.length;Pt<fn;Pt++){const $t=G[Pt],{object:jt,geometry:wn,material:Ze,group:Xn}=$t;if(Ze.side===yn&&jt.layers.test(j.layers)){const Bt=Ze.side;Ze.side=Zn;Ze.needsUpdate=!0;Fu(jt,se,j,wn,Ze,Xn);Ze.side=Bt;Ze.needsUpdate=!0;Ke=!0}}if(Ke===!0){ne.updateMultisampleRenderTarget(Ue);ne.updateRenderTargetMipmap(Ue)}}L.setRenderTarget(ke,$e,et);L.setClearColor(ft,xn);if(At!==void 0)j.viewport=At;L.toneMapping=bt}function jo(y,G,se){const j=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Ue=y.length;J<Ue;J++){const qe=y[J],{object:ke,geometry:$e,group:et}=qe;let bt=qe.material;if(bt.allowOverride===!0&&j!==null)bt=j;if(ke.layers.test(se.layers))Fu(ke,G,se,$e,bt,et)}}function Fu(y,G,se,j,J,Ue){if(Q!==null&&J.isNodeMaterial)Q.setObject(y,J);y.onBeforeRender(L,G,se,j,J,Ue);y.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,y.matrixWorld);y.normalMatrix.getNormalMatrix(y.modelViewMatrix);J.onBeforeRender(L,G,se,j,y,Ue);if(J.transparent===!0&&J.side===yn&&J.forceSinglePass===!1){J.side=Zn;J.needsUpdate=!0;L.renderBufferDirect(se,G,j,J,y,Ue);J.side=Ss;J.needsUpdate=!0;L.renderBufferDirect(se,G,j,J,y,Ue);J.side=yn}else L.renderBufferDirect(se,G,j,J,y,Ue);y.onAfterRender(L,G,se,j,J,Ue)}function Jo(y,G,se){if(G.isScene!==!0)G=Kn;const j=k.get(y),J=z.state.lights,Ue=z.state.shadowsArray,qe=J.state.version,ke=ge.getParameters(y,J.state,Ue,G,se,z.state.lightProbeGridArray),$e=ge.getProgramCacheKey(ke);let et=j.programs;j.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?G.environment:null;j.fog=G.fog;const bt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;j.envMap=ye.get(y.envMap||j.environment,bt);j.envMapRotation=j.environment!==null&&y.envMap===null?G.environmentRotation:y.envMapRotation;if(et===void 0){y.addEventListener("dispose",ri);et=new Map;j.programs=et}let At=et.get($e);if(At!==void 0){if(j.currentProgram===At&&j.lightsStateVersion===qe){$o(y,ke);return At}}else{ke.uniforms=ge.getUniforms(y);if(Q!==null&&y.isNodeMaterial)Q.build(y,se,ke);y.onBeforeCompile(ke,L);At=ge.acquireProgram(ke,$e);et.set($e,At);j.uniforms=ke.uniforms}const Ke=j.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)Ke.clippingPlanes=Re.uniform;$o(y,ke);j.needsLights=uh(y);j.lightsStateVersion=qe;if(j.needsLights){Ke.ambientLightColor.value=J.state.ambient;Ke.lightProbe.value=J.state.probe;Ke.sunLights.value=J.state.sun;Ke.sunLightShadows.value=J.state.sunShadow;Ke.directionalLights.value=J.state.directional;Ke.directionalLightShadows.value=J.state.directionalShadow;Ke.spotLights.value=J.state.spot;Ke.spotLightShadows.value=J.state.spotShadow;Ke.rectAreaLights.value=J.state.rectArea;Ke.ltc_1.value=J.state.rectAreaLTC1;Ke.ltc_2.value=J.state.rectAreaLTC2;Ke.pointLights.value=J.state.point;Ke.pointLightShadows.value=J.state.pointShadow;Ke.hemisphereLights.value=J.state.hemi;Ke.sunShadowMatrix.value=J.state.sunShadowMatrix;Ke.sunShadowCascade.value=J.state.sunShadowCascade;Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix;Ke.spotLightMatrix.value=J.state.spotLightMatrix;Ke.spotLightMap.value=J.state.spotLightMap;Ke.pointShadowMatrix.value=J.state.pointShadowMatrix}j.lightProbeGrid=z.state.lightProbeGridArray.length>0;j.currentProgram=At;j.uniformsList=null;return At}function Sa(y){if(y.uniformsList===null){const G=y.currentProgram.getUniforms();y.uniformsList=Hs.seqWithValue(G.seq,y.uniforms)}return y.uniformsList}function $o(y,G){const se=k.get(y);se.outputColorSpace=G.outputColorSpace;se.batching=G.batching;se.batchingColor=G.batchingColor;se.instancing=G.instancing;se.instancingColor=G.instancingColor;se.instancingMorph=G.instancingMorph;se.skinning=G.skinning;se.morphTargets=G.morphTargets;se.morphNormals=G.morphNormals;se.morphColors=G.morphColors;se.morphTargetsCount=G.morphTargetsCount;se.numClippingPlanes=G.numClippingPlanes;se.numIntersection=G.numClipIntersection;se.vertexAlphas=G.vertexAlphas;se.vertexTangents=G.vertexTangents;se.toneMapping=G.toneMapping}function Ko(y,G){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;_e.setFromMatrixPosition(G.matrixWorld);for(let se=0,j=y.length;se<j;se++){const J=y[se];if(J.texture!==null&&J.boundingBox.containsPoint(_e))return J}return null}function ch(y,G,se,j,J){if(G.isScene!==!0)G=Kn;ne.resetTextureUnits();const Ue=G.fog,qe=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?G.environment:null,ke=ue===null?L.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:tn.workingColorSpace,$e=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,et=ye.get(j.envMap||qe,$e),bt=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,At=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ke=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,fn=!!se.morphAttributes.color;let $t=vi;if(j.toneMapped){if(ue===null||ue.isXRRenderTarget===!0)$t=L.toneMapping}const jt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,wn=jt!==void 0?jt.length:0,Ze=k.get(j),Xn=z.state.lights;if(Ut===!0){if(Zt===!0||y!==xe){const zt=y===xe&&j.id===We;Re.setState(j,y,zt)}}let Bt=!1;if(j.version===Ze.__version){if(Ze.needsLights&&Ze.lightsStateVersion!==Xn.state.version)Bt=!0;else if(Ze.outputColorSpace!==ke)Bt=!0;else if(J.isBatchedMesh&&Ze.batching===!1)Bt=!0;else if(!J.isBatchedMesh&&Ze.batching===!0)Bt=!0;else if(J.isBatchedMesh&&Ze.batchingColor===!0&&J._colorsTexture===null)Bt=!0;else if(J.isBatchedMesh&&Ze.batchingColor===!1&&J._colorsTexture!==null)Bt=!0;else if(J.isInstancedMesh&&Ze.instancing===!1)Bt=!0;else if(!J.isInstancedMesh&&Ze.instancing===!0)Bt=!0;else if(J.isSkinnedMesh&&Ze.skinning===!1)Bt=!0;else if(!J.isSkinnedMesh&&Ze.skinning===!0)Bt=!0;else if(J.isInstancedMesh&&Ze.instancingColor===!0&&J.instanceColor===null)Bt=!0;else if(J.isInstancedMesh&&Ze.instancingColor===!1&&J.instanceColor!==null)Bt=!0;else if(J.isInstancedMesh&&Ze.instancingMorph===!0&&J.morphTexture===null)Bt=!0;else if(J.isInstancedMesh&&Ze.instancingMorph===!1&&J.morphTexture!==null)Bt=!0;else if(Ze.envMap!==et)Bt=!0;else if(j.fog===!0&&Ze.fog!==Ue)Bt=!0;else if(Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Re.numPlanes||Ze.numIntersection!==Re.numIntersection))Bt=!0;else if(Ze.vertexAlphas!==bt)Bt=!0;else if(Ze.vertexTangents!==At)Bt=!0;else if(Ze.morphTargets!==Ke)Bt=!0;else if(Ze.morphNormals!==Pt)Bt=!0;else if(Ze.morphColors!==fn)Bt=!0;else if(Ze.toneMapping!==$t)Bt=!0;else if(Ze.morphTargetsCount!==wn)Bt=!0;else if(!!Ze.lightProbeGrid!==z.state.lightProbeGridArray.length>0)Bt=!0}else{Bt=!0;Ze.__version=j.version}let rn=Ze.currentProgram;if(Bt===!0){rn=Jo(j,G,J);if(Q&&j.isNodeMaterial)Q.onUpdateProgram(j,rn,Ze)}let wi=!1,qn=!1,es=!1;const Ht=rn.getUniforms(),ln=Ze.uniforms;if(M.useProgram(rn.program)){wi=!0;qn=!0;es=!0}if(j.id!==We){We=j.id;qn=!0}if(Ze.needsLights){const zt=Ko(z.state.lightProbeGridArray,J);if(Ze.lightProbeGrid!==zt){Ze.lightProbeGrid=zt;qn=!0}}if(wi||xe!==y){if(M.buffers.depth.getReversed()&&y.reversedDepth!==!0){y._reversedDepth=!0;y.updateProjectionMatrix()}Ht.setValue(H,"projectionMatrix",y.projectionMatrix);Ht.setValue(H,"viewMatrix",y.matrixWorldInverse);const Ci=Ht.map.cameraPosition;if(Ci!==void 0)Ci.setValue(H,Rn.setFromMatrixPosition(y.matrixWorld));if(sn.logarithmicDepthBuffer)Ht.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)Ht.setValue(H,"isOrthographic",y.isOrthographicCamera===!0);if(xe!==y){xe=y;qn=!0;es=!0}}if(Ze.needsLights){if(Xn.state.sunShadowMap.length>0)Ht.setValue(H,"sunShadowMap",Xn.state.sunShadowMap,ne);if(Xn.state.directionalShadowMap.length>0)Ht.setValue(H,"directionalShadowMap",Xn.state.directionalShadowMap,ne);if(Xn.state.spotShadowMap.length>0)Ht.setValue(H,"spotShadowMap",Xn.state.spotShadowMap,ne);if(Xn.state.pointShadowMap.length>0)Ht.setValue(H,"pointShadowMap",Xn.state.pointShadowMap,ne)}if(J.isSkinnedMesh){Ht.setOptional(H,J,"bindMatrix");Ht.setOptional(H,J,"bindMatrixInverse");const zt=J.skeleton;if(zt){if(zt.boneTexture===null)zt.computeBoneTexture();Ht.setValue(H,"boneTexture",zt.boneTexture,ne)}}if(J.isBatchedMesh){Ht.setOptional(H,J,"batchingTexture");Ht.setValue(H,"batchingTexture",J._matricesTexture,ne);Ht.setOptional(H,J,"batchingIdTexture");Ht.setValue(H,"batchingIdTexture",J._indirectTexture,ne);Ht.setOptional(H,J,"batchingColorTexture");if(J._colorsTexture!==null)Ht.setValue(H,"batchingColorTexture",J._colorsTexture,ne)}const mi=se.morphAttributes;if(mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)kt.update(J,se,rn);if(qn||Ze.receiveShadow!==J.receiveShadow){Ze.receiveShadow=J.receiveShadow;Ht.setValue(H,"receiveShadow",J.receiveShadow)}if((j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&G.environment!==null)ln.envMapIntensity.value=G.environmentIntensity;if(ln.dfgLUT!==void 0)ln.dfgLUT.value=Vo();if(qn){Ht.setValue(H,"toneMappingExposure",L.toneMappingExposure);if(Ze.needsLights)hh(ln,es);if(Ue&&j.fog===!0)Ve.refreshFogUniforms(ln,Ue);Ve.refreshMaterialUniforms(ln,j,Ne,fe,z.state.transmissionRenderTarget[y.id]);if(Ze.needsLights&&Ze.lightProbeGrid){const zt=Ze.lightProbeGrid;ln.probesSH.value=zt.texture;ln.probesMin.value.copy(zt.boundingBox.min);ln.probesMax.value.copy(zt.boundingBox.max);ln.probesResolution.value.copy(zt.resolution)}Hs.upload(H,Sa(Ze),ln,ne)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0){Hs.upload(H,Sa(Ze),ln,ne);j.uniformsNeedUpdate=!1}if(j.isSpriteMaterial)Ht.setValue(H,"center",J.center);Ht.setValue(H,"modelViewMatrix",J.modelViewMatrix);Ht.setValue(H,"normalMatrix",J.normalMatrix);Ht.setValue(H,"modelMatrix",J.matrixWorld);if(j.uniformsGroups!==void 0){const zt=j.uniformsGroups;for(let Ci=0,Ri=zt.length;Ci<Ri;Ci++){const Ou=zt[Ci];Xe.update(Ou,rn);Xe.bind(Ou,rn)}}return rn}function hh(y,G){y.ambientLightColor.needsUpdate=G;y.lightProbe.needsUpdate=G;y.sunLights.needsUpdate=G;y.sunLightShadows.needsUpdate=G;y.directionalLights.needsUpdate=G;y.directionalLightShadows.needsUpdate=G;y.pointLights.needsUpdate=G;y.pointLightShadows.needsUpdate=G;y.spotLights.needsUpdate=G;y.spotLightShadows.needsUpdate=G;y.rectAreaLights.needsUpdate=G;y.hemisphereLights.needsUpdate=G}function uh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return me};this.getActiveMipmapLevel=function(){return Te};this.getRenderTarget=function(){return ue};this.setRenderTargetTextures=function(y,G,se){const j=k.get(y);j.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1;if(j.__autoAllocateDepthBuffer===!1)j.__useRenderToTexture=!1;k.get(y.texture).__webglTexture=G;k.get(y.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se;j.__hasExternalTextures=!0};this.setRenderTargetFramebuffer=function(y,G){const se=k.get(y);se.__webglFramebuffer=G;se.__useDefaultFramebuffer=G===void 0};this.setRenderTarget=function(y,G=0,se=0){ue=y;me=G;Te=se;let j=null,J=!1,Ue=!1;if(y){const ke=k.get(y);if(ke.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(H.FRAMEBUFFER,ke.__webglFramebuffer);Ee.copy(y.viewport);Ce.copy(y.scissor);pt=y.scissorTest;M.viewport(Ee);M.scissor(Ce);M.setScissorTest(pt);We=-1;return}else if(ke.__webglFramebuffer===void 0)ne.setupRenderTarget(y);else if(ke.__hasExternalTextures)ne.rebindTextures(y,k.get(y.texture).__webglTexture,k.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const bt=y.depthTexture;if(ke.__boundDepthTexture!==bt){if(bt!==null&&k.has(bt)&&(y.width!==bt.image.width||y.height!==bt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(y)}}const $e=y.texture;if($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)Ue=!0;const et=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(et[G]))j=et[G][se];else j=et[G];J=!0}else if(y.samples>0&&ne.useMultisampledRTT(y)===!1)j=k.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(et))j=et[se];else j=et;Ee.copy(y.viewport);Ce.copy(y.scissor);pt=y.scissorTest}else{Ee.copy(_t).multiplyScalar(Ne).floor();Ce.copy(ct).multiplyScalar(Ne).floor();pt=Tn}if(se!==0)j=he;if(M.bindFramebuffer(H.FRAMEBUFFER,j))M.drawBuffers(y,j);M.viewport(Ee);M.scissor(Ce);M.setScissorTest(pt);if(J){const ke=k.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,se)}else if(Ue){const ke=G;for(let $e=0;$e<y.textures.length;$e++){const et=k.get(y.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,et.__webglTexture,se,ke)}}else if(y!==null&&se!==0){const ke=k.get(y.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ke.__webglTexture,se)}We=-1};function Qo(y){const G=k.get(y);if(G.__readFormat!==y.format||G.__readType!==y.type){G.__readFormat=y.format;G.__readType=y.type;G.__formatReadable=sn.textureFormatReadable(y.format);G.__typeReadable=sn.textureTypeReadable(y.type)}return G}this.readRenderTargetPixels=function(y,G,se,j,J,Ue,qe,ke=0){if(!(y&&y.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&qe!==void 0)$e=$e[qe];if($e){M.bindFramebuffer(H.FRAMEBUFFER,$e);try{const et=y.textures[ke],{format:bt,type:At}=et;if(y.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+ke);const Ke=Qo(et);if(Ke.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(G>=0&&G<=y.width-j&&(se>=0&&se<=y.height-J))H.readPixels(G,se,j,J,de.convert(bt),de.convert(At),Ue)}finally{const et=ue!==null?k.get(ue).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,et)}}};this.readRenderTargetPixelsAsync=async function(y,G,se,j,J,Ue,qe,ke=0){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=k.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&qe!==void 0)$e=$e[qe];if($e)if(G>=0&&G<=y.width-j&&(se>=0&&se<=y.height-J)){M.bindFramebuffer(H.FRAMEBUFFER,$e);const et=y.textures[ke],{format:bt,type:At}=et;if(y.textures.length>1)H.readBuffer(H.COLOR_ATTACHMENT0+ke);const Ke=Qo(et);if(Ke.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt);H.bufferData(H.PIXEL_PACK_BUFFER,Ue.byteLength,H.STREAM_READ);H.readPixels(G,se,j,J,de.convert(bt),de.convert(At),0);H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const fn=ue!==null?k.get(ue).__webglFramebuffer:null;M.bindFramebuffer(H.FRAMEBUFFER,fn);const $t=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);H.flush();await nd(H,$t,4);H.bindBuffer(H.PIXEL_PACK_BUFFER,Pt);H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ue);H.bindBuffer(H.PIXEL_PACK_BUFFER,null);H.deleteBuffer(Pt);H.deleteSync($t);return Ue}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")};this.copyFramebufferToTexture=function(y,G=null,se=0){const j=Math.pow(2,-se),J=Math.floor(y.image.width*j),Ue=Math.floor(y.image.height*j),qe=G!==null?G.x:0,ke=G!==null?G.y:0;ne.setTexture2D(y,0);H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,qe,ke,J,Ue);M.unbindTexture()};this.copyTextureToTexture=function(y,G,se=null,j=null,J=0,Ue=0){let qe,ke,$e,et,bt,At,Ke,Pt,fn;const $t=y.isCompressedTexture?y.mipmaps[Ue]:y.image;if(se!==null){qe=se.max.x-se.min.x;ke=se.max.y-se.min.y;$e=se.isBox3?se.max.z-se.min.z:1;et=se.min.x;bt=se.min.y;At=se.isBox3?se.min.z:0}else{const ln=Math.pow(2,-J);qe=Math.floor($t.width*ln);ke=Math.floor($t.height*ln);if(y.isDataArrayTexture)$e=$t.depth;else if(y.isData3DTexture)$e=Math.floor($t.depth*ln);else $e=1;et=0;bt=0;At=0}if(j!==null){Ke=j.x;Pt=j.y;fn=j.z}else{Ke=0;Pt=0;fn=0}const jt=de.convert(G.format),wn=de.convert(G.type);let Ze;if(G.isData3DTexture){ne.setTexture3D(G,0);Ze=H.TEXTURE_3D}else if(G.isDataArrayTexture||G.isCompressedArrayTexture){ne.setTexture2DArray(G,0);Ze=H.TEXTURE_2D_ARRAY}else{ne.setTexture2D(G,0);Ze=H.TEXTURE_2D}M.activeTexture(H.TEXTURE0);M.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY);M.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha);M.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Xn=M.getParameter(H.UNPACK_ROW_LENGTH),Bt=M.getParameter(H.UNPACK_IMAGE_HEIGHT),rn=M.getParameter(H.UNPACK_SKIP_PIXELS),wi=M.getParameter(H.UNPACK_SKIP_ROWS),qn=M.getParameter(H.UNPACK_SKIP_IMAGES);M.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width);M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height);M.pixelStorei(H.UNPACK_SKIP_PIXELS,et);M.pixelStorei(H.UNPACK_SKIP_ROWS,bt);M.pixelStorei(H.UNPACK_SKIP_IMAGES,At);const es=y.isDataArrayTexture||y.isData3DTexture,Ht=G.isDataArrayTexture||G.isData3DTexture;if(y.isDepthTexture){const ln=k.get(y),mi=k.get(G),zt=k.get(ln.__renderTarget),Ci=k.get(mi.__renderTarget);M.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer);M.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<$e;Ri++){if(es){H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,k.get(y).__webglTexture,J,At+Ri);H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,k.get(G).__webglTexture,Ue,fn+Ri)}H.blitFramebuffer(et,bt,qe,ke,Ke,Pt,qe,ke,H.DEPTH_BUFFER_BIT,H.NEAREST)}M.bindFramebuffer(H.READ_FRAMEBUFFER,null);M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||y.isRenderTargetTexture||k.has(y)){const ln=k.get(y),mi=k.get(G);M.bindFramebuffer(H.READ_FRAMEBUFFER,Ie);M.bindFramebuffer(H.DRAW_FRAMEBUFFER,Z);for(let zt=0;zt<$e;zt++){if(es)H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,J,At+zt);else H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,J);if(Ht)H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mi.__webglTexture,Ue,fn+zt);else H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mi.__webglTexture,Ue);if(J!==0)H.blitFramebuffer(et,bt,qe,ke,Ke,Pt,qe,ke,H.COLOR_BUFFER_BIT,H.NEAREST);else if(Ht)H.copyTexSubImage3D(Ze,Ue,Ke,Pt,fn+zt,et,bt,qe,ke);else H.copyTexSubImage2D(Ze,Ue,Ke,Pt,et,bt,qe,ke)}M.bindFramebuffer(H.READ_FRAMEBUFFER,null);M.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Ht)if(y.isDataTexture||y.isData3DTexture)H.texSubImage3D(Ze,Ue,Ke,Pt,fn,qe,ke,$e,jt,wn,$t.data);else if(G.isCompressedArrayTexture)H.compressedTexSubImage3D(Ze,Ue,Ke,Pt,fn,qe,ke,$e,jt,$t.data);else H.texSubImage3D(Ze,Ue,Ke,Pt,fn,qe,ke,$e,jt,wn,$t);else if(y.isDataTexture)H.texSubImage2D(H.TEXTURE_2D,Ue,Ke,Pt,qe,ke,jt,wn,$t.data);else if(y.isCompressedTexture)H.compressedTexSubImage2D(H.TEXTURE_2D,Ue,Ke,Pt,$t.width,$t.height,jt,$t.data);else H.texSubImage2D(H.TEXTURE_2D,Ue,Ke,Pt,qe,ke,jt,wn,$t);M.pixelStorei(H.UNPACK_ROW_LENGTH,Xn);M.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt);M.pixelStorei(H.UNPACK_SKIP_PIXELS,rn);M.pixelStorei(H.UNPACK_SKIP_ROWS,wi);M.pixelStorei(H.UNPACK_SKIP_IMAGES,qn);if(Ue===0&&G.generateMipmaps)H.generateMipmap(Ze);M.unbindTexture()};this.initRenderTarget=function(y){if(k.get(y).__webglFramebuffer===void 0)ne.setupRenderTarget(y)};this.initTexture=function(y){if(y.isCubeTexture)ne.setTextureCube(y,0);else if(y.isData3DTexture)ne.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)ne.setTexture2DArray(y,0);else ne.setTexture2D(y,0);M.unbindTexture()};this.resetState=function(){me=0;Te=0;ue=null;M.reset();Fe.reset()};if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wc}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;const f=this.getContext();f.drawingBufferColorSpace=tn._getDrawingBufferColorSpace(a);f.unpackColorSpace=tn._getUnpackColorSpace()}}return{ACESFilmicToneMapping:ml,AddEquation:As,AddOperation:vl,AdditiveAnimationBlendMode:P["vendor/three.core.js"].AdditiveAnimationBlendMode,AdditiveBlending:Ja,AgXToneMapping:pl,AlphaFormat:Wr,AlwaysCompare:Ql,AlwaysDepth:zl,AlwaysStencilFunc:P["vendor/three.core.js"].AlwaysStencilFunc,AmbientLight:P["vendor/three.core.js"].AmbientLight,AnimationAction:P["vendor/three.core.js"].AnimationAction,AnimationClip:P["vendor/three.core.js"].AnimationClip,AnimationLoader:P["vendor/three.core.js"].AnimationLoader,AnimationMixer:P["vendor/three.core.js"].AnimationMixer,AnimationObjectGroup:P["vendor/three.core.js"].AnimationObjectGroup,AnimationUtils:P["vendor/three.core.js"].AnimationUtils,ArcCurve:P["vendor/three.core.js"].ArcCurve,ArrayCamera:Eh,ArrowHelper:P["vendor/three.core.js"].ArrowHelper,AttachedBindMode:P["vendor/three.core.js"].AttachedBindMode,Audio:P["vendor/three.core.js"].Audio,AudioAnalyser:P["vendor/three.core.js"].AudioAnalyser,AudioContext:P["vendor/three.core.js"].AudioContext,AudioListener:P["vendor/three.core.js"].AudioListener,AudioLoader:P["vendor/three.core.js"].AudioLoader,AxesHelper:P["vendor/three.core.js"].AxesHelper,BackSide:Zn,BasicDepthPacking:P["vendor/three.core.js"].BasicDepthPacking,BasicShadowMap:P["vendor/three.core.js"].BasicShadowMap,BatchedMesh:P["vendor/three.core.js"].BatchedMesh,BezierInterpolant:P["vendor/three.core.js"].BezierInterpolant,Bone:P["vendor/three.core.js"].Bone,BooleanKeyframeTrack:P["vendor/three.core.js"].BooleanKeyframeTrack,Box2:P["vendor/three.core.js"].Box2,Box3:P["vendor/three.core.js"].Box3,Box3Helper:P["vendor/three.core.js"].Box3Helper,BoxGeometry:Ra,BoxHelper:P["vendor/three.core.js"].BoxHelper,BufferAttribute:Ia,BufferGeometry:Nr,BufferGeometryLoader:P["vendor/three.core.js"].BufferGeometryLoader,ByteType:sc,Cache:P["vendor/three.core.js"].Cache,Camera:P["vendor/three.core.js"].Camera,CameraHelper:P["vendor/three.core.js"].CameraHelper,CanvasTexture:P["vendor/three.core.js"].CanvasTexture,CapsuleGeometry:P["vendor/three.core.js"].CapsuleGeometry,CatmullRomCurve3:P["vendor/three.core.js"].CatmullRomCurve3,CineonToneMapping:gl,CircleGeometry:P["vendor/three.core.js"].CircleGeometry,ClampToEdgeWrapping:Hr,Clock:P["vendor/three.core.js"].Clock,Color:en,ColorKeyframeTrack:P["vendor/three.core.js"].ColorKeyframeTrack,ColorManagement:tn,Compatibility:P["vendor/three.core.js"].Compatibility,CompressedArrayTexture:P["vendor/three.core.js"].CompressedArrayTexture,CompressedCubeTexture:P["vendor/three.core.js"].CompressedCubeTexture,CompressedTexture:P["vendor/three.core.js"].CompressedTexture,CompressedTextureLoader:P["vendor/three.core.js"].CompressedTextureLoader,ConeGeometry:P["vendor/three.core.js"].ConeGeometry,ConstantAlphaFactor:El,ConstantColorFactor:wl,Controls:P["vendor/three.core.js"].Controls,CubeCamera:_h,CubeDepthTexture:Tl,CubeReflectionMapping:Qs,CubeRefractionMapping:Ms,CubeTexture:dl,CubeTextureLoader:P["vendor/three.core.js"].CubeTextureLoader,CubeUVReflectionMapping:Dr,CubicBezierCurve:P["vendor/three.core.js"].CubicBezierCurve,CubicBezierCurve3:P["vendor/three.core.js"].CubicBezierCurve3,CubicInterpolant:P["vendor/three.core.js"].CubicInterpolant,CullFaceBack:Ya,CullFaceFront:Hl,CullFaceFrontBack:P["vendor/three.core.js"].CullFaceFrontBack,CullFaceNone:kl,Curve:P["vendor/three.core.js"].Curve,CurvePath:P["vendor/three.core.js"].CurvePath,CustomBlending:Vl,CustomToneMapping:er,CylinderGeometry:P["vendor/three.core.js"].CylinderGeometry,Cylindrical:P["vendor/three.core.js"].Cylindrical,Data3DTexture:xh,DataArrayTexture:Fr,DataTexture:wh,DataTextureLoader:P["vendor/three.core.js"].DataTextureLoader,DataUtils:P["vendor/three.core.js"].DataUtils,DecrementStencilOp:P["vendor/three.core.js"].DecrementStencilOp,DecrementWrapStencilOp:P["vendor/three.core.js"].DecrementWrapStencilOp,DefaultLoadingManager:P["vendor/three.core.js"].DefaultLoadingManager,DepthFormat:Ts,DepthStencilFormat:rs,DepthTexture:Br,DetachedBindMode:P["vendor/three.core.js"].DetachedBindMode,DirectionalLight:P["vendor/three.core.js"].DirectionalLight,DirectionalLightHelper:P["vendor/three.core.js"].DirectionalLightHelper,DiscreteInterpolant:P["vendor/three.core.js"].DiscreteInterpolant,DodecahedronGeometry:P["vendor/three.core.js"].DodecahedronGeometry,DoubleSide:yn,DstAlphaFactor:kr,DstColorFactor:Pl,DynamicCopyUsage:P["vendor/three.core.js"].DynamicCopyUsage,DynamicDrawUsage:P["vendor/three.core.js"].DynamicDrawUsage,DynamicReadUsage:P["vendor/three.core.js"].DynamicReadUsage,EdgesGeometry:P["vendor/three.core.js"].EdgesGeometry,EllipseCurve:P["vendor/three.core.js"].EllipseCurve,EqualCompare:$l,EqualDepth:Ol,EqualStencilFunc:P["vendor/three.core.js"].EqualStencilFunc,EquirectangularReflectionMapping:Pa,EquirectangularRefractionMapping:La,Euler:P["vendor/three.core.js"].Euler,EventDispatcher:Ah,ExternalTexture:io,ExtrudeGeometry:P["vendor/three.core.js"].ExtrudeGeometry,FileLoader:P["vendor/three.core.js"].FileLoader,Float16BufferAttribute:P["vendor/three.core.js"].Float16BufferAttribute,Float32BufferAttribute:Or,FloatType:Fi,Fog:P["vendor/three.core.js"].Fog,FogExp2:P["vendor/three.core.js"].FogExp2,FramebufferTexture:P["vendor/three.core.js"].FramebufferTexture,FrontSide:Ss,Frustum:Va,FrustumArray:P["vendor/three.core.js"].FrustumArray,GLBufferAttribute:P["vendor/three.core.js"].GLBufferAttribute,GLSL1:P["vendor/three.core.js"].GLSL1,GLSL3:Ga,GreaterCompare:Jl,GreaterDepth:Ul,GreaterEqualCompare:Oa,GreaterEqualDepth:Fl,GreaterEqualStencilFunc:P["vendor/three.core.js"].GreaterEqualStencilFunc,GreaterStencilFunc:P["vendor/three.core.js"].GreaterStencilFunc,GridHelper:P["vendor/three.core.js"].GridHelper,Group:P["vendor/three.core.js"].Group,HTMLTexture:P["vendor/three.core.js"].HTMLTexture,HalfFloatType:Ui,HemisphereLight:P["vendor/three.core.js"].HemisphereLight,HemisphereLightHelper:P["vendor/three.core.js"].HemisphereLightHelper,IcosahedronGeometry:P["vendor/three.core.js"].IcosahedronGeometry,ImageBitmapLoader:P["vendor/three.core.js"].ImageBitmapLoader,ImageLoader:P["vendor/three.core.js"].ImageLoader,ImageUtils:P["vendor/three.core.js"].ImageUtils,IncrementStencilOp:P["vendor/three.core.js"].IncrementStencilOp,IncrementWrapStencilOp:P["vendor/three.core.js"].IncrementWrapStencilOp,InstancedBufferAttribute:P["vendor/three.core.js"].InstancedBufferAttribute,InstancedBufferGeometry:P["vendor/three.core.js"].InstancedBufferGeometry,InstancedInterleavedBuffer:P["vendor/three.core.js"].InstancedInterleavedBuffer,InstancedMesh:P["vendor/three.core.js"].InstancedMesh,Int16BufferAttribute:P["vendor/three.core.js"].Int16BufferAttribute,Int32BufferAttribute:P["vendor/three.core.js"].Int32BufferAttribute,Int8BufferAttribute:P["vendor/three.core.js"].Int8BufferAttribute,IntType:ll,InterleavedBuffer:P["vendor/three.core.js"].InterleavedBuffer,InterleavedBufferAttribute:P["vendor/three.core.js"].InterleavedBufferAttribute,Interpolant:P["vendor/three.core.js"].Interpolant,InterpolateBezier:P["vendor/three.core.js"].InterpolateBezier,InterpolateDiscrete:P["vendor/three.core.js"].InterpolateDiscrete,InterpolateLinear:P["vendor/three.core.js"].InterpolateLinear,InterpolateSmooth:P["vendor/three.core.js"].InterpolateSmooth,InterpolationSamplingMode:P["vendor/three.core.js"].InterpolationSamplingMode,InterpolationSamplingType:P["vendor/three.core.js"].InterpolationSamplingType,InvertStencilOp:P["vendor/three.core.js"].InvertStencilOp,KeepStencilOp:P["vendor/three.core.js"].KeepStencilOp,KeyframeTrack:P["vendor/three.core.js"].KeyframeTrack,LOD:P["vendor/three.core.js"].LOD,LatheGeometry:P["vendor/three.core.js"].LatheGeometry,Layers:vh,LessCompare:Kl,LessDepth:Bl,LessEqualCompare:Ba,LessEqualDepth:Wa,LessEqualStencilFunc:P["vendor/three.core.js"].LessEqualStencilFunc,LessStencilFunc:P["vendor/three.core.js"].LessStencilFunc,Light:P["vendor/three.core.js"].Light,LightProbe:P["vendor/three.core.js"].LightProbe,LightShadow:P["vendor/three.core.js"].LightShadow,Line:P["vendor/three.core.js"].Line,Line3:P["vendor/three.core.js"].Line3,LineBasicMaterial:P["vendor/three.core.js"].LineBasicMaterial,LineCurve:P["vendor/three.core.js"].LineCurve,LineCurve3:P["vendor/three.core.js"].LineCurve3,LineDashedMaterial:P["vendor/three.core.js"].LineDashedMaterial,LineLoop:P["vendor/three.core.js"].LineLoop,LineSegments:P["vendor/three.core.js"].LineSegments,LinearFilter:jn,LinearInterpolant:P["vendor/three.core.js"].LinearInterpolant,LinearMipMapLinearFilter:P["vendor/three.core.js"].LinearMipMapLinearFilter,LinearMipMapNearestFilter:P["vendor/three.core.js"].LinearMipMapNearestFilter,LinearMipmapLinearFilter:bs,LinearMipmapNearestFilter:Vr,LinearSRGBColorSpace:ul,LinearToneMapping:xl,LinearTransfer:ka,Loader:P["vendor/three.core.js"].Loader,LoaderUtils:P["vendor/three.core.js"].LoaderUtils,LoadingManager:P["vendor/three.core.js"].LoadingManager,LoopOnce:P["vendor/three.core.js"].LoopOnce,LoopPingPong:P["vendor/three.core.js"].LoopPingPong,LoopRepeat:P["vendor/three.core.js"].LoopRepeat,MOUSE:P["vendor/three.core.js"].MOUSE,Material:P["vendor/three.core.js"].Material,MaterialBlending:P["vendor/three.core.js"].MaterialBlending,MaterialLoader:P["vendor/three.core.js"].MaterialLoader,MathUtils:P["vendor/three.core.js"].MathUtils,Matrix2:P["vendor/three.core.js"].Matrix2,Matrix3:Tt,Matrix4:ki,MaxEquation:Xl,Mesh:Di,MeshBasicMaterial:hl,MeshDepthMaterial:bl,MeshDistanceMaterial:yh,MeshLambertMaterial:P["vendor/three.core.js"].MeshLambertMaterial,MeshMatcapMaterial:P["vendor/three.core.js"].MeshMatcapMaterial,MeshNormalMaterial:P["vendor/three.core.js"].MeshNormalMaterial,MeshPhongMaterial:P["vendor/three.core.js"].MeshPhongMaterial,MeshPhysicalMaterial:P["vendor/three.core.js"].MeshPhysicalMaterial,MeshStandardMaterial:P["vendor/three.core.js"].MeshStandardMaterial,MeshToonMaterial:P["vendor/three.core.js"].MeshToonMaterial,MinEquation:Wl,MirroredRepeatWrapping:ql,MixOperation:yl,MultiplyBlending:Za,MultiplyOperation:Sl,NearestFilter:Si,NearestMipMapLinearFilter:P["vendor/three.core.js"].NearestMipMapLinearFilter,NearestMipMapNearestFilter:P["vendor/three.core.js"].NearestMipMapNearestFilter,NearestMipmapLinearFilter:nr,NearestMipmapNearestFilter:Zl,NeutralToneMapping:fl,NeverCompare:ec,NeverDepth:Gl,NeverStencilFunc:P["vendor/three.core.js"].NeverStencilFunc,NoBlending:yi,NoColorSpace:ss,NoNormalPacking:P["vendor/three.core.js"].NoNormalPacking,NoToneMapping:vi,NormalAnimationBlendMode:P["vendor/three.core.js"].NormalAnimationBlendMode,NormalBlending:ts,NormalGAPacking:P["vendor/three.core.js"].NormalGAPacking,NormalRGPacking:P["vendor/three.core.js"].NormalRGPacking,NotEqualCompare:jl,NotEqualDepth:Nl,NotEqualStencilFunc:P["vendor/three.core.js"].NotEqualStencilFunc,NumberKeyframeTrack:P["vendor/three.core.js"].NumberKeyframeTrack,Object3D:P["vendor/three.core.js"].Object3D,ObjectLoader:P["vendor/three.core.js"].ObjectLoader,ObjectSpaceNormalMap:Ml,OctahedronGeometry:P["vendor/three.core.js"].OctahedronGeometry,OneFactor:Dl,OneMinusConstantAlphaFactor:Al,OneMinusConstantColorFactor:Sh,OneMinusDstAlphaFactor:Cl,OneMinusDstColorFactor:Rl,OneMinusSrcAlphaFactor:Il,OneMinusSrcColorFactor:Es,OrthographicCamera:cl,PCFShadowMap:Vi,PCFSoftShadowMap:Gr,PMREMGenerator:Jt,Path:P["vendor/three.core.js"].Path,PerspectiveCamera:Ur,Plane:gh,PlaneGeometry:ol,PlaneHelper:P["vendor/three.core.js"].PlaneHelper,PointLight:P["vendor/three.core.js"].PointLight,PointLightHelper:P["vendor/three.core.js"].PointLightHelper,Points:P["vendor/three.core.js"].Points,PointsMaterial:P["vendor/three.core.js"].PointsMaterial,PolarGridHelper:P["vendor/three.core.js"].PolarGridHelper,PolyhedronGeometry:P["vendor/three.core.js"].PolyhedronGeometry,PositionalAudio:P["vendor/three.core.js"].PositionalAudio,PropertyBinding:P["vendor/three.core.js"].PropertyBinding,PropertyMixer:P["vendor/three.core.js"].PropertyMixer,QuadraticBezierCurve:P["vendor/three.core.js"].QuadraticBezierCurve,QuadraticBezierCurve3:P["vendor/three.core.js"].QuadraticBezierCurve3,Quaternion:P["vendor/three.core.js"].Quaternion,QuaternionKeyframeTrack:P["vendor/three.core.js"].QuaternionKeyframeTrack,QuaternionLinearInterpolant:P["vendor/three.core.js"].QuaternionLinearInterpolant,R11_EAC_Format:qr,RED_GREEN_RGTC2_Format:Gn,RED_RGTC1_Format:Tc,REVISION:Ih,RG11_EAC_Format:Ha,RGBADepthPacking:P["vendor/three.core.js"].RGBADepthPacking,RGBAFormat:Oi,RGBAIntegerFormat:Cs,RGBA_ASTC_10x10_Format:xc,RGBA_ASTC_10x5_Format:mc,RGBA_ASTC_10x6_Format:gc,RGBA_ASTC_10x8_Format:_c,RGBA_ASTC_12x10_Format:vc,RGBA_ASTC_12x12_Format:yc,RGBA_ASTC_4x4_Format:Zr,RGBA_ASTC_5x4_Format:ar,RGBA_ASTC_5x5_Format:hc,RGBA_ASTC_6x5_Format:uc,RGBA_ASTC_6x6_Format:dc,RGBA_ASTC_8x5_Format:fc,RGBA_ASTC_8x6_Format:or,RGBA_ASTC_8x8_Format:pc,RGBA_BPTC_Format:Sc,RGBA_ETC2_EAC_Format:cc,RGBA_PVRTC_2BPPV1_Format:oc,RGBA_PVRTC_4BPPV1_Format:ac,RGBA_S3TC_DXT1_Format:rr,RGBA_S3TC_DXT3_Format:eo,RGBA_S3TC_DXT5_Format:to,RGBDepthPacking:P["vendor/three.core.js"].RGBDepthPacking,RGBFormat:Xr,RGBIntegerFormat:P["vendor/three.core.js"].RGBIntegerFormat,RGB_BPTC_SIGNED_Format:Mc,RGB_BPTC_UNSIGNED_Format:bc,RGB_ETC1_Format:lc,RGB_ETC2_Format:Yi,RGB_PVRTC_2BPPV1_Format:no,RGB_PVRTC_4BPPV1_Format:rc,RGB_S3TC_DXT1_Format:Rs,RGDepthPacking:P["vendor/three.core.js"].RGDepthPacking,RGFormat:ns,RGIntegerFormat:qi,RawShaderMaterial:Fa,Ray:P["vendor/three.core.js"].Ray,Raycaster:P["vendor/three.core.js"].Raycaster,RectAreaLight:P["vendor/three.core.js"].RectAreaLight,RedFormat:Qa,RedIntegerFormat:Xi,ReinhardToneMapping:_l,RenderObjectRefreshType:P["vendor/three.core.js"].RenderObjectRefreshType,RenderTarget:P["vendor/three.core.js"].RenderTarget,RenderTarget3D:P["vendor/three.core.js"].RenderTarget3D,RepeatWrapping:Yl,ReplaceStencilOp:P["vendor/three.core.js"].ReplaceStencilOp,ReverseSubtractEquation:tr,RingGeometry:P["vendor/three.core.js"].RingGeometry,SIGNED_R11_EAC_Format:kn,SIGNED_RED_GREEN_RGTC2_Format:Ec,SIGNED_RED_RGTC1_Format:Ac,SIGNED_RG11_EAC_Format:Yr,SRGBColorSpace:Rh,SRGBTransfer:Kt,Scene:P["vendor/three.core.js"].Scene,ShaderChunk:nt,ShaderLib:_n,ShaderMaterial:Ni,ShadowMaterial:P["vendor/three.core.js"].ShadowMaterial,Shape:P["vendor/three.core.js"].Shape,ShapeGeometry:P["vendor/three.core.js"].ShapeGeometry,ShapePath:P["vendor/three.core.js"].ShapePath,ShapeUtils:P["vendor/three.core.js"].ShapeUtils,ShortType:sr,Skeleton:P["vendor/three.core.js"].Skeleton,SkeletonHelper:P["vendor/three.core.js"].SkeletonHelper,SkinnedMesh:P["vendor/three.core.js"].SkinnedMesh,Source:P["vendor/three.core.js"].Source,Sphere:P["vendor/three.core.js"].Sphere,SphereGeometry:P["vendor/three.core.js"].SphereGeometry,Spherical:P["vendor/three.core.js"].Spherical,SphericalHarmonics3:P["vendor/three.core.js"].SphericalHarmonics3,SplineCurve:P["vendor/three.core.js"].SplineCurve,SpotLight:P["vendor/three.core.js"].SpotLight,SpotLightHelper:P["vendor/three.core.js"].SpotLightHelper,Sprite:P["vendor/three.core.js"].Sprite,SpriteMaterial:P["vendor/three.core.js"].SpriteMaterial,SrcAlphaFactor:qa,SrcAlphaSaturateFactor:Xa,SrcColorFactor:Ll,StaticCopyUsage:P["vendor/three.core.js"].StaticCopyUsage,StaticDrawUsage:P["vendor/three.core.js"].StaticDrawUsage,StaticReadUsage:P["vendor/three.core.js"].StaticReadUsage,StereoCamera:P["vendor/three.core.js"].StereoCamera,StreamCopyUsage:P["vendor/three.core.js"].StreamCopyUsage,StreamDrawUsage:P["vendor/three.core.js"].StreamDrawUsage,StreamReadUsage:P["vendor/three.core.js"].StreamReadUsage,StringKeyframeTrack:P["vendor/three.core.js"].StringKeyframeTrack,SubtractEquation:is,SubtractiveBlending:ja,TOUCH:P["vendor/three.core.js"].TOUCH,TangentSpaceNormalMap:Pn,TetrahedronGeometry:P["vendor/three.core.js"].TetrahedronGeometry,Texture:za,TextureLoader:P["vendor/three.core.js"].TextureLoader,TextureSource:P["vendor/three.core.js"].TextureSource,TextureUtils:P["vendor/three.core.js"].TextureUtils,Timer:P["vendor/three.core.js"].Timer,TimestampQuery:P["vendor/three.core.js"].TimestampQuery,TorusGeometry:P["vendor/three.core.js"].TorusGeometry,TorusKnotGeometry:P["vendor/three.core.js"].TorusKnotGeometry,Triangle:P["vendor/three.core.js"].Triangle,TriangleFanDrawMode:P["vendor/three.core.js"].TriangleFanDrawMode,TriangleStripDrawMode:P["vendor/three.core.js"].TriangleStripDrawMode,TrianglesDrawMode:P["vendor/three.core.js"].TrianglesDrawMode,TubeGeometry:P["vendor/three.core.js"].TubeGeometry,UVMapping:P["vendor/three.core.js"].UVMapping,Uint16BufferAttribute:Ua,Uint32BufferAttribute:Na,Uint8BufferAttribute:P["vendor/three.core.js"].Uint8BufferAttribute,Uint8ClampedBufferAttribute:P["vendor/three.core.js"].Uint8ClampedBufferAttribute,Uniform:P["vendor/three.core.js"].Uniform,UniformsGroup:P["vendor/three.core.js"].UniformsGroup,UniformsLib:De,UniformsUtils:zr,UnsignedByteType:xi,UnsignedInt101111Type:ic,UnsignedInt248Type:ws,UnsignedInt5999Type:nc,UnsignedIntType:Wi,UnsignedShort4444Type:$a,UnsignedShort5551Type:Ka,UnsignedShortType:ir,VSMShadowMap:Hi,Vector2:zn,Vector3:wt,Vector4:Cn,VectorKeyframeTrack:P["vendor/three.core.js"].VectorKeyframeTrack,VideoFrameTexture:P["vendor/three.core.js"].VideoFrameTexture,VideoTexture:P["vendor/three.core.js"].VideoTexture,WebGL3DRenderTarget:P["vendor/three.core.js"].WebGL3DRenderTarget,WebGLArrayRenderTarget:P["vendor/three.core.js"].WebGLArrayRenderTarget,WebGLCoordinateSystem:wc,WebGLCubeRenderTarget:Ye,WebGLRenderTarget:ci,WebGLRenderer:Cr,WebGLUtils:wr,WebGPUCoordinateSystem:P["vendor/three.core.js"].WebGPUCoordinateSystem,WebXRController:so,WireframeGeometry:P["vendor/three.core.js"].WireframeGeometry,WrapAroundEnding:P["vendor/three.core.js"].WrapAroundEnding,ZeroCurvatureEnding:P["vendor/three.core.js"].ZeroCurvatureEnding,ZeroFactor:Mh,ZeroSlopeEnding:P["vendor/three.core.js"].ZeroSlopeEnding,ZeroStencilOp:P["vendor/three.core.js"].ZeroStencilOp,createCanvasElement:Ch,error:Yt,getConsoleFunction:P["vendor/three.core.js"].getConsoleFunction,log:lr,setConsoleFunction:P["vendor/three.core.js"].setConsoleFunction,warn:Wt,warnOnce:Da}}()})();