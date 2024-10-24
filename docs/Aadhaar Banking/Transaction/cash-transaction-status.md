---
id: id-transaction-status
title: Transaction Status
description: Transaction Status
slug: /v1/service/aeps/transaction-status
sidebar_position: 4
---

Transaction Status

:::tip Postman Collection

<a href="" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/transactionStatus</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/aeps-json/CashTransactionStatusCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/transactionStatus' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantLoginId": "MID6937XXXXX4",
            "clientRefId": "ACW19589430XXXXX7476BBD"
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
        "message": "Transaction Successfully.",
        "status": "SUCCESS",
        "data": {
            "orderRefId": "CWBT5770318281223XXXXX5235I",
            "clientRefId": "ACW19589430XXXXX7476BBD",
            "bankName": "Kotak Mahindra Bank",
            "rrn": "336215XXXXX1",
            "accountNumber": "",
            "ipaymentId": "802XX1",
            "transactionMode": "",
            "payableValue": 50,
            "transactionValue": 50,
            "bankAccountBalance": 0
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Hash doesn't match"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>