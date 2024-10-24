
const data = [
    {
        "Parameter": "primaryKeyId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required ( In case of ICICI )",
        "value":"You will get a primaryKeyId from send OTP Api Response"
    },
    {
        "Parameter": "encodeFPTxnId",
        "DataType": "String",
        "MaxLength": 100,
        "Required": "Required",
        "value":"You will get a encodeFPTxnId from send OTP Api Response "
    },
    {
        "Parameter": "rdRequest",
        "DataType": "String",
        "MaxLength": "Pid Data",
        "Required": "Required",
        "value":"Biometric data details"
    }
]
export default data;
