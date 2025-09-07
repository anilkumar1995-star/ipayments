---
id: intro-ab
title: Paycc Order 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/order
---

<p>Paycc Order . </p>

## Paycc Order APIs


<details open>
<summary> Paycc Order  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/order">**Paycc Order**</a>| Use this API to Paycc Order 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Order</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/order</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-order"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/order' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "customerId": "JSIWI5XXXXXX",
                "clientRefId": "CRD5991XXXX",
                "cardName": "Flipxxxxx",
                "merchantCode": "MID69XXXXXXX",
                "redirectUrl": "https://test.requestcatcher.com/test",
                "apiType": "b2b",
                "amount": "10",
                "bankId" : "",
                "categoryId" : "1",
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
        "message": "Order created successful.",
        "status": "SUCCESS",
        "data": {
                "bankHolderName": "",
                "accountNo": "",
                "ifsc": "",
                "orderId": "order_PiYroDYlo4NgGZ",
                "url": "https://console.ipayments.in/api/v1/service/paycc/pay/order_PiYroDYlo4NgGZ/eyJpdiI6Ikhkak1Va2dWd0NLUGFKNm1JMXRSWmc9PSIsInZhbHVlIjoiNFduWXZJMWN6NTNuM1ZLZTNtN3VuVXZoK0pWZzJYU1Zhd3VlSTZvU3liamFVY3"
        }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Your merchant code invalid or kyc not found."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
