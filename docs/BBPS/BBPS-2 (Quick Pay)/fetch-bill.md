---
id: id-fetch-quickbill-fetch-bill
title: Fetch Bill
description: Fetch Bill
slug: /v1/service/bbps/quickbill/fetch/bill
sidebar_position: 2
---

Fetch Bill

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/bbps/quickbill/fetch/bill</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchBillIdCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request POST '/v1/service/bbps/quickbill/fetch/bill' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
        "billerId": "UPPC00000UTPAH",
        "customerMobileNo": "XXXXX7986",
        "customerEmail": "kumaxxxxx@gmail.com",
        "customerAadhaar": "",
        "customerPan": "",
        "customerParamsRequest": {
            "tags": [
                {
                    "name": "Consumer Number",
                    "value": "99999999"
                },
                {
                    "name": "District-Discom",
                    "value": "Ayodhya-MVVNL"
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
            "amount": 100,
            "billId": "BILL5632112345678818224XXXXXXXXXXX",
            "refId": "BILL5632112345678818224XXXXXXXXXXX",
            "billerId": "UPPC00000UTPAH",
            "status": "BILL_FETCH_SUCCESS",
            "userId": "",
            "billDate": "2025-09-04",
            "billNumber": "823398XXXX",
            "billPeriod": "NA",
            "custConvFee": 0,
            "couCustConvFee": 0,
            "dueDate": "2025-09-18",
            "customerName": "Name ",
            "amountOption": null,
            "additionalInfo": null,
            "customerParams": {
                "tags": [
                    {
                        "name": "Consumer Number",
                        "value": "82361XXXX"
                    },
                    {
                        "name": "District-Discom",
                        "value": "Ayodhya-MVVNL"
                    }
                ]
            },
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
        "message": "No Record found",
        "data": "Please use valid billerId"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>