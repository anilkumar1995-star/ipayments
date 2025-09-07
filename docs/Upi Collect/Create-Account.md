---
id: id-add-accounts
title: Create Account
description: Create Account
slug: /v1/service/upicollect/generate/account
sidebar_position: 1
---

Create Account:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Create Account</a>

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
    curl --location --request GET '/v1/service/upicollect/generate/account' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "merchantCode": "MID73323XXXXX",
            "label": "Label",
            "clientRefId": "CRF2332229XXXXX",
            "description": "description",
            "virtualAccountNumber": "1231234XXXXX",
            "virtualPaymentAddress": "anilXXXXXX",
            "autoDeactivateAt": "2026-05-21",
            "authorizedRemitters": [
                {
                    "account_number": "XXXXXXXXX2661",
                    "account_ifsc": "BARXXXOROMA"
                }
            ],
            "amountLimit": {
                "imps": 200000,
                "neft": 200000,
                "rtgs": 300000
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
        "message": "Record added successfully.",
        "status": "SUCCESS",
        "data": {
            "label": "Label",
            "virtualAccountPrefix": "111222",
            "virtualAccountId": "cva0c7d4fa7042f495cd451cxxxxx",
            "virtualAccountNumber": "1112221231XXXXXX",
            "virtualAccountIfsc": "YESBXXXXNOC",
            "virtualPaymentAddress": "aniXXXXX@yesbank",
            "upiQrcodeRemoteFileLocation": "https://s3.ap-south-1.amazonaws.com/yesbank.png",
            "upiQrcodeScannerRemoteFileLocation": "https://s3.ap-south-1.amazonaws.com/yesbank.pdf",
            "authorizedRemitters": [
                {
                    "account_number": "XXXXXXXXX2661",
                    "account_ifsc": "BARBXXXOROMA"
                }
            ],
            "transactionAmountLimit": {
                "imps": 200000,
                "neft": 200000,
                "rtgs": 300000
            },
            "description": "description",
            "isActive": true,
            "kycFlow": false
        }
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