---
id: intro-ab
title: Paycc Delete Card 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/delete/creditcard
---

<p>Paycc Delete Card . </p>

## Paycc APIs


<details open>
<summary> Paycc Delete Card  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/delete/creditcard">**Paycc Delete Card**</a>| Use this API to Paycc Delete Card 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Delete Card</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/delete/creditcard</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-delete-card"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/delete/creditcard' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "customerId": "JSIWI5XXXXXX",
                "clientRefId": "CRD5991XXXX",
                "cardId" : "CRD5728XXXXX"
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
    "message": "Card delete successful",
    "status": "SUCCESS"
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Some error."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
