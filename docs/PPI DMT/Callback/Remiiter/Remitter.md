---
id: id-webhooks
title: Remitter Webhooks
description: Remitter Webhooks
slug: /v1/service/dmt/remitter/webhooks
sidebar_position: 1
---

Webhooks

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Remitter Webhooks</a>

:::

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import Webhookheader from "@site/src/common/WebhookHeaderCode"

<HeaderMarkdown data={Webhookheader}/>

### Response Samples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="found"
    values={[
        {label: 'SUCCESS', value: 'found'},
        {label: 'PENDING', value: 'pending'},
        {label: 'FAILED', value: 'failed'},
    ]}>

<TabItem value="found">

```json
   {
        "event": "rdmt.remitter.success",
        "code": "0x0200",
        "message": "Transaction is success.",
        "data": {
                "orderRefId": "ORD8091XXXXX",
                "mobile": "930431XXXX",
                "outletId": "O47XXX",
                "merchantCode": "471XXX",
                "isActive": "1",
                "name": "Aan",
                "balance": "100",
                "pwLimit": "49700"
        }
}
```

</TabItem>

<TabItem value="pending">

```json
  {
        "event": "rdmt.ekyc.pending",
        "code": "0x0206",
        "message": "Remitter with mobile -  wants to do KYC.",
        "data": {
                "orderRefId": "ORD8091XXXXX",
                "mobile": "930431XXXX",
                "outletId": "O471XXXX",
                "merchantCode": "471XXXX",
                "status": "0",
                "fee": 11,
                "tax": 1.98,
                "margin": "fixed@11",
                "totalCharge": 11
        }
}
```

</TabItem>

<TabItem value="failed">

```json
   {
        "event": "rdmt.ekyc.failed",
        "code": "0x0202",
        "message": "Remitter ekyc failed .",
        "data": {
                "orderRefId": "ORD8091XXXXX",
                "mobile": "930431XXXX",
                "outletId": "O471XXXX",
                "merchantCode": "471XXXX",
                "status": "2",
                "firstName": "",
                "lastName": ""
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>