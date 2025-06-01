import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import connectMongoDB from "./Database/connectMongoDB.js";


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use("/api/auth", authroutes);

app.get("/",(req,res) => {
    res.send("HelloWorld!");
});

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();

});


