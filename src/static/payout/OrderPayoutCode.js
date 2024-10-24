const data = [
    {
        "Parameter": "contactId",
        "DataType": "String",
        "MaxLength":20,
        "Required": "Optional",
        "value":"Unique Contact Code"
    },
    {
        "Parameter": "amount",
        "DataType": "String",
        "MaxLength":5,
        "Required": "Required",
        "value":"Recharge Amount"
    },
    {
        "Parameter": "purpose",
        "DataType": "String",
        "MaxLength":30,
        "Required": "Required",
        "value":"Purpose of Payout Order"
    },
    {
        "Parameter": "mode",
        "DataType": "String",
        "MaxLength":15,
        "Required": "Required",
        "value":"Payout Order Mode"
    },
    {
        "Parameter": "narration",
        "DataType": "String",
        "MaxLength":15,
        "Required": "Required",
        "value":"Payout order narration"
    },
    {
        "Parameter": "remark",
        "DataType": "String",
        "MaxLength":15,
        "Required": "Required",
        "value":"Payout order remark"
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
