"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[5415,4629,3429,2544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:n,groupId:a}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),E=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{E&&o(E)}),[E]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var E=n(2389);const f="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function S(e){const t=(0,E.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},4481:(e,t,n)=>{n.d(t,{Z:()=>a});const a=[{Params:"Content-Type",value:"application/json",DataType:"String",Required:"required"},{Params:"Authorization",value:"Basic Auth",DataType:"String",Required:"required"},{Params:"Accept",value:"application/json",DataType:"String",Required:"required"}]},7285:(e,t,n)=>{n.d(t,{Z:()=>a});const a=[{StatusCode:"0x0200",Status:"SUCCESS",Message:"TRANSACTION SUCCESSFULL"},{StatusCode:"0x0201",Status:"UNAUTHORIZED",Message:"UNAUTHORIZED USER"},{StatusCode:"0x0202",Status:"FAILURE",Message:"FAILURE USER"},{StatusCode:"0x0203",Status:"MISSING_PARAMETER",Message:"MISSING PARAMETER"},{StatusCode:"0x0204",Status:"CONNECTION_TIMEOUT",Message:"CONNECTION TIMEOUT"},{StatusCode:"0x0205",Status:"SOMETHING_WENT_WRONG",Message:"SOMETHING WENT WRONG"},{StatusCode:"0x0206",Status:"PENDING",Message:"TRANSACTION PENDING"},{StatusCode:"0x0207",Status:"REVERSED",Message:"TRANSACTION REVERSED"},{StatusCode:"0x0209",Status:"REDIRECT",Message:"REDIRECT URL"}]},7456:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{children:t,className:n}=e;return a.createElement("span",{className:n},t)}},9958:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7294);const r=e=>a.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>a.createElement("div",{className:"inner",key:4*t},a.createElement("b",{style:{fontSize:"16px"}},e.Parameter),a.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),a.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",a.createElement("br",null),!0===(null==e?void 0:e.isValueHtml)&&a.createElement(a.Fragment,null,a.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"},dangerouslySetInnerHTML:{__html:e.value}}),a.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.MaxLength&&`(Max Length: ${e.MaxLength})`)),!0!==(null==e?void 0:e.isValueHtml)&&a.createElement("span",{style:{fontWeight:"550",fontSize:"14px",wordSpacing:"2px"}},e.value," ",e.MaxLength&&`(Max Length: ${e.MaxLength})`)))))},6525:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7294);const r=e=>a.createElement("div",{id:"outer"},(null==e?void 0:e.data)&&e.data.map(((e,t)=>a.createElement("div",{className:"inner",key:7*t},a.createElement("b",{style:{fontSize:"16px"}},e.Params),a.createElement("small",null,"\xa0 (",e.DataType,") \xa0"),a.createElement("span",{style:{color:"red",fontSize:"15px"}}," ",e.Required," ")," ",a.createElement("br",null),a.createElement("span",{style:{fontWeight:"550",fontSize:"15px"}},e.value," ")))))},3779:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7294);const r=e=>a.createElement(a.Fragment,null,a.createElement("table",null,a.createElement("tbody",null,a.createElement("tr",null,a.createElement("th",null,"Status Code"),a.createElement("th",null,"Status"),a.createElement("th",null,"Message")),(null==e?void 0:e.data)&&e.data.map(((e,t)=>a.createElement("tr",{key:8*t},a.createElement("td",null,e.StatusCode),a.createElement("td",null,e.Status),a.createElement("td",null,e.Message)))))))},3778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>y,default:()=>v,frontMatter:()=>b,metadata:()=>E,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),l=n(7456),i=n(6525),o=n(4481),s=n(9958);const u=[{Parameter:"categoryName",DataType:"String",MaxLength:20,Required:"Required",value:"Bill Category Name"},{Parameter:"page",DataType:"String",MaxLength:20,Required:"Required",value:"Category Page Number"},{Parameter:"pageSize",DataType:"String",MaxLength:20,Required:"Required",value:"Category Page Size"}];var c=n(4866),d=n(5162),p=n(3779),m=n(7285);const b={id:"id-fetch-biller",title:"Fetch Biller by Category",description:"Fetch Biller",slug:"/v1/service/bbps/fetch/biller/category",sidebar_position:4},y=void 0,E={unversionedId:"BBPS/id-fetch-biller",id:"BBPS/id-fetch-biller",title:"Fetch Biller by Category",description:"Fetch Biller",source:"@site/docs/BBPS/fetch-biller-by-category.md",sourceDirName:"BBPS",slug:"/v1/service/bbps/fetch/biller/category",permalink:"/docs/v1/service/bbps/fetch/biller/category",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"id-fetch-biller",title:"Fetch Biller by Category",description:"Fetch Biller",slug:"/v1/service/bbps/fetch/biller/category",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fetch Biller by BillerId",permalink:"/docs/v1/service/bbps/fetch/biller/fetch-by-billerid"},next:{title:"Fetch Category",permalink:"/docs/v1/service/bbps/fetch/category"}},f={},g=[{value:"URL",id:"url",level:3},{value:"Headers",id:"headers",level:3},{value:"Body Params",id:"body-params",level:2},{value:"Request",id:"request",level:3},{value:"Response Samples",id:"response-samples",level:3},{value:"Response Code",id:"response-code",level:3}],h={toc:g};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fetch Biller"),(0,r.kt)("admonition",{title:"Postman Collection",type:"tip"},(0,r.kt)("a",{href:"https://www.google.com",target:"_blank"},"BBPS")),(0,r.kt)("h3",{id:"url"},"URL"),(0,r.kt)(l.Z,{className:"get",mdxType:"Highlight"},"GET")," : ",(0,r.kt)("strong",null,"/v1/service/bbps/fetch/biller/category"),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)(i.default,{data:o.Z,mdxType:"HeaderMarkdown"}),(0,r.kt)("h2",{id:"body-params"},"Body Params"),(0,r.kt)(s.default,{data:u,mdxType:"BodyParam"}),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="Example Request"',title:'"Example','Request"':!0},'    curl --location --request GET \'/v1/service/bbps/fetch/biller/category\' \\\n        --header \'Content-Type: application/json\' \\\n        --header \'Authorization: Basic Og==\' \\\n        --data \'{\n            "categoryName" : "Electricity",\n            "page" : "0",\n            "pageSize" : "500"\n        }\'\n')),(0,r.kt)("h3",{id:"response-samples"},"Response Samples"),(0,r.kt)(c.Z,{defaultValue:"found",values:[{label:"SUCCESS",value:"found"},{label:"FAILED",value:"failed"}],mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"found",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0200",\n        "message": "Record fetched successfully.",\n        "status": "SUCCESS",\n        "data": {\n            "billerResp": [\n                {\n                    "billerId": "121F00000NAT4D",\n                    "billerName": "121 Finance Private Limited",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Loan Repayment",\n                    "billerCoverage": "IND",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact and above"\n                },\n                {\n                    "billerId": "EDU017960UTT01",\n                    "billerName": "5Th Centenary School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-UTT-Udham Singh Nagar",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "EDU009008MAP01",\n                    "billerName": "7I World School Shivpuri Link Road Gwalior",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-MAP-Gwalior",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "EDU012723RAJ01",\n                    "billerName": "A&#39;S Saint Steward Morris School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-RAJ-Bhilwara",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "EDU013533TND01",\n                    "billerName": "Aaa International School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-TND-Virudhunagar",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "EDU013534TND01",\n                    "billerName": "Aachi International School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-TND-Madurai",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "AADA00000ASMNP",\n                    "billerName": "Aadarsh Gurukul Senior Secondary School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-ASM",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact and below"\n                },\n                {\n                    "billerId": "EDU011391PUN01",\n                    "billerName": "Aadesh International School",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-PUN-Hoshiarpur",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "EDU002707CHH01",\n                    "billerName": "Aadeshwar Academy",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Education Fees",\n                    "billerCoverage": "IND-CHH-Bastar",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": false,\n                    "paymentAmountExactness": "Exact"\n                },\n                {\n                    "billerId": "AADH00000NATPT",\n                    "billerName": "Aadhar Housing Finance Limited",\n                    "billerType": "FETCH_PAY",\n                    "billerCategory": "Loan Repayment",\n                    "billerCoverage": "IND",\n                    "billerResponseType": "SINGLE",\n                    "billerDescription": "Please enter the Application ID/Loan Account No.. Do not include any special characters.",\n                    "planMDMRequirement": "NOT_SUPPORTED",\n                    "adhocBiller": true,\n                    "paymentAmountExactness": "Exact"\n                }\n            ],\n            "pageNo": 0,\n            "pageSize": 10,\n            "totalElements": 22234,\n            "totalPages": 2224,\n            "generalResp": {\n                "statusCode": "200",\n                "status": "success",\n                "message": "Billers retrieved successfully",\n                "remarks": ""\n            }\n        }\n    }\n'))),(0,r.kt)(d.Z,{value:"failed",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "code": "0x0202",\n        "status": "FAILURE",\n        "message": "No Record found",\n        "data": "Please use valid name"\n    }\n')))),(0,r.kt)("h3",{id:"response-code"},"Response Code"),(0,r.kt)(p.default,{data:m.Z,mdxType:"ResponseCode"}))}v.isMDXComponent=!0}}]);