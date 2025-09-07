---
id: intro-ab
title: Paycc Order Status Check 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/order/CRD8498498XXXX
---

<p>Paycc Order Status Check . </p>

## Paycc Order Status Check APIs


<details open>
<summary> Paycc Order Status Check  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/order/CRD8498498XXXX">**Paycc Order Status Check**</a>| Use this API to Paycc Order Status Check 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Order Status Check</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/order/CRD84984XXXXXXX</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-order-status"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/order/CRD8498498XXXX' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            }'
```

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
    "code": "0x0200",
    "message": "Record found successful",
    "status": "SUCCESS",
    "data": {
        "clientRefId": "CRD8498498XXXX",
        "paymentId": "pay_Oro6XXXXXXX",
        "merchantCode": "MID318XXXXXX",
        "customerId": "CUST2XXXXXX",
        "orderId": "order_Oro2aXXXXXX",
        "cardId": "CRD5446XXXXXXX",
        "amount": 100,
        "fullAmount": 100,
        "utr": "163016",
        "method": null,
        "payMode": "card",
        "params": "card_Oro6GgCCCCC",
        "failedMessage": null,
        "network": null,
        "last4": null,
        "cardType": null
    }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Invalid order id."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
