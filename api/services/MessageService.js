import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
const getMessagesService = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.id,
    });
    return messages;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMessageService = async (req, res) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.body.userId,
    desc: req.body.desc,
  });
  const savedMessage = await newMessage.save();
  try {
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    return savedMessage;
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


export { getMessagesService, createMessageService };