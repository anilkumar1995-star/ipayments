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
        "Parameter": "redirectUrl",
        "DataType": "String",
        "MaxLength": 300,
        "Required": "Required",
        "value":"redirectUrl"
    },{
        "Parameter": "cardId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"cardId (You will get cardId from add card API)"
    },{
        "Parameter": "bankId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "no",
        "value":"bankId (You will get bankId from add bank API)"
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
        "Parameter": "categoryId",
        "DataType": "String",
        "MaxLength": 2,
        "Required": "Required",
        "value":"categoryId (You will get categoryId from category list API)"
    },{
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 7,
        "Required": "Required",
        "value":"clientRefId (Unique client reference id)"
    }
]
export default data;