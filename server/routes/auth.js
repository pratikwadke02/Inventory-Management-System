import express from 'express';
import { signin, signup } from "../controllers/user.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;

// router.post("/", async(req, res)=> {
//     try{
//         const{error} = validate(req.body);
//         if(error){
//             return res.status(400).send({message: error.details[0].message});
//         }
//         const user = await User.findOne({email: req.body.email});
//         if(!user){
//             return res.status(401).send({message: "Invalid email or password"});
//         }
//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         if(!validPassword){
//             return res.status(401).send({message: "Invalid email or password"});
//         }
//         const token = user.generateAuthToken();
//         res.status(200).send({data: token, message: "User logged in successfully"});
//     }catch(error){
//         res.status(500).send({message: "Internal Server Error"});
//     }    
// });

// const validate = (data) => {
//     const schema = joi.object(
//         {
//             email: joi.string().email().required().label("Email"),
//             password: joi.string().min(6).max(255).required().label("Password")
//         }
//     );
//     return schema.validate(data);
// }


