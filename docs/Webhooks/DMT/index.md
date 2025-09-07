---
id: id-dmt-webhooks
title: DMT Webhooks
description: DMT Webhooks
slug: /v1/service/dmt/webhooks
sidebar_position: 1
---

DMT Webhooks

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
        "event": "dmt.transfer.success",
        "code": "0x0200",
        "message": "Transaction Successful",
        "data": {
                "clientRefId": "SASIMITRA6XXXXXX",
                "orderRefId": "RNT6023848XXXXXXX",
                "remitterMobile": "9313651609",
                "merchantCode": "XMERB911CXXXX",
                "beneficiaryId": "BENE999XXXXX",
                "bankAccount": "057402000XXXX",
                "bankIfsc": "BARB0BXXXX",
                "amount": 489,
                "status": "processed",
                "bankReference": "524029XXXX",
                "createdAt": "2025-08-27 20:37:27"
        }
}
  
```

</TabItem>


<TabItem value="failed">

```json
{
        "event": "dmt.transfer.failed",
        "code": "0x0202",
        "message": "Transaction Failed",
        "data": {
                "clientRefId": "SASIMITRA1568XXXXX",
                "orderRefId": "RNT10523401619963XXXXX",
                "remitterMobile": "98985XXXX",
                "merchantCode": "XMERB911XXXX",
                "beneficiaryId": "BENE2575XXXX",
                "bankAccount": "018401000XXXXX",
                "bankIfsc": "BARB0DXXXXX",
                "amount": 49376,
                "status": "failed",
                "failedMessage": " failed.",
                "createdAt": "2025-08-06 12:57:30"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>