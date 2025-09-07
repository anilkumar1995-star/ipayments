---
id: intro-ab
title: Paycc Banks List 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/banks
sidebar_position: 16
---

<p>Paycc Bank . </p>

## Paycc Customer kyc APIs


<details open>
<summary> Paycc Banks  </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/banks">**CPaycc Bank**</a>| Use this API to Paycc Bank 

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Bank</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">GET</Highlight> : <strong>/v1/service/paycc/banks</strong>

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
    curl --location '/v1/service/paycc/banks' \
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
    "message": "Bank list found",
    "status": "SUCCESS",
    "data": [
        {
            "bankId": "BNK111XXXXXX",
            "accountNo": "24270100XXXXXX",
            "ifsc": "BARB0HXXXXX",
            "accountHolderName": "ANILXXXXXX",
            "isActive": "1"
        },
        {
            "bankId": "BNK5728XXXXX",
            "accountNo": "2427010XXXXX",
            "ifsc": "BARB0XXXXX",
            "accountHolderName": "ANILXXXXX",
            "isActive": "1"
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
        "message": "No banks found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
