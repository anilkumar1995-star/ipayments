const data = [
    {
        "Parameter": "otp",
        "DataType": "String",
        "MaxLength": 8,
        "Required": "Required",
        "value":"Received on Merchant Mobile Number "
    },
    {
        "Parameter": "primaryKeyId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required ( In case of ICICI )",
        "value":"You will get a primaryKeyId from send OTP Api Response "
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
        "value":"Current location latitude "
    },
    {
        "Parameter": "encodeFPTxnId",
        "DataType": "String",
        "MaxLength": 100,
        "Required": "Required",
        "value":"You will get a encodeFPTxnId from send OTP Api Response "
    }
]
export default data;