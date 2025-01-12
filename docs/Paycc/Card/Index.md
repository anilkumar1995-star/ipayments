---
id: intro-ab
title: Paycc Cards List 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/creditcards
sidebar_position: 16
---

<p>Paycc Cards . </p>

## Paycc APIs


<details open>
<summary> Paycc Cards  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/creditcards">**Paycc Card**</a>| Use this API to Paycc Card 

</details>


Paycc Card

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Card</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">GET</Highlight> : <strong>/v1/service/paycc/creditcards</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-banks"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/creditcards' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "merchantCode"  :  "MID6937XXXXXX",
                "customerId" : "JSIWI59XXXXX",
                "cardId" : "CRD34988XXXX"
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
    "message": "Card list found",
    "status": "SUCCESS",
    "data": [
        {
            "customerId": "JSIWI59XXXXXX",
            "cardId": "CRD349XXXXX",
            "accountNo": "53346700XXXX",
            "expireDate": "09/28",
            "cardName": "FlipXXXXX",
            "isActive": "1",
            "isVerify": "0",
            "last4": null,
            "network": null,
            "type": null,
            "issuer": null,
            "subType": null
        }
    ]
}
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "No card found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
