const data = [
    {
        "Parameter": "billerId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Merchant biller Id"
    },
     {
        "Parameter": "billId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Value from fetch bill API"
    },
     {
        "Parameter": "clientRefId",
        "DataType": "String",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Unique reference Id from merchant side"
    },
    
    
    {
        "Parameter": "customerMobileNo",
        "DataType": "String",
        "MaxLength": 10,
        "Required": "Required",
        "value":"Merchant Mobile No"
    },
     {
        "Parameter": "customerInfo",
        "DataType": "object",
        "MaxLength": 50,
        "Required": "Required",
        "value":"Customer Info object parameter is customerMobile, customerEmail, customerAadhaar, customerPan"
    },

    {
        "Parameter": "customerParams",
        "DataType": "object",
        "MaxLength": 5000,
        "Required": "Required",
        "value":"Customer Request Parameter"
    },
    {
         "Parameter": "billerResponse",
        "DataType": "object",
        "MaxLength": 5000,
        "Required": "Required",
        "value":"Value from fetch bill API"
        
    },
     {
         "Parameter": "paymentMethod",
        "DataType": "object",
        "MaxLength": 5000,
        "Required": "Required",
        "value":"Value from fetch bill API"
        
    },
     {
         "Parameter": "paymentInfo",
        "DataType": "object",
        "MaxLength": 5000,
        "Required": "Required",
        "value":"Value from fetch bill API"
        
    },
    

]
export default data;