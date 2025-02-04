---
id: id-bill-payment
title: Bill Payment
description: Bill Payment
slug: /v1/service/bbps/bill/payment
sidebar_position: 6
---

Bill Payment

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/bbps/bill/payment</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/BillPaymentCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/bbps/bill/payment' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "tenantId": "FE41",
            "clientRefId" : "CRF378XXXXX7854",
            "amount" : "1",
            "billId" : "a9fd8d05-XXXX-478a-XXXX-0b05ad0cc397",
            "customerMobileNo" : "639XXXXX38",
            "billerId": "UPPCL0XXXXXP01",
            "customerParams": {
                "tags": [
                    {
                        "name": "Consumer Number",
                        "value": "73XXXXX1045"
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
        "message": "Bill Payment Successfully",
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
