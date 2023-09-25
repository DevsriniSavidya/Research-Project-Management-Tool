import mongoose from "mongoose";
const Schema = mongoose.Schema;

//chat reply schema
const chatReplySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    forumId: {
      type: Schema.Types.ObjectId,
      ref: "ChatForum",
    },

    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    reply: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ChatReply = mongoose.model("ChatReply", chatReplySchema);
export default ChatReply;
