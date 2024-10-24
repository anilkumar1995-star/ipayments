---
id: id-e-kyc-bio-metric
title: E-Kyc BioMetric
description: E-Kyc BioMetric
slug: /v1/service/aeps/ekyc-bio-metric
sidebar_position: 3
---

E-Kyc BioMetric

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">EKYC</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="post">POST</Highlight> : <strong>/v1/service/aeps/ekycBioMetric</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/aadhar-banking/ekyc-json/EKycBioMetricCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location '/v1/service/aeps/ekycBioMetric' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "primaryKeyId" : "3276168",
            "encodeFPTxnId" : "EKXXXXX703182XXXXX173902592I",
            "rdRequest" : "<?xml version=\"1.0\"?>\n<PidData>\n  <Resp errCode=\"0\" errInfo=\"Success.\" fCount=\"1\" fType=\"2\" nmPoints=\"54\" qScore=\"76\" \/>\n  <DeviceInfo dpId=\"MANTRA.MSIPL\" rdsId=\"MANTRA.WIN.001\" rdsVer=\"1.0.8\" mi=\"MFS100\" mc=\"MIIEGDCCAwCgAwIBAgIEAs0pwDANBgkqhkiG9w0BAQsFADCB6jEqMCgGA1UEAxMhRFMgTUFOVFJBIFNPRlRFQ0ggSU5ESUEgUFZUIExURCAzMVUwUwYDVQQzE0xCLTIwMyBTaGFwYXRoIEhleGEgT3Bwb3NpdGUgR3VqYXJhdCBIaWdoIENvdXJ0IFMuRyBIaWdod2F5IEFobWVkYWJhZCAtMzgwMDYwMRIwEAYDVQQJEwlBSE1FREFCQUQxEDAOBgNVBAgTB0dVSkFSQVQxCzAJBgNVBAsTAklUMSUwIwYDVQQKExxNQU5UUkEgU09GVEVDSCBJTkRJQSBQVlQgTFREMQswCQYDVQQGEwJJTjAeFw0yMzEyMjcwOTI2NDhaFw0yNDAxMjYwOTQxNDdaMIGwMSUwIwYDVQQDExxNYW50cmEgU29mdGVjaCBJbmRpYSBQdnQgTHRkMR4wHAYDVQQLExVCaW9tZXRyaWMgTWFudWZhY3R1cmUxDjAMBgNVBAoTBU1TSVBMMRIwEAYDVQQHEwlBSE1FREFCQUQxEDAOBgNVBA+fAi5XvmKWm57zLYELDBaKfNaiz4zMghhi2ACbcaLQKMDaIENchl9RkOub2LL3VGWuPbXbXrNXJRMrofLhOOYI6NLy3vZh10Qf4YkYmPlSSqm7ZPvjC7Hb3byOFlUHBIEpq4zvo+U1XrMgLrh4cD8S8vSlfRMIq\/T4+ZlyAvVHSR5M6T7jJvatV2hDkFnN6k811<\/Data>\n<\/PidData>"
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
        "message": "EKYC successfully.",
        "status": "SUCCESS"
    }
```

</TabItem>

<TabItem value="failed">

```json
    {
        "code": "0x0202",
        "status": "FAILURE",
        "message": "E-KYC Failed."
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>
