import { books_modal } from "./modal";


export async function get_books(){
    try{
        const books = await books_modal.find();
        return Promise.resolve(books)
    }
    catch(err){
        return Promise.reject(err)
    }
   
}

export async function get_books_by_isbn(isbn){
    try{
        const books = await books_modal.find({ISBN : isbn})
        return Promise.resolve(books)
    }
    catch(err){
        return Promise.reject(err)
    }
   
}

export async function get_books_by_author(author){
    try{
        const books = await books_modal.find({AUTHOR : author})
        return Promise.resolve(books)
    }
    catch(err){
        return Promise.reject(err)
    }
}