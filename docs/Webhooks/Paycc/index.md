---
id: id-paycc-webhooks
title: Paycc Webhooks
description: Paycc Webhooks
slug: /v1/service/paycc/webhooks
sidebar_position: 1
---

Paycc Webhooks

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
        "event": "paycc.request.success",
        "code": "0x0200",
        "message": "Transaction success",
        "data": {
                "clientRefId": "CCP2804xxxx",
                "paymentId": "pay_REfAaO98ghxxx",
                "merchantCode": "MJVER4311xxxx",
                "customerId": "MJVER498360xxxx",
                "orderId": "order_REfAMeJYkxxxx",
                "cardId": "CRD6286xxx3731",
                "amount": 26800,
                "fullAmount": 26800,
                "utr": "5250098xxxx",
                "method": "",
                "payMode": "card",
                "params": "card_REfAaO9xxxxx",
                "failedMessage": "",
                "network": "Visa",
                "last4": "xxxx",
                "cardType": "credit",
                "subType": "consumer"
        }
}
  
```

</TabItem>


<TabItem value="failed">

```json
{
        "event": "paycc.request.failed",
        "code": "0x0202",
        "message": "Transaction failed",
        "data": {
                "clientRefId": "CCP7879xxxx9",
                "paymentId": "pay_REbjmFiy9xxxxz",
                "merchantCode": "MYRSC64xxxx380",
                "customerId": "MYRSC97xxxx9956",
                "orderId": "order_REbhzxxxxVr56",
                "cardId": "CRD362xxxx035",
                "amount": 1000,
                "fullAmount": 1000,
                "utr": "",
                "method": "",
                "payMode": "card",
                "params": "card_REbjmFiyxxxxmz",
                "failedMessage": "Your payment didn't go through as it was declined by the bank. Try another payment method or contact your bank.",
                "network": "Visa",
                "last4": "xxxx",
                "cardType": "credit",
                "subType": "business"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>