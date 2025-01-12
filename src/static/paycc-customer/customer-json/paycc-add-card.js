const data = [
    {
        "Parameter": "merchantCode",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Merchant unique Code(You will get merchantCode from Merchant Onboarding API)"
    }
    ,{
        "Parameter": "customerId",
        "DataType": "String",
        "MaxLength": 30,
        "Required": "Required",
        "value":"Customer Id Code(You will get customerId from Customer Onboarding API)"
    },{
        "Parameter": "cardName",
        "DataType": "String",
        "MaxLength": 100,
        "Required": "Required",
        "value":"cardName"
    },{
        "Parameter": "cardNo",
        "DataType": "String",
        "MaxLength": 16,
        "Required": "Required",
        "value":"cardNo"
    },{
        "Parameter": "expireDate",
        "DataType": "String",
        "MaxLength": 5,
        "Required": "Required",
        "value":"expireDate"
    },{
        "Parameter": "apiType",
        "DataType": "String",
        "MaxLength": 5,
        "Required": "Required",
        "value":"apiType  {b2b|b2c}"
    },{
        "Parameter": "amount",
        "DataType": "String",
        "MaxLength": 7,
        "Required": "Required",
        "value":"amount"
    },{
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 7,
        "Required": "Required",
        "value":"clientRefId (Unique client reference id)"
    }
]
export default data;