const data = [
    {
        "Parameter": "tenantId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Merchant Bill Tenant Id"
    },
    {
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 30,
        "Required": "Required",
        "value": "Merchant Unique Reference Number"
    },
    {
        "Parameter": "amount",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value": "Bill Payment Amount"
    },
    {
        "Parameter": "billId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Merchant Bill Id"
    },
    {
        "Parameter": "customerMobileNo",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Merchant Mobile No"
    },
    {
        "Parameter": "billerId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Merchant biller Id"
    },
    {
        "Parameter": "customerParams",
        "DataType": "object",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Customer Request Parameter"
    }
]
export default data;