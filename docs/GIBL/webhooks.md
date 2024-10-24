---
id: id-webhooks
title: Webhooks
description: Webhooks
slug: /v1/service/gibl/webhooks
sidebar_position: 2
---

Webhooks

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Webhooks</a>

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
        "event": "gibl.request.success",
        "code": "0x0200",
        "message": "Transaction Success",
        "data": {
            "orderRefId": "REF10000000221",
            "authKey": "MID6937439XXXXXXX",
            "merchantLoginId": "MID693743****",
            "ptype": "TWT",
            "pamt": "3"
        }
    }
```

</TabItem>

<TabItem value="pending">

```json
    {
        "event": "gibl.request.pending",
        "code": "0x0206",
        "message": "Transaction Pending",
        "data": {
            "orderRefId": "REF10000000221",
            "authKey": "MID6937439XXXXXXX",
            "merchantLoginId": "MID693743****",
            "ptype": "TWT",
            "pamt": "3"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "event": "gibl.request.failed",
        "code": "0x0201",
        "message": "Transaction Failed",
        "data": {
            "orderRefId": "REF10000000221",
            "authKey": "MID6937439XXXXXXX",
            "merchantLoginId": "MID693743****",
            "ptype": "TWT",
            "pamt": "3"
        }
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>