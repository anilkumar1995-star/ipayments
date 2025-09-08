---
id: id-aepswebhooks
title: Webhooks
description: Webhooks
slug: /v1/service/aeps/webhooks
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
        "event": "aeps.transaction.success",
        "code": "0x0200",
        "message": "Transaction is success",
        "data": {
                "orderRefId": "RACW12008031XXXXXXXXXXX",
                "clientRefId": "RACW12008031XXXXXXXXXXX",
                "merchantCode": "TEOJD49XXXXXXX",
                "bankName": "Federal Bank",
                "rrn": "434114387XXXX",
                "transactionStatus": true,
                "transactionStatusMessage": "success",
                "accountNumber": "",
                "ipaymentId": "CWBA60892790612241XXXXXXXX",
                "transactionMode": "",
                "transactionAmount": 20,
                "txnType": "CW",
                "mobile": "880970XXXX",
                "bankAccountBalance": 65.7,
                "aadhaar": "XXXXXXXX4898"
        }
}
```

</TabItem>

<TabItem value="pending">

```json
   {
        "event": "aeps.transaction.pending",
        "code": "0x0206",
        "message": "Transaction is pending",
        "data": {
                "orderRefId": "RACW145259014XXXXXXX",
                "merchantCode": "TEOJD120XXXXX",
                "bankiin": "607198",
                "bankName": "Andhra Pradesh Grameena Vikash Bank",
                "txnType": "CW",
                "mobile": "906354XXXX",
                "aadhaar": "XXXXXXXX1609",
                "amount": "20",
                "status": "pending"
        }
}
```

</TabItem>

<TabItem value="failed">

```json
   {
        "event": "aeps.transaction.failed",
        "code": "0x0202",
        "message": "Transaction is failed",
        "data": {
                "orderRefId": "RACW14525901421XXXXXXX",
                "clientRefId": "RACW14525901421XXXXXXX",
                "merchantCode": "TEOJD1203XXXX",
                "bankName": "Andhra Pradesh Grameena Vikash Bank",
                "rrn": "500417XXXXXX",
                "transactionStatus": "failed",
                "transactionStatusMessage": "failed",
                "accountNumber": "0",
                "ipaymentId": "CWBT637195704012XXXXXXXX",
                "transactionMode": "NA",
                "transactionAmount": 20,
                "txnType": "CW",
                "mobile": "90635XXXXX",
                "bankAccountBalance": 0,
                "aadhaar": "XXXXXXXX1609",
                "status": "failed"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>