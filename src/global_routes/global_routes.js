import review_routes from "../review/routes";
import book_routes from "../books/routes";
import user_routes from "../user/routes";
import { route_protector } from "../route_protector/route_protector";


export function GlobalRoutes(app){
   
   app.use('/review' , route_protector ,review_routes)
   app.use('/book'  , route_protector , book_routes)
   app.use('/user', user_routes)
}

