import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import  {signUpValidate}  from "../middleware/signup.js";
import  {logInValidate}  from "../middleware/login.js";

// import User from "../models/user.js";

const SALT = 10

export const signup = async (req, res) => {
    console.log("hello")
    try{
        const {error} = signUpValidate(req.body);
        if(error){
            console.log(error);
            return res.status(400).send({message: error.details[0].message});
        }
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).send({message: "User with given email already exists"});
        }
        const salt = await bcrypt.genSalt(Number(SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export const signin = async (req, res) => {
    // console.log("hello");
    try{
        const{error} = logInValidate(req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(401).send({message: "Invalid email or password"});
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(401).send({message: "Invalid email or password"});
        }
        const token = user.generateAuthToken();
        res.status(200).send({data: user.id, message: "User logged in successfully"});
    }catch(error){
        console.log(error);
        res.status(500).send({message: "Internal Server Error"});
    }    
}

export const getProfile = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        console.log(user);
        res.status(200).send({userData: user});
    }catch(error){
        console.log(error);
        res.status(500).send({message: "Internal Server Error"});
    }
} 