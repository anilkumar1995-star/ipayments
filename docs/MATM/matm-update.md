---
id: id-matm-matmUpdate
title: Update MATM
description: Update MATM
slug: /v1/service/matm/update
sidebar_position: 1
---

Update MATM

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">MATM</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/matm/update</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/matm/MATMUpdateCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/matm/update' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantCode": "MID69374****4",
            "clientRefId": "CR35****06",
            "bankmessage": "User Canceled",
            "bankresponsecode": "002",
            "reference": "{
                "osVersion":"11",
                "deviceManufacture":"motorola",
                "ipAddress":"192.168.1.15",
                "deviceModel":"moto g(10) power",
                "osBuildSdk":"30",
                "deviceBrand":"motorola",
                "deviceInfo":"capri",
                "device_version_codename":"REL",
                "mac":"00:00:00:00:00:00"
            }",
            "sdkVer": "1.1.9",
            "macAddress": "00:00:00:00:00:00",
            "imsi": "220832b61021****"
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
        "message":"Transaction successful.",
        "status":"SUCCESS"
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Error, MATM not Update",
    }
```

</TabItem>
</Tabs>


### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
