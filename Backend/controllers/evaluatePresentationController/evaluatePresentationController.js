import PresentationMarks from "../../models/presentationMarks/presentationMarks.js";

// Controller for the evaluation of the presentation

//add the presentation marks to the database
export const addPresentationMark = async (req, res) => {
  try {
    const marks = await PresentationMarks.create(req.body);
    res.status(201).json(marks);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get all the presentation marks
export const getPresentationMarks = async (req, res) => {
  try {
    const marks = await PresentationMarks.find();
    res.status(201).json(marks);
  } catch (err) {
    console.catch.log(err);
  }
};

//get the presentation marks of a specific presentation
export const getMarksByType = async (req, res) => {
  const marks = req.params.type;
  try {
    const mark = await PresentationMarks.find({
      specialization: marks,
    });
    res.status(200).json(mark);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};
