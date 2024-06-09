import mongoose from "mongoose";
import collection from "../collection/collection";
const {Schema}  = mongoose

const user_schema = new Schema({
    NAME : {
        type : String,
        required : true
    },
    MOBILE : {
        type : String,
        required : true, 
        
    },
    EMAIL : {
        type : String,
        required : true
    },
    PASSWORD : {
        type : String,
        required : true
    }
    
})

export const user_model = mongoose.model(collection.user , user_schema)