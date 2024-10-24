---
id: id-matm-matmStatus
title: MATM Status
description: MATM Status
slug: /v1/service/matm/status
sidebar_position: 1
---

MATM Status

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">MATM</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/matm/status</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/matm/MATMStatusCheckCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/matm/status' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantCode": "MID6937439****",
            "clientRefId": "MCW4363185501********"
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
        "code":"0x0200",
        "message":"Transaction Successfully.",
        "status":"SUCCESS",
        "data":{
            "fingpayTransactionId":"MACA593694110042********",
            "stan":"2659**",
            "bankRRN":"41011848****",
            "transactionTime":"10-Apr-2024 18:53:00",
            "merchantTranId":"MCW5457635160********",
            "transactionStatus":true,
            "transactionAmount":300,
            "transactionStatusCode":"00",
            "transactionStatusMessage":"Success",
            "remarks": '',
            "cardNumber":"************9488",
            "balanceAmount":15394,
            "latitude":26.7633699,
            "longitude":84.058242,
            "mobileNumber":"998******50",
            "deviceIMEI":"55a226a1ebd*****",
            "bankName":"IDBI Bank"
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
