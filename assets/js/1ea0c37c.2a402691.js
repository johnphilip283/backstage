/*! For license information please see 1ea0c37c.2a402691.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[455254],{118899:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=t(824246),o=t(511151);const c={id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"},a=void 0,i={unversionedId:"reference/plugin-home-react.createcardextension",id:"reference/plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()",source:"@site/../docs/reference/plugin-home-react.createcardextension.md",sourceDirName:"reference",slug:"/reference/plugin-home-react.createcardextension",permalink:"/docs/reference/plugin-home-react.createcardextension",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-home-react.createcardextension.md",tags:[],version:"current",frontMatter:{id:"plugin-home-react.createcardextension",title:"createCardExtension()",description:"API reference for createCardExtension()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-home-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react.createcardextension",children:(0,n.jsx)(r.code,{children:"createCardExtension"})})]}),"\n",(0,n.jsx)(r.p,{children:"An extension creator to create card based components for the homepage"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'function createCardExtension<T>(options: {\n    title?: string;\n    components: () => Promise<ComponentParts>;\n    name?: string;\n    description?: string;\n    layout?: CardLayout;\n    settings?: CardSettings;\n}): import("@backstage/core-plugin-api").Extension<(props: CardExtensionProps<T>) => JSX.Element>;\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"options"}),(0,n.jsxs)(r.td,{children:["{ title?: string; components: () => Promise<",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react.componentparts",children:"ComponentParts"}),">; name?: string; description?: string; layout?: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardlayout",children:"CardLayout"}),"; settings?: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardsettings",children:"CardSettings"}),"; }"]}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:['import("@backstage/core-plugin-api").',(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.extension",children:"Extension"}),"<(props: ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-home-react.cardextensionprops",children:"CardExtensionProps"}),"<T>) => JSX.Element>"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var u in c=Object(arguments[s]))t.call(c,u)&&(i[u]=c[u]);if(r){a=r(c);for(var l=0;l<a.length;l++)n.call(c,a[l])&&(i[a[l]]=c[a[l]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,c={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:l,props:c,_owner:a.current}}r.jsx=u,r.jsxs=u},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,i=60110,s=60112;r.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),a=f("react.provider"),i=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function g(){}function x(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=x.prototype=new g;v.constructor=x,n(v,m.prototype),v.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!_.hasOwnProperty(n)&&(c[n]=r[n]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];c.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:b.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function O(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return a=a(s=e),e=""===n?"."+O(s,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),w(a,r,t,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),r.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+O(i=e[u],u);s+=w(i,r,t,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)s+=w(i=i.value,r,t,l=n+O(i,u++),a);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function S(e,r,t){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=x,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),a=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=b.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)j.call(r,l)&&!_.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=t;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];c.children=u}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:u,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:i},r)}}}]);