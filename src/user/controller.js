import { user_model } from "./model";
import { compare, genSalt, hash } from "bcrypt";
import config from "../config";
import jwt from "jsonwebtoken";

export async function register_controller(body) {

  const { name, mobile, email, password } = body;
  try {
    const isUser = await user_model.findOne({ EMAIL: email });

    if (isUser) {
      return Promise.reject("user alredy registered with this email");
    }
    const hash_password = await hashPassword(password);
    const user = new user_model({
      NAME: name,
      MOBILE: mobile,
      EMAIL: email,
      PASSWORD: hash_password,
    });

    await user.save();



    const token = generateToken(user._id)

    return Promise.resolve({ response: "user registered successfully!", token: token })
  }
  catch (err) {

    return Promise.reject(err)
  }
}




export async function login_controller(body) {

  const { email, password } = body;
  try {
    const user = await user_model.findOne({ EMAIL: email });

    if (user) {
      const password_valid = await compare(password, user.PASSWORD);

      if (password_valid) {

        const token = generateToken(user._id)
        console.log("the token that we are returning is : ", token)

        return Promise.resolve({ response: "user logedin successfully!", token: token })
      } else {
        return Promise.reject(false, "credential did not matched");
      }
    } else {
      return Promise.reject(false, "user is not registered with this email");
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

function generateToken(_id) {
  const data = {
    _id: _id,
  };

  const token = jwt.sign(data, config.secret_key);

  return token;
}


async function hashPassword(password) {
  try {
    const salt = await genSalt(10);
    const hash_password = await hash(password, salt);
    return hash_password;
  } catch (err) {
    return err;
  }
}
