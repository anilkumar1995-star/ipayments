---
id: id-get-rechare-status
title: Check Status
description: Check Status
slug: /v1/service/recharge/status
sidebar_position: 6
---

Recharge Check Status:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/status/&#123;clientRefId&#125;</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
  curl --location --request GET '/v1/service/recharge/status/RECH_7980999996093009' \
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
        "data": {
            "clientRefId": "RECH_7XXXX999093098",
            "amount": "10.00",
            "txnId": "W231230XXXX40XJJI",
            "venderId": "BR0XXXXATDXH",
            "customerNumber": "Reliance Jio",
            "remarks": "Request Completed",
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
      "message": "No record found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
