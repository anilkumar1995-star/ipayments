---
id: id-bbps-webhooks
title: BBPS Webhooks
description: BBPS Webhooks
slug: /v1/service/bbps/webhooks
sidebar_position: 1
---

BBPS Webhooks

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
        "event": "bbps.request.success",
        "code": "0x0200",
        "message": "Transaction success",
        "data": {
                "clientRefId": "APBILL50411473202509xxxxx",
                "agentNpciId": "FE41FE15INTU0000xxxxx",
                "fundRespRemarks": "SUCCESS",
                "fundStatus": "FUND_TRANSFER_SUCCESS",
                "billStatus": "BILL_PAYMENT_SUCCESS",
                "fundTxnAmt": 1060.82,
                "fundTxnDate": "2025-09-05 00:00:00",
                "fundTxnReferenceId": "V34TB3Y8xxxx",
                "fundTxnRemarks": "BBPS-AGENT/V34TB3Y8Wxxxx",
                "fundUTR": "S101xxxx",
                "billerId": "ATBROAD00NAT02",
                "billerName": "Airtel Broadband (Fetch and Pay)",
                "txnRefId": "e4dec951-5ea6-4cd8-9b8d-d037194xxxx",
                "customerMobNo": "98106xxxxx",
                "txnNpciId": "FE41524836Y3auxxxxx"
        }
}
  
```

</TabItem>


<TabItem value="failed">

```json
   {
        "event": "bbps.request.failed",
        "code": "0x0202",
        "message": "Transaction failed",
        "data": {
                "clientRefId": "SSMSBILL958082XXXX",
                "agentNpciId": "FE41FE15INTU000XXXX",
                "fundRespRemarks": "SUCCESS",
                "fundStatus": "FUND_TRANSFER_SUCCESS",
                "billStatus": "BILL_PAYMENT_FAILED",
                "fundTxnAmt": 79393,
                "fundTxnDate": "2025-09-03 00:00:00",
                "fundTxnReferenceId": "CS8EGYCFKDXXXX",
                "fundTxnRemarks": "SUCCESS",
                "fundUTR": "S7386XXXX",
                "billerId": "HDFC00000NATW1",
                "billerName": "HDFC Credit Card",
                "txnRefId": "bb725580-7dbf-4ff9-bbe2-19aebxxxxx",
                "customerMobNo": "96371xxxx",
                "txnNpciId": "FE415246ckEMFcxxxx"
        }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>