---
id: id-cash-withdrawal
title: Cash Withdrawal
description: Cash Withdrawal
slug: /v1/service/aeps/withdrawal
sidebar_position: 1
---

Cash Withdrawal

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/withdrawal</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/aeps-json/CashWithdrawalCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/withdrawal' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantLoginId" : "MID69374XXXXX",
            "aadhaar": "4340005XXXXX",
            "txnType": "cw",
            "mobile": "96518XXXXX",
            "amount" : "50",
            "rdRequest": "<?xml version=\"1.0\"?>\n<PidData>\n  <Resp errCode=\"0\" errInfo=\"Success.\" fCount=\"1\" fType=\"2\" nmPoints=\"33\" qScore=\"69\" \/>\n  <DeviceInfo dpId=\"MANTRA.MSIPL\" rdsId=\"MANTRA.WIN.001\" rdsVer=\"1.0.8\" mi=\"MFS100\" mc=\"MIIEGgpiV9yV\/FE4is3GSDMp3HCMe\/oJPAJ1HdGoDZipUYum6s6HqZnz3P3Spe03jNnw7596nfkQmIf\/TP1CUyhA==<\/Data>\n<\/PidData>",
            "bankiin": "990309",
            "latitude": "26.600000",
            "longitude": "82.133904",
            "pan": "ENGXXXXX6A"
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
        "message": "Transaction Successfully.",
        "status": "SUCCESS",
        "data": {
            "orderRefId": "CWBT577031XXXXX23153105235I",
            "clientRefId": "ACW195894XXXXX807476BBD",
            "bankName": null,
            "accountNumber": null,
            "ipaymentId": "CWBT577031XXXXX23153105235I",
            "transactionMode": null,
            "payableValue": 50,
            "transactionValue": 50,
            "bankAccountBalance": 13.06
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Duplicate Biometric data."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
