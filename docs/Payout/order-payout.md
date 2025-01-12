---
id: id-order-payout
title: Order Payout
description: Order Payout
slug: /v1/service/payout/orders
sidebar_position: 3
---

Order Payout

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">Payout</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/payout/orders</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/payout/OrderPayoutCode"

<BodyParam data={data}/>

### Generate Signature

```c title="Example Signature"
    $base64_num=base64_encode(json_encode(
        [
            'contactId' => "CONT_18578XXXX0580306C74F",
            'amount' => "1",
            'purpose' => "salary_disbursement",
            'mode' => "IMPS",
            'narration' => "narration or retailer_id|retailer_name|retailer_email|retailer_mobile|retailer_service" ,
            'remark' => "remark",
            'clientRefId' => "CRF37XXXX47484"
        ]
    ));
    hash('sha256', $base64_num."/v1/service/payout/orders{{$client_key}}####{{$salt_key}}");
```

### Request

```c title="Example Request"
    curl --location '/v1/service/payout/orders' \
        --header 'signature: 82331c16fe734582af608dbbb8eb17f840c4083301ea13146b716b544b1a2329' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "contactId": "CONT_18578XXXX0580306C74F",
            "amount": "1",
            "purpose": "salary_disbursement",
            "mode": "IMPS",
            "narration": "narration",
            "remark": "remark",
            "clientRefId": "CRF37XXXX47484"
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
        "message": "Order accepted successfully",
        "status": "SUCCESS",
        "data": {
            "clientRefId": "CRFXXXX8747484",
            "orderRefId": "REF22905XXXX70835580BC0",
            "status": "queued"
        }
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Order Not Found"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
