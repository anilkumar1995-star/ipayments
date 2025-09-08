---
id: intro-abs
title: Aeps (Redirection)
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/aeps/generate/url
sidebar_position: 10
---

<p>Aeps (Redirection). </p>

## Aeps Generate APIs

<p>Plesae do first complete digi kyc. then generate url</p>
<details open>
<summary> Aeps Generate</summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/aeps/generate/url">**Generate Url**</a>| Use this API to generate url

</details>


Aeps Redirection

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Aeps Redirect</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/generate/url</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aeps-redirect/aeps-json/aeps-redirect"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/generate/url' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "merchantLoginId" : "MID69374XXXXX",
                "redirectUrl": "https://xxx.com/redirect"
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
    "code": "0x0209",
    "message": "Redirect url",
    "status": "REDIRECT",
    "data": {
        "url": "https://api.xxxx.in/merchant/txn?enc=oMp8xfCep6R7Z0CEVDwCkbnzxGs%2BqfnNmUuc34CjA3MJ062OFndBAyDSSCq1kITX6%2B%2BPYRw2Ln85LStVPw%3D%3D"
    }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Some error"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
