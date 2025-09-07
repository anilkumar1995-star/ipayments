---
id: id-mdigio-keyc-stat
title: Merchant Kyc Status
description: Merchant KYC Status
slug: /v1/service/aeps/kyc/KID25090416XXXXXXXXXXXXXXXXXXXX
sidebar_position: 1
---

Merchant KYC Status

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Merchant KYC Status</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/aeps/kyc/KID25090416XXXXXXXXXXXXXXXXXXXX</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params


import data from "@site/src/static/digio-kyc/StatusCheckCode"


### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/kyc/KID25090416XXXXXXXXXXXXXXXXXXXX' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: ••••••' \
        --data '{
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
        {label: 'PENDING', value: 'pending'},
    ]}>

<TabItem value="found">

```json
   {
        "code": "0x0200",
        "message": "Record fetched successful.",
        "status": "SUCCESS",
        "data": {
                "kyc": {
                        "id": "KID25090416XXXXXXXXXXXXXXXXXXXX",
                        "name": "Anil Kumar",
                        "faceMatch": "99",
                        "aadhaar": "xxxxxxxx0627",
                        "gender": "M",
                        "dob": "02/12/1999",
                        "image": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLOeaKKETa6uf//Z",
                        "fatherName": "Mahavir Singh",
                        "currentAddress": {
                                "address": "S/O: ,Near Qabristan,Saharanpur,Uttar Pradesh,247001",
                                "locality_or_post_office": "Tiwaya",
                                "district_or_city": "Saharanpur",
                                "state": "Uttar Pradesh",
                                "pincode": "247001"
                        },
                        "pan": "AORPXXXX3D",
                        "panName": "Anil Kumar",
                        "panUrl": "https://console.ipayments.in/RPY83D.pdf",
                        "aadhaarUrl": "https://console.ipayments.in/EUL.pdf.pdf"
                },
                "merchantDetails": {
                        "merchantLoginId": "TEOJDXXXXXX",
                        "merchantLoginPin": "bae2e22bc783fc75xxxxxxxxxx",
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

<TabItem value="pending">

```json
    {
        "code": "0x0206",
        "status": "PENDING",
        "message": "Kyc is pending",
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
