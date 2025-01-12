---
id: intro-ab
title: Paycc Customer 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/init/kyc
sidebar_position: 14
---

<p>Paycc Customer Kyc. </p>

## Paycc APIs


<details open>
<summary> Customer Generate Url</summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/init/kyc">**Generate Url**</a>| Use this API to generate url

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Paycc Customer Kyc</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/paycc/init/kyc</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-customer"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/init/kyc' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "pan" : "ENGPXXXXX",
                "name" : "XXXXXX",
                "email" : "kuxxxxx@xxxxx.com",
                "mobile" : "63937XXXXX",
                "merchantCode"  :  "MID693XXXXXX"
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
    "message": "Request Init",
    "status": "SUCCESS",
    "data": {
        "url": "https://app.digio.in/#/gateway/XXXXXX",
        "kid": "KID240826212813188LXXXXXXXX"
    }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Some error"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
