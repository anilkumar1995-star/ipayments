---
id: id-bill-payment-status
title: Bill Payment Status
description: Bill Payment Status
slug: /v1/service/bbps/bill/status
sidebar_position: 7
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
        "message": "Bill Payment Status Checked Successfully",
        "status": "SUCCESS",
        "data": ""
    }    
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "json: cannot unmarshal string into Go struct field WalletPaymentReq.txnAmount of type int64",
        "data": {
            "genericResponse": {
                "message": "Invalid Request",
                "remarks": "json: cannot unmarshal string into Go struct field WalletPaymentReq.txnAmount of type int64",
                "status": "Failed",
                "statusCode": "400"
            }
        }
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
