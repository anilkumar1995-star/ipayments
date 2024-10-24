---
id: id-digio-keyc-status
title: Check Status
description: Digio KYC Status
slug: /v1/service/aeps/kyc/KID240202144950612YZGM2NCWT3P8JL
sidebar_position: 1
---

Digio KYC Status

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Digio KYC</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/aeps/kyc/KID240202144950612YZGM2NCWT3P8JL</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/digio-kyc/StatusCheckCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/kyc/KID240202144950612YZGM2NCWT3P8JL' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: ••••••' \
        --data '{
            "pan": "ENXXXXXX6A",
            "aadhaar": "xxxxxxxx2742",
            "latitude": "26.600000",
            "longitude": "82.133904",
            "mobile": "96518xxxxx"
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
    "message": "Record fetched successful.",
    "status": "SUCCESS",
    "data": {
        "kyc": {
            "id": "KID24042310410445963CHNJIJNSK2HA",
            "name": "SOHEL RANA",
            "faceMatch": 99,
            "aadhaar": "xxxxxxxx1852",
            "gender": "M",
            "dob": "02/05/1996",
            "image": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBnTNFFIo//9k=",
            "fatherName": null,
            "currentAddress": {
                "address": "DAHARPAR,Mahendrapur,Murshidabad,West Bengal,742201",
                "locality_or_post_office": "Mahendrapur",
                "district_or_city": "Murshidabad",
                "state": "West Bengal",
                "pincode": "742201"
            },
            "pan": "BVI****91J",
            "panName": "SOHEL RANA"
        },
        "merchantDetails": {
            "merchantLoginId": "TEOJD26******73",
            "merchantLoginPin": "ec52a0481203a2c7********647e69",
            "status": "0",
            "isOnboard": "true"
        }
    }
}
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Error, Something went wrong",
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
