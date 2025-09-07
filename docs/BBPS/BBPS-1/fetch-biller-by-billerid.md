---
id: id-fetch-by-billerid
title: Fetch Biller by BillerId
description: Fetch Biller by BillerId
slug: /v1/service/bbps/fetch/biller/fetch-by-billerid
sidebar_position: 3
---

Fetch Biller by BillerId

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/bbps/fetch/biller/fetchByBillerId</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchByBillerIdCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/bbps/fetch/biller/fetchByBillerId' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "billerId" : "NBPDXXXXXBHI01"
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
            "generalResp": {
                "statusCode": "200",
                "status": "success",
                "message": "Customer param retrieved successfully",
                "remarks": ""
            },
            "customParamResp": [
                {
                    "customParamName": "Loan Account Number",
                    "dataType": "ALPHANUMERIC",
                    "optional": false,
                    "minLength": 8,
                    "maxLength": 35,
                    "regex": "^[A-Za-z0-9\\@\\s\\-]{8,35}$",
                    "visibility": true,
                    "values": null
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
        "message": "No Record found",
        "data": "Please use valid billerId"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>