import ChatReply from "../../models/chatScheme/chatReply.js";

// add chat reply
export const addChatReply = async (req, res) => {
  try {
    const chat = await ChatReply.create(req.body);
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all chat replies by user id
export const getReplyBYForumID = async (req, res) => {
  const ForumId = req.params.fid;
  try {
    const chat = await ChatReply.find({
      forumId: ForumId,
    });
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};

//delete chat reply
export const deleteChatReply = async (req, res) => {
  let rId = req.params.id;
  await ChatReply.findByIdAndDelete(rId)
    .then(() => {
      res.status(200).send({ status: "Reply deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Reply", error: err.message });
    });
};

// update chat reply
export const updateChatReply = async (req, res) => {
  const rId = req.params.id;

  const { title, reply } = req.body;

  const updateReply = {
    rId,
    title,
    reply,
  };

  const update = await ChatReply.findByIdAndUpdate(rId, updateReply)
    .then(() => {
      res.status(200).send({ status: "Reply is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating Reply", error: err.message });
    });
};

//get one chat reply by id
export const getOneReply = async (req, res) => {
  const rid = req.params.id;

  try {
    const chat = await ChatReply.findById(rid);
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
  }
};
