"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[7635,4629,3429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(g,s(s({ref:t},i),{},{components:r})):a.createElement(g,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>S});var a=r(7462),n=r(7294),l=r(6010),s=r(2466),o=r(6775),u=r(1980),c=r(7392),i=r(12);function p(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,c]=g({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),y=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var y=r(2389);const f="tabList__CuJ",v="tabItem_LNqP";function T(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=c[r].value;a!==o&&(p(t),u(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":o===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(T,(0,a.Z)({},e,t)),n.createElement(b,(0,a.Z)({},e,t)))}function S(e){const t=(0,y.Z)();return n.createElement(E,(0,a.Z)({key:String(t)},e))}},4481:(e,t,r)=>{r.d(t,{Z:()=>a});const a=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,r)=>{r.d(t,{Z:()=>a});const a=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"}]},7456:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){let{children:t,className:r}=e;return a.createElement("span",{className:r},t)}},6525:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var a=r(7294);const n=e=>a.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>a.createElement("div",{className:"inner",key:7*t},a.createElement("b",{style:{fontSize:"16px"}},e.Params),a.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),a.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",a.createElement("br",null),a.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var a=r(7294);const n=e=>a.createElement(a.Fragment,null,a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Status Code"),a.createElement("th",null,"Status"),a.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>a.createElement("tr",{key:8*t},a.createElement("td",null,e.StatusCode),a.createElement("td",null,e.Status),a.createElement("td",null,e.Message)))))))},8857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var a=r(7462),n=(r(7294),r(3905)),l=r(7456),s=r(6525),o=r(4481),u=r(4866),c=r(5162),i=r(3779),p=r(7285);const d={id:"id-recharge-type",title:"Recharge Type",description:"Recharge Type",slug:"/v1/service/recharge/recharge-type",sidebar_position:5},m=void 0,g={unversionedId:"Recharge/id-recharge-type",id:"Recharge/id-recharge-type",title:"Recharge Type",description:"Recharge Type",source:"@site/docs/Recharge/recharge-type.md",sourceDirName:"Recharge",slug:"/v1/service/recharge/recharge-type",permalink:"/ipayments/docs/v1/service/recharge/recharge-type",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"id-recharge-type",title:"Recharge Type",description:"Recharge Type",slug:"/v1/service/recharge/recharge-type",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Initiate Recharge",permalink:"/ipayments/docs/v1/service/recharge/initiate"},next:{title:"Check Status",permalink:"/ipayments/docs/v1/service/recharge/status"}},h={},y=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],f={toc:y};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Recharge Type"),(0,n.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,n.kt)("a",{href:"https://www.google.com",target:"_blank"},"Recharge")),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)(l.Z,{className:"get",mdxType:"Highlight"},"GET")," : ",(0,n.kt)("strong",null,"/v1/service/recharge/recharge_type"),(0,n.kt)("h3",{id:"headers"},"Headers"),(0,n.kt)(s.default,{data:o.Z,mdxType:"HeaderMarkdown"}),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},"    curl --location --request GET '/v1/service/recharge/recharge_type' \\\n        --header 'Content-Type: application/json' \\\n        --header 'Authorization: Basic Og==' \\\n        --data ''\n")),(0,n.kt)("h3",{id:"response-samples"},"Response Samples"),(0,n.kt)(u.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,n.kt)(c.Z,{value:"found",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Recharge Type fetched successfully.",\n        "status": "SUCCESS",\n        "data": [\n            {\n                "rechargeTypeId": 1,\n                "rechargeType": "Top-up"\n            },\n            {\n                "rechargeTypeId": 3,\n                "rechargeType": "Full Talktime"\n            },\n            {\n                "rechargeTypeId": 4,\n                "rechargeType": "SMS"\n            },\n            {\n                "rechargeTypeId": 5,\n                "rechargeType": "2G Data"\n            },\n            {\n                "rechargeTypeId": 6,\n                "rechargeType": "3G Data"\n            },\n            {\n                "rechargeTypeId": 8,\n                "rechargeType": "4G Data"\n            },\n            {\n                "rechargeTypeId": 9,\n                "rechargeType": "Local"\n            },\n            {\n                "rechargeTypeId": 10,\n                "rechargeType": "STD"\n            },\n            {\n                "rechargeTypeId": 11,\n                "rechargeType": "ISD"\n            },\n            {\n                "rechargeTypeId": 13,\n                "rechargeType": "Roaming"\n            },\n            {\n                "rechargeTypeId": 14,\n                "rechargeType": "Other"\n            },\n            {\n                "rechargeTypeId": 16,\n                "rechargeType": "Validity"\n            },\n            {\n                "rechargeTypeId": 17,\n                "rechargeType": "Plan"\n            },\n            {\n                "rechargeTypeId": 18,\n                "rechargeType": "FRC"\n            }\n        ]\n    }\n'))),(0,n.kt)(c.Z,{value:"failed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "code": "0x0202",\n    "status": "FAILURE",\n    "message": "Recharge type not found"\n    }\n')))),(0,n.kt)("h3",{id:"response-code"},"Response Code"),(0,n.kt)(i.default,{data:p.Z,mdxType:"ResponseCode"}))}v.isMDXComponent=!0}}]);