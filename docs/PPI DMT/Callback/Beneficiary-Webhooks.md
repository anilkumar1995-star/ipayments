---
id: id-webhooks
title: Beneficiary Webhooks
description: Beneficiary Webhooks
slug: /v1/service/dmt/beneficiary/webhooks
sidebar_position: 2
---

Webhooks

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Beneficiary Webhooks</a>

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
        "event": "rdmt.beneficiary.success",
        "code": "0x0200",
        "message": "Transaction is success.",
        "data": {
                "orderRefId": "BRD693XXXXXX",
                "mobile": "9456765XXXX",
                "outletId": "O7107RE00XXXXX",
                "merchantCode": "RE002XXXXX",
                "name": "SUNIXXXX",
                "bankName": "na",
                "ifsc": "PUNB0XXXXX",
                "accountNumber": "723200010XXXXXX",
                "status": "1"
        }
}
```

</TabItem>

<TabItem value="pending">

```json
  {
        "event": "rdmt.beneficiary.pending",
        "code": "0x0206",
        "message": "Transaction is pending.",
        "data": {
                "orderRefId": "BRD163XXXXX",
                "mobile": "96518XXXXX",
                "outletId": "O471XXX",
                "merchantCode": "471XXX",
                "name": "",
                "bankName": "",
                "ifsc": "BARB0XXXXXX",
                "accountNumber": "24270100XXXXX",
                "status": "0",
                "fee": 4,
                "tax": 0.72,
                "margin": "fixed@4",
                "totalCharge": 4
        }
}
```

</TabItem>

<TabItem value="failed">

```json
    {
        "event": "rdmt.beneficiary.failed",
        "code": "0x0202",
        "message": "Transaction is failed.",
        "data": {
                "orderRefId": "BRD693XXXXXX",
                "mobile": "9456765XXXX",
                "outletId": "O7107RE00XXXXX",
                "merchantCode": "RE002XXXXX",
                "name": "SUNIXXXX",
                "bankName": "na",
                "ifsc": "PUNB0XXXXX",
                "accountNumber": "723200010XXXXXX",
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