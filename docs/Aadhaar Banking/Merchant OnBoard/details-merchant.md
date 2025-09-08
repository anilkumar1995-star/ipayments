---
id: id-details-merchantw
title: Details Merchant
description: Details Merchant
slug: /v1/service/aeps/merchant
sidebar_position: 2
---

Details Merchant

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/aeps/merchant/</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

<!-- ## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/merchant-on-board-json/UpdateMerchantCode"

<BodyParam data={data}/> -->

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/aeps/merchant/9651807986' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==  ' \
        --data ''
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
        "message": "Merchant details found successfully.",
        "status": "SUCCESS",
        "data": {
            "merchantLoginId": "MID6XXXXX9694",
            "fullName": "Anil",
            "mobile": "96XXXXX986",
            "email": "kumXXXXXXi@gmail.com",
            "status": "1"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Merchant Details Not Found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>