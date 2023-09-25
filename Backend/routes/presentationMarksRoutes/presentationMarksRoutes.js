import express from "express";
const router = express.Router();
import {
  addPresentationMark,
  getPresentationMarks,
  getMarksByType,
} from "../../controllers/evaluatePresentationController/evaluatePresentationController.js";

//add the presentation marks to the database
router.post("/", addPresentationMark);

//get all the presentation marks
router.get("/", getPresentationMarks);

//get the presentation marks of a specific presentation
router.get("/marks/:type", getMarksByType);

export default router;
