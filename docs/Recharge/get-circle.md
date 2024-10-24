---
id: id-get-rechare-circle
title: Get Circle
description: Get Circle
slug: /v1/service/recharge/circles
sidebar_position: 1
---

Get Circle:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/circles</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/recharge/circles' \
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
        "message": "Circle fetched successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "circleId": 1,
                "circleName": "Andhra Pradesh Telangana"
            },
            {
                "circleId": 5,
                "circleName": "Delhi NCR"
            },
            {
                "circleId": 6,
                "circleName": "Gujarat"
            },
            {
                "circleId": 7,
                "circleName": "Haryana"
            },
            {
                "circleId": 12,
                "circleName": "Kolkata"
            },
            {
                "circleId": 13,
                "circleName": "Madhya Pradesh Chhattisgarh"
            },
            {
                "circleId": 14,
                "circleName": "Maharashtra Goa"
            },
            {
                "circleId": 15,
                "circleName": "Mumbai"
            },
            {
                "circleId": 16,
                "circleName": "North East"
            },
            {
                "circleId": 21,
                "circleName": "UP East"
            },
            {
                "circleId": 22,
                "circleName": "UP West"
            },
            {
                "circleId": 23,
                "circleName": "West Bengal"
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