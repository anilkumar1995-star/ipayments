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
        "Parameter": "accountNo",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Account no"
    },{
        "Parameter": "ifsc",
        "DataType": "String",
        "MaxLength": 11,
        "Required": "Required",
        "value":"ifsc"
    },{
        "Parameter": "bankName",
        "DataType": "String",
        "MaxLength": 200,
        "Required": "Required",
        "value":"bankName"
    },{
        "Parameter": "accountHolderName",
        "DataType": "String",
        "MaxLength": 200,
        "Required": "Required",
        "value":"accountHolderName"
    },{
        "Parameter": "apiType",
        "DataType": "String",
        "MaxLength": 5,
        "Required": "Required",
        "value":"apiType  {b2b|b2c}"
    }
]
export default data;