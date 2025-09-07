---
id: id-fetchCategory
title: Fetch Category
description: Fetch Category
slug: /v1/service/bbps/fetch/category
sidebar_position: 1
---

Fetch Category

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/bbps/fetch/category</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchCategoryCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/bbps/fetch/category' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
           
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
        "data": [
            {
                "categoryId": "5f3c453e-20b1-4676-902f-b47da9675aac",
                "categoryName": "Fastag",
                "categoryIcon": "data:image/png;base64,iVBORwXFvCSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJElt8v8BS2Utmlf4h98AAAAASUVORK5CYII=",
                "categoryDomain": "Recharge",
                "buttonName": "Fastag",
                "textArea": "RmFzdGFnIGFuc3dlcg==",
                "faqDetailsList": [
                    {
                        "name": "Fastag FAQ",
                        "value": "Fastag answer"
                    }
                ]
            }
            {
                "categoryId": "dec69fc4-23eb-4a0b-9a22-cfd4aace4d18",
                "categoryName": "NCMC Recharge",
                "categoryIcon": "data:image/png;base64,iVBORw0KGgoAAAA43zTYdAAAAAAAAAAAAAAAAAAAAAGvxv3/9JlzS+tVHAAAAAElFTkSuQmCC",
                "categoryDomain": "Recharge",
                "buttonName": "NCMC Recharge",
                "textArea": "TkNNQyBSZWNoYXJnZQ==",
                "faqDetailsList": [
                    {
                        "name": "NCMC Recharge",
                        "value": "NCMC Recharge"
                    }
                ]
            }
        ]
    }
```
</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0203",
        "status": "MISSING_PARAMETER",
        "message": {
            "tenantId": [
                "The tenant Id field is required."
            ]
        }
    }
```
</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>