---
id: id-payment-contact
title: Payout Contacts
description: Payout Contacts
slug: /v1/service/payout/contacts
sidebar_position: 2
---

Payout Contacts

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Payout</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/payout/contacts</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/payout/ContactPayoutCode"

<BodyParam data={data}/>

### Generate Signature

```c title="Example Signature"
    $salt='{{$salt_key}}';
    $client = "{{client_key}}";
    $base64_num=base64_encode(json_encode(
        [
            "firstName" => "Anil",
            "lastName" => "Kumar",
            "email" => "testu@gmail.com",
            "mobile" => "639XXXX138",
            "type" => "customer",
            "accountType" => "bank_account",
            "accountNumber" => "2427XXXX020109",
            "ifsc" => "BARBXXXXIKT",
            "referenceId" => ""
        ]
    ));
    hash('sha256', $base64_num."/v1/service/payout/contacts{{$client_key}}####{{$salt_key}}");
```

### Request

```c title="Example Request"
    curl --location '/v1/service/payout/contacts' \
        --header 'signature: 1b519366355f300df67d5de8f40a73f56671c38d6cfce9a97d42e6864709a507' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "ifsc": "BARBXXXXIKT",
            "referenceId": ""
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
        "message": "Contact created successfully",
        "status": "SUCCESS",
        "data": {
            "contactId": "CONT_185XXXX720580306C74F",
            "firstName": "Anil",
            "lastName": "Kumar",
            "email": "testu@gmail.com",
            "mobile": "639XXXX138",
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
        "code": "0x0203",
        "status": "MISSING_PARAMETER",
        "message": {
            "firstName": [
                "The first name field is required."
            ],
            "email": [
                "The email field is required."
            ],
            "mobile": [
                "The mobile field is required."
            ],
            "type": [
                "The type field is required."
            ],
            "accountType": [
                "The account type field is required."
            ],
            "signature": [
                "Your signature is invalid."
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
