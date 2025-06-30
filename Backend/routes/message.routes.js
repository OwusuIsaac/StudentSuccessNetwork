import express from "express"
import {send, receive} from "../controllers/message.controller.js"

const route = express.Router();

route.post("/send/:id",send);

export default route;