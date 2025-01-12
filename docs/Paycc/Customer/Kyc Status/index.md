---
id: intro-ab
title: Paycc Customer Kyc Status 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/paycc/kyc/status/KID240826182553823XXXXXXXXX
sidebar_position: 15
---

<p>Paycc Customer Kyc. </p>

## Paycc APIs


<details open>
<summary> Customer Kyc Status</summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/paycc/init/kyc">**Kyc Status**</a>| Use this API to Kyc Status

</details>


Paycc

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Kyc Status</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">GET</Highlight> : <strong>/v1/service/paycc/kyc/status/KID240826182553823RNHXXXXXX</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/paycc-customer/customer-json/paycc-customer-kyc-status"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/paycc/kyc/status/KID240826182553823RXXXXXXXXX' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
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
    ]}>

<TabItem value="found">

 ```json
   {
        "code": "0x0200",
        "message": "Record fetched successful.",
        "status": "SUCCESS",
        "data": {
                "kyc": {
                        "id": "KID24082618255382XXXXXXXXX",
                        "name": "SanjXXXXr",
                        "faceMatch": 99,
                        "aadhaar": "xxxxxxxx0339",
                        "gender": "M",
                        "dob": "25/08/1974",
                        "image": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/A7dacFUgUARYNITx2qQg9qYw5zg4oENIH402nfnSHpQBa7UYpe1J1WmAc0D19qXj0oIpDEPH1petKR7Vx/45ooomtkOLtqcM4IYqwxjrkVCwAJ7miipW52boeBkClKKSPUUUUih3lqB24oZVA6GiihDSI/lGeBUbtx29qKKpbkdDU8Lwl9UaXui9K7rUb9dL0d2D/6Q64Re5Jooq29DlqfEZmg6tqv2fN6PtEecZxhx/jXQpPDewkxMD6qRgg+4oopxWpk9SW3k3JhvvLwafIoPNFFTJtNAj//XXXX",
                        "fatherName": "",
                        "currentAddress": {
                                "address": "XXXX",
                                "locality_or_post_office": "XXX",
                                "district_or_city": "XXX",
                                "state": "XX",
                                "pincode": "XXXXXX"
                        },
                        "pan": "CEXPDXXXXX",
                        "panName": "SAXXXXXXR"
                },
                "merchantDetails": {
                        "custId": "JSIWIXXXXXX9"
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
        "message": "Entity not found for this ID"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
