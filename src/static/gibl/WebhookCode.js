const data = [
    {
        "Parameter": "circleId",
        "DataType": "String",
        "MaxLength":5,
        "Required": "Required",
        "value":"Circle Id (You will get circleId from the Get Circle API) "
    },
    {
        "Parameter": "rechargeTypeId",
        "DataType": "String",
        "MaxLength":3,
        "Required": "Required",
        "value":"rechargeType Id (You will get rechargeTypeId from Recharge Type Api)"
    },
    {
        "Parameter": "operatorId",
        "DataType": "String",
        "MaxLength":3,
        "Required": "Required",
        "value":"operator Id (You will get operatorId from Get Operator API )"
    },
    {
        "Parameter": "phone",
        "DataType": "String",
        "MaxLength":10,
        "Required": "Required",
        "value":"Customer Phone Number Or Customer Id (for DTH)"
    },
    {
        "Parameter": "amount",
        "DataType": "String",
        "MaxLength":5,
        "Required": "Required",
        "value":"Recharge Amount"
    },
    {
        "Parameter": "clientRefId",
        "DataType": "Number",
        "MaxLength":30,
        "Required": "Required",
        "value":"Unique Reference number"
    }
]
export default data;
