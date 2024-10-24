---
id: id-validate-otp
title: Validate OTP
description: Validate OTP
slug: /v1/service/aeps/validate-otp
sidebar_position: 2
---

Validate OTP

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">EKYC</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/validateOTP</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/ekyc-json/ValidateOtpCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/validateOTP' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "otp" : "51XX35",
            "primaryKeyId" : "327XX68",
            "latitude" : "26.600000",
            "longitude" : "82.133904",
            "encodeFPTxnId" : "EKYKF5770318XXXXX3173902592I"
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
        "message": "OTP validate successfully.",
        "status": "SUCCESS",
        "data": {
            "primaryKeyId": 3276168,
            "encodeFPTxnId": "EKYKFXXXXX18271223XXXXX113I"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "OTP is not valid."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
