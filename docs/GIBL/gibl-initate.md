---
id: id-gibl-giblInitiate
title: Initiate GIBL
description: Initiate GIBL
slug: /v1/service/gibl/init
sidebar_position: 1
---

Initiate GIBL

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">GIBL</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/gibl/init</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/gibl/GIBLInitiateCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/gibl/init' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantLoginId": "MID69*******",
            "authKey": "AUTH3484384123456"
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
        "message": "Redirect",
        "status": "SUCCESS",
        "data": {
            "url": "https://www.gibl.in/wallet/validate2/",
            "ret_data": "eyJ1cmMiOiJNSUQ2OTM3NDM5Njk0IiwidW1jIjoiNDU3ODE5IiwiYWsiOm51bGwsImZuYW1lIjoiQW5pbCIsImxuYW1lIjpudWxsLCJlbWFpbCI6Imt1bWFyZ2xjaUBnbWFpbC5jb20iLCJwaG5vIjo5NjUxODA3OTg2LCJwaW4iOjIyNDIwNH0="
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Error, GIBL not initiate",
    }
```

</TabItem>
</Tabs>

### HTML

```c title="Example HTML"
    <form id="retForm" action="{{url}}" method="POST">
        <input type="hidden" name="ret_data" value="{{ret_data}}">
        <button type="submit">Proceed to GIBL</button>
    </form>
```

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
