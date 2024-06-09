import mongoose from "mongoose";
import config from "../config";

 export function initDB (){
    mongoose.connect(config.mongo_connect.url)
    .then((res)=>{
        console.log("Database connected successfully !")
    })
    .catch((err)=>{
        console.log("an error occured  : " , err)
    })
    .finally(()=>{
        console.log("connection attempt successfull")
    })
   
}
