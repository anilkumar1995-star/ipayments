---
id: intro-ab
title: Paycc Add Bank 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/add/bank
sidebar_position: 20
---

<p>Paycc Add Bank . </p>

## Paycc Customer kyc APIs


<details open>
<summary> Paycc Add Bank  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/add/bank">**Paycc Add Bank**</a>| Use this API to Paycc Add Bank 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Add Bank</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/add/bank</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-add-bank"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/add/bank' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "customerId": "CUST28XXXXX",
                "accountNo": "084836XXXXX",
                "ifsc": "KKBK00XXXXX",
                "bankName": "XXXX",
                "accountHolderName": "AnXXXXXr",
                "merchantCode": "MID6XXX",
                "apiType" :"b2b"
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
    "message": "Bank Added Successfully.",
    "status": "SUCCESS",
    "data": {
        "bankId": "bnk5728XXXXXX",
        "accHolderName": "ANILXXXX",
        "bankIsValid": true
    }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
    "code": "0x0202",
    "status": "FAILURE",
    "message": "This bank account already exists.",
    "data": {
        "bankId": "BNK11111XXXXXX"
    }
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
