import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import messageroutes from "./routes/message.routes.js";
import connectMongoDB from "./Database/connectMongoDB.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authroutes);
app.use("/api/message", messageroutes);

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();

});


