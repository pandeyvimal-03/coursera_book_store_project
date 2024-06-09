import dotenv from "../dotenv"

console.log('our port in config is : ', dotenv.PORT)
export default {
    port : dotenv.PORT,
    secret_key : dotenv.SECRET_KEY,
    mongo_connect : {
        url : `mongodb://127.0.0.1:27017/${dotenv.DB}`
    }
}