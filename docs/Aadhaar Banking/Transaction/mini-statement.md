---
id: id-mini-statement
title: Mini Statement
description: Mini Statement
slug: /v1/service/aeps/statement
sidebar_position: 3
---

Mini Statement

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/statement</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/aeps-json/MiniStatementCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/statement' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantLoginId" : "MID6937439694",
            "aadhaar": "43XXXX555547",
            "txnType": "ms",
            "mobile": "965XXXX986",
            "rdRequest": "<?xml version=\"1.0\"?>\n<PidData>\n  <Resp errCode=\"0\" errInfo=\"Success.\" fCount=\"1\" fType=\"2\" nmPoints=\"33\" qScore=\"70\" \/>\n  <DeviceInfo dpId=\"MANTRA.MSIPL\" rdsId=\"MANTRA.WIN.001\" rdsVer=\"1.0.8\" mi=\"MFS100\" mc=\"MIw\/sVzKygJ3hoAv2iKQXdYbKfasBzj189Q9l25G+qCMF4YALXUQB17zaSu0fO1zI8=<\/Data>\n<\/PidData>",
            "bankiin": "990309",
            "latitude": "26.600000",
            "longitude": "82.133904",
            "pan": "ENGXXXX56A"
        }'
```

### Response Samples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="found"
    values={[
        {label: 'SUCCESS', value: 'found'},
        {label: 'FAILED', value: 'failed'}
    ]}>

<TabItem value="found">

```json
    {
        "code": "0x0200",
        "message": "Transaction Successfully.",
        "status": "SUCCESS",
        "data": {
            "orderRefId": "MSBB5770318281223152XXXXX3I",
            "clientRefId": "AMS1958429859XXXXX2D918",
            "bankName": null,
            "accountNumber": null,
            "ipaymentId": "MSBB5770318281223152XXXXX3I",
            "transactionMode": null,
            "payableValue": 0,
            "transactionValue": 0,
            "bankAccountBalance": 0,
            "miniStatement": [
                {
                    "date": "09/30",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " Int.Pd:361390822 "
                },
                {
                    "date": "07/12",
                    "txnType": "Dr",
                    "amount": "0.3",
                    "narration": " CC%20PAYMENT     "
                },
                {
                    "date": "06/30",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " Int.Pd:361390822 "
                },
                {
                    "date": "03/31",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " Int.Pd:361390822 "
                },
                {
                    "date": "12/31",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " Int.Pd:361390822 "
                },
                {
                    "date": "12/02",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " UPI/RAJKUMAR/233 "
                },
                {
                    "date": "12/02",
                    "txnType": "Cr",
                    "amount": "1.0",
                    "narration": " UPI/RAJKUMAR/233 "
                },
                {
                    "date": "09/30",
                    "txnType": "Cr",
                    "amount": "25.0",
                    "narration": " Int.Pd:361390822 "
                }
            ]
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code":"0x0202",
        "status":"FAILURE",
        "message":"001: Failure",
        "data": ""
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
