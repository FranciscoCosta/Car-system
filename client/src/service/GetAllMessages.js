import axios from "axios";

const GetAllMessages = async (id) => {
  const messages = await axios.get(
    `https://automatch.onrender.com/api/v1/message/${id}`
  );
  return messages.data;
};

export default GetAllMessages;
