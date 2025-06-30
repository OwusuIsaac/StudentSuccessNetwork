import User from  "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateJWT from "../utils/generateToken.js"

export const SignUp = async (req, res) => {
    console.log("here 1");
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            password : hashedPassword,
        });

        await newUser.save();
        generateJWT(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
        });

    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const Login = async (req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const confirmPassword = await bcrypt.compare(password,user?.password || "");

        if(!user || !confirmPassword){
            return res.status(400).json("Invalid Credentials");
        }

        generateJWT(user._id, res);

        return res.status(200).json({
            _id : user._id,
            username : user.username
        })

    }catch (error){
        console.log("Error in Loging in", error);
        return res.status(500).json({error : "Internal Server Error"})
    }
};

export const Logout = (req,res) => {
    try{
      res.cookie("jwt","",{maxAge : 0 });
      res.status(200).json("Logged out successfully!");
    }catch(error){
        console.log("Error loging out", error);
        return res.status(400).json({error : "Internal Service Error"});
    }
};


