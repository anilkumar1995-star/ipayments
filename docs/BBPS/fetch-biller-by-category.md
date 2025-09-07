---
id: id-fetch-biller
title: Fetch Biller by Category
description: Fetch Biller
slug: /v1/service/bbps/fetch/biller/category
sidebar_position: 2
---

Fetch Biller

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/bbps/fetch/biller/category</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchByCategoryCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/bbps/fetch/biller/category' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "categoryName" : "Electricity",
            "page" : "0",
            "pageSize" : "500"
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
            "billerResp": [
                {
                    "billerId": "121F00000NAT4D",
                    "billerName": "121 Finance Private Limited",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Loan Repayment",
                    "billerCoverage": "IND",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact and above"
                },
                {
                    "billerId": "EDU017960UTT01",
                    "billerName": "5Th Centenary School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-UTT-Udham Singh Nagar",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "EDU009008MAP01",
                    "billerName": "7I World School Shivpuri Link Road Gwalior",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-MAP-Gwalior",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "EDU012723RAJ01",
                    "billerName": "A&#39;S Saint Steward Morris School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-RAJ-Bhilwara",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "EDU013533TND01",
                    "billerName": "Aaa International School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-TND-Virudhunagar",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "EDU013534TND01",
                    "billerName": "Aachi International School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-TND-Madurai",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "AADA00000ASMNP",
                    "billerName": "Aadarsh Gurukul Senior Secondary School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-ASM",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact and below"
                },
                {
                    "billerId": "EDU011391PUN01",
                    "billerName": "Aadesh International School",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-PUN-Hoshiarpur",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "EDU002707CHH01",
                    "billerName": "Aadeshwar Academy",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Education Fees",
                    "billerCoverage": "IND-CHH-Bastar",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": false,
                    "paymentAmountExactness": "Exact"
                },
                {
                    "billerId": "AADH00000NATPT",
                    "billerName": "Aadhar Housing Finance Limited",
                    "billerType": "FETCH_PAY",
                    "billerCategory": "Loan Repayment",
                    "billerCoverage": "IND",
                    "billerResponseType": "SINGLE",
                    "billerDescription": "Please enter the Application ID/Loan Account No.. Do not include any special characters.",
                    "planMDMRequirement": "NOT_SUPPORTED",
                    "adhocBiller": true,
                    "paymentAmountExactness": "Exact"
                }
            ],
            "pageNo": 0,
            "pageSize": 10,
            "totalElements": 22234,
            "totalPages": 2224,
            "generalResp": {
                "statusCode": "200",
                "status": "success",
                "message": "Billers retrieved successfully",
                "remarks": ""
            }
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
        "data": "Please use valid name"
    }
```

</TabItem>
</Tabs>

### Response Code

import ResponseCode from "@site/src/pages/ResponseCode"
import response from "@site/src/common/ResponseCodeJson"

<ResponseCode data={response}/>