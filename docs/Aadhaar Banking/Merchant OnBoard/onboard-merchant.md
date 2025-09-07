---
id: id-onboard-merchantw
title: Onboard Merchant
description: Onboard Merchant
slug: /v1/service/aeps/merchant-onboard
sidebar_position: 1
---

Onboard Merchant

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/merchantOnBoard</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/merchant-on-board-json/OnboardMerchantCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/merchantOnBoard' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data-raw '{
            "aadhaarNo" : "55000XXXXX42",
            "mobile" : "96XXXXX986",
            "firstName" : "Anil",
            "email" : "kumaXXXXXi@gmail.com",
            "address" : "Faizabad",
            "district" : "633",
            "state" : "34",
            "city" : "Faizabad",
            "pinCode" : "2XXX04",
            "pan" : "ENGPXXXXXA",
            "latitude" : "26.600000",
            "longitude" : "82.133904"
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
        "message": "000: Merchant onboard successfully.",
        "status": "SUCCESS",
        "data": {
            "merchantCode": "MC00XXXXX23",
            "firstName": "abc",
            "middleName": "",
            "lastName": "xyz",
            "mobile": "9999XXXXX9",
            "email": "example@example.com",
            "pinCode": "224204",
            "dob": "1996-03-13",
            "aadhaarNo": "930XXXXX0095",
            "panNo": "ASXXXXX34H",
            "status": "A",
            "remarks": "",
            "service": "ICICI",
            "cd": "True",
            "be": "True",
            "cw": "True",
            "ms": "True",
            "eKycStatus": "False",
            "state": "Uttar Pradesh",
            "district": "Lucknow",
            "shopName": "XYZ CSC Point",
            "shopAddress": "Adarsh Nagar, Lucknow",
            "shopPin": "22XX04"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Merchant Onboard Failed"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
