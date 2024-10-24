---
id: id-balance-enquiry
title: Balance Enquiry
description: Balance Enquiry
slug: /v1/service/aeps/get-balance
sidebar_position: 2
---

Balance Enquiry

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">AEPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/getBalance</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/aeps-json/Balance-EnquiryCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/getBalance' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
                "merchantLoginId" : "MID69374XXXXX",
                "aadhaar": "4340005XXXXX",
                "txnType": "be",
                "mobile": "96518XXXXX",
                "rdRequest": "<?xml version=\"1.0\"?>\n<PidData>\n  <Resp errCode=\"0\" errInfo=\"Success.\" fCount=\"1\" fType=\"2\" nmPoints=\"38\" qScore=\"70\" \/>\n  <DeviceInfo dpId=\"MANTRA.MSIPL\" rdsId=\"MANTRA.WIN.001\" rdsVer=\"1.0.8\" mi=\"MFS100\" mc=\"MIIEGDCCAwCgAwIBAgIEAs0pwDANBgkqXZP5TXJJrYweSzBkZQZ0i93EFqAeINUKwN5ajipFBG0YejZPaO6rXgZPpx2g6UarfW1ypna9q3b1xg0i30EUFHXmhxBYmLxv763fp94wgc8tMyCbNcVKISnqhbk79RqQDBjI0CUyv8cJFgSGoMaKMQzLLP3qAyJgraxE8=\" dc=\"650680e6-0611-430e-bd87-a277b42ba691\">\n    <additional_info>\n      <Param name=\"srno\" value=\"1693093\" \/>\n      <Param name=\"sysid\" value=\"6C3FEBF50A7353BFBFF0\" \/>\n      <Param name=\"ts\" value=\"2023-12-28T15:16:49+05:30\" \/>\n    <\/additional_info>\n  <\/DeviceInfo>\n  <Skey ci=\"20250923\">k+\/ObpNPXrohhGsUKsM06ULVcdhX3AIKQRylVkVKFjAKN++nVPb\/0qlITPYG344E3y3b4ij6yvPQdTXXvlBbBHKQJjoICu\/pp9KpsxrOgX+36m1MN4OKfCBRznAQ9SsRr32tKDouQTcRHZXcTYl1y2\/SPLg1bW7ymyQhTJO6sbwcoEQwRsxFsyZAejLdphljyHDENxdQ==<\/Data>\n<\/PidData>",
                "bankiin": "990xxx",
                "latitude": "26.600000",
                "longitude": "82.133904",
                "pan": "ENGPKXXXXX"
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
        "message": "000: Balance fetched successfully.",
        "status": "SUCCESS",
        "data": {
            "clientRefNo": "ABE1510312063584XXXXXX",
            "routeType": "icici",
            "bankiin": "608XXX",
            "stanNo": "XTL92DE554FB0B6483A98152C8945XXXXXX",
            "rrn": "1271158XXXXX",
            "bankMessage": "Request Completed",
            "bankCode": "10000",
            "merchantCode": "MC0001XXXXX",
            "merchantMobile": "99999XXXXX",
            "aadhaarNumber": "9876XXXXXXXX1012",
            "transactionType": "BE",
            "transactionDateTime": "2022-02-07 12:15:34",
            "transactionAmount": "0",
            "availableBalance": "1000"
        }
    }
 ```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "Duplicate Biometric data"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
