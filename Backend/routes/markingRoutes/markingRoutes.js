import express from "express";
const router = express.Router();
import {
  addMarkingScheme,
  getMarkingScheme,
  getOneMarking,
  updateMarking,
  deleteMarking,
  getMarkingBySpecialization,
} from "../../controllers/markingControllers/markingController.js";

//add marking
router.post("/", addMarkingScheme);

//get marking
router.get("/", getMarkingScheme);
router.get("/:id", getOneMarking);
router.get("/presentations/:specialization", getMarkingBySpecialization);

//update marking
router.put("/:id", updateMarking);

//delete marking
router.delete("/:id", deleteMarking);

export default router;
