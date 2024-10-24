---
id: id-recharge-type
title: Recharge Type
description: Recharge Type
slug: /v1/service/recharge/recharge-type
sidebar_position: 5
---

Recharge Type

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/recharge_type</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

<!-- ## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/RechargeInitiateCode"

<BodyParam data={data}/> -->

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/recharge/recharge_type' \
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
        "message": "Recharge Type fetched successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "rechargeTypeId": 1,
                "rechargeType": "Top-up"
            },
            {
                "rechargeTypeId": 3,
                "rechargeType": "Full Talktime"
            },
            {
                "rechargeTypeId": 4,
                "rechargeType": "SMS"
            },
            {
                "rechargeTypeId": 5,
                "rechargeType": "2G Data"
            },
            {
                "rechargeTypeId": 6,
                "rechargeType": "3G Data"
            },
            {
                "rechargeTypeId": 8,
                "rechargeType": "4G Data"
            },
            {
                "rechargeTypeId": 9,
                "rechargeType": "Local"
            },
            {
                "rechargeTypeId": 10,
                "rechargeType": "STD"
            },
            {
                "rechargeTypeId": 11,
                "rechargeType": "ISD"
            },
            {
                "rechargeTypeId": 13,
                "rechargeType": "Roaming"
            },
            {
                "rechargeTypeId": 14,
                "rechargeType": "Other"
            },
            {
                "rechargeTypeId": 16,
                "rechargeType": "Validity"
            },
            {
                "rechargeTypeId": 17,
                "rechargeType": "Plan"
            },
            {
                "rechargeTypeId": 18,
                "rechargeType": "FRC"
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
    "message": "Recharge type not found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
