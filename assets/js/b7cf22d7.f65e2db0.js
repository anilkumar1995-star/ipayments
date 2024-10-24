"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[9692,3429,5754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),u=a(6775),o=a(1980),i=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[s,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,i]=f({queryString:a,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),v(e)}),[i,v,l]),tabValues:l}}var b=a(2389);const E="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==u&&(d(t),o(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",y,null==s?void 0:s.className,{"tabs__item--active":u===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",E)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(S,(0,n.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,className:a}=e;return n.createElement("span",{className:a},t)}},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("div",{className:"inner",key:7*t},n.createElement("b",{style:{fontSize:"16px"}},e.Params),n.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),n.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",n.createElement("br",null),n.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},5125:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement(n.Fragment,null,n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Status Code"),n.createElement("th",null,"Status"),n.createElement("th",null,"Message")),n.createElement("tr",null,n.createElement("td",null,"000"),n.createElement("td",null,"Success"),n.createElement("td",null,"Pan Card Payment Successful")),n.createElement("tr",null,n.createElement("td",null,"001"),n.createElement("td",null,"Failed"),n.createElement("td",null,"Pan Card Failed")),n.createElement("tr",null,n.createElement("td",null,"999"),n.createElement("td",null,"Pending"),n.createElement("td",null,"Pan Card Pending")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("tr",{key:8*t},n.createElement("td",null,e.StatusCode),n.createElement("td",null,e.Status),n.createElement("td",null,e.Message)))))))},783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=a(7462),r=(a(7294),a(3905)),l=a(7456),s=a(6525),u=a(4481),o=a(4866),i=a(5162),c=a(5125),d=a(7285);const p={id:"id-pan-docs-status",title:"Pan Status",description:"Pan Status",slug:"/v1/service/pan/status",sidebar_position:3},m=void 0,f={unversionedId:"Pan Card/id-pan-docs-status",id:"Pan Card/id-pan-docs-status",title:"Pan Status",description:"Pan Status",source:"@site/docs/Pan Card/pan-status.md",sourceDirName:"Pan Card",slug:"/v1/service/pan/status",permalink:"/docs/v1/service/pan/status",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"id-pan-docs-status",title:"Pan Status",description:"Pan Status",slug:"/v1/service/pan/status",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Init",permalink:"/docs/v1/service/pan/init"},next:{title:"Paysprint",permalink:"/docs/v1/api/callbacks/pan/paysprint"}},v={},b=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],E={toc:b};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pan Status"),(0,r.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,r.kt)("a",{href:"https://www.google.com",target:"_blank"},"Pan Docs")),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)(l.Z,{className:"get",mdxType:"Highlight"},"GET")," : ",(0,r.kt)("strong",null,"/v1/service/pan/status"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)(s.default,{data:u.Z,mdxType:"HeaderMarkdown"}),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},"    curl --location --request GET '/v1/service/pan/status/UTI26333252174157066576' \\\n        --header 'Content-Type: application/json' \\\n        --header 'Authorization: Basic Og==' \\\n        --data ''\n")),(0,r.kt)("h3",{id:"response-samples"},"Response Samples"),(0,r.kt)(o.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"found",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "000: Record fetched successfully.",\n        "status": "SUCCESS",\n        "data": {\n            "txnId": "",\n            "statusCode": "000"\n            "orderRefId": "UTI263XXXX2174157066576"\n        }\n    }\n'))),(0,r.kt)(i.Z,{value:"failed",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "0: Invalid refid."\n    }\n')))),(0,r.kt)("h3",{id:"response-code"},"Response Code"),(0,r.kt)(c.default,{data:d.Z,mdxType:"PanStatusResponse"}))}y.isMDXComponent=!0}}]);