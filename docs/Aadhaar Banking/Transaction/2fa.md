---
id: id-2fa
title: Two Factor Authentication
description: Two Factor Authentication
slug: /v1/service/aeps/2fa
sidebar_position: 5
---

Two Factor Authentication

:::tip Postman Collection

<!-- [AEPS](https://documenter.getpostman.com/view/1055657/UUy4bQAj) -->

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/2fa</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/aeps-json/TwoFA"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/2fa' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantLoginId" : "MID69374XXXXX",
            "rdRequest": "<?xml version=\"1.0\"?>\n<PidData>\n  <Resp errCode=\"0\" errInfo=\"Success.\" fCount=\"1\" fType=\"2\" nmPoints=\"53\" qScore=\"67\" \/>\n  <DeviceInfo dpId=\"MANTRA.MSIPL\" rdsId=\"MANTRA.WIN.001\" rdsVer=\"1.0.8\" mi=\"MFS100\" mc=\"MIIEGDiOpx1w==<\/Data>\n<\/PidData>",
            "latitude": "26.600000",
            "longitude": "82.133904"
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
        "message": "2FA completed successfully",
        "status": "SUCCESS"
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Duplicate Biometric data"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
