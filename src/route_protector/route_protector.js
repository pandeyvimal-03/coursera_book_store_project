import jwt from "jsonwebtoken";
import { fail_service } from "../utils";
import config from "../config";
import { user_model } from "../user/model";

export async function route_protector(req, res, next) {
  const token = req.cookies.token;
 
  if (!token) {
    return res.send(fail_service("You are not authorize for this route"));
  }
  try {
    const payload = jwt.verify(token, config.secret_key);
    const user = await user_model.findById(payload._id);
    if (!user) {
      return res.send(fail_service("You are not authorized for this route"));
    }

    next();
  } catch (err) {
    console.log("our error in protector is : ", err)
    return res.send(fail_service(err));
  }
}
