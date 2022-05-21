import Members from "../../models/studentModel/studentsModel.js";

export const getMembers = async (req,res)=>{
    try {
        const members = await Members.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const saveMembers = async (req,res)=>{
    const member = new Members(req.body);
    try {
        const insertedmembers = await member.save();
        res.status(201).json(insertedmembers);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}