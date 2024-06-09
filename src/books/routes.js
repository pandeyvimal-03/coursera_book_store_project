import express from 'express'
import { get_books , get_books_by_isbn , get_books_by_author } from './controller'
import { success_service , fail_service } from '../utils'
const book_routes = express.Router()

book_routes.get('/get-books' , (req , res)=>{
    
    get_books()
           .then((response)=>{
             res.send(success_service(response))
           })
           .catch((error)=>{
            res.send(fail_service(error))
           })
})

book_routes.get('/get-books/:isbn' , (req , res)=>{
    const isbn = req.params.isbn
    console.log("the isbn that we got is : ", isbn)
          get_books_by_isbn(isbn)
                           .then((response)=>{
                            res.send(success_service(response))
                           })
                           .catch((error)=>{
                            res.send(fail_service(error))
                           })
})

book_routes.get('/get-books-author/:author' , (req ,res)=>{
    console.log("we are reaching here")
      const author = req.params.author
      get_books_by_author(author)
                       .then((response)=>{
                        res.send(success_service(response))
                       })
                       .catch((error)=>{
                        res.send(fail_service(error))
                       })
})



export default book_routes;