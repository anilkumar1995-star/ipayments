---
id: id-add-account-list
title: Account Lists
description:  Account Lists
slug: /v1/service/upicollect/account/list
sidebar_position: 2
---

Create Account:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Account List</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/upicollect/generate/account</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/upicollect/account/list' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "merchantCode": "MID73323XXXXX",
                "clientRefId": "CRF233222XXXX"
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
        "message": "Record found successfully.",
        "status": "SUCCESS",
        "data": [
            {
                "label": "label",
                "merchantCode": "MID73323XXXXX",
                "clientRefId": "CRF233222XXXX",
                "virtualAccountPrefix": "111222",
                "virtualAccountId": "cva73ab2958d4d61b50e63d1b4xxxxxxx",
                "virtualAccountNumber": "111222123123XXXXXX",
                "virtualAccountIfsc": "YESBXXXSNOC",
                "virtualPaymentAddress": "anixxxx@yesbank",
                "upiQrcodeRemoteFileLocation": "https://s3.ap-south-1.amazonaws.com/xxxxx@yesbank.png",
                "upiQrcodeScannerRemoteFileLocation": "https://s3.ap-south-1.amazonaws.com/xxxxx@yesbank.pdf",
                "authorizedRemitters": [
                    {
                        "account_number": "XXXXXXXX2661",
                        "account_ifsc": "BARBXXXROMA"
                    }
                ],
                "transactionAmountLimit": {
                    "imps": 200000,
                    "neft": 200000,
                    "rtgs": 300000
                },
                "description": "description",
                "isActive": "active",
                "kycFlow": "0"
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
        "message": "The merchant code is not valid."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>