---
id: id-get-all-districts
title: Get All Districts
description: Get All Districts
slug: /v1/common/district
sidebar_position: 2
---

Get All Districts:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Common</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/common/district/0</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/common/district/0' \
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
                "districtId": 1,
                "districtName": "Nicobar",
                "stateId": 1
            },
            {
                "districtId": 2,
                "districtName": "North Middle Andaman",
                "stateId": 1
            },
            {
                "districtId": 3,
                "districtName": "South Andaman",
                "stateId": 1
            },
            {
                "districtId": 4,
                "districtName": "Anantapur",
                "stateId": 2
            },
            {
                "districtId": 694,
                "districtName": "Udham Singh Nagar",
                "stateId": 35
            },
            {
                "districtId": 695,
                "districtName": "Uttarkashi",
                "stateId": 35
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
