---
id: id-get-contact-payout
title: Get Contact Payout
description: Get Contact Payout
slug: /v1/service/payout/contacts/contactId
sidebar_position: 1
---

Get Contact Payout:

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Payout</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/payout/contacts/&#123;contactId&#125;</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

### Generate Signature

```c title="Example Signature"
    hash('sha256', "/v1/service/payout/contacts/CONT_1857861720580306C74F{{$client_key}}####{{$salt_key}}");
```

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/payout/contacts/CONT_1857861720580306C74F' \
        --header 'signature: 4c227a60f3ca53670ce56dbce35e82798bcdd2ec1b09e3a3da78be9e8f26be2a' \
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
        "data": {
            "contactId": "CONT_18578617XXXX80306C74F",
            "firstName": "Anil",
            "lastName": "Kumar",
            "email": "testu@gmail.com",
            "mobile": "6XXXX84138",
            "type": "customer",
            "accountType": "bank_account",
            "reference": "",
            "isActive": "1",
            "accountNumber": "2427XXXX020109",
            "accountIFSC": "BARB0XXXXKT"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Contact not found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
