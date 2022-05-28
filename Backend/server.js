import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from 'colors'
import dotenv from 'dotenv'
import  './db/db.js'
import fileUpload from 'express-fileupload'
import cookieParser from "cookie-parser";

import templateRouter from './routes/templateRouter.js'
import submissionRouter from "./routes/submissionRouter.js";
import userRouter from "./routes/userRoutes/userRoutes.js"
import markingRoutes from "./routes/markingRoutes/markingRoutes.js"
import presentationMarksRoutes from "./routes/presentationMarksRoutes/presentationMarksRoutes.js";
import upload from './routes/userRoutes/upload.js'
import studentRouter from "./routes/studentRoute/studentRouter.js";
import topicRegisterRouter from "./routes/topicRegisterRoute/topicRegisterRouter.js";
import requestSupervisorRouter from "./routes/requestSupervisorRoute/requestSupervisorRouter.js";

const app = new express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles: true
}))
app.use(bodyParser.urlencoded({ extended: true }));    
app.use(bodyParser.json());
//app.use(express.json());

app.use("/template",templateRouter);
app.use("/submission",submissionRouter);

//routes
app.use('/user', userRouter);

app.use('/api', upload);

//marking controller
app.use('/markings', markingRoutes);
app.use(studentRouter);
app.use(topicRegisterRouter);
app.use(requestSupervisorRouter);
const PORT = process.env.PORT || 8070

app.listen(PORT,()=>{

  console.log(`Server is up and running on ${PORT}`.blue);

});

