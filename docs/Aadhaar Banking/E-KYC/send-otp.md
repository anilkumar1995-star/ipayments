---
id: id-send-otp
title: Send OTP
description: Send OTP
slug: /v1/service/aeps/send-otp
sidebar_position: 1
---

Send OTP

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">EKYC</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/sendOTP</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/ekyc-json/SendOtpCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/sendOTP' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "pan": "ENXXXXX56A",
            "aadhaar": "55XXXX132742",
            "latitude": "26.600000",
            "longitude": "82.133904",
            "mobile": "965XXXX986"
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
        "message": "OTP Send Successfully.",
        "status": "SUCCESS",
        "data": {
            "primaryKeyId": 3276168,
            "encodeFPTxnId": "EKYKF577XXXXX7122315XXXXX64I"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Send OTP Failed."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
