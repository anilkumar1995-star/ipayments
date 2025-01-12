---
id: intro-ab
title: Paycc Customer Check 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/customer
sidebar_position: 16
---

<p>Paycc Customer Check. </p>

## Paycc APIs


<details open>
<summary> Customer Check </summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/customer">**Customer Check**</a>| Use this API to Customer Check

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Customer Check</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">GET</Highlight> : <strong>/v1/service/paycc/customer</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-customer-check"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/customer' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                    "merchantCode": "MID6937XXXXXX",
                    "mobile": "96010XXXXX"
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
    "message": "Customer Record found",
    "status": "SUCCESS",
    "data": {
        "firstName": "XXX",
        "middleName": "XXX",
        "lastName": null,
        "mobile": 639300000,
        "email": "xxxxx@xxxx.com",
        "address": "XXXXX",
        "dob": "25/08/1974",
        "gender": "Male",
        "pan": "ENGPKXXXXX",
        "custId": "JSIWI59XXXXX",
        "kycName": "SaXXXXXXar",
        "faceMatchPercent": "99",
        "imageBase64": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCADIAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1h",
        "isActive": "1",
        "digioKyc": "1",
        "digioKycId": "KID2408261825CXXXXXXXXXXXXXXXXXXX",
        "kycUrl": null
    }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "No customer found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
