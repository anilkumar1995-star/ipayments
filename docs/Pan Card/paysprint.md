---
id: id-paysprint
title: Paysprint
description: Paysprint
slug: /v1/api/callbacks/pan/paysprint
sidebar_position: 4
---

Paysprint:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Pan Docs</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/api/callbacks/pan/paysprint</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/pan-docs/PaysprintCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/api/callbacks/pan/paysprint' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "event": "Pan Transaction Refund",
                "param": {
                "refund_reference"    :  "R000XXXX82",
                "merchant_txn_status" :  "S",
                "merchant_txn"        : "UTI25724838XXXX1624D573",
                "utiitsl_id"          : "UTIITSL",
                "refund_reason"       : "Refund payment",
                "utiitsl_reference"   : "VA001XXXX621"
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
        "message": "Record fetched successfully.",
        "status": "SUCCESS",
        "data": ''
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "No record found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
