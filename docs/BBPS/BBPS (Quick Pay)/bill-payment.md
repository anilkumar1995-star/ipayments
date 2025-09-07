---
id: id-fetch-quickbill-bill-payment
title: Quickbill Bill Payment
description:  Quickbill Bill Payment
slug: /v1/service/bbps/quickbill/bill/payment
sidebar_position: 3
---

Fetch Bill

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/bbps/quickbill/bill/payment</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchBillPaymentCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request POST '/v1/service/bbps/quickbill/bill/payment' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "billId": "BILL5632112345678818224XXXXXXXXXXX",
            "clientRefId": "CRF56321124567811142XX",
            "customerInfo": {
                "customerMobile": "965180XXXX",
                "customerEmail": "kumaxxxx@gmail.com",
                "customerAdhaar": "",
                "customerPan": ""
            },
            "billerId": "UPPC00000UTPAH",
            "customerParams": {
                "tags": [
                    {
                        "name": "Consumer Number",
                        "value": "8236XXXXX"
                    },
                    {
                        "name": "District-Discom",
                        "value": "Ayodhya-MVVNL"
                    }
                ]
            },
            "billerResponse": {
                "billAmount": "100",
                "billDate": "2025-08-04",
                "billNumber": "82332390XXX",
                "billPeriod": "MONTHLY",
                "customerName": "NAME KUMAR",
                "dueDate": "2025-08-18"
            },
            "amount": 100,
            "paymentMethod": {
                "paymentMode": "Cash",
                "quickPay": "N",
                "splitPay": "N"
            },
            "paymentInfo": {
                "info": [
                    {
                        "infoName": "Remarks",
                        "infoValue": "Received"
                    }
                ]
            }
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
    "message": "Payment successfully.",
    "status": "SUCCESS",
    "data": {
        "agentNpciId": "",
        "orderRefId": "BPS1019057492047XXXXX",
        "fundRespRemarks": "Successful",
        "fundStatus": "",
        "billStatus": "BILL_PAYMENT_SUCCESS",
        "fundTxnAmt": 100,
        "fundTxnDate": "2025-08-04",
        "fundTxnReferenceId": "CC015244CBAA328XXXX",
        "fundTxnRemarks": "Successful",
        "fundUTR": "OEBYDXX4",
        "billerId": "UPPC00000UTPAH",
        "billerName": "Uttar Pradesh Power Corp Ltd (UPPCL) - URBAN",
        "txnRefId": "CC015244CBAA328XXXX",
        "customerMobNo": "9651807986",
        "txnNpciId": "CC015244CBAA328XXXX",
        "customerParamsDAO": []
    }
}
```

</TabItem>

<TabItem value="failed">

```json
    {
    "code": "0x0202",
    "status": "FAILURE",
    "message": "The client ref id has already been taken.",
    "data": {
        "clientRefId": [
            "The client ref id has already been taken."
        ],
        "billId": [
            "The bill id has already been taken."
        ],
        "customerInfo": [
            "The customer info field is required."
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