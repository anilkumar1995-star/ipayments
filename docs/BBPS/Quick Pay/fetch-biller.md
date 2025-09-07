---
id: id-fetch-quickbill-by-billerid
title: Fetch Biller by BillerId
description: Fetch Biller by BillerId
slug: /v1/service/bbps/quickbill/fetch/biller/fetchByBillerId
sidebar_position: 1
---

Fetch Biller by BillerId

:::tip Postman Collection

<a href="https://www.google.com" target="_blank">BBPS</a>

:::

### URL

import Highlight from '@site/src/components/Highlights';

<Highlight className="get">GET</Highlight> : <strong>/v1/service/bbps/quickbill/fetch/biller/fetchByBillerId</strong>

### Headers

import HeaderMarkdown from "@site/src/pages/HeaderMarkdown"
import header from "@site/src/common/HeaderCode"

<HeaderMarkdown data={header}/>

## Body Params

import '@site/src/css/bodyParam.css'
import BodyParam from "@site/src/pages/BodyParam"
import data from "@site/src/static/bbps/FetchByBillerIdCode"

<BodyParam data={data}/>

### Request

```c title="Example Request"
    curl --location --request GET '/v1/service/bbps/quickbill/fetch/biller/fetchByBillerId' \
        --header 'Content-Type: application/json' \
        --header 'Authorization: Basic Og==' \
        --data '{
            "billerId" : "UPPC00000UTPAH"
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
    "data": [
        {
            "billerId": "UPPC00000UTPAH",
            "billerAliasName": "UPPCL-Postpaid and Smart Prepaid Meter Recharge",
            "billerName": "UPPCL-Postpaid and Smart Prepaid Meter Recharge",
            "billerCategory": "Electricity",
            "billerAdhoc": "false",
            "billerCoverage": "IND-UTP",
            "billerFetchRequiremet": "MANDATORY",
            "billerPaymentExactness": "Exact and above",
            "billerSupportBillValidation": "NOT_SUPPORTED",
            "billerInputParams": [
                {
                    "paramsList": [
                        {
                            "paramName": "Consumer Number",
                            "dataType": "NUMERIC",
                            "isOptional": "false",
                            "minLength": "10",
                            "maxLength": "10",
                            "regEx": "^[0-9]{10}$",
                            "visibility": "true"
                        },
                        {
                            "paramName": "District-Discom",
                            "dataType": "ALPHANUMERIC",
                            "isOptional": "false",
                            "minLength": "5",
                            "maxLength": "250",
                            "regEx": "^[0-9A-Za-z\\s\\-\\,\\.]{5,250}$",
                            "values": "Agra-DVVNL,Aligarh-DVVNL,Ambedkar Nagar-MVVNL,Amethi-MVVNL,Amroha-PVVNL,Auraiya-DVVNL,Ayodhya-MVVNL,Azamgarh-PUVNL,Bagpat-PVVNL,Bahraich-MVVNL,Ballia-PUVNL,Balrampur-MVVNL,Banda-DVVNL,Barabanki-MVVNL,Bareilly-MVVNL,Basti-PUVNL,Bijnor-PVVNL,Budaun-MVVNL,Bulandshahr-PVVNL,Chandauli-PUVNL,Chitrakoot-DVVNL,Deoria-PUVNL,Etah-DVVNL,Etawah-DVVNL,Farrukhabad-DVVNL,Fatehpur-PUVNL,Firozabad-DVVNL,Gautam Buddha Nagar-PVVNL,Ghaziabad-PVVNL,Ghazipur-PUVNL,Gonda-MVVNL,Gorakhpur-PUVNL,Hamirpur-DVVNL,Hapur District-PVVNL,Hardoi-MVVNL,Hathras-DVVNL,Jalaun-DVVNL,Jaunpur-PUVNL,Jhansi-DVVNL,Kannauj-DVVNL,Kanpur Dehat-DVVNL,Kanpur Nagar-DVVNL,Kanpur Nagar-KESCO,Kasganj-DVVNL,Kaushambi-PUVNL,Kushinagar-PUVNL,Lakhimpur Kheri-MVVNL,Lalitpur-DVVNL,Lucknow-MVVNL,Maharajganj-PUVNL,Mahoba-DVVNL,Mainpuri-DVVNL,Mathura-DVVNL,Mau-PUVNL,Meerut-PVVNL,Mirzapur-PUVNL,Moradabad-PVVNL,Muzaffarnagar-PVVNL,Pilibhit-MVVNL,Pratapgarh-PUVNL,PrayagRaj-PUVNL,Raebareli-MVVNL,Rampur-PVVNL,Saharanpur-PVVNL,Sambhal-PVVNL,Sant Kabir Nagar-PUVNL,Sant Ravidas Nagar-Bhadohi-PUVNL,Shahjahanpur-MVVNL,Shamli-PVVNL,Shravasti-MVVNL,Siddharthnagar-PUVNL,Sitapur-MVVNL,Sonbhadra-PUVNL,Sultanpur-MVVNL,Unnao-MVVNL,Varanasi-PUVNL",
                            "visibility": "true"
                        }
                    ]
                }
            ],
            "billerAmountOptions": "BASE_BILL_AMOUNT,,,",
            "billerPaymentModes": "Internet Banking, Debit Card, Credit Card, Prepaid Card, Cash, UPI, Wallet, AEPS, Account Transfer",
            "rechargeAmountInValidationRequest": "",
            "billerDescription": "",
            "supportPendingStatus": "No",
            "supportDeemed": "Yes",
            "billerTimeout": "",
            "billerPaymentChannels": [
                {
                    "paymentChannelList": [
                        {
                            "paymentChannelName": "INT",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "INTB",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "MOB",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "MOBB",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "POS",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "MPOS",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "ATM",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "BNKBRNCH",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "KIOSK",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "AGT",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        },
                        {
                            "paymentChannelName": "BSC",
                            "minAmount": "100",
                            "maxAmount": "5000000000"
                        }
                    ]
                }
            ],
            "billerAdditionalInfo": [
                {}
            ],
            "billerAdditionalInfoPayment": [
                {}
            ],
            "planAdditionalInfo": [
                {}
            ],
            "planMdmRequirement": "NOT_SUPPORTED",
            "billerResponseType": "SINGLE",
            "billerPlanResponseParams": [
                {}
            ],
            "interchangeFeeCCF1": {
                "feeCode": "CCF1",
                "feeDirection": "C2B",
                "flatFee": "0",
                "percentFee": "0.00",
                "feeMinAmt": "0",
                "feeMaxAmt": "999999999"
            },
            "billerStatus": "ACTIVE"
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