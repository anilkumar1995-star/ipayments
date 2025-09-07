---
id: id-fetch-bills
title: Fetch Bill
description: Fetch Bill
slug: /v1/service/bbps/fetch/bill
sidebar_position: 4
---

Fetch Bill

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/bbps/fetch/bill</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchBillCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/bbps/fetch/bill' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "customerMobileNo" : "63937XXXXX",
            "billerId": "NBPDCLXXXXXI01",
            "customerParamsRequest": {
                       "tags" : [
                          {
                            "name": "Ca Number",
                            "value": "115208XXXXX0"
                           }
                        ]
                    
            }
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
        "message": "Record fetched successfully.",
        "status": "SUCCESS",
        "data": {
            "genericResponse": {
                "message": "Bill Fetch Initiated",
                "remarks": "",
                "status": "success",
                "statusCode": "200"
            },
            "billId": "2031266e-XXXX-4789-XXXX-233f82267d7f",
            "billerResponse": null,
            "additionalInfo": null,
            "customerParams": null,
            "billerResponseList": null
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "No record found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>