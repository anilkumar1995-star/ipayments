---
id: intro-ab
title: Agent Onboarding (PPI)
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/dmt/agent
sidebar_position: 11
---

<p>Agent Onboarding (PPI). </p>

## Agent Onboarding APIs

<details open>
<summary> Agent Onboarding</summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/dmt/agent">**Agent Onboarding Url**</a>| Use this API to Agent Onboarding

</details>


Agent Onboarding (PPI)

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Agent Onboarding (PPI)</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/dmt/agent</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/dmt-ppi/dmt-json/dmt-ppi"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/dmt/agent' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantCode" : "MIDXXXXXXXXXX",
            "name" : "Anil XXX",
            "mobile" : "6393XXXXXX" ,
            "email" : "kumaxxx@xxxxx.com",
            "firmName" : "AYZ",
            "address" : "HOUSE NO.215 ",
            "pinCode" : "224XXX",
            "aadhaar" : "5500XXXXXXXX",
            "pan" : "ENGXXXXXX",
            "state" : "Uttar Pradesh",
            "latitude" : "2X.9X9",
            "longitude" : "8X.3X32"
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
        "message": "BC Agent Registered Successfully",
        "status": "SUCCESS",
        "data": {
                "outletId": "O99XXXXXX"
        }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
    "code": "0x0202",
    "status": "FAILURE",
    "message": "The merchant code should be unique."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
