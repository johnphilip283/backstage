/*! For license information please see 5c2065ff.dc419d48.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[125265],{365384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(824246),o=r(511151);const s={id:"adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests"},i=void 0,c={unversionedId:"architecture-decisions/adrs-adr007",id:"architecture-decisions/adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests",source:"@site/../docs/architecture-decisions/adr007-use-msw-to-mock-service-requests.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr007",permalink:"/docs/architecture-decisions/adrs-adr007",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr007-use-msw-to-mock-service-requests.md",tags:[],version:"current",frontMatter:{id:"adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests"},sidebar:"docs",previous:{title:"ADR006: Avoid React.FC and React.SFC",permalink:"/docs/architecture-decisions/adrs-adr006"},next:{title:"ADR008: Default Catalog File Name",permalink:"/docs/architecture-decisions/adrs-adr008"}},a={},u=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsx)(t.p,{children:"Network request mocking can be a total pain sometimes, in all different types of\ntests, unit tests to e2e tests always have their own implementation of mocking\nthese requests. There's been traction in the outer community towards using this\nlibrary to mock network requests by using an express style declaration for\nroutes. react-testing-library suggests using this library instead of mocking\nfetch directly whether this be in a browser or in node."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/mswjs/msw",children:"https://github.com/mswjs/msw"})}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsxs)(t.p,{children:["Moving forward, we have decided that any ",(0,n.jsx)(t.code,{children:"fetch"})," or ",(0,n.jsx)(t.code,{children:"XMLHTTPRequest"})," that\nhappens, should be mocked by using ",(0,n.jsx)(t.code,{children:"msw"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { setupWorker, rest } from 'msw';\n\nconst worker = setupWorker(\n  rest.get('*/user/:userId', (req, res, ctx) => {\n    return res(\n      ctx.json({\n        firstName: 'John',\n        lastName: 'Maverick',\n      }),\n    );\n  }),\n);\n\n// Start the Mock Service Worker\nworker.start();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["and in a more real life scenario, taken from\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/f3245c4f8f0b6b2625c4a6d5d50161b612fb4757/plugins/catalog/src/api/CatalogClient.test.ts",children:"CatalogClient.test.ts"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"beforeEach(() => {\n  server.use(\n    rest.get(`${mockApiOrigin}${mockBasePath}/entities`, (_, res, ctx) => {\n      return res(ctx.json(defaultResponse));\n    }),\n  );\n});\n\nit('should entities from correct endpoint', async () => {\n  const entities = await client.getEntities();\n  expect(entities).toEqual(defaultResponse);\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A little more code to write"}),"\n",(0,n.jsxs)(t.li,{children:["Gradually will replace the codebase with ",(0,n.jsx)(t.code,{children:"msw"})]}),"\n"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in s=Object(arguments[a]))r.call(s,u)&&(c[u]=s[u]);if(t){i=t(s);for(var l=0;l<i.length;l++)n.call(s,i[l])&&(c[i[l]]=s[i[l]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,c=60110,a=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),s=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),c=f("react.context"),a=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var g=b.prototype=new v;g.constructor=b,n(g,m.prototype),g.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,s={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,n)&&!j.hasOwnProperty(n)&&(s[n]=t[n]);var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:o,type:e,key:i,ref:c,props:s,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return i=i(a=e),e=""===n?"."+C(a,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),R(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+C(c=e[u],u);a+=R(c,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)a+=R(c=c.value,t,r,l=n+C(c,u++),i);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function O(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function q(){var e=$.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var s=n({},e.props),i=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)_.call(t,l)&&!j.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];s.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:s,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return q().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,r){return q().useReducer(e,t,r)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:s(e),n.createElement(o.Provider,{value:c},t)}}}]);