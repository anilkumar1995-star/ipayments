---
id: intro-ab
title: Paycc Add Card 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/add/verify/card
---

<p>Paycc Add Card . </p>

## Paycc Customer kyc APIs


<details open>
<summary> Paycc Add Card  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/add/verify/card">**Paycc Add Card**</a>| Use this API to Paycc Add Card 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Add Card</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/add/verify/card</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-add-card"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/add/verify/card' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "customerId": "JSIWI5XXXXXX",
                "clientRefId": "CRD5991XXXX",
                "cardName": "Flipxxxxx",
                "merchantCode": "MID69XXXXXXX",
                "cardNo": "5334670XXXXXX",
                "expireDate": "09/28",
                "apiType": "b2b",
                "amount": "10",
                "bankId" : "bnk5728XXXXX"
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
        "message": "This credit card already exists.",
        "status": "SUCCESS",
        "data": {
                "cardId": "CRD7917xxxxxx",
                "isVerify": "0",
                "verifyUrl": "https://console.ipayments.in/api/v1/service/paycc/pay/order_PiV87ZElz5aVcn/eyJpdiI6IjlQUlpXcEtwbmdUeE1sZmN6cccc",
                "bankHolderName": "",
                "accountNo": "2222222xxxxxxxx",
                "ifsc": "",
                "orderId": "order_PiVxxxxxxxx"
        }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "This credit card maximum 10 added."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
