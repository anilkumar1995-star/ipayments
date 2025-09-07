---
id: id-bill-payment-status
title: Bill Payment Status
description: Bill Payment Status
slug: /v1/service/bbps/bill/status
sidebar_position: 3
---

Bill Payment Status 

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/bbps/bill/status</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/BillPaymentStatusCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/bbps/bill/status' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "clientRefId": "234f4665-XXXXX-4af5-XXXX-6f0dd9eff7a3"
        }'
```

### Response Samples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="found"
    values={[
        {label: 'SUCCESS', value: 'found'},
        {label: 'FAILED', value: 'failed'},
    ]}>

<TabItem value="found">

```json
  {
        "code": "0x0200",
        "message": "Record fetched successfully.",
        "status": "SUCCESS",
        "data": {
                "agentNpciId": "FE41FE15INTU000XXXXX",
                "fundRespRemarks": "SUCCESS",
                "fundStatus": "FUND_TRANSFER_SUCCESS",
                "billStatus": "BILL_PAYMENT_SUCCESS",
                "fundTxnAmt": 3040,
                "fundTxnDate": "2025-09-07 00:00:00",
                "fundTxnReferenceId": "ESTB32PV8QA74BQ",
                "fundTxnRemarks": "BBPS-AGENT/ESTB32PV8QA74BQ",
                "fundUTR": "S31903XXX",
                "billerId": "LAMP00000NAT7E",
                "billerName": "L and T Finance Holdings Limited",
                "txnRefId": "a66506da-1813-45c8-b622-8ba67d038XXX",
                "customerMobNo": "8439737416",
                "txnNpciId": "FE415250IRPH8Ap0KXXX",
                "customerParamsDAO": [
                        {
                                "name": "Loan Account Number",
                                "paramsId": "e98e2a0f-09ce-47b0-b4fe-b32ed34dxxxx",
                                "value": "T1700807122402XXXX"
                        },
                        {
                                "name": "Mobile Number",
                                "paramsId": "99b33b9e-169e-4758-be2c-256c1b8xxxxx",
                                "value": "89231XXXX"
                        }
                ]
        }
}
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "We are currently experiencing technical issues. Please try again in 20 minutes. Thank you for your patience! BBP:",
        "data": {
                "agentNpciId": "FE41FE15INTU0000XXX",
                "fundRespRemarks": "Insufficient funds in account",
                "fundStatus": "FUND_TRANSFER_FAILED",
                "billStatus": "BILL_PAYMENT_FAILED",
                "fundTxnAmt": 4405,
                "fundTxnDate": "2025-09-06 00:00:00",
                "fundTxnReferenceId": "TZJTKU9CTGH9XXX",
                "fundTxnRemarks": "BBPS-AGENT/TZJTKU9CTXXXXX",
                "fundUTR": null,
                "billerId": "HDBF00000NATGJ",
                "billerName": "HDB Financial Services Limited",
                "txnRefId": "b3729237-7462-4f65-b744-652f0182222",
                "customerMobNo": "95208XXXX",
                "txnNpciId": null,
                "customerParamsDAO": [
                        {
                                "name": "Loan Number",
                                "paramsId": "6ccf7f04-8bff-4d90-863f-9758d0dcxxx",
                                "value": "53141XXX"
                        }
                ]
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
