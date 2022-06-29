import express from "express"
import mongoose from "mongoose"

const router = express.Router();

export const test = async (req, res) => {
    console.log("hello");
    res.status(200).send({ message: "hello" });

}

export default router;