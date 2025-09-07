---
id: id-merchant-onboardings
title: Merchant Onboarding
description: Merchant Onboarding and Kyc
slug: /v1/service/aeps/kyc
sidebar_position: 1
---

Details Merchant

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Merchant Onboarding And Kyc</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">POST</Highlight> : <strong>/v1/service/aeps/kyc/</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/merchant-on-board-json/OnboardMerchantCodeKyc"

<BodyParam data={data}/>
### Request

```c title="Example Request"
    curl --location --request POST '/v1/service/aeps/kyc' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '
        {
            "mobile": "XXXXX07986",
            "name": "Anil Kumar",
            "email": "kumaxxxx@gmail.com",
            "latitude" : "28.383838",
            "longitude" : "80.383838",
        }
'
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
            "url": "https://app.digio.in/#/gateway/login/KID250811150424419UUXXXXXXXXXXX/REF1096302617401281467A9/6393784138?token_id=GWTBWS&sdkver=10.0&logo=https://console.ipayments.in/public/img/kyc_logo.png&redirect_url=https://api.ibanks.in/merchant/onboarding?enc=Lalo4BDjz8L41YASxGW0PBEAVb1EY4fWng%2BYfNuyvqhb7as7UFp4o5PQFn9A7%2FZFqA%3D%3D&method=otp&theme={\"PRIMARY_COLOR\":\"#2979BF\",\"SECONDARY_COLOR\":\"#FFFFFF\"}",
            "kid": "KID250811150424419UUXXXXXXXXXXX"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "The name feiled is required."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>