import ChatForum from "../../models/chatScheme/chatForum.js";

// add chat forum
export const addChatForum = async (req, res) => {
  try {
    const chat = await ChatForum.create(req.body);
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all chat forums by user id
export const getForumBYGroupID = async (req, res) => {
  const groupId = req.params.gid;
  try {
    const chat = await ChatForum.find({
      groupID: groupId,
    });
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};

// get chat forum by id
export const getOneForum = async (req, res) => {
  const forId = req.params.id;
  try {
    const chat = await ChatForum.findById(forId);
    res.status(200).json(chat);
  } catch (error) {
    console.catch.log(error);
    res.status(500).json({ message: error.message });
  }
};

//delete chat forum
export const deleteChatForum = async (req, res) => {
  let rId = req.params.id;
  await ChatForum.findByIdAndDelete(rId)
    .then(() => {
      res.status(200).send({ status: "Forum deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Deleting Forum", error: err.message });
    });
};

// update chat forum
export const updateChatForum = async (req, res) => {
  const fId = req.params.id;

  const { topic, message } = req.body;

  const updateForum = {
    fId,
    topic,
    message,
  };

  const update = await ChatForum.findByIdAndUpdate(fId, updateForum)
    .then(() => {
      res.status(200).send({ status: "Forum is  Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with Updating Forum", error: err.message });
    });
};

// get all chat forums
export const getForums = async (req, res) => {
  try {
    const forum = await ChatForum.find();
    res.status(201).json(forum);
  } catch (err) {
    console.catch.log(err);
  }
};
