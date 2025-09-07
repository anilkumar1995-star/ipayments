---
id: id-pay-webhooks
title: Smart Payout Webhooks
description: Smart Payout Webhooks
slug: /v1/service/payouts/webhooks
sidebar_position: 1
---

Smart Payout Webhooks

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
        {label: 'FAILED', value: 'failed'},
    ]}>

<TabItem value="found">

```json
  {
        "event": "payout.transfer.success",
        "code": "0x0200",
        "message": "Transaction Successful",
        "data": {
                "orderRefId": "REF86344279146267XXXXX",
                "clientRefId": "Q2P6928062741",
                "contactId": "CONT_173736586938654CCCCC",
                "firstName": "Name",
                "lastName": "",
                "email": "test@example.com",
                "phone": "99254XXXX1",
                "amount": 50000,
                "status": "processed",
                "utr": "5196261xxxxx",
                "accountNumber": "072805xxxxxxx",
                "accountIFSC": "ICIC0xxxx01"
        }
}
```

</TabItem>


<TabItem value="failed">

```json
   {
        "event": "payout.transfer.failed",
        "code": "0x0202",
        "message": "Transaction Failed",
        "data": {
                "orderRefId": "REF1526983655679XXXXXX",
                "clientRefId": "AP5673XXXXX",
                "contactId": "CONT_1526983508511XXXXX",
                "firstName": "Name",
                "lastName": "",
                "email": "test@example.com",
                "phone": "9910xxxxx5",
                "amount": 5100,
                "status": "failed",
                "reason": "We are currently experiencing technical issues. Please try again in 20 minutes. Thank you for your patience! RAZ:",
                "accountNumber": "203224xxxxx",
                "accountIFSC": "AIRP00xxx1"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>