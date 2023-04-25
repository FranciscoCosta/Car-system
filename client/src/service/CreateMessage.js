import axios from "axios";

const CreateMessage = async (message) => {
  const newMessage = await axios.post(
    "http://localhost:8000/api/v1/message",
    message
  );
  return newMessage.data;
};

export default CreateMessage;
