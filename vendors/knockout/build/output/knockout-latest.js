/*!
 * Knockout JavaScript library v3.5.1-sm
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(C=>{function F(a,c){return null===a||da[typeof a]?a===c:!1}function E(a,c){var e;return()=>{e||(e=b.a.setTimeout(()=>{e=0;a()},c))}}function J(a,c){var e;return()=>{clearTimeout(e);e=b.a.setTimeout(a,c)}}function S(a,c){null!==c&&c.o&&c.o()}function V(a,c){var e=this.hc,g=e[D];g.$||(this.Va&&this.za[c]?(e.wb(c,a,this.za[c]),this.za[c]=null,--this.Va):g.u[c]||e.wb(c,a,g.v?{V:a}:e.Yb(a)),a.ja&&a.bc())}var T=C.document,W={},b="undefined"!==typeof W?W:{};b.m=(a,c)=>{a=a.split(".");for(var e=b,g=0;g<
a.length-1;g++)e=e[a[g]];e[a[a.length-1]]=c};b.Z=(a,c,e)=>{a[c]=e};b.version="3.5.1-sm";b.m("version",b.version);b.a={wa:(a,c)=>{c=a.indexOf(c);0<c?a.splice(c,1):0===c&&a.shift()},extend:(a,c)=>{c&&Object.entries(c).forEach(e=>a[e[0]]=e[1]);return a},N:(a,c)=>a&&Object.entries(a).forEach(e=>c(e[0],e[1])),fb:(a,c,e)=>{if(!a)return a;var g={};Object.entries(a).forEach(k=>g[k[0]]=c.call(e,k[1],k[0],a));return g},Za:a=>{for(;a.firstChild;)b.removeNode(a.firstChild)},Rb:a=>{var c=[...a],e=(c[0]&&c[0].ownerDocument||
T).createElement("div");a.forEach(g=>e.append(b.ea(g)));return e},ya:(a,c)=>Array.prototype.map.call(a,c?e=>b.ea(e.cloneNode(!0)):e=>e.cloneNode(!0)),sa:(a,c)=>{b.a.Za(a);c&&a.append(...c)},Aa:(a,c)=>{if(a.length){for(c=8===c.nodeType&&c.parentNode||c;a.length&&a[0].parentNode!==c;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==c;)a.length--;if(1<a.length){c=a[0];var e=a[a.length-1];for(a.length=0;c!==e;)a.push(c),c=c.nextSibling;a.push(e)}}return a},Xb:a=>null==a?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,
""),Ec:(a,c)=>{a=a||"";return c.length>a.length?!1:a.substring(0,c.length)===c},kc:(a,c)=>c.contains(1!==a.nodeType?a.parentNode:a),Ya:a=>b.a.kc(a,a.ownerDocument.documentElement),Eb:a=>b.onError?function(){try{return a.apply(this,arguments)}catch(c){throw b.onError&&b.onError(c),c;}}:a,setTimeout:(a,c)=>setTimeout(b.a.Eb(a),c),Ib:a=>setTimeout(()=>{b.onError&&b.onError(a);throw a;},0),H:(a,c,e)=>{a.addEventListener(c,b.a.Eb(e),!1)},Zb:(a,c)=>{if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");
a.dispatchEvent(new Event(c))},g:a=>b.K(a)?a():a,jb:(a,c)=>a.textContent=b.a.g(c)||""};b.m("utils",b.a);b.m("unwrap",b.a.g);b.a.f=new function(){let a=0,c="__ko__"+Date.now(),e=new WeakMap;return{get:(g,k)=>(e.get(g)||{})[k],set:(g,k,t)=>{if(e.has(g))e.get(g)[k]=t;else{let d={};d[k]=t;e.set(g,d)}return t},ab:function(g,k,t){return this.get(g,k)||this.set(g,k,t)},clear:g=>e.delete(g),X:()=>a++ +c}};b.a.J=new function(){function a(d,f){var h=b.a.f.get(d,g);void 0===h&&f&&(h=[],b.a.f.set(d,g,h));return h}
function c(d){var f=a(d,!1);if(f){f=f.slice(0);for(var h=0;h<f.length;h++)f[h](d)}b.a.f.clear(d);t[d.nodeType]&&e(d.childNodes,!0)}function e(d,f){for(var h=[],n,p=0;p<d.length;p++)if(!f||8===d[p].nodeType)if(c(h[h.length]=n=d[p]),d[p]!==n)for(;p--&&!h.includes(d[p]););}var g=b.a.f.X(),k={1:!0,8:!0,9:!0},t={1:!0,9:!0};return{ma:(d,f)=>{if("function"!=typeof f)throw Error("Callback must be a function");a(d,!0).push(f)},ib:(d,f)=>{var h=a(d,!1);h&&(b.a.wa(h,f),0==h.length&&b.a.f.set(d,g,void 0))},ea:d=>
{b.i.D(()=>{k[d.nodeType]&&(c(d),t[d.nodeType]&&e(d.getElementsByTagName("*")))});return d},removeNode:d=>{b.ea(d);d.parentNode&&d.parentNode.removeChild(d)}}};b.ea=b.a.J.ea;b.removeNode=b.a.J.removeNode;b.m("utils.domNodeDisposal",b.a.J);b.m("utils.domNodeDisposal.addDisposeCallback",b.a.J.ma);b.mb=(()=>{function a(){if(e)for(var d=e,f=0,h;k<e;)if(h=c[k++]){if(k>d){if(5E3<=++f){k=e;b.a.Ib(Error("'Too much recursion' after processing "+f+" task groups."));break}d=e}try{h()}catch(n){b.a.Ib(n)}}k=e=
c.length=0}var c=[],e=0,g=1,k=0,t=(d=>{var f=T.createElement("div");(new MutationObserver(d)).observe(f,{attributes:!0});return()=>f.classList.toggle("foo")})(a);return{Vb:d=>{e||t(a);c[e++]=d;return g++},cancel:d=>{d-=g-e;d>=k&&d<e&&(c[d]=null)}}})();b.m("tasks",b.mb);b.$a={debounce:(a,c)=>a.Ha(e=>J(e,c)),rateLimit:(a,c)=>{if("number"==typeof c)var e=c;else{e=c.timeout;var g=c.method}var k="function"==typeof g?g:E;a.Ha(t=>k(t,e,c))},notify:(a,c)=>{a.equalityComparer="always"==c?null:F}};var da={undefined:1,
"boolean":1,number:1,string:1};b.m("extenders",b.$a);class ea{constructor(a,c,e){this.V=a;this.pb=c;this.Cb=e;this.Na=!1;this.P=this.Ra=null;b.Z(this,"dispose",this.o);b.Z(this,"disposeWhenNodeIsRemoved",this.j)}o(){this.Na||(this.P&&b.a.J.ib(this.Ra,this.P),this.Na=!0,this.Cb(),this.V=this.pb=this.Cb=this.Ra=this.P=null)}j(a){this.Ra=a;b.a.J.ma(a,this.P=this.o.bind(this))}}b.T=function(){Object.setPrototypeOf(this,P);P.Ea(this)};var P={Ea:a=>{a.U={change:[]};a.vb=1},subscribe:function(a,c,e){var g=
this;e=e||"change";var k=new ea(g,c?a.bind(c):a,()=>{b.a.wa(g.U[e],k);g.va&&g.va(e)});g.na&&g.na(e);g.U[e]||(g.U[e]=[]);g.U[e].push(k);return k},notifySubscribers:function(a,c){c=c||"change";"change"===c&&this.Ka();if(this.qa(c)){c="change"===c&&this.$b||this.U[c].slice(0);try{b.i.zb();for(var e=0,g;g=c[e++];)g.Na||g.pb(a)}finally{b.i.end()}}},Ca:function(){return this.vb},qc:function(a){return this.Ca()!==a},Ka:function(){++this.vb},Ha:function(a){var c=this,e=b.K(c),g,k,t,d,f;c.ua||(c.ua=c.notifySubscribers,
c.notifySubscribers=function(n,p){p&&"change"!==p?"beforeChange"===p?this.sb(n):this.ua(n,p):this.tb(n)});var h=a(()=>{c.ja=!1;e&&d===c&&(d=c.qb?c.qb():c());var n=k||f&&c.Ga(t,d);f=k=g=!1;n&&c.ua(t=d)});c.tb=(n,p)=>{p&&c.ja||(f=!p);c.$b=c.U.change.slice(0);c.ja=g=!0;d=n;h()};c.sb=n=>{g||(t=n,c.ua(n,"beforeChange"))};c.ub=()=>{f=!0};c.bc=()=>{c.Ga(t,c.F(!0))&&(k=!0)}},qa:function(a){return this.U[a]&&this.U[a].length},Ga:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:()=>
"[object Object]",extend:function(a){var c=this;a&&b.a.N(a,(e,g)=>{e=b.$a[e];"function"==typeof e&&(c=e(c,g)||c)});return c}};b.Z(P,"init",P.Ea);b.Z(P,"subscribe",P.subscribe);b.Z(P,"extend",P.extend);Object.setPrototypeOf(P,Function.prototype);b.T.fn=P;b.tc=a=>null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers;b.i=(()=>{var a=[],c,e=0;return{zb:g=>{a.push(c);c=g},end:()=>c=a.pop(),Ub:g=>{if(c){if(!b.tc(g))throw Error("Only subscribable things can act as dependencies");
c.dc.call(c.ec,g,g.ac||(g.ac=++e))}},D:(g,k,t)=>{try{return a.push(c),c=void 0,g.apply(k,t||[])}finally{c=a.pop()}},Ba:()=>c&&c.l.Ba(),cb:()=>c&&c.cb,l:()=>c&&c.l}})();const O=Symbol("_latestValue");b.ba=a=>{function c(){if(0<arguments.length)return c.Ga(c[O],arguments[0])&&(c.La(),c[O]=arguments[0],c.ta()),this;b.i.Ub(c);return c[O]}c[O]=a;Object.defineProperty(c,"length",{get:()=>null==c[O]?void 0:c[O].length});b.T.fn.Ea(c);Object.setPrototypeOf(c,Q);return c};var Q={toJSON:function(){let a=this[O];
return a&&a.toJSON?a.toJSON():a},equalityComparer:F,F:function(){return this[O]},ta:function(){this.notifySubscribers(this[O],"spectate");this.notifySubscribers(this[O])},La:function(){this.notifySubscribers(this[O],"beforeChange")}};Object.setPrototypeOf(Q,b.T.fn);var R=b.ba.P="__ko_proto__";Q[R]=b.ba;b.K=a=>{if((a="function"==typeof a&&a[R])&&a!==Q[R]&&a!==b.l.fn[R])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");return!!a};b.vc=a=>"function"==
typeof a&&(a[R]===Q[R]||a[R]===b.l.fn[R]&&a.rc);b.m("observable",b.ba);b.m("isObservable",b.K);b.m("observable.fn",Q);b.Z(Q,"valueHasMutated",Q.ta);b.ha=a=>{a=a||[];if("object"!=typeof a||!("length"in a))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");a=b.ba(a);Object.setPrototypeOf(a,b.ha.fn);return a.extend({trackArrayChanges:!0})};b.ha.fn={remove:function(a){for(var c=this.F(),e=[],g="function"!=typeof a||b.K(a)?function(d){return d===
a}:a,k=c.length;k--;){var t=c[k];if(g(t)){0===e.length&&this.La();if(c[k]!==t)throw Error("Array modified during remove; cannot remove item");e.push(t);c.splice(k,1)}}e.length&&this.ta();return e},removeAll:function(a){if(void 0===a){var c=this.F(),e=c.slice(0);this.La();c.splice(0,c.length);this.ta();return e}return a?this.remove(g=>a.includes(g)):[]}};Object.setPrototypeOf(b.ha.fn,b.ba.fn);Object.getOwnPropertyNames(Array.prototype).forEach(a=>{"function"===typeof Array.prototype[a]&&"constructor"!=
a&&("copyWithin fill pop push reverse shift sort splice unshift".split(" ").includes(a)?b.ha.fn[a]=function(...c){var e=this.F();this.La();this.Db(e,a,c);c=e[a](...c);this.ta();return c===e?this:c}:b.ha.fn[a]=function(...c){return this()[a](...c)})});b.Ob=a=>b.K(a)&&"function"==typeof a.remove&&"function"==typeof a.push;b.m("observableArray",b.ha);b.m("isObservableArray",b.Ob);b.$a.trackArrayChanges=(a,c)=>{function e(){function q(){if(f){var u=[].concat(a.F()||[]);if(a.qa("arrayChange")){if(!k||
1<f)k=b.a.Fb(h,u,a.Ta);var x=k}h=u;k=null;f=0;x&&x.length&&a.notifySubscribers(x,"arrayChange")}}g?q():(g=!0,d=a.subscribe(()=>++f,null,"spectate"),h=[].concat(a.F()||[]),k=null,t=a.subscribe(q))}a.Ta={};c&&"object"==typeof c&&b.a.extend(a.Ta,c);a.Ta.sparse=!0;if(!a.Db){var g=!1,k=null,t,d,f=0,h,n=a.na,p=a.va;a.na=q=>{n&&n.call(a,q);"arrayChange"===q&&e()};a.va=q=>{p&&p.call(a,q);"arrayChange"!==q||a.qa("arrayChange")||(t&&t.o(),d&&d.o(),d=t=null,g=!1,h=void 0)};a.Db=(q,u,x)=>{function l(G,z,M){return m[m.length]=
{status:G,value:z,index:M}}if(g&&!f){var m=[],r=q.length,v=x.length,y=0;switch(u){case "push":y=r;case "unshift":for(u=0;u<v;u++)l("added",x[u],y+u);break;case "pop":y=r-1;case "shift":r&&l("deleted",q[y],y);break;case "splice":u=Math.min(Math.max(0,0>x[0]?r+x[0]:x[0]),r);r=1===v?r:Math.min(u+(x[1]||0),r);v=u+v-2;y=Math.max(r,v);for(var w=[],A=[],I=2;u<y;++u,++I)u<r&&A.push(l("deleted",q[u],u)),u<v&&w.push(l("added",x[I],u));b.a.Lb(A,w);break;default:return}k=m}}}};var D=Symbol("_state");b.l=function(a,
c){function e(){if(0<arguments.length){if("function"===typeof g)g(...arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}k.$||b.i.Ub(e);(k.W||k.v&&e.ra())&&e.S();return k.L}"object"===typeof a?c=a:(c=c||{},a&&(c.read=a));if("function"!=typeof c.read)throw Error("Pass a function that returns the value of the ko.computed");var g=c.write,k={L:void 0,aa:!0,W:!0,Fa:!1,lb:!1,
$:!1,hb:!1,v:!1,Tb:c.read,j:c.disposeWhenNodeIsRemoved||c.j||null,oa:c.disposeWhen||c.oa,Xa:null,u:{},I:0,Kb:null};e[D]=k;e.rc="function"===typeof g;b.T.fn.Ea(e);Object.setPrototypeOf(e,U);c.pure?(k.hb=!0,k.v=!0,b.a.extend(e,fa)):c.deferEvaluation&&b.a.extend(e,ha);k.j&&(k.lb=!0,k.j.nodeType||(k.j=null));k.v||c.deferEvaluation||e.S();k.j&&e.ga()&&b.a.J.ma(k.j,k.Xa=function(){e.o()});return e};var U={equalityComparer:F,Ba:function(){return this[D].I},oc:function(){var a=[];b.a.N(this[D].u,(c,e)=>a[e.ka]=
e.V);return a},bb:function(a){if(!this[D].I)return!1;var c=this.oc();return c.includes(a)?!0:!!c.find(e=>e.bb&&e.bb(a))},wb:function(a,c,e){if(this[D].hb&&c===this)throw Error("A 'pure' computed must not be called recursively");this[D].u[a]=e;e.ka=this[D].I++;e.la=c.Ca()},ra:function(){var a,c=this[D].u;for(a in c)if(Object.prototype.hasOwnProperty.call(c,a)){var e=c[a];if(this.ia&&e.V.ja||e.V.qc(e.la))return!0}},Hc:function(){this.ia&&!this[D].Fa&&this.ia(!1)},ga:function(){var a=this[D];return a.W||
0<a.I},Ic:function(){this.ja?this[D].W&&(this[D].aa=!0):this.Jb()},Yb:function(a){return a.subscribe(this.Jb,this)},Jb:function(){var a=this,c=a.throttleEvaluation;c&&0<=c?(clearTimeout(this[D].Kb),this[D].Kb=b.a.setTimeout(()=>a.S(!0),c)):a.ia?a.ia(!0):a.S(!0)},S:function(a){var c=this[D],e=c.oa,g=!1;if(!c.Fa&&!c.$){if(c.j&&!b.a.Ya(c.j)||e&&e()){if(!c.lb){this.o();return}}else c.lb=!1;c.Fa=!0;try{g=this.mc(a)}finally{c.Fa=!1}return g}},mc:function(a){var c=this[D],e=c.hb?void 0:!c.I;var g={hc:this,
za:c.u,Va:c.I};b.i.zb({ec:g,dc:V,l:this,cb:e});c.u={};c.I=0;var k=this.lc(c,g);c.I?g=this.Ga(c.L,k):(this.o(),g=!0);g&&(c.v?this.Ka():this.notifySubscribers(c.L,"beforeChange"),c.L=k,this.notifySubscribers(c.L,"spectate"),!c.v&&a&&this.notifySubscribers(c.L),this.ub&&this.ub());e&&this.notifySubscribers(c.L,"awake");return g},lc:(a,c)=>{try{return a.Tb()}finally{b.i.end(),c.Va&&!a.v&&b.a.N(c.za,S),a.aa=a.W=!1}},F:function(a){var c=this[D];(c.W&&(a||!c.I)||c.v&&this.ra())&&this.S();return c.L},Ha:function(a){b.T.fn.Ha.call(this,
a);this.qb=function(){this[D].v||(this[D].aa?this.S():this[D].W=!1);return this[D].L};this.ia=function(c){this.sb(this[D].L);this[D].W=!0;c&&(this[D].aa=!0);this.tb(this,!c)}},o:function(){var a=this[D];!a.v&&a.u&&b.a.N(a.u,(c,e)=>e.o&&e.o());a.j&&a.Xa&&b.a.J.ib(a.j,a.Xa);a.u=void 0;a.I=0;a.$=!0;a.aa=!1;a.W=!1;a.v=!1;a.j=void 0;a.oa=void 0;a.Tb=void 0}},fa={na:function(a){var c=this,e=c[D];if(!e.$&&e.v&&"change"==a){e.v=!1;if(e.aa||c.ra())e.u=null,e.I=0,c.S()&&c.Ka();else{var g=[];b.a.N(e.u,(k,t)=>
g[t.ka]=k);g.forEach((k,t)=>{var d=e.u[k],f=c.Yb(d.V);f.ka=t;f.la=d.la;e.u[k]=f});c.ra()&&c.S()&&c.Ka()}e.$||c.notifySubscribers(e.L,"awake")}},va:function(a){var c=this[D];c.$||"change"!=a||this.qa("change")||(b.a.N(c.u,(e,g)=>{g.o&&(c.u[e]={V:g.V,ka:g.ka,la:g.la},g.o())}),c.v=!0,this.notifySubscribers(void 0,"asleep"))},Ca:function(){var a=this[D];a.v&&(a.aa||this.ra())&&this.S();return b.T.fn.Ca.call(this)}},ha={na:function(a){"change"!=a&&"beforeChange"!=a||this.F()}};Object.setPrototypeOf(U,
b.T.fn);U[b.ba.P]=b.l;b.m("computed",b.l);b.m("computed.fn",U);b.Z(U,"dispose",U.o);b.Ac=a=>{if("function"===typeof a)return b.l(a,{pure:!0});a=b.a.extend({},a);a.pure=!0;return b.l(a)};(()=>{b.A={O:a=>{switch(a.nodeName){case "OPTION":return!0===a.__ko__hasDomDataOptionValue__?b.a.f.get(a,b.b.options.gb):a.value;case "SELECT":return 0<=a.selectedIndex?b.A.O(a.options[a.selectedIndex]):void 0;default:return a.value}},Ma:(a,c,e)=>{switch(a.nodeName){case "OPTION":"string"===typeof c?(b.a.f.set(a,b.b.options.gb,
void 0),delete a.__ko__hasDomDataOptionValue__,a.value=c):(b.a.f.set(a,b.b.options.gb,c),a.__ko__hasDomDataOptionValue__=!0,a.value="number"===typeof c?c:"");break;case "SELECT":for(var g=-1,k=""===c||null==c,t=0,d=a.options.length,f;t<d;++t)if(f=b.A.O(a.options[t]),f==c||""===f&&k){g=t;break}if(e||0<=g||k&&1<a.size)a.selectedIndex=g;break;default:a.value=null==c?"":c}}}})();b.G=(()=>{function a(f){f=b.a.Xb(f);123===f.charCodeAt(0)&&(f=f.slice(1,-1));f+="\n,";var h=[],n=f.match(g),p=[],q=0;if(1<n.length){for(var u=
0,x;x=n[u];++u){var l=x.charCodeAt(0);if(44===l){if(0>=q){h.push(m&&p.length?{key:m,value:p.join("")}:{unknown:m||p.join("")});var m=q=0;p=[];continue}}else if(58===l){if(!q&&!m&&1===p.length){m=p.pop();continue}}else if(47===l&&1<x.length&&(47===x.charCodeAt(1)||42===x.charCodeAt(1)))continue;else 47===l&&u&&1<x.length?(l=n[u-1].match(k))&&!t[l[0]]&&(f=f.substr(f.indexOf(x)+1),n=f.match(g),u=-1,x="/"):40===l||123===l||91===l?++q:41===l||125===l||93===l?--q:m||p.length||34!==l&&39!==l||(x=x.slice(1,
-1));p.push(x)}if(0<q)throw Error("Unbalanced parentheses, braces, or brackets");}return h}var c=["true","false","null","undefined"],e=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,g=/"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\/\*(?:[^*]|\*+[^*/])*\*+\/|\/\/.*\n|\/(?:\\.|[^/])+\/w*|[^\s:,/][^,"'`{}()/:[\]]*[^\s,"'`{}()/:[\]]|[^\s]/g,k=/[\])"'A-Za-z0-9_$]+$/,t={"in":1,"return":1,"typeof":1},d={};return{Sa:[],nb:d,yc:a,zc:function(f,h){function n(l,m){if(!x){var r=b.getBindingHandler(l);
if(r&&r.preprocess&&!(m=r.preprocess(m,l,n)))return;if(r=d[l]){var v=m;c.includes(v)?v=!1:(r=v.match(e),v=null===r?!1:r[1]?"Object("+r[1]+")"+r[2]:v);r=v}r&&q.push("'"+("string"==typeof d[l]?d[l]:l)+"':function(_z){"+v+"=_z}")}u&&(m="function(){return "+m+" }");p.push("'"+l+"':"+m)}h=h||{};var p=[],q=[],u=h.valueAccessors,x=h.bindingParams;("string"===typeof f?a(f):f).forEach(l=>n(l.key||l.unknown,l.value));q.length&&n("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},wc:(f,h)=>-1<
f.findIndex(n=>n.key==h),ob:(f,h,n,p,q)=>{if(f&&b.K(f))!b.vc(f)||q&&f.F()===p||f(p);else if((f=h.get("_ko_property_writers"))&&f[n])f[n](p)}}})();(()=>{function a(d){return 8==d.nodeType&&g.test(d.nodeValue)}function c(d){return 8==d.nodeType&&k.test(d.nodeValue)}function e(d,f){for(var h=d,n=1,p=[];h=h.nextSibling;){if(c(h)&&(b.a.f.set(h,t,!0),n--,0===n))return p;p.push(h);a(h)&&n++}if(!f)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}var g=/^\s*ko(?:\s+([\s\S]+))?\s*$/,
k=/^\s*\/ko\s*$/,t="__ko_matchedEndComment__";b.h={ca:{},childNodes:d=>a(d)?e(d):d.childNodes,pa:d=>{if(a(d)){d=e(d);for(var f=0,h=d.length;f<h;f++)b.removeNode(d[f])}else b.a.Za(d)},sa:(d,f)=>{if(a(d)){b.h.pa(d);d=d.nextSibling;for(var h=0,n=f.length;h<n;h++)d.parentNode.insertBefore(f[h],d)}else b.a.sa(d,f)},prepend:(d,f)=>{if(a(d)){var h=d.nextSibling;d=d.parentNode}else h=d.firstChild;d.insertBefore(f,h)},Nb:(d,f,h)=>{h?(h=h.nextSibling,a(d)&&(d=d.parentNode),d.insertBefore(f,h)):b.h.prepend(d,
f)},firstChild:d=>{if(a(d))return!d.nextSibling||c(d.nextSibling)?null:d.nextSibling;if(d.firstChild&&c(d.firstChild))throw Error("Found invalid end comment, as the first child of "+d);return d.firstChild},nextSibling:d=>{if(a(d)){var f=e(d,void 0);d=f?0<f.length?f[f.length-1].nextSibling:d.nextSibling:null}if(d.nextSibling&&c(d.nextSibling)){f=d.nextSibling;if(c(f)&&!b.a.f.get(f,t))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},
pc:a,Fc:d=>(d=d.nodeValue.match(g))?d[1]:null}})();(()=>{const a={};b.Bb=new class{xc(c){switch(c.nodeType){case 1:return null!=c.getAttribute("data-bind");case 8:return b.h.pc(c);default:return!1}}nc(c,e){a:{switch(c.nodeType){case 1:var g=c.getAttribute("data-bind");break a;case 8:g=b.h.Fc(c);break a}g=null}if(g){var k={valueAccessors:!0};try{var t=g+(k&&k.valueAccessors||""),d;if(!(d=a[t])){var f="with($context){with($data||{}){return{"+b.G.zc(g,k)+"}}}";var h=new Function("$context","$element",
f);d=a[t]=h}var n=d(e,c)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+g+"\nMessage: "+p.message,p;}}else n=null;return n}}})();(()=>{function a(l){var m=(l=b.a.f.get(l,x))&&l.C;m&&(l.C=null,m.Sb())}function c(l,m,r){this.node=l;this.Ab=m;this.xa=[];this.B=!1;m.C||b.a.J.ma(l,a);r&&r.C&&(r.C.xa.push(l),this.Oa=r)}function e(l){return b.a.fb(b.i.D(l),(m,r)=>()=>l()[r])}function g(l,m,r){return"function"===typeof l?e(l.bind(null,m,r)):b.a.fb(l,v=>()=>v)}function k(l,m){var r=
b.h.firstChild(m);if(r)for(var v;v=r;)r=b.h.nextSibling(v),t(l,v);b.c.notify(m,b.c.B)}function t(l,m){var r=l;if(1===m.nodeType||b.Bb.xc(m))r=f(m,null,l).bindingContextForDescendants;r&&m.matches&&!m.matches("SCRIPT,TEXTAREA,TEMPLATE")&&k(r,m)}function d(l){var m=[],r={},v=[];b.a.N(l,function A(w){if(!r[w]){var I=b.getBindingHandler(w);I&&(I.after&&(v.push(w),I.after.forEach(G=>{if(l[G]){if(v.includes(G))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+
v.join(", "));A(G)}}),v.length--),m.push({key:w,Mb:I}));r[w]=!0}});return m}function f(l,m,r){var v=b.a.f.ab(l,x,{}),y=v.cc;if(!m){if(y)throw Error("You cannot apply bindings multiple times to the same element.");v.cc=!0}y||(v.context=r);v.eb||(v.eb={});if(m&&"function"!==typeof m)var w=m;else{var A=b.l(()=>{if(w=m?m(r,l):b.Bb.nc(l,r)){if(r[n])r[n]();if(r[q])r[q]()}return w},{j:l});w&&A.ga()||(A=null)}var I=r,G;if(w){var z=A?B=>()=>A()[B]():B=>w[B];function M(){return b.a.fb(A?A():w,B=>B())}M.get=
B=>w[B]&&z(B)();M.has=B=>B in w;b.c.B in w&&b.c.subscribe(l,b.c.B,()=>{var B=w[b.c.B]();if(B){var H=b.h.childNodes(l);H.length&&B(H,b.Hb(H[0]))}});b.c.Y in w&&(I=b.c.kb(l,r),b.c.subscribe(l,b.c.Y,()=>{var B=w[b.c.Y]();B&&b.h.firstChild(l)&&B(l)}));d(w).forEach(B=>{var H=B.Mb.init,L=B.Mb.update,K=B.key;if(8===l.nodeType&&!b.h.ca[K])throw Error("The binding '"+K+"' cannot be used with virtual elements");try{"function"==typeof H&&b.i.D(()=>{var N=H(l,z(K),M,I.$data,I);if(N&&N.controlsDescendantBindings){if(void 0!==
G)throw Error("Multiple bindings ("+G+" and "+K+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");G=K}}),"function"==typeof L&&b.l(()=>L(l,z(K),M,I.$data,I),{j:l})}catch(N){throw N.message='Unable to process binding "'+K+": "+w[K]+'"\nMessage: '+N.message,N;}})}v=void 0===G;return{shouldBindDescendants:v,bindingContextForDescendants:v&&I}}function h(l,m){return l&&l instanceof b.R?l:new b.R(l,void 0,void 0,m)}var n=Symbol("_subscribable"),
p=Symbol("_ancestorBindingInfo"),q=Symbol("_dataDependency");b.b={};b.getBindingHandler=l=>b.b[l];var u={};b.R=function(l,m,r,v,y){function w(){var H=z?G():G,L=b.a.g(H);m?(b.a.extend(A,m),p in m&&(A[p]=m[p])):(A.$parents=[],A.$root=L,A.ko=b);A[n]=B;I?L=A.$data:(A.$rawData=H,A.$data=L);r&&(A[r]=L);v&&v(A,m,L);if(m&&m[n]&&!b.i.l().bb(m[n]))m[n]();M&&(A[q]=M);return A.$data}var A=this,I=l===u,G=I?void 0:l,z="function"==typeof G&&!b.K(G),M=y&&y.dataDependency;if(y&&y.exportDependencies)w();else{var B=
b.Ac(w);B.F();B.ga()?B.equalityComparer=null:A[n]=void 0}};b.R.prototype.createChildContext=function(l,m,r,v){!v&&m&&"object"==typeof m&&(v=m,m=v.as,r=v.extend);if(m&&v&&v.noChildContext){var y="function"==typeof l&&!b.K(l);return new b.R(u,this,null,w=>{r&&r(w);w[m]=y?l():l},v)}return new b.R(l,this,m,(w,A)=>{w.$parentContext=A;w.$parent=A.$data;w.$parents=(A.$parents||[]).slice(0);w.$parents.unshift(w.$parent);r&&r(w)},v)};b.R.prototype.extend=function(l,m){return new b.R(u,this,null,r=>b.a.extend(r,
"function"==typeof l?l(r):l),m)};var x=b.a.f.X();c.prototype.Sb=function(){this.Oa&&this.Oa.C&&this.Oa.C.jc(this.node)};c.prototype.jc=function(l){b.a.wa(this.xa,l);!this.xa.length&&this.B&&this.Gb()};c.prototype.Gb=function(){this.B=!0;this.Ab.C&&!this.xa.length&&(this.Ab.C=null,b.a.J.ib(this.node,a),b.c.notify(this.node,b.c.Y),this.Sb())};b.c={B:"childrenComplete",Y:"descendantsComplete",subscribe:(l,m,r,v,y)=>{var w=b.a.f.ab(l,x,{});w.fa||(w.fa=new b.T);y&&y.notifyImmediately&&w.eb[m]&&b.i.D(r,
v,[l]);return w.fa.subscribe(r,v,m)},notify:(l,m)=>{var r=b.a.f.get(l,x);if(r&&(r.eb[m]=!0,r.fa&&r.fa.notifySubscribers(l,m),m==b.c.B))if(r.C)r.C.Gb();else if(void 0===r.C&&r.fa&&r.fa.qa(b.c.Y))throw Error("descendantsComplete event not supported for bindings on this node");},kb:(l,m)=>{var r=b.a.f.ab(l,x,{});r.C||(r.C=new c(l,r,m[p]));return m[p]==r?m:m.extend(v=>{v[p]=r})}};b.Dc=l=>(l=b.a.f.get(l,x))&&l.context;b.Qa=(l,m,r)=>f(l,m,h(r));b.Gc=(l,m,r)=>{r=h(r);return b.Qa(l,g(m,r,l),r)};b.yb=(l,m)=>
{1!==m.nodeType&&8!==m.nodeType||k(h(l),m)};b.xb=function(l,m,r){if(2>arguments.length){if(m=T.body,!m)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");}else if(!m||1!==m.nodeType&&8!==m.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");t(h(l,r),m)};b.Hb=l=>(l=l&&[1,8].includes(l.nodeType)&&b.Dc(l))?l.$data:void 0;b.m("bindingHandlers",b.b);b.m("applyBindings",b.xb);b.m("applyBindingAccessorsToNode",
b.Qa);b.m("dataFor",b.Hb)})();(()=>{function a(d,f){return Object.prototype.hasOwnProperty.call(d,f)?d[f]:void 0}function c(d,f){var h=a(k,d);if(h)h.subscribe(f);else{h=k[d]=new b.T;h.subscribe(f);e(d,(p,q)=>{q=!(!q||!q.synchronous);t[d]={definition:p,uc:q};delete k[d];n||q?h.notifySubscribers(p):b.mb.Vb(()=>h.notifySubscribers(p))});var n=!0}}function e(d,f){g("getConfig",[d],h=>{h?g("loadComponent",[d,h],n=>f(n,h)):f(null,null)})}function g(d,f,h,n){n||(n=b.s.loaders.slice(0));var p=n.shift();if(p){var q=
p[d];if(q){var u=!1;if(void 0!==q.apply(p,f.concat(function(x){u?h(null):null!==x?h(x):g(d,f,h,n)}))&&(u=!0,!p.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else g(d,f,h,n)}else h(null)}var k={},t={};b.s={get:(d,f)=>{var h=a(t,d);h?h.uc?b.i.D(()=>f(h.definition)):b.mb.Vb(()=>f(h.definition)):c(d,f)},fc:d=>delete t[d],rb:g};b.s.loaders=[];b.m("components",b.s)})();(()=>{function a(d,f,h,n){var p={},q=
2;f=h.template;h=h.viewModel;f?b.s.rb("loadTemplate",[d,f],u=>{p.template=u;0===--q&&n(p)}):0===--q&&n(p);h?b.s.rb("loadViewModel",[d,h],u=>{p[t]=u;0===--q&&n(p)}):0===--q&&n(p)}function c(d,f,h){if("function"===typeof f)h(p=>new f(p));else if("function"===typeof f[t])h(f[t]);else if("instance"in f){var n=f.instance;h(()=>n)}else"viewModel"in f?c(d,f.viewModel,h):d("Unknown viewModel value: "+f)}function e(d){if(d.matches("TEMPLATE")&&d.content instanceof DocumentFragment)return b.a.ya(d.content.childNodes);
throw"Template Source Element not a <template>";}function g(d){return f=>{throw Error("Component '"+d+"': "+f);}}var k={};b.s.register=(d,f)=>{if(!f)throw Error("Invalid configuration for "+d);if(b.s.Pb(d))throw Error("Component "+d+" is already registered");k[d]=f};b.s.Pb=d=>Object.prototype.hasOwnProperty.call(k,d);b.s.unregister=d=>{delete k[d];b.s.fc(d)};b.s.ic={getConfig:(d,f)=>{d=b.s.Pb(d)?k[d]:null;f(d)},loadComponent:(d,f,h)=>{var n=g(d);a(d,n,f,h)},loadTemplate:(d,f,h)=>{d=g(d);if(f instanceof
Array)h(f);else if(f instanceof DocumentFragment)h([...f.childNodes]);else if(f.element)if(f=f.element,f instanceof HTMLElement)h(e(f));else if("string"===typeof f){var n=T.getElementById(f);n?h(e(n)):d("Cannot find element with ID "+f)}else d("Unknown element type: "+f);else d("Unknown template value: "+f)},loadViewModel:(d,f,h)=>c(g(d),f,h)};var t="createViewModel";b.m("components.register",b.s.register);b.s.loaders.push(b.s.ic)})();(()=>{function a(g,k,t){k=k.template;if(!k)throw Error("Component '"+
g+"' has no template");g=b.a.ya(k);b.h.sa(t,g)}function c(g,k,t){var d=g.createViewModel;return d?d.call(g,k,t):k}var e=0;b.b.component={init:(g,k,t,d,f)=>{var h,n,p,q=()=>{var x=h&&h.dispose;"function"===typeof x&&x.call(h);p&&p.o();n=h=p=null},u=[...b.h.childNodes(g)];b.h.pa(g);b.a.J.ma(g,q);b.l(()=>{var x=b.a.g(k());if("string"===typeof x)var l=x;else{l=b.a.g(x.name);var m=b.a.g(x.params)}if(!l)throw Error("No component name specified");var r=b.c.kb(g,f),v=n=++e;b.s.get(l,y=>{if(n===v){q();if(!y)throw Error("Unknown component '"+
l+"'");a(l,y,g);var w=c(y,m,{element:g,templateNodes:u});y=r.createChildContext(w,{extend:A=>{A.$component=w;A.$componentTemplateNodes=u}});w&&w.koDescendantsComplete&&(p=b.c.subscribe(g,b.c.Y,w.koDescendantsComplete,w));h=w;b.yb(y,g)}})},{j:g});return{controlsDescendantBindings:!0}}};b.h.ca.component=!0})();b.b.attr={update:(a,c)=>{c=b.a.g(c())||{};b.a.N(c,function(e,g){g=b.a.g(g);var k=e.indexOf(":");k="lookupNamespaceURI"in a&&0<k&&a.lookupNamespaceURI(e.substr(0,k));var t=!1===g||null===g||void 0===
g;t?k?a.removeAttributeNS(k,e):a.removeAttribute(e):g=g.toString();t||(k?a.setAttributeNS(k,e,g):a.setAttribute(e,g));"name"===e&&(a.name=t?"":g)})}};var X=(a,c,e)=>{c&&c.split(/\s+/).forEach(g=>a.classList.toggle(g,e))};b.b.css={update:(a,c)=>{c=b.a.g(c());null!==c&&"object"==typeof c?b.a.N(c,(e,g)=>{g=b.a.g(g);X(a,e,!!g)}):(c=b.a.Xb(c),X(a,a.__ko__cssValue,!1),a.__ko__cssValue=c,X(a,c,!0))}};b.b.enable={update:(a,c)=>{(c=b.a.g(c()))&&a.disabled?a.removeAttribute("disabled"):c||a.disabled||(a.disabled=
!0)}};b.b.disable={update:(a,c)=>b.b.enable.update(a,()=>!b.a.g(c()))};b.b.event={init:(a,c,e,g,k)=>{var t=c()||{};b.a.N(t,d=>{"string"==typeof d&&b.a.H(a,d,function(f){var h=c()[d];if(h){try{g=k.$data;var n=h.apply(g,[g,...arguments])}finally{!0!==n&&f.preventDefault()}!1===e.get(d+"Bubble")&&(f.cancelBubble=!0,f.stopPropagation())}})})}};b.b.foreach={Qb:a=>()=>{var c=a(),e=b.K(c)?c.F():c;if(!e||"number"==typeof e.length)return{foreach:c};b.a.g(c);return{foreach:e.data,as:e.as,noChildContext:e.noChildContext,
includeDestroyed:e.includeDestroyed,afterAdd:e.afterAdd,beforeRemove:e.beforeRemove,afterRender:e.afterRender,beforeMove:e.beforeMove,afterMove:e.afterMove}},init:(a,c)=>b.b.template.init(a,b.b.foreach.Qb(c)),update:(a,c,e,g,k)=>b.b.template.update(a,b.b.foreach.Qb(c),e,g,k)};b.G.Sa.foreach=!1;b.h.ca.foreach=!0;b.b.hasfocus={init:(a,c,e)=>{var g=t=>{a.__ko_hasfocusUpdating=!0;t=a.ownerDocument.activeElement===a;var d=c();b.G.ob(d,e,"hasfocus",t,!0);a.__ko_hasfocusLastValue=t;a.__ko_hasfocusUpdating=
!1},k=g.bind(null,!0);g=g.bind(null,!1);b.a.H(a,"focus",k);b.a.H(a,"focusin",k);b.a.H(a,"blur",g);b.a.H(a,"focusout",g);a.__ko_hasfocusLastValue=!1},update:(a,c)=>{c=!!b.a.g(c());a.__ko_hasfocusUpdating||a.__ko_hasfocusLastValue===c||(c?a.focus():a.blur())}};b.G.nb.hasfocus=!0;b.b.html={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>{b.a.Za(a);c=b.a.g(c());if(null!=c){const e=T.createElement("template");e.innerHTML="string"!=typeof c?c.toString():c;a.appendChild(e.content)}}};(function(){function a(c,
e,g){b.b[c]={init:(k,t,d,f,h)=>{var n,p,q={},u;if(e){f=d.get("as");var x=d.get("noChildContext");var l=!(f&&x);q={as:f,noChildContext:x,exportDependencies:l}}var m=(u="render"==d.get("completeOn"))||d.has(b.c.Y);b.l(()=>{var r=b.a.g(t()),v=!g!==!r,y=!p;if(l||v!==n){m&&(h=b.c.kb(k,h));if(v){if(!e||l)q.dataDependency=b.i.l();var w=e?h.createChildContext("function"==typeof r?r:t,q):b.i.Ba()?h.extend(null,q):h}y&&b.i.Ba()&&(p=b.a.ya(b.h.childNodes(k),!0));v?(y||b.h.sa(k,b.a.ya(p)),b.yb(w,k)):(b.h.pa(k),
u||b.c.notify(k,b.c.B));n=v}},{j:k});return{controlsDescendantBindings:!0}}};b.G.Sa[c]=!1;b.h.ca[c]=!0}a("if");a("ifnot",!1,!0);a("with",!0)})();var Y={};b.b.options={init:a=>{if(!a.matches("SELECT"))throw Error("options binding applies only to SELECT elements");for(;0<a.length;)a.remove(0);return{controlsDescendantBindings:!0}},update:(a,c,e)=>{function g(){return Array.from(a.options).filter(l=>l.selected)}function k(l,m,r){var v=typeof m;return"function"==v?m(l):"string"==v?l[m]:r}function t(l,
m){u&&n?b.c.notify(a,b.c.B):p.length&&(l=p.includes(b.A.O(m[0])),m[0].selected=l,u&&!l&&b.i.D(b.a.Zb,null,[a,"change"]))}var d=a.multiple,f=0!=a.length&&d?a.scrollTop:null,h=b.a.g(c()),n=e.get("valueAllowUnset")&&e.has("value");c={};var p=[];n||(d?p=g().map(b.A.O):0<=a.selectedIndex&&p.push(b.A.O(a.options[a.selectedIndex])));if(h){"undefined"==typeof h.length&&(h=[h]);var q=h.filter(l=>l||null==l);e.has("optionsCaption")&&(h=b.a.g(e.get("optionsCaption")),null!==h&&void 0!==h&&q.unshift(Y))}var u=
!1;c.beforeRemove=l=>a.removeChild(l);h=t;e.has("optionsAfterRender")&&"function"==typeof e.get("optionsAfterRender")&&(h=(l,m)=>{t(l,m);b.i.D(e.get("optionsAfterRender"),null,[m[0],l!==Y?l:void 0])});b.a.Wb(a,q,function(l,m,r){r.length&&(p=!n&&r[0].selected?[b.A.O(r[0])]:[],u=!0);m=a.ownerDocument.createElement("option");l===Y?(b.a.jb(m,e.get("optionsCaption")),b.A.Ma(m,void 0)):(r=k(l,e.get("optionsValue"),l),b.A.Ma(m,b.a.g(r)),l=k(l,e.get("optionsText"),r),b.a.jb(m,l));return[m]},c,h);if(!n){var x;
d?x=p.length&&g().length<p.length:x=p.length&&0<=a.selectedIndex?b.A.O(a.options[a.selectedIndex])!==p[0]:p.length||0<=a.selectedIndex;x&&b.i.D(b.a.Zb,null,[a,"change"])}(n||b.i.cb())&&b.c.notify(a,b.c.B);f&&20<Math.abs(f-a.scrollTop)&&(a.scrollTop=f)}};b.b.options.gb=b.a.f.X();b.b.style={update:(a,c)=>{c=b.a.g(c()||{});b.a.N(c,(e,g)=>{g=b.a.g(g);if(null===g||void 0===g||!1===g)g="";if(/^--/.test(e))a.style.setProperty(e,g);else{e=e.replace(/-(\w)/g,(t,d)=>d.toUpperCase());var k=a.style[e];a.style[e]=
g;g===k||a.style[e]!=k||isNaN(g)||(a.style[e]=g+"px")}})}};b.b.submit={init:(a,c,e,g,k)=>{if("function"!=typeof c())throw Error("The value for a submit binding must be a function");b.a.H(a,"submit",t=>{var d=c();try{var f=d.call(k.$data,a)}finally{!0!==f&&(t.preventDefault?t.preventDefault():t.returnValue=!1)}})}};b.b.text={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>b.a.jb(a,c())};b.h.ca.text=!0;b.b.textInput={init:(a,c,e)=>{var g=a.value,k,t,d=()=>{clearTimeout(k);t=k=void 0;var h=
a.value;g!==h&&(g=h,b.G.ob(c(),e,"textInput",h))},f=()=>{var h=b.a.g(c());if(null===h||void 0===h)h="";void 0!==t&&h===t?b.a.setTimeout(f,4):a.value!==h&&(a.value=h,g=a.value)};b.a.H(a,"input",d);b.a.H(a,"change",d);b.a.H(a,"blur",d);b.l(f,{j:a})}};b.G.nb.textInput=!0;b.b.textinput={preprocess:(a,c,e)=>e("textInput",a)};b.b.value={init:(a,c,e)=>{var g=a.matches("SELECT"),k=a.matches("INPUT");if(!k||"checkbox"!=a.type&&"radio"!=a.type){var t=[],d=e.get("valueUpdate"),f=null;d&&("string"==typeof d?
t=[d]:t=d?d.filter((q,u)=>d.indexOf(q)===u):[],b.a.wa(t,"change"));var h=()=>{f=null;var q=c(),u=b.A.O(a);b.G.ob(q,e,"value",u)};t.forEach(q=>{var u=h;b.a.Ec(q,"after")&&(u=()=>{f=b.A.O(a);b.a.setTimeout(h,0)},q=q.substring(5));b.a.H(a,q,u)});var n=k&&"file"==a.type?()=>{var q=b.a.g(c());null===q||void 0===q||""===q?a.value="":b.i.D(h)}:()=>{var q=b.a.g(c()),u=b.A.O(a);if(null!==f&&q===f)b.a.setTimeout(n,0);else if(q!==u||void 0===u)g?(u=e.get("valueAllowUnset"),b.A.Ma(a,q,u),u||q===b.A.O(a)||b.i.D(h)):
b.A.Ma(a,q)};if(g){var p;b.c.subscribe(a,b.c.B,()=>{p?e.get("valueAllowUnset")?n():h():(b.a.H(a,"change",h),p=b.l(n,{j:a}))},null,{notifyImmediately:!0})}else b.a.H(a,"change",h),b.l(n,{j:a})}else b.Qa(a,{checkedValue:c})},update:()=>{}};b.G.nb.value=!0;b.b.visible={update:(a,c)=>{c=b.a.g(c());var e="none"!=a.style.display;c&&!e?a.style.display="":e&&!c&&(a.style.display="none")}};b.b.hidden={update:(a,c)=>a.hidden=!!b.a.g(c())};(function(a){b.b[a]={init:function(c,e,g,k,t){return b.b.event.init.call(this,
c,()=>({[a]:e()}),g,k,t)}}})("click");(()=>{let a=b.a.f.X();class c{constructor(g){this.Wa=g}Ia(...g){let k=this.Wa;if(!g.length)return b.a.f.get(k,a)||(11===this.P?k.content:1===this.P?k:void 0);b.a.f.set(k,a,g[0])}}class e extends c{constructor(g){super(g);g&&(this.P=g.matches("TEMPLATE")&&g.content?g.content.nodeType:1)}}b.Ja={Wa:e,Pa:c}})();(()=>{function a(d,f){if(d.length){var h=d[0],n=h.parentNode;g(h,d[d.length-1],p=>{1!==p.nodeType&&8!==p.nodeType||b.xb(f,p)});b.a.Aa(d,n)}}function c(d,f,
h,n,p){p=p||{};var q=(d&&(d.nodeType?d:0<d.length?d[0]:null)||h||{}).ownerDocument;if("string"==typeof h){q=q||T;q=q.getElementById(h);if(!q)throw Error("Cannot find template with ID "+h);h=new b.Ja.Wa(q)}else if([1,8].includes(h.nodeType))h=new b.Ja.Pa(h);else throw Error("Unknown template type: "+h);h=(h=h.Ia?h.Ia():null)?[...h.cloneNode(!0).childNodes]:null;if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
q=!1;switch(f){case "replaceChildren":b.h.sa(d,h);q=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+f);}q&&(a(h,n),p.afterRender&&b.i.D(p.afterRender,null,[h,n[p.as||"$data"]]),"replaceChildren"==f&&b.c.notify(d,b.c.B));return h}function e(d,f,h){return b.K(d)?d():"function"===typeof d?d(f,h):d}var g=(d,f,h)=>{var n;for(f=b.h.nextSibling(f);d&&(n=d)!==f;)d=b.h.nextSibling(n),h(n,d)};b.Bc=function(d,f,h,n){h=h||{};var p=p||"replaceChildren";if(n){var q=n.nodeType?
n:0<n.length?n[0]:null;return b.l(()=>{var u=f&&f instanceof b.R?f:new b.R(f,null,null,null,{exportDependencies:!0}),x=e(d,u.$data,u);c(n,p,x,u,h)},{oa:()=>!q||!b.a.Ya(q),j:q})}console.log("no targetNodeOrNodeArray")};b.Cc=(d,f,h,n,p)=>{function q(y,w){b.i.D(b.a.Wb,null,[n,y,l,h,m,w]);b.c.notify(n,b.c.B)}var u,x=h.as,l=(y,w)=>{u=p.createChildContext(y,{as:x,noChildContext:h.noChildContext,extend:A=>{A.$index=w;x&&(A[x+"Index"]=w)}});y=e(d,y,u);return c(n,"ignoreTargetNode",y,u,h)},m=(y,w)=>{a(w,u);
h.afterRender&&h.afterRender(w,y);u=null},r=!1===h.includeDestroyed;if(r||h.beforeRemove||!b.Ob(f))return b.l(()=>{var y=b.a.g(f)||[];"undefined"==typeof y.length&&(y=[y]);r&&(y=y.filter(w=>w||null==w));q(y)},{j:n});q(f.F());var v=f.subscribe(y=>{q(f(),y)},null,"arrayChange");v.j(n);return v};var k=b.a.f.X(),t=b.a.f.X();b.b.template={init:(d,f)=>{f=b.a.g(f());if("string"==typeof f||"name"in f)b.h.pa(d);else if("nodes"in f){f=f.nodes||[];if(b.K(f))throw Error('The "nodes" option must be a plain, non-observable array.');
let h=f[0]&&f[0].parentNode;h&&b.a.f.get(h,t)||(h=b.a.Rb(f),b.a.f.set(h,t,!0));(new b.Ja.Pa(d)).Ia(h)}else if(f=b.h.childNodes(d),0<f.length)f=b.a.Rb(f),(new b.Ja.Pa(d)).Ia(f);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:(d,f,h,n,p)=>{var q=f();f=b.a.g(q);h=!0;n=null;"string"==typeof f?f={}:(q="name"in f?f.name:d,"if"in f&&(h=b.a.g(f["if"])),h&&"ifnot"in f&&(h=!b.a.g(f.ifnot)),h&&!q&&(h=!1));"foreach"in f?n=b.Cc(q,
h&&f.foreach||[],f,d,p):h?(h=p,"data"in f&&(h=p.createChildContext(f.data,{as:f.as,noChildContext:f.noChildContext,exportDependencies:!0})),n=b.Bc(q,h,f,d)):b.h.pa(d);p=n;(f=b.a.f.get(d,k))&&"function"==typeof f.o&&f.o();b.a.f.set(d,k,!p||p.ga&&!p.ga()?void 0:p)}};b.G.Sa.template=d=>{d=b.G.yc(d);return 1==d.length&&d[0].unknown||b.G.wc(d,"name")?null:"This template engine does not support anonymous templates nested within its templates"};b.h.ca.template=!0})();b.a.Lb=(a,c,e)=>{if(a.length&&c.length){var g,
k,t,d,f;for(g=k=0;(!e||g<e)&&(d=a[k]);++k){for(t=0;f=c[t];++t)if(d.value===f.value){d.moved=f.index;f.moved=d.index;c.splice(t,1);g=t=0;break}g+=t}}};b.a.Fb=(()=>{function a(c,e,g,k,t){var d=Math.min,f=Math.max,h=[],n,p=c.length,q,u=e.length,x=u-p||1,l=p+u+1,m;for(n=0;n<=p;n++){var r=m;h.push(m=[]);var v=d(u,n+x);for(q=f(0,n-1);q<=v;q++)m[q]=q?n?c[n-1]===e[q-1]?r[q-1]:d(r[q]||l,m[q-1]||l)+1:q+1:n+1}d=[];f=[];x=[];n=p;for(q=u;n||q;)u=h[n][q]-1,q&&u===h[n][q-1]?f.push(d[d.length]={status:g,value:e[--q],
index:q}):n&&u===h[n-1][q]?x.push(d[d.length]={status:k,value:c[--n],index:n}):(--q,--n,t.sparse||d.push({status:"retained",value:e[q]}));b.a.Lb(x,f,!t.dontLimitMoves&&10*p);return d.reverse()}return function(c,e,g){g="boolean"===typeof g?{dontLimitMoves:g}:g||{};c=c||[];e=e||[];return c.length<e.length?a(c,e,"added","deleted",g):a(e,c,"deleted","added",g)}})();(()=>{function a(g,k,t,d,f){var h=[],n=b.l(()=>{var p=k(t,f,b.a.Aa(h,g))||[];if(0<h.length){var q=h.nodeType?[h]:h;if(0<q.length){var u=q[0],
x=u.parentNode,l;var m=0;for(l=p.length;m<l;m++)x.insertBefore(p[m],u);m=0;for(l=q.length;m<l;m++)b.removeNode(q[m])}d&&b.i.D(d,null,[t,p,f])}h.length=0;h.push(...p)},{j:g,oa:()=>!!h.find(b.a.Ya)});return{M:h,Ua:n.ga()?n:void 0}}var c=b.a.f.X(),e=b.a.f.X();b.a.Wb=(g,k,t,d,f,h)=>{function n(H){z={da:H,Da:b.ba(r++)};l.push(z);x||I.push(z)}function p(H){z=u[H];r!==z.Da.F()&&A.push(z);z.Da(r++);b.a.Aa(z.M,g);l.push(z)}function q(H,L){if(H)for(var K=0,N=L.length;K<N;K++)L[K].M.forEach(ia=>H(ia,K,L[K].da))}
k=k||[];"undefined"==typeof k.length&&(k=[k]);d=d||{};var u=b.a.f.get(g,c),x=!u,l=[],m=0,r=0,v=[],y=[],w=[],A=[],I=[],G=0;if(x)k.forEach(n);else{if(!h||u&&u._countWaitingForRemove)h=Array.prototype.map.call(u,H=>H.da),h=b.a.Fb(h,k,{dontLimitMoves:d.dontLimitMoves,sparse:!0});for(let H=0,L,K,N;L=h[H];H++)switch(K=L.moved,N=L.index,L.status){case "deleted":for(;m<N;)p(m++);if(void 0===K){var z=u[m];z.Ua&&(z.Ua.o(),z.Ua=void 0);b.a.Aa(z.M,g).length&&(d.beforeRemove&&(l.push(z),G++,z.da===e?z=null:w.push(z)),
z&&v.push.apply(v,z.M))}m++;break;case "added":for(;r<N;)p(m++);void 0!==K?(y.push(l.length),p(K)):n(L.value)}for(;r<k.length;)p(m++);l._countWaitingForRemove=G}b.a.f.set(g,c,l);q(d.beforeMove,A);v.forEach(d.beforeRemove?b.ea:b.removeNode);var M,B;G=g.ownerDocument.activeElement;if(y.length)for(;void 0!=(k=y.shift());){z=l[k];for(M=void 0;k;)if((B=l[--k].M)&&B.length){M=B[B.length-1];break}for(m=0;v=z.M[m];M=v,m++)b.h.Nb(g,v,M)}for(k=0;z=l[k];k++){z.M||b.a.extend(z,a(g,t,z.da,f,z.Da));for(m=0;v=z.M[m];M=
v,m++)b.h.Nb(g,v,M);!z.sc&&f&&(f(z.da,z.M,z.Da),z.sc=!0,M=z.M[z.M.length-1])}G&&g.ownerDocument.activeElement!=G&&G.focus();q(d.beforeRemove,w);for(k=0;k<w.length;++k)w[k].da=e;q(d.afterMove,A);q(d.afterAdd,I)}})();C.ko=W})(this);
