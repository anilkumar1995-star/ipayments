"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[8329,4629,3429,2544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(f,u(u({ref:t},c),{},{components:a})):n.createElement(f,u({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(7462),r=a(7294),l=a(6010),u=a(2466),o=a(6775),i=a(1980),s=a(7392),c=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[u,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=f({queryString:a,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),v(e)}),[s,v,l]),tabValues:l}}var g=a(2389);const y="tabList__CuJ",h="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,u.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(d(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:u}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},u,{className:(0,l.Z)("tabs__item",h,null==u?void 0:u.className,{"tabs__item--active":o===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function S(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(E,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(S,(0,n.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"},{StatusCode:"0x0207",Status:"REVERSED",Message:"TRANSACTION REVERSED"},{StatusCode:"0x0209",Status:"REDIRECT",Message:"REDIRECT URL"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){let{children:t,className:a}=e;return n.createElement("span",{className:a},t)}},9958:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("div",{className:"inner",key:4*t},n.createElement("b",{style:{fontSize:"16px"}},e.Parameter),n.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),n.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",n.createElement("br",null),!0===(null==e?void 0:e.isValueHtml)&&n.createElement(n.Fragment,null,n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"},dangerouslySetInnerHTML:{__html:e.value}}),n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.MaxLength&&`(Max Length: ${e.MaxLength})`)),!0!==(null==e?void 0:e.isValueHtml)&&n.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.value," ",e.MaxLength&&`(Max Length: ${e.MaxLength})`)))))},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("div",{className:"inner",key:7*t},n.createElement("b",{style:{fontSize:"16px"}},e.Params),n.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),n.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",n.createElement("br",null),n.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294);const r=e=>n.createElement(n.Fragment,null,n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Status Code"),n.createElement("th",null,"Status"),n.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>n.createElement("tr",{key:8*t},n.createElement("td",null,e.StatusCode),n.createElement("td",null,e.Status),n.createElement("td",null,e.Message)))))))},3968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>E,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),l=a(7456),u=a(6525),o=a(4481),i=a(9958);const s=[{Parameter:"macAddress",DataType:"String",MaxLength:30,Required:"Required",value:"MAC Address"},{Parameter:"clientRefId",DataType:"String",MaxLength:20,Required:"Required",value:"Client Reference ID"},{Parameter:"longitude",DataType:"String",MaxLength:20,Required:"Required",value:"Current location latitude"},{Parameter:"latitude",DataType:"String",MaxLength:20,Required:"Required",value:"Current location latitude"},{Parameter:"txnType",DataType:"String",MaxLength:10,Required:"Required",value:"Transaction Type "},{Parameter:"routeType",DataType:"String",MaxLength:5,Required:"Required",value:"Route Type"},{Parameter:"amount",DataType:"String",MaxLength:5,Required:"Required",value:"Amount"},{Parameter:"merchantCode",DataType:"String",MaxLength:50,Required:"Required",value:"Merchant Code"}];var c=a(4866),d=a(5162),m=a(3779),p=a(7285);const f={id:"id-matm-matmInitiate",title:"Initiate MATM",description:"Initiate MATM",slug:"/v1/service/matm/init",sidebar_position:1},v=void 0,g={unversionedId:"MATM/id-matm-matmInitiate",id:"MATM/id-matm-matmInitiate",title:"Initiate MATM",description:"Initiate MATM",source:"@site/docs/MATM/matm-initate.md",sourceDirName:"MATM",slug:"/v1/service/matm/init",permalink:"/docs/v1/service/matm/init",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"id-matm-matmInitiate",title:"Initiate MATM",description:"Initiate MATM",slug:"/v1/service/matm/init",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"MATM (SDK)",permalink:"/docs/v1/service/matm"},next:{title:"Update MATM",permalink:"/docs/v1/service/matm/update"}},y={},h=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Body Params",id:"body-params",level:2},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],b={toc:h};function E(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Initiate MATM"),(0,r.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,r.kt)("a",{href:"https://www.google.com",target:"_blank"},"MATM")),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)(l.Z,{className:"post",mdxType:"Highlight"},"POST")," : ",(0,r.kt)("strong",null,"/v1/service/matm/init"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)(u.default,{data:o.Z,mdxType:"HeaderMarkdown"}),(0,r.kt)("h2",{id:"body-params"},"Body Params"),(0,r.kt)(i.default,{data:s,mdxType:"BodyParam"}),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},'    curl --location \'/v1/service/matm/init\' \\\n        --header \'Content-Type: application/json\' \\\n        --header \'Authorization: Basic Og==\' \\\n        --data \'{\n            "macAddress": "00:1b:63:84:45:e6",\n            "clientRefId": "CRF494****4949",\n            "longitude": "80.946167",\n            "latitude": "26.846695",\n            "txnType": "sdkenquiry",\n            "routeType" : "sdk",\n            "amount": "0",\n            "merchantCode": "AKSKSKS"\n        }\'\n')),(0,r.kt)("h3",{id:"response-samples"},"Response Samples"),(0,r.kt)(c.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"found",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Record inserted.",\n        "status": "SUCCESS",\n        "data": {\n            "amount": "0",\n            "merchantcode": "AKSKSKS",\n            "routeType": "sdk",\n            "orderRefId": "MBE3****60141286****6F0",\n            "superMerchantLoginId": "iydapaymentd",\n            "superMerchantPassword": "1234d",\n            "superMerchantId": "1176"\n        }\n    }\n'))),(0,r.kt)(d.Z,{value:"failed",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "Error, MATM not initiate",\n    }\n')))),(0,r.kt)("h3",{id:"response-code"},"Response Code"),(0,r.kt)(m.default,{data:p.Z,mdxType:"ResponseCode"}))}E.isMDXComponent=!0}}]);