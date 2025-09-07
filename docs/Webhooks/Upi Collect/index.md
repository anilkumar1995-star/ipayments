---
id: id-upicollect-webhooks
title: Upi Collect Webhooks
description: Upi Collect Webhooks
slug: /v1/service/upicollect/webhooks
sidebar_position: 1
---

Upi Collect Webhooks

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
        {label: 'SUCCESS', value: 'found'}
    ]}>

<TabItem value="found">

```json
{
        "event": "collect.receive.success",
        "code": "0x0200",
        "message": "Transaction Successful",
        "data": {
                "amount": 300,
                "utr": "974832xxxxx1",
                "referenceId": "cvat3cf3ca154613a8252372xxxxx",
                "creditRefNo": "EBT_9748328xxxx",
                "remitterAccount": "XXXXXX4678",
                "remitterIfsc": "KKBKxx07834",
                "remitterName": "name",
                "remitterVpa": "suhxxx@ybl",
                "transferType": "UPI",
                "remarks": "Payment from PhonePe",
                "date": "2025-09-06 17:13:23",
                "serviceType": "upi",
                "vpaAccId": "cvaec373xxx7f4a95bf59ee63xxxxxxx",
                "vAccountNumber": "1112223xx025xxxxx"
        }
}
```

</TabItem>



</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>