"use strict";(self.webpackChunkipayment_doc=self.webpackChunkipayment_doc||[]).push([[6964],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=c(a),k=n,h=m["".concat(s,".").concat(k)]||m[k]||p[k]||i;return a?r.createElement(h,o(o({ref:e},d),{},{components:a})):r.createElement(h,o({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9912:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={id:"intro-ab",title:"Aadhaar Banking",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",slug:"/v1/aeps",sidebar_position:2},o=void 0,l={unversionedId:"Aadhaar Banking/intro-ab",id:"Aadhaar Banking/intro-ab",title:"Aadhaar Banking",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",source:"@site/docs/Aadhaar Banking/index.md",sourceDirName:"Aadhaar Banking",slug:"/v1/aeps",permalink:"/ipayments/docs/v1/aeps",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"intro-ab",title:"Aadhaar Banking",description:"IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite",slug:"/v1/aeps",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IPAYMENT API Docs",permalink:"/ipayments/docs/v1/"},next:{title:"Get All States",permalink:"/ipayments/docs/v1/common/state"}},s={},c=[{value:"Aadhaar Banking APIs",id:"aadhaar-banking-apis",level:2}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking transactions like balance enquiry, cash withdrawal, mini statement, aadhaarpay")),(0,n.kt)("h2",{id:"aadhaar-banking-apis"},"Aadhaar Banking APIs"),(0,n.kt)("details",{close:!0},(0,n.kt)("summary",null,"Common"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/common/state"},(0,n.kt)("strong",{parentName:"td"},"Get All States"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get all the states")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/common/district"},(0,n.kt)("strong",{parentName:"td"},"Get All Districts"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get the all the districts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/common/bank"},(0,n.kt)("strong",{parentName:"td"},"Get All Banks"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get all the Bank list for AEPS transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/common/account/info"},(0,n.kt)("strong",{parentName:"td"},"Account Info"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get account info"))))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("details",{close:!0},(0,n.kt)("summary",null,"MERCHANT ONBOARD"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/merchant-onboard"},(0,n.kt)("strong",{parentName:"td"},"Onboard Merchant"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to add merchant for AEPS transction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/merchant"},(0,n.kt)("strong",{parentName:"td"},"Merchant Details"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get the merchant details"))))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("details",{close:!0},(0,n.kt)("summary",null,"E-KYC"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/send-otp"},(0,n.kt)("strong",{parentName:"td"},"Send OTP"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this  API for Send OTP to verify the Aadhaar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/validate-otp"}," ",(0,n.kt)("strong",{parentName:"td"},"Validate OTP"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"After getting the response from Send OTP use this  API to verify the OTP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/ekyc-bio-metric"},(0,n.kt)("strong",{parentName:"td"},"E-Kyc BioMetric"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to complete the merchant E-kyc Biometric (Biometric EKYC compulsary before initiate the transaction)"))))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null,"TRANSACTION"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"API"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/withdrawal"},(0,n.kt)("strong",{parentName:"td"},"Cash Withdrawal"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to withdraw cash from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/get-balance"},(0,n.kt)("strong",{parentName:"td"},"Balance Enquiry"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to check the Balance from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/statement"},(0,n.kt)("strong",{parentName:"td"},"Mini Statement"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to Get the Statement from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/2fa"}," ",(0,n.kt)("strong",{parentName:"td"},"2FA"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API Two Factor Authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{href:"/docs/v1/service/aeps/transaction-status"},(0,n.kt)("strong",{parentName:"td"},"Transaction Status"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use this API to get the status of the AEPS transaction"))))),(0,n.kt)("br",null),(0,n.kt)("br",null))}p.isMDXComponent=!0}}]);