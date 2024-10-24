---
id: id-pan-docs-status
title: Pan Status
description: Pan Status
slug: /v1/service/pan/status
sidebar_position: 3
---

Pan Status

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Pan Docs</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/pan/status</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

<!-- ## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/pan-docs/PanStatusCode"

<BodyParam data={data}/> -->

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/pan/status/UTI26333252174157066576' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data ''
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
        "message": "000: Record fetched successfully.",
        "status": "SUCCESS",
        "data": {
            "txnId": "",
            "statusCode": "000"
            "orderRefId": "UTI263XXXX2174157066576"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "0: Invalid refid."
    }
```

</TabItem>
</Tabs>

### Response Code

import PanStatusResponse from "@site/src/pages/PanStatusResponse"
import response from "@site/src/common/ResponseCodeJson"

<PanStatusResponse data={response}/>
