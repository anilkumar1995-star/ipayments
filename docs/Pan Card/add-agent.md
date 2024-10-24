---
id: id-pan-docs-addAgent
title: Add Agent
description: Add Agent
slug: /v1/service/pan/agent
sidebar_position: 1
---

Add Agent

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Pan Docs</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/pan/agent</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/pan-docs/AddAgentCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/pan/agent' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data-raw '{
            "mobile" : "987XXXX221",
            "firstName" : "Anil",
            "middleName" : "",
            "lastName" : "Kumar",
            "dob" : "1985-12-02",
            "address" : "address",
            "email" : "anil@example.com",
            "pinCode" : "222XXX",
            "gender" :"Male",
            "stateId" : "14",
            "districtId" : "123",
            "pan" : "ASDXXXX1A",
            "aadhaar" : "3333XXXX1111"  
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
        "message": "Agent onboarded successfully.",
        "status": "SUCCESS",
        "data": {
            "psaId": "PSA_987XXXX221",
            "email": "anXX@example.com",
            "mobile": "987XXXX221"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "The Agent already registered with UTI. Your psaId: XTTL012345"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
