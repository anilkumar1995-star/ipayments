---
id: id-webhooks
title: DMT Transfer Webhooks
description: DMT Transfer Webhooks
slug: /v1/service/dmt/transfer/webhooks
sidebar_position: 4
---

Webhooks

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">DMT Transfer Webhooks</a>

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
        "event": "rdmt.transfer.success",
        "code": "0x0200",
        "message": "Transaction is success.",
        "data": {
                "orderRefId": "DMT14336557XXXXXX",
                "mobile": "965180XXXX",
                "outletId": "O7107RE0XXXXX",
                "merchantCode": "RE002XXXXX",
                "amount": 100,
                "status": "1",
                "txnMode": "IMPS",
                "bankName": "HXXXXD",
                "beneName": "XXXXXXXX",
                "accountNumber": "5020008XXXXX",
                "ifsc": "HDFC00XXXX",
                "utr": "500213XXXXX",
                "remarks": "na"
        }
}
```

</TabItem>

<TabItem value="pending">

```json
 {
        "event": "rdmt.transfer.pending",
        "code": "0x0206",
        "message": "Transaction is pending.",
        "data": {
                "orderRefId": "DMT14336557XXXXXX",
                "mobile": "965180XXXX",
                "outletId": "O7107RE00XXXX",
                "merchantCode": "RE00240XXXX",
                "status": "0",
                "txnMode": "IMPS",
                "bankName": "XXX LIMITED",
                "beneName": "XXX ONE TXXXX",
                "accountNumber": "502000896XXXXX",
                "ifsc": "HDFC000XXXXX",
                "utr": "na",
                "remarks": "na",
                "amount": 100
        }
}
```

</TabItem>

<TabItem value="failed">

```json
   {
        "event": "rdmt.transfer.failed",
        "code": "0x0202",
        "message": "Transaction is failed.",
        "data": {
                "orderRefId": "DMT14336557XXXXXX",
                "mobile": "965180XXXX",
                "outletId": "O7107RE0XXXXX",
                "merchantCode": "RE002XXXXX",
                "amount": 100,
                "status": "2",
                "txnMode": "IMPS",
                "bankName": "HXXXXD",
                "beneName": "XXXXXXXX",
                "accountNumber": "5020008XXXXX",
                "ifsc": "HDFC00XXXX",
                "utr": "",
                "remarks": "na"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>