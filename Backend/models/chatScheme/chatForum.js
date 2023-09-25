import mongoose from "mongoose";
const Schema = mongoose.Schema;

//chat forum schema
const chatForumSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    auther: {
      type: String,
      required: true,
    },

    groupID: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ChatForum = mongoose.model("ChatForum", chatForumSchema);
export default ChatForum;
