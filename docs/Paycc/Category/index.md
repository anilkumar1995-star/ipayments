---
id: intro-ab
title: Paycc Category List 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/category
sidebar_position: 16
---

<p>Paycc Category . </p>

## Paycc APIs


<details open>
<summary> Paycc Category  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/category">**Paycc Category**</a>| Use this API to Paycc Category 

</details>


Paycc Category

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Category</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">GET</Highlight> : <strong>/v1/service/paycc/category</strong>

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
    curl --location '/v1/service/paycc/category' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                    "merchantCode": "MID6937XXXXXX"
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
    "message": "Catogory list found",
    "status": "SUCCESS",
    "data": [
        {
            "catetoryId": 3,
            "name": "Bill Payment",
            "isActive": "1",
            "subCategory": []
        },
        {
            "catetoryId": 2,
            "name": "Business Payment",
            "isActive": "1",
            "subCategory": []
        },
        {
            "catetoryId": 1,
            "name": "Rent",
            "isActive": "1",
            "subCategory": [
                {
                    "catetoryId": 4,
                    "name": "Test",
                    "isActive": "1"
                }
            ]
        }
    ]
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
