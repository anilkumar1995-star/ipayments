const data = [
    {
        "Parameter": "clientRefId",
        "DataType": "Number",
        "MaxLength":30,
        "Required": "Required",
        "value":"Unique Reference number"
    },
    {
        "Parameter": "templateId",
        "DataType": "String",
        "MaxLength":30,
        "Required": "Required",
        "value":"Temaplate ID"
    },

     {
        "Parameter": "shortUrl",
        "DataType": "String",
        "MaxLength":300,
        "Required": "Required",
        "value":"shortUrl"
    },

     {
        "Parameter": "recipients",
        "DataType": "object",
        "MaxLength":300,
        "Required": "Required",
        "value":"shortUrl"
    }
]
export default data;
