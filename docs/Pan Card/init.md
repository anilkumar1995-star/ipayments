---
id: id-pan-docs-init
title: Init
description: Init
slug: /v1/service/pan/init
sidebar_position: 2
---

Init

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Pan Docs</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/pan/init</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/pan-docs/InitUtiCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/pan/init' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "mobile" : "639XXXX38",
            "psaId" : "PS00XXX",
            "redirectUrl" : "https://business.ipayments.org.in/api/callbacks/pan/paysprint"
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
        "message": "Encdata Successfully Generated",
        "status": "SUCCESS",
        "data": {
            "psaId": "PSA_639XXXX38",
            "encdata": "9boguC7vAwsuPLbu4IGNro9cwgVVWT/JaKoP7B+R2JTE3ABO4f0zJD9k72MmCfy7ehUq95JtrBtNrBcLHqw0WhD0+JeAns/ozIPtedian5fadn40GmeBzG0JZlnB8V97",
            "url": "https://paysprint.in/service-api/pan-redirect"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "3: Pan service is disabled."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
