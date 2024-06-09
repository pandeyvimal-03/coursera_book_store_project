import express, { response } from "express";
import { register_controller, login_controller } from "./controller";
import { fail_service, success_service } from "../utils";
const user_routes = express.Router();

user_routes.post("/register", (req, res) => {
  register_controller(req.body)
    .then(({response , token}) => {
      res.cookie('token' , token , {sameSite : "none" , httpOnly : true , maxAge : 900000}).send(success_service(response));
    })
    .catch((error) => {
       res.send(fail_service(error));
    });
});

user_routes.post("/login", (req, res) => {
    login_controller(req.body)
      .then(({response , token})=>{
        res.cookie('token' , token , {sameSite : "none" , httpOnly : true , maxAge : 900000}).send(success_service(response));
      })
      .catch((error)=>{
        res.send(fail_service(error))
      })
});

export default user_routes;
