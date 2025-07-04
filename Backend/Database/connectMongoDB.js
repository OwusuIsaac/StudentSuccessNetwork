import mongoose from "mongoose";

const connectMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MongoDB);
        console.log("Connected to MongoDB");

    }catch(error){
        console.log("Error connecting to MongoDB : ", error.message);
    }
};

export default connectMongoDB;

