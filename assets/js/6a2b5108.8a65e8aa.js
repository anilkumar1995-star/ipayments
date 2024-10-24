"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[7876],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(r),y=n,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||o;return r?a.createElement(m,i(i({ref:e},p),{},{components:r})):a.createElement(m,i({ref:e},p))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1830:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={id:"intro-ab",title:"Payout",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",slug:"/v1/service/payout",sidebar_position:6},i=void 0,c={unversionedId:"Payout/intro-ab",id:"Payout/intro-ab",title:"Payout",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",source:"@site/docs/Payout/index.md",sourceDirName:"Payout",slug:"/v1/service/payout",permalink:"/ipayments/docs/v1/service/payout",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"intro-ab",title:"Payout",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",slug:"/v1/service/payout",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Validate Bill",permalink:"/ipayments/docs/v1/service/bbps/validate/bill-by-billid"},next:{title:"Get Contact Payout",permalink:"/ipayments/docs/v1/service/payout/contacts/contactId"}},s={},l=[{value:"Payout APIs",id:"payout-apis",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Payouts refers to the withdrawal or disbursement of funds from the account. This can include various transactions where money is taken out of the account, such as DMT (Domestic Money Transfer)"),(0,n.kt)("h2",{id:"payout-apis"},"Payout APIs"),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null," Payout"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/payout/contacts/contactId"},(0,n.kt)("strong",{parentName:"td"},"Get Contact"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get the contact Payout using contact Id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/payout/contacts"},(0,n.kt)("strong",{parentName:"td"},"Contacts"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get the contact Payout")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/payout/orders"},(0,n.kt)("strong",{parentName:"td"},"Order"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to accept the Order of the Payout"))))))}u.isMDXComponent=!0}}]);