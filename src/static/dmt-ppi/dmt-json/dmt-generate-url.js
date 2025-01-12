const data = [
    {
        "Parameter": "outletId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"outlet id unique Code(You will get outletId from agent onboarding API)"
    },{
        "Parameter": "mobile",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Agent mobile"
    }, {
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 30,
        "Required": "Required",
        "value": "Merchant Unique Reference Number"
    }, {
        "Parameter": "redirectUrl",
        "DataType": "String",
        "MaxLength": 200,
        "Required": "Required",
        "value":"redirect url"
    },
    
 
    
]
export default data;