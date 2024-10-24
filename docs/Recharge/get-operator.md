---
id: id-get-operator
title: Get Operator
description: Get Operator
slug: /v1/service/recharge/operators
sidebar_position: 2
---

Get Operator:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/operators?type=&#123;type&#125;</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

<!-- ## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/GetOperatorCode"

<BodyParam data={data}/> -->


### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/recharge/operators' \
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
        "message": "Operator fetched successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "operatorId": 1,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "AIRTEL"
            },
            {
                "operatorId": 3,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "BSNL TOPUP"
            },
            {
                "operatorId": 4,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "BSNL VALIDITY"
            },
            {
                "operatorId": 5,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "VI"
            },
            {
                "operatorId": 6,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "JIO"
            },
            {
                "operatorId": 8,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "MTNL DELHI TOPUP"
            },
            {
                "operatorId": 9,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "MTNL DELHI VALIDITY"
            },
            {
                "operatorId": 10,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "MTNL MUMBAI TOPUP"
            },
            {
                "operatorId": 11,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "MTNL MUMBAI VALIDITY"
            },
            {
                "operatorId": 13,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "AIRTEL DIGITAL"
            },
            {
                "operatorId": 14,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "DISH TV"
            },
            {
                "operatorId": 16,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "SUN DIRECT TV"
            },
            {
                "operatorId": 17,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "TATA SKY"
            },
            {
                "operatorId": 18,
                "logo": "https://business.ipayments.org.in/public/images/mobile_recharge_logo/default.png",
                "operatorName": "VIDEOCON D2H"
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
