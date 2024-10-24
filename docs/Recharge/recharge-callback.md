---
id: id-recharge-callback
title: Recharge Callback
description: Recharge Callback
slug: /v1/api/callbacks/recharge/doopay
sidebar_position: 8
---

Recharge Callback

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/api/callbacks/recharge/doopay</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/RechargeCallbackCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/api/callbacks/recharge/doopay' \
        --header 'Content-Type: application/json' \
        --data '{
            "circleId" : "20",
            "rechargeTypeId" : "17",
            "operatorId" : "6",
            "phone" : "9651XXXX86",
            "amount" : "1",
            "clientRefId" : "RECH_7433783XXXX80308"
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
       "message": "Operator fetched successfully.",
       "status": "SUCCESS",
        "data": ""
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Customer Not Found",
        "data": ""
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>