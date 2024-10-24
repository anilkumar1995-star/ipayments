---
id: id-recharge-rechargeInitiate
title: Initiate Recharge
description: Initiate Recharge
slug: /v1/service/recharge/initiate
sidebar_position: 4
---

Initiate Recharge

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/recharge/initiate</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/RechargeInitiateCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/recharge/initiate' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "circleId" : "20",
            "operatorId" : "5",
            "phone" : "9651XXXX86",
            "amount" : "10",
            "clientRefId" : "RECH_798099XXXX093009"
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
        "message": "Recharge successfully.",
        "status": "SUCCESS",
        "data": {
            "amount": "10",
            "txnId": "W2312301XXXX1BRBN",
            "venderId": "UEH2312301XXXX80037",
            "customerNumber": null,
            "remarks": "Transaction Successful",
            "merchantCode": null
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Transaction Failed, Transaction failed., Internal Error",
        "data": {
            "clientRefId": null,
            "amount": "10",
            "txnId": "W23123017XXXXUTZZ",
            "venderId": "BR00XXXX0PKO",
            "customerNumber": null,
            "remarks": "Transaction Failed, Transaction failed., Internal Error",
            "merchantCode": null
        }
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
