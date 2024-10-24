---
id: id-mobile-plans
title: Get Mobile Plans
description: Get Mobile Plans
slug: /v1/service/recharge/mobile/plan
sidebar_position: 3
---

Get Mobile Plans

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/mobile/plan</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/GetPlansCode"

<BodyParam data={data}/>


### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/recharge/mobile/plan' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "circleId": "6",
            "rechargeTypeId": "7",
            "operatorId": "1"
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
        "message": "Plan fetched successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "10",
                "validity": "N.A.",
                "shortDesc": "Recharge of Rs. 10 by Airtel",
                "longDesc": "Talktime: Rs.7.47",
                "rechargeType": "Top up",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "20",
                "validity": "N.A.",
                "shortDesc": "Recharge of Rs. 20 by Airtel",
                "longDesc": "Talktime: Rs.14.95",
                "rechargeType": "Top up",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "155",
                "validity": "24 days",
                "shortDesc": "Recharge of Rs. 155 by Airtel",
                "longDesc": "Calls : Unlimited local, STD & Roaming -- Data : 1GB -- SMS : 300 -- Free Hellotunes : Set any song as Hellotune for Free -- Wynk Music Free : Music, Hellotunes, LIVE Concerts & Podcasts",
                "rechargeType": "Other",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "179",
                "validity": "28 days",
                "shortDesc": "Recharge of Rs. 179 by Airtel",
                "longDesc": "Calls : Unlimited local, STD & Roaming -- Data : 2GB -- SMS : 300 --Free Hellotunes : Set any song as Hellotune for Free -- Wynk Music Free : Music, Hellotunes, LIVE Concerts & Podcasts",
                "rechargeType": "Other",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "199",
                "validity": "30 days",
                "shortDesc": "Recharge of Rs. 199 by Airtel",
                "longDesc": "Calls : Unlimited local STD & Roaming -- Data : 3GB -- SMS : 300 --Free Hellotunes : Set any song as Hellotune for Free -- Wynk Music Free : Music, Hellotunes, LIVE Concerts & Podcasts",
                "rechargeType": "Other",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "209",
                "validity": "21 days",
                "shortDesc": "Recharge of Rs. 209 by Airtel",
                "longDesc": "Calls : Unlimited Local, STD & Roaming -- Data : 1GB/day -- SMS : 100 SMS/day --Free Hellotunes : Set any song as Hellotune for Free -- Wynk Music Free : Music, Hellotunes, LIVE Concerts & Podcasts",
                "rechargeType": "Other",
                "updatedAt": "06-12-2023 13:51:57"
            },
            {
                "operatorId": "Airtel",
                "circleId": "Gujarat",
                "amount": "265",
                "validity": "28 days",
                "shortDesc": "Recharge of Rs. 265 by Airtel",
                "longDesc": "Calls : Unlimited local STD & Roaming -- Data : 1GB/Day -- SMS : 100/Day -- Unlimited 5G Data : Unlimited 5G Data is over and above your plan limit and can be used in 5G Network areas only --Free Hellotunes : Set any song as Hellotune for Free -- Wynk Music Free : Music, Hellotunes, LIVE Concerts & Podcasts",
                "rechargeType": "Other",
                "updatedAt": "06-12-2023 13:51:57"
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
        "message": "no results found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
