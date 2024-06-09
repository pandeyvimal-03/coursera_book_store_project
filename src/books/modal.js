import mongoose from "mongoose";
import collection from "../collection/collection";
const {Schema} = mongoose;
const ObjectId = Schema.Types.ObjectId;


const books_schema = new Schema({
    TITLE : {
        type : String ,
        required : true
    },
    DESCRIPTION : {
          type : String
    },
    ISBN : {
        type : String ,
        required : true
    },
    AUTHOR : {
         type : String,
         required : true
    },
    REVIEW : {
        type : ObjectId,
        ref : "review"
    }
    

})


export const books_modal = mongoose.model(collection.books , books_schema)