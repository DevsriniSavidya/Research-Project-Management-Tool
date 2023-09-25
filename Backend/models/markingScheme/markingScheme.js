import mongoose from "mongoose";
const Schema = mongoose.Schema;

//marking scheme model
const markingSchema = new Schema(
  {
    specialization: {
      type: String,
      required: true,
    },

    projectName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    totalMarks: {
      type: Number,
      required: true,
    },

    criteria: {
      type: [
        {
          criteriaName: { type: String, required: true },
          marksAllocation: { type: Number, required: true },
          // id : {type:String,required:true}
        },
      ],
    },
  },
  { timestamps: true }
);

const Marking = mongoose.model("Marking", markingSchema);
export default Marking;
