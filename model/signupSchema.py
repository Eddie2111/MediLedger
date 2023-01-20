from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/");
db = client["MediLedger"];

profile_schema = {
    "name": {
        "type": "string",
        "required": True
    },
    "email": {
        "type": "string",
        "required": True
    },
    "password": {
        "type": "string",
        "required": True
    },
    "category":{
        "type":"string",
        "enum": [  
            "MANUFRACTURER", "SUPPLIER"
            "DISTRIBUTOR", "RETAILER"
            "CUSTOMER"]
    },
    "accessRight": {
        "type": "boolean",
        "required": True
    },
    "nidNumber": {
        "type": "string",
        "required": True
    },
    "licenseNumber": {
        "type": "string",
        "required": True
    },
    "phoneNumber": {
        "type": "string",
        "required": True
    },
    "created_at": {
        "type": "string",
        "required": True
    },
    "updated_at": {
        "type": "string",
        "required": True
    }
}

profiles = db.create_collection("profiles",validator={"$jsonSchema": profile_schema})
