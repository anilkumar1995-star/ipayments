const data = [
    {
        "Parameter": "merchantLoginId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Merchant unique Code(You will get merchantLoginId from Merchant Onboarding API)"
    },
    {
        "Parameter": "aadhaar",
        "DataType": "String",
        "MaxLength": 12,
        "Required": "Required",
        "value":"Customer Aadhaar Number"
    },
    {
        "Parameter": "txnType",
        "DataType": "String",
        "MaxLength": "Fixed",
        "Required": "Required",
        "value":"Api Service Type"
    },{
        "Parameter": "mobile",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Customer Mobile Number"
    },
    {
        "Parameter": "rdRequest",
        "DataType": "String",
        "MaxLength": "Pid Data",
        "Required": "Required",
        "value":"Biometric data details"
    },
    {
        "Parameter": "bankiin",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Unique bank identification number (You will get it from list of banks API)"
    },
    {
        "Parameter": "latitude",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Current location latitude"
    },
    {
        "Parameter": "longitude",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Current location latitude"
    },
    {
        "Parameter": "pan",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Merchant Pan Address "
    }
]
export default data;