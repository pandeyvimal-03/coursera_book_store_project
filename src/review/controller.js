import { books_modal } from "../books/modal"
import { review_modal } from "./modal"

export async function GetReview(book_id){
   try{
          const reviews = await review_modal.find({BOOK : book_id})

          const  review_return  = reviews.map((ele)=>{
          return {_id : ele._id , review : ele.REVIEW}
         })
          return Promise.resolve(review_return)
   }
   catch(err){
    return Promise.reject(err)
   }
}



export async function addReview(body){
    const {review , book_id , user_id} = body

    try{
           const rev = new review_modal({
            REVIEW : review , 
            BOOK : book_id , 
            USER : user_id
           })

           await rev.save();

           return Promise.resolve(rev)
    }
    catch(err){
         
        return Promise.reject(err)
    }
}



export async function updateReview(body){
    const { updated_review, review_id , book_id , user_id} = body;
    try{
          const review = await review_modal.findById(review_id)
          if(!review){
            return Promise.reject("NO review with this id exist")
          }
         
         if(review.USER.equals(user_id) && review.BOOK.equals(book_id)){
            review.REVIEW = updated_review;
            await review.save(); 
            return Promise.resolve({Message : "Reviw updated successfully!" , review : review})
         }
         else{
           return Promise.reject("Can not be edited!")
         }

    }
    catch(err){
        return Promise.reject(err)
    }
}

export async function deleteReview(body){
  const {review_id , user_id} = body;
  try{
        const review = await review_modal.findById(review_id)
        if(!review){
          return Promise.reject("No review exists with provided id")
        }

        if(!(review.USER.equals(user_id))){
          return Promise.reject("You don't have permissions to delete another ones review")
        }

      await  review.deleteOne()
      return Promise.resolve("Review got deleted successfully!")

  }
  catch(err){
    return Promise.reject(err)
  }
}