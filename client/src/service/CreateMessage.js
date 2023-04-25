import axios from "axios";

const CreateMessage = async (message) => {
  const newMessage = await axios.post(
    "https://automatch.onrender.com/api/v1/message",
    message
  );
  return newMessage.data;
};

export default CreateMessage;
