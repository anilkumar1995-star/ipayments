---
id: id-webhooks
title: Wallet Load Webhooks
description: Wallet Load Webhooks
slug: /v1/service/dmt/wallet/webhooks
sidebar_position: 3
---

Webhooks

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Wallet Load Webhooks</a>

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
        "event": "rdmt.walletload.success",
        "code": "0x0200",
        "message": "Transaction is success.",
        "data": {
                "orderRefId": "DMTW1433568XXXXXX",
                "mobile": "965180XXXX",
                "outletId": "O7107RE002XXXXX",
                "merchantCode": "RE0024XXXXX",
                "amount": 100,
                "utr": "12057XXXXX",
                "status": "1"
        }
}
```

</TabItem>

<TabItem value="pending">

```json
 {
        "event": "rdmt.walletload.pending",
        "code": "0x0206",
        "message": "Transaction is pending.",
        "data": {
                "orderRefId": "DMTW14335680XXXXXXX",
                "mobile": "96518XXXXX",
                "outletId": "O7107RE00XXXXXX",
                "merchantCode": "RE002XXXXXX",
                "status": "0",
                "amount": 100,
                "fee": 10,
                "tax": 1.8,
                "margin": "fixed@10",
                "totalCharge": 10
        }
}
```

</TabItem>

<TabItem value="failed">

```json
    {
        "event": "rdmt.walletload.failed",
        "code": "0x0202",
        "message": "Transaction is failed.",
        "data": {
                "orderRefId": "DMTW1433568XXXXXX",
                "mobile": "965180XXXX",
                "outletId": "O7107RE002XXXXX",
                "merchantCode": "RE0024XXXXX",
                "amount": 100,
                "utr": "",
                "status": "2"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>