const data = [
    {
        "Parameter": "billerId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Merchant biller Id"
    },
    {
        "Parameter": "customerMobileNo",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Merchant Mobile No"
    },
     {
        "Parameter": "customerEmail",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Customer email Id"
    },
     {
        "Parameter": "customerAadhaar",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Optional",
        "value":"Customer Aadhaar Id"
    },
     {
        "Parameter": "customerPan",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Optional",
        "value":"Customer Pan Id"
    },
    
    {
        "Parameter": "customerParamsRequest",
        "DataType": "object",
        "MaxLength": 5000,
        "Required": "Required",
        "value":"Customer Request Parameter"
    }
]
export default data;