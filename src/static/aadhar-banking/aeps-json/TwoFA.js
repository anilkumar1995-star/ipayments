const data = [
    {
        "Parameter": "merchantLoginId",
        "DataType": "String",
        "MaxLength": 20,
        "Required": "Required",
        "value":"Merchant unique Code(You will get merchantLoginId from Merchant Onboarding API)",
        "MaxLength":20
    },
    {
        "Parameter": "rdRequest",
        "DataType": "String",
        "MaxLength": "Pid Data",
        "Required": "Required",
        "value":"Biometric data details"
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
    }
]
export default data;