"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[8579,4629,3429,2544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(y,o(o({ref:t},i),{},{components:a})):r.createElement(y,o({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),c=a(6775),u=a(1980),s=a(7392),i=a(12);function d(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const r=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=y({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=u??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:c,selectValue:u,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==c&&(d(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>i.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":c===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function S(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(E,(0,r.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return n.createElement(S,(0,r.Z)({key:String(t)},e))}},4481:(e,t,a)=>{a.d(t,{Z:()=>r});const r=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,a)=>{a.d(t,{Z:()=>r});const r=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"},{StatusCode:"0x0207",Status:"REVERSED",Message:"TRANSACTION REVERSED"},{StatusCode:"0x0209",Status:"REDIRECT",Message:"REDIRECT URL"}]},7456:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);function n(e){let{children:t,className:a}=e;return r.createElement("span",{className:a},t)}},9958:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);const n=e=>r.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>r.createElement("div",{className:"inner",key:4*t},r.createElement("b",{style:{fontSize:"16px"}},e.Parameter),r.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),r.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",r.createElement("br",null),!0===(null==e?void 0:e.isValueHtml)&&r.createElement(r.Fragment,null,r.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"},dangerouslySetInnerHTML:{__html:e.value}}),r.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.MaxLength&&`(Max Length: ${e.MaxLength})`)),!0!==(null==e?void 0:e.isValueHtml)&&r.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.value," ",e.MaxLength&&`(Max Length: ${e.MaxLength})`)))))},6525:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);const n=e=>r.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>r.createElement("div",{className:"inner",key:7*t},r.createElement("b",{style:{fontSize:"16px"}},e.Params),r.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),r.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",r.createElement("br",null),r.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(7294);const n=e=>r.createElement(r.Fragment,null,r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("th",null,"Status Code"),r.createElement("th",null,"Status"),r.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>r.createElement("tr",{key:8*t},r.createElement("td",null,e.StatusCode),r.createElement("td",null,e.Status),r.createElement("td",null,e.Message)))))))},6201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>E,frontMatter:()=>y,metadata:()=>v,toc:()=>b});var r=a(7462),n=(a(7294),a(3905)),l=a(7456),o=a(6525),c=a(4481),u=a(9958);const s=[{Parameter:"merchantCode",DataType:"String",MaxLength:20,Required:"Required",value:"Merchant unique Code(You will get merchantCode from Merchant Onboarding API)"},{Parameter:"customerId",DataType:"String",MaxLength:30,Required:"Required",value:"Customer Id Code(You will get customerId from Customer Onboarding API)"},{Parameter:"cardName",DataType:"String",MaxLength:100,Required:"Required",value:"cardName"},{Parameter:"cardNo",DataType:"String",MaxLength:16,Required:"Required",value:"cardNo"},{Parameter:"expireDate",DataType:"String",MaxLength:5,Required:"Required",value:"expireDate"},{Parameter:"apiType",DataType:"String",MaxLength:5,Required:"Required",value:"apiType  {b2b|b2c}"},{Parameter:"amount",DataType:"String",MaxLength:7,Required:"Required",value:"amount"},{Parameter:"clientRefId",DataType:"String",MaxLength:7,Required:"Required",value:"clientRefId (Unique client reference id)"}];var i=a(4866),d=a(5162),p=a(3779),m=a(7285);const y={id:"intro-ab",title:"Paycc Add Card",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt",slug:"/v1/service/paycc/add/verify/card"},f=void 0,v={unversionedId:"Paycc/Card/Add-Card/intro-ab",id:"Paycc/Card/Add-Card/intro-ab",title:"Paycc Add Card",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt",source:"@site/docs/Paycc/Card/Add-Card/index.md",sourceDirName:"Paycc/Card/Add-Card",slug:"/v1/service/paycc/add/verify/card",permalink:"/docs/v1/service/paycc/add/verify/card",draft:!1,tags:[],version:"current",frontMatter:{id:"intro-ab",title:"Paycc Add Card",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt",slug:"/v1/service/paycc/add/verify/card"},sidebar:"tutorialSidebar",previous:{title:"Paycc Cards List",permalink:"/docs/v1/service/paycc/creditcards"},next:{title:"Paycc Delete Card",permalink:"/docs/v1/service/paycc/delete/creditcard"}},g={},b=[{value:"Paycc Customer kyc APIs",id:"paycc-customer-kyc-apis",level:2},{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Body Params",id:"body-params",level:2},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],h={toc:b};function E(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Paycc Add Card . "),(0,n.kt)("h2",{id:"paycc-customer-kyc-apis"},"Paycc Customer kyc APIs"),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null," Paycc Add Card  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/paycc/add/verify/card"},(0,n.kt)("strong",{parentName:"td"},"Paycc Add Card"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to Paycc Add Card"))))),(0,n.kt)("p",null,"Paycc"),(0,n.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,n.kt)("a",{href:"https://www.google.com",target:"_blank"},"Paycc Add Card")),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)(l.Z,{className:"post",mdxType:"Highlight"},"POST")," : ",(0,n.kt)("strong",null,"/v1/service/paycc/add/verify/card"),(0,n.kt)("h3",{id:"headers"},"Headers"),(0,n.kt)(o.default,{data:c.Z,mdxType:"HeaderMarkdown"}),(0,n.kt)("h2",{id:"body-params"},"Body Params"),(0,n.kt)(u.default,{data:s,mdxType:"BodyParam"}),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},'    curl --location \'/v1/service/paycc/add/verify/card\' \\\n        --header \'Content-Type: application/json\' \\\n        --header \'Authorization: Basic Og==\' \\\n        --data \'{\n                "customerId": "JSIWI5XXXXXX",\n                "clientRefId": "CRD5991XXXX",\n                "cardName": "Flipxxxxx",\n                "merchantCode": "MID69XXXXXXX",\n                "cardNo": "5334670XXXXXX",\n                "expireDate": "09/28",\n                "apiType": "b2b",\n                "amount": "10",\n                "bankId" : "bnk5728XXXXX"\n            }\'\n')),(0,n.kt)("h3",{id:"response-samples"},"Response Samples"),(0,n.kt)(i.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"found",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},' {\n       "code": "0x0200",\n       "message": "This credit card already exists.",\n       "status": "SUCCESS",\n       "data": {\n               "cardId": "CRD7917xxxxxx",\n               "isVerify": "0",\n               "verifyUrl": "https://console.ipayments.in/api/v1/service/paycc/pay/order_PiV87ZElz5aVcn/eyJpdiI6IjlQUlpXcEtwbmdUeE1sZmN6cccc",\n               "bankHolderName": "",\n               "accountNo": "2222222xxxxxxxx",\n               "ifsc": "",\n               "orderId": "order_PiVxxxxxxxx"\n       }\n}\n'))),(0,n.kt)(d.Z,{value:"failed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "This credit card maximum 10 added."\n}\n')))),(0,n.kt)("h3",{id:"response-code"},"Response Code"),(0,n.kt)(p.default,{data:m.Z,mdxType:"ResponseCode"}))}E.isMDXComponent=!0}}]);