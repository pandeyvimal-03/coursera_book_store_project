import mongoose from "mongoose";
import collection from "../collection/collection";
const {Schema}  = mongoose;
const ObjectId = mongoose.Types.ObjectId


const review_schema = new Schema({
    REVIEW : {
       type : String,
       required : true
    },
    BOOK : {
        type : ObjectId ,
        ref : "books"
    },
    USER : {
        type : ObjectId,
        ref : "user"
    }
})

export const review_modal = mongoose.model(collection.review , review_schema)