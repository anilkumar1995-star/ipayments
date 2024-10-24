---
id: id-recharge-complaint
title: Recharge Complaint
description: Recharge Complaint
slug: /v1/service/recharge/complaint
sidebar_position: 7
---

Recharge Complaint

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Recharge</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/recharge/complaint</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/recharge/ComplaintCode"

<BodyParam data={data}/>



### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/recharge/complaint' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "clientRefId" : "RECH_798XXXX996093098",
            "remark" : "test"
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
       "message": "Recharge Complaint raise successfully.",
       "status": "SUCCESS",
        "data": ""
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Complaint Cannot Be Marked For This Transaction"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
