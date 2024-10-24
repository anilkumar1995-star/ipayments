---
id: id-matm-matmInitiate
title: Initiate MATM
description: Initiate MATM
slug: /v1/service/matm/init
sidebar_position: 1
---

Initiate MATM

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">MATM</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/matm/init</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/matm/MATMInitiateCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/matm/init' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "macAddress": "00:1b:63:84:45:e6",
            "clientRefId": "CRF494****4949",
            "longitude": "80.946167",
            "latitude": "26.846695",
            "txnType": "sdkenquiry",
            "routeType" : "sdk",
            "amount": "0",
            "merchantCode": "AKSKSKS"
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
        "message": "Record inserted.",
        "status": "SUCCESS",
        "data": {
            "amount": "0",
            "merchantcode": "AKSKSKS",
            "routeType": "sdk",
            "orderRefId": "MBE3****60141286****6F0",
            "superMerchantLoginId": "iydapaymentd",
            "superMerchantPassword": "1234d",
            "superMerchantId": "1176"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Error, MATM not initiate",
    }
```

</TabItem>
</Tabs>


### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
