---
id: intro-ab
title: Generate Url (PPI)
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/dmt/generate/url
sidebar_position: 12
---

<p>Generate Url (PPI). </p>

## Agent Onboarding APIs

<details open>
<summary> Generate Url</summary>

| API                                                                           | Description                                     |
| :---------------------------------------------------------------------------- | :---------------------------------------------- |
| <a href="/docs/v1/service/dmt/generate/url">**Generate Url**</a>| Use this API to Generate Url
then auto submit in form
</details>


Generate Url (PPI)

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Generate Url (PPI)</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/dmt/generate/url</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/dmt-ppi/dmt-json/dmt-generate-url"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/dmt/generate/url' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "outletId": "OAGNXXXXXX",
                "mobile": "6393XXXXXX",
                "clientRefId": "REF639XXXXXXXXX",
                "redirectUrl" : "https://xxxxxx.in/con/dmt/callback"
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
        "message": "Url Generate Successfully.",
        "status": "SUCCESS",
        "data": {
            "url": "https://uat.xxxxx.in/xxxxxx/",
            "encdata": "xxxxxxxhG8flgViU62mlArWUW1MmmBWUiZg2sdlk6CCkBkegIcQCP9ah7RV/MFNXD395qPpWVh9UWKym0Hun0lysgdEwt0dsEjPnWnPT27RHFhcDXEhRFd9bMOCubwbMDqnN0DMouykFAH+GYnLf2ze4jiqoJYQy8VU6ggaRlEdJ1Fs+2OvhenF4W2NyDVean7RkVjO8U8GyjefPjNjFH1C9lZGJK/Nj1NLRP0uRVWwArTi20KYxbNoAIMXVLatRbklQwYIRXOLaPZOBj87DliFCBnZSWfpBLtoMoC1rZHjmUu9xnD/w=="
        }
    }
 ```

</TabItem>

<TabItem value="failed">

```json
    {
    "code": "0x0202",
    "status": "FAILURE",
    "message": "The Reference Number field is required.\n"
}
```

</TabItem>
</Tabs>

### HTML

```c title="Example HTML"
    <form id="retForm" action="{{url}}" method="POST">
        <input type="hidden" name="encdata" value="{{encdata}}">
        <button type="submit">Submit</button>
    </form>
```

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
