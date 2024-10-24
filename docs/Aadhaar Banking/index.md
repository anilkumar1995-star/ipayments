---
id: intro-ab
title: Aadhaar Banking 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite
slug: /v1/aeps
sidebar_position: 2
---

import '@site/src/css/bodyParam.css'

> Aadhaar Enabled Payment System (AEPS) is a payment service that allows a bank customer to use Aadhaar as his/her identity to access his/her Aadhaar enabled bank account and perform basic banking transactions like balance enquiry, cash withdrawal, mini statement, aadhaarpay

## Aadhaar Banking APIs

<details close>
<summary>Common</summary>

| API                                                                                    | Description                                                |
| :------------------------------------------------------------------------------------- | :--------------------------------------------------------- |
| <a href="/docs/v1/common/state">**Get All States**</a>| Use this API to get all the states           |
| <a href="/docs/v1/common/district">**Get All Districts**</a>  | Use this API to get the all the districts |
| <a href="/docs/v1/common/bank">**Get All Banks**</a>  | Use this API to get all the Bank list for AEPS transaction |
| <a href="/docs/v1/common/account/info">**Account Info**</a>  | Use this API to get account info  |

</details><br/><br/>

<details close>
<summary>MERCHANT ONBOARD</summary>

| API                                                           | Description |
| :------------------------------------------------------------ | :---------- |
| <a href="/docs/v1/service/aeps/merchant-onboard">**Onboard Merchant**</a> | Use this API to add merchant for AEPS transction          |
| <a href="/docs/v1/service/aeps/merchant">**Merchant Details**</a>   | Use this API to get the merchant details        |

</details><br/><br/>

<details close>
<summary>E-KYC</summary>

| API                                                                          | Description |
| :--------------------------------------------------------------------------- | :---------- |
| <a href="/docs/v1/service/aeps/send-otp">**Send OTP**</a>      | Use this  API for Send OTP to verify the Aadhaar             |
| <a href="/docs/v1/service/aeps/validate-otp"> **Validate OTP**</a>  |After getting the response from Send OTP use this  API to verify the OTP          |
| <a href="/docs/v1/service/aeps/ekyc-bio-metric">**E-Kyc BioMetric**</a>                 | Use this API to complete the merchant E-kyc Biometric (Biometric EKYC compulsary before initiate the transaction)          |

</details><br/><br/>

<details open>
<summary>TRANSACTION</summary>

| API                                                               | Description |
| :---------------------------------------------------------------- | :---------- |
| <a href="/docs/v1/service/aeps/withdrawal">**Cash Withdrawal**</a>       | Use this API to withdraw cash from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.           |
| <a href="/docs/v1/service/aeps/get-balance">**Balance Enquiry**</a>       | Use this API to check the Balance from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.           |
| <a href="/docs/v1/service/aeps/statement">**Mini Statement**</a>         | Use this API to Get the Statement from customer Aadhaar-linked bank accounts using their Aadhaar number and fingerprint.           |
| <a href="/docs/v1/service/aeps/2fa"> **2FA**</a>  | Use this API Two Factor Authentication   |
| <a href="/docs/v1/service/aeps/transaction-status">**Transaction Status**</a> |Use this API to get the status of the AEPS transaction          |

</details>
<br/><br/>






