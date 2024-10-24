---
id: id-get-account-info
title: Get Account Info
description: Get Account Info
slug: /v1/common/account/info
sidebar_position: 4
---

Get Account Info:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Common</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/common/account/info</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
curl --location --request GET '/v1/common/account/info' \
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
        "data": 
            {
                "primaryAccount": {
                    "accountNumber": 556000000001,
                    "tradeBalance": "350.00",
                    "blockedBalance": "0.00"
                },
                "serviceAccount": [
                    {
                        "serviceName": "AEPS",
                        "accountNumber": 200000000001,
                        "tradeBalance": "0.00",
                        "blockedBalance": "0.00"
                    },
                    {
                        "serviceName": "DMT",
                        "accountNumber": 900000000001,
                        "tradeBalance": "0.00",
                        "blockedBalance": "0.00"
                    },
                    {
                        "serviceName": "Smart Payout",
                        "accountNumber": 100000000001,
                        "tradeBalance": "82.56",
                        "blockedBalance": "0.00"
                    },
                    {
                        "serviceName": "Recharge",
                        "accountNumber": 400000000001,
                        "tradeBalance": "380.00",
                        "blockedBalance": "0.00"
                    },
                    {
                        "serviceName": "Pan",
                        "accountNumber": 600000000001,
                        "tradeBalance": "98.00",
                        "blockedBalance": "0.00"
                    }
                ]
            }
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
