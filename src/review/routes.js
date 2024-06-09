import express, { response } from "express"
import { GetReview  ,updateReview , addReview , deleteReview } from "./controller"
import { fail_service, success_service } from "../utils";

const review_routes = express.Router();

review_routes.get('/get-review' , (req , res)=>{
    const book_id = req.query.book_id;
    
    GetReview(book_id)
             .then((response)=>{
              console.log("the response that we got is : ", response)
                res.send(success_service(response))
             })
             .catch((error)=>{
                res.send(fail_service(error))
             })
})

review_routes.post('/add-review' , (req ,res)=>{
    addReview(req.body)
              .then((response)=>{
                res.send(success_service(response))
              })
              .catch((error)=>{
                res.send(fail_service(error))
              })
})

review_routes.put('/update-review' , (req , res)=>{
  
    updateReview(req.body)
                  .then((response)=>{
                    res.send(success_service(response))
                  })
                  .catch((error)=>{
                    res.send(fail_service(error))
                  })
})

review_routes.delete('/delete-review', (req, res)=>{
  deleteReview(req.body)
                .then((response)=>{
                  res.send(success_service(response))
                })
                .catch((error)=>{
                  res.send(fail_service(error))
                })
})

export default review_routes;