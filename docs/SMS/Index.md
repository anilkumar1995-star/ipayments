---
id: intro-ab-sms
title: SMS 
description: IPAYMENT API Docs - Smart Payout, Smart Collect, UPI Stack, Validation Suite, Aeps, Dmt
slug: /v1/service/sms/send
sidebar_position: 20
---

<p>SMS . </p>

## SMS APIs

SMS

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Send Sms</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/sms/send</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/sms/sms.js"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/sms/send' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
        "templateId": "66b74800d6fc05xxxxxxxx",
        "clientRefId": "ALSM202509xxx2768",
        "shortUrl": "0",
        "recipients": [
                {
                        "mobiles": "+917319xxxx",
                        "var1": "var1",
                        "var2": "598990"
                }
        ]
        
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
        "message": "success",
        "status": "SUCCESS",
        "data": {
                "message": "35696771706151516c613cccc",
                "type": "success"
        }
}
 ```

</TabItem>

<TabItem value="failed">

```json
    {
    "code": "0x0202",
    "status": "FAILURE",
    "message": "Sms not send."
}
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
