/*! For license information please see bdf36d34.2fe1cfc2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[454620],{930111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(824246),s=n(511151);const o={id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests."},a=void 0,i={id:"auth/service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests.",source:"@site/../docs/auth/service-to-service-auth.md",sourceDirName:"auth",slug:"/auth/service-to-service-auth",permalink:"/docs/auth/service-to-service-auth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/service-to-service-auth.md",tags:[],version:"current",frontMatter:{id:"service-to-service-auth",title:"Service to Service Auth",description:"This section describes service to service authentication works, both internally within Backstage plugins and when external callers want to make requests."},sidebar:"docs",previous:{title:"Contributing New Providers",permalink:"/docs/auth/add-auth-provider"},next:{title:"Auto Logout",permalink:"/docs/auth/autologout"}},c={},l=[{value:"Standard Plugin-to-Plugin Auth",id:"standard-plugin-to-plugin-auth",level:2},{value:"Static Tokens",id:"static-tokens",level:2},{value:"Legacy Tokens",id:"legacy-tokens",level:2},{value:"Configuration (legacy)",id:"configuration-legacy",level:3},{value:"External Callers (legacy)",id:"external-callers-legacy",level:3}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This documentation is written for ",(0,r.jsx)(t.a,{href:"../backend-system/index.md",children:"the new backend\nsystem"})," which is the default since Backstage\n",(0,r.jsx)(t.a,{href:"/docs/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend\nsystem, you may want to read ",(0,r.jsx)(t.a,{href:"/docs/auth/service-to-service-auth--old",children:"its own article"}),"\ninstead, and ",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,r.jsxs)(t.p,{children:["This article describes how ",(0,r.jsx)(t.em,{children:"service-to-service auth"})," works in Backstage, both\nbetween Backstage backend plugins and for external callers who want to make\nrequests to them. This is in contrast to ",(0,r.jsx)(t.em,{children:"user and user-to-service auth"})," which\nuse different flows."]}),"\n",(0,r.jsx)(t.p,{children:"Each section describes one distinct type of auth flow."}),"\n",(0,r.jsx)(t.h2,{id:"standard-plugin-to-plugin-auth",children:"Standard Plugin-to-Plugin Auth"}),"\n",(0,r.jsxs)(t.p,{children:["Backstage plugins that use the new backend system and handle credentials using\nthe ",(0,r.jsx)(t.code,{children:"auth"})," and ",(0,r.jsx)(t.code,{children:"httpAuth"})," service APIs are secure by default, without requiring\nany configuration. They generate self-signed tokens automatically for making\nrequests to other Backstage backend plugins, and the receivers use the caller's\npublic key set endpoint to be able to perform verification."]}),"\n",(0,r.jsxs)(t.p,{children:["This flow has only one configuration option to set in your app-config:\n",(0,r.jsx)(t.code,{children:"backend.auth.dangerouslyDisableDefaultAuthPolicy"}),", which can be set to ",(0,r.jsx)(t.code,{children:"true"}),"\nif you for some reason need to completely disable both the issuing and\nverification of tokens between backend plugins. This makes your backends\ninsecure and callable by anyone without auth, so only use this as a last resort\nand when your deployment is behind a secure ingress like a VPN."]}),"\n",(0,r.jsx)(t.p,{children:"External callers cannot leverage this flow; it's only used internally by backend\nplugins calling other backend plugins."}),"\n",(0,r.jsx)(t.h2,{id:"static-tokens",children:"Static Tokens"}),"\n",(0,r.jsx)(t.p,{children:"This access method consists of random static tokens that can be handed out to\nexternal callers who want to make requests to Backstage backend plugins. This is\nuseful for the most basic callers such as command line scripts, web hooks and\nsimilar."}),"\n",(0,r.jsxs)(t.p,{children:["You configure this access method by adding one or more entries of type ",(0,r.jsx)(t.code,{children:"static"}),"\nto the ",(0,r.jsx)(t.code,{children:"backend.auth.externalAccess"})," app-config key:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: static\n        options:\n          token: ${CICD_TOKEN}\n          subject: cicd-system-completion-events\n      - type: static\n        options:\n          token: ${ADMIN_CURL_TOKEN}\n          subject: admin-curl-access\n"})}),"\n",(0,r.jsx)(t.p,{children:"The tokens can be any string without whitespace, but for security reasons should\nbe sufficiently long so as not to be easy to guess by brute force. You can for\nexample generate them on the command line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'node -p \'require("crypto").randomBytes(24).toString("base64")\'\n'})}),"\n",(0,r.jsx)(t.p,{children:"The subjects must be strings without whitespace. They are used for identifying\neach caller, and become part of the credentials object that request recipient\nplugins get."}),"\n",(0,r.jsxs)(t.p,{children:["Callers pass along the tokens verbatim with requests in the ",(0,r.jsx)(t.code,{children:"Authorization"}),"\nheader:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"Authorization: Bearer eZv5o+fW3KnR3kVabMW4ZcDNLPl8nmMW\n"})}),"\n",(0,r.jsx)(t.h2,{id:"legacy-tokens",children:"Legacy Tokens"}),"\n",(0,r.jsxs)(t.p,{children:["Plugins and backends that are ",(0,r.jsx)(t.em,{children:"not"})," on the new backend system use a legacy token\nflow, where shared static secrets in your app-config are used for signing and\nverification. If you are on the new backend system and are not using legacy\nplugins using the compatibility wrapper, you can skip this section."]}),"\n",(0,r.jsx)(t.h3,{id:"configuration-legacy",children:"Configuration (legacy)"}),"\n",(0,r.jsx)(t.p,{children:"In local development, there is no need to configure anything for this auth\nmethod. But in production, you must configure at least one legacy type external\naccess method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    externalAccess:\n      - type: legacy\n        options:\n          secret: my-secret-key-catalog\n          subject: legacy-catalog\n      - type: legacy\n        options:\n          secret: my-secret-key-scaffolder\n          subject: legacy-scaffolder\n"})}),"\n",(0,r.jsx)(t.p,{children:"The old style keys config is also supported as an alternative, but please\nconsider using the new style above instead:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="in e.g. app-config.production.yaml"',children:"backend:\n  auth:\n    keys:\n      - secret: my-secret-key-catalog\n      - secret: my-secret-key-scaffolder\n"})}),"\n",(0,r.jsx)(t.p,{children:"The secrets must be any base64-encoded random data, but for security reasons\nshould be sufficiently long so as not to be easy to guess by brute force. You\ncan for example generate them on the command line:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'node -p \'require("crypto").randomBytes(24).toString("base64")\'\n'})}),"\n",(0,r.jsx)(t.p,{children:"The subjects must be strings without whitespace. They are used for identifying\neach caller, and become part of the credentials object that request recipient\nplugins get."}),"\n",(0,r.jsx)(t.p,{children:"In both of the examples we showed two secrets being specified, but the minimum\nis one. The order is significant: the first one is always used for signing of\noutgoing requests to other backend plugins, while all of the keys are used for\nverification. This is useful if you want to be able to have unique keys per\ndeployment if you are using split deployments of Backstage. Then each deployment\nlists its own signing secret at the top, and only adds the secrets for those\nother deployments that it wants to permit to call it."}),"\n",(0,r.jsxs)(t.p,{children:["For most organizations, we recommend leaving it at just one key and\n",(0,r.jsx)(t.a,{href:"/docs/backend-system/building-backends/migrating",children:"migrating"})," to the new\nbackend system as soon as possible instead of experimenting with multiple legacy\nsecrets."]}),"\n",(0,r.jsx)(t.h3,{id:"external-callers-legacy",children:"External Callers (legacy)"}),"\n",(0,r.jsx)(t.p,{children:"For legacy Backstage backend plugins, the above configuration is enough. But\nexternal callers who wish to make requests using this flow must generate tokens\naccording to the following rules."}),"\n",(0,r.jsxs)(t.p,{children:["The token must be a JWT with a ",(0,r.jsx)(t.code,{children:"HS256"})," signature, using the raw base64 decoded\nvalue of the configured key as the secret. It must also have the following\npayload:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"sub"}),': the exact string "backstage-server"']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"exp"}),": one hour from the time it was generated, in epoch seconds"]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["NOTE: The JWT must encode the ",(0,r.jsx)(t.code,{children:"alg"})," header as a protected header, such as with\n",(0,r.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/classes/jwt_sign.SignJWT.md#setprotectedheader",children:"setProtectedHeader"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The caller then passes along the JWT token with requests in the ",(0,r.jsx)(t.code,{children:"Authorization"}),"\nheader:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"Authorization: Bearer eZv5o+fW3KnR3kVabMW4ZcDNLPl8nmMW\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function b(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var v=k.prototype=new b;v.constructor=k,y(v,m.prototype),v.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var s,o={},a=null,i=null;if(null!=t)for(s in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=t[s]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(s in c=e.defaultProps)void 0===o[s]&&(o[s]=c[s]);return{$$typeof:n,type:e,key:a,ref:i,props:o,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,s,o,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===o?"."+C(c,0):o,x(a)?(s="",null!=e&&(s=e.replace(E,"$&/")+"/"),P(a,t,s,"",(function(e){return e}))):null!=a&&(T(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,s+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,o=""===o?".":o+":",x(e))for(var l=0;l<e.length;l++){var u=o+C(i=e[l],l);c+=P(i,t,s,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=P(i=i.value,t,s,u=o+C(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var r=[],s=0;return P(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var q={current:null},A={transition:null},O={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:A,ReactCurrentOwner:j};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=s,t.Profiler=a,t.PureComponent=k,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=y({},e.props),o=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(s[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}return{$$typeof:n,type:e.type,key:o,ref:a,props:s,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return q.current.useCallback(e,t)},t.useContext=function(e){return q.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return q.current.useDeferredValue(e)},t.useEffect=function(e,t){return q.current.useEffect(e,t)},t.useId=function(){return q.current.useId()},t.useImperativeHandle=function(e,t,n){return q.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return q.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return q.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return q.current.useMemo(e,t)},t.useReducer=function(e,t,n){return q.current.useReducer(e,t,n)},t.useRef=function(e){return q.current.useRef(e)},t.useState=function(e){return q.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return q.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return q.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);