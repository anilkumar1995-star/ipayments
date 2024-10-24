---
id: id-get-all-banks
title: Get All Banks
description: Get All Banks
slug: /v1/common/bank
sidebar_position: 3
---

Get All Banks:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Common</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/common/bank</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/common/bank' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data ''
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
      "data":  [
            {
                "bankId": 1,
                "iin": 608112,
                "bank": "Allahabad Bank",
                "url": "http://incognic.tech/banklogo/Allahabad%20Bank.jpg"
            },
            {
                "bankId": 2,
                "iin": 607024,
                "bank": "Aryavart Bank / Gramin Bank of Aryavart",
                "url": "http://incognic.tech/banklogo/CommonBank.png"
            },
            {
                "bankId": 4,
                "iin": 607198,
                "bank": "Andhra Pradesh Grameena Vikash Bank",
                "url": "http://incognic.tech/banklogo/Andhra-Pradesh-Grameena-Vikas-Bank.jpg"
            },
            {
                "bankId": 5,
                "iin": 607121,
                "bank": "Andhra Pragathi Grameena Bank",
                "url": "http://incognic.tech/banklogo/Andhra%20Pragathi%20Grameena%20Bank.jpg"
            },
            {
                "bankId": 6,
                "iin": 607064,
                "bank": "Assam Gramin Vikash Bank",
                "url": "http://incognic.tech/banklogo/Assam%20Gramin%20Vikash%20Bank.png"
            },
            {
                "bankId": 7,
                "iin": 607153,
                "bank": "Axis Bank",
                "url": "http://incognic.tech/banklogo/axis_bank.png"
            }
        ]
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
