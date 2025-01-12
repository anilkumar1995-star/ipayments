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
        "Parameter": "cardId",
        "DataType": "String",
        "MaxLength": 25,
        "Required": "Required",
        "value":"cardId (Unique card id from verify card API)"
    }
]
export default data;