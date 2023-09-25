import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import "./db/db.js";
import fileUpload from "express-fileupload";

import templateRouter from "./routes/submissionRouter/templateRouter.js";

import submissionRouter from "./routes/submissionRouter/submissionRouter.js";
import userRouter from "./routes/userRoutes/userRoutes.js";
import pendingUserRouter from "./routes/userRoutes/pendingUserRoutes.js";
import markingRoutes from "./routes/markingRoutes/markingRoutes.js";
import presentationMarksRoutes from "./routes/presentationMarksRoutes/presentationMarksRoutes.js";
import upload from "./routes/userRoutes/upload.js";
import studentRouter from "./routes/studentRoute/studentRouter.js";
import topicRegisterRouter from "./routes/topicRegisterRoute/topicRegisterRouter.js";
import requestSupervisorRouter from "./routes/requestSupervisorRoute/requestSupervisorRouter.js";
import topicSubmitDocRouter from "./routes/topicDocSubmitRoute/topicSubmitDocRouter.js";
import allocatePanelRouter from "./routes/allocatePanelRoutes/allocatePanelRouter.js";
import stdSubmitDocRouter from "./routes/stdSubmitDocRoute/stdSubmitDocRouter.js";

import documentMarksRoutes from "./routes/documentMarksRoutes/documentMarksRoutes.js";

import chatForumRoutes from "./routes/chatForumRoutes/chatForumRoutes.js";
import ChatReplyRoutes from "./routes/chatForumRoutes/chatReplyRoutes.js";
const app = new express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

app.use("/template", templateRouter);
app.use("/submission", submissionRouter);

//routes
app.use("/user", userRouter);
app.use("/pending", pendingUserRouter);
app.use("/api", upload);
app.use("/documentMarks", documentMarksRoutes);

//marking
app.use("/markings", markingRoutes);

//presentation
app.use("/presentationMarks", presentationMarksRoutes);

//chatForum routes
app.use("/chatForum", chatForumRoutes);

//chatReply routes
app.use("/chatReply", ChatReplyRoutes);

app.use(studentRouter);
app.use(topicRegisterRouter);
app.use(requestSupervisorRouter);

app.use("/topicSubmitDoc", topicSubmitDocRouter);
app.use("/allocatePanel", allocatePanelRouter);
app.use("/stdSubmitDoc", stdSubmitDocRouter);

// app.use(studentRouter);
// app.use(topicRegisterRouter);
// app.use(requestSupervisorRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`.blue);
});
