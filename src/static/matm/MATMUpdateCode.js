const data = [
    {
        "Parameter": "merchantCode",
        "DataType": "String",
        "MaxLength":50,
        "Required": "Required",
        "value":"Merchant Code"
    },
    {
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Client Reference ID"
    },
    {
        "Parameter": "bankmessage",
        "DataType": "String",
        "MaxLength": 100,
        "Required": "Required",
        "value":"Bank Message"
    },
    {
        "Parameter": "bankresponsecode",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Bank Response Code"
    },
    {
        "Parameter": "reference",
        "DataType": "Object",
        "MaxLength":100,
        "Required": "Required",
        "value":"Reference"
    },
    {
        "Parameter": "sdkVer",
        "DataType": "String",
        "MaxLength":10,
        "Required": "Required",
        "value":"Route Type"
    },
    {
        "Parameter": "macAddress",
        "DataType": "String",
        "MaxLength": 30,
        "Required": "Required",
        "value":"MAC Address"
    },
    {
        "Parameter": "imsi",
        "DataType": "String",
        "MaxLength":50,
        "Required": "Required",
        "value":"IMSI Code"
    }
]
export default data;
