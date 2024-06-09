import express from  'express'
 import { initDB } from './connection/connection'
 import config from './config'
 import { GlobalRoutes } from './global_routes/global_routes'
 import CookieParser from 'cookie-parser'


const app =  express()

 app.use(CookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


 initDB()
 GlobalRoutes(app)

app.get('/' , (req , res)=>{
    res.send(`Book_Store is running on port 80000`)
})




app.listen(config.port, ()=>{
    console.log(`connected on port ${config.port}`)
} )