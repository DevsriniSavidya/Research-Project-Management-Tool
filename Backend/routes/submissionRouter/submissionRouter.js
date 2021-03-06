import  Express  from "express";
const router = Express.Router();
import { addSubmissiontype,displaySubmissionType,updateSubmissionType,updateAllSubmissionTypeData,deleteSubType,updateMarkStatus } from "../../controllers/submissionController/submissionController.js";

router.post('/addSubType',addSubmissiontype);
router.get('/displaySubType',displaySubmissionType);
router.put('/updateSubType/:id',updateSubmissionType);
router.put('/updateAlldata/:id',updateAllSubmissionTypeData);
router.put('/updateMarkStatus/:id',updateMarkStatus);
router.delete('/deleteSubType/:id',deleteSubType);



export default router;