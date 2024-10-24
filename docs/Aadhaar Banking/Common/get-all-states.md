---
id: id-get-all-states
title: Get All States
description: Get All States
slug: /v1/common/state
sidebar_position: 1
---

Get All States:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Common</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/common/state/0</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/common/state/0' \
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
        "message": "Record fetched successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "stateId": 1,
                "stateName": "Andaman & Nicobar Islands"
            },
            {
                "stateId": 2,
                "stateName": "Andhra Pradesh"
            },
            {
                "stateId": 3,
                "stateName": "Arunachal Pradesh"
            },
            {
                "stateId": 4,
                "stateName": "Assam"
            },
            {
                "stateId": 5,
                "stateName": "Bihar"
            },
            {
                "stateId": 6,
                "stateName": "Chandigarh"
            },
            {
                "stateId": 32,
                "stateName": "Telangana"
            },
            {
                "stateId": 33,
                "stateName": "Tripura"
            },
            {
                "stateId": 34,
                "stateName": "Uttar Pradesh"
            },
            {
                "stateId": 35,
                "stateName": "Uttarakhand"
            },
            {
                "stateId": 36,
                "stateName": "West Bengal"
            }
        ]
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