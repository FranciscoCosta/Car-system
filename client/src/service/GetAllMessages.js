import axios from "axios";

const GetAllMessages = async (id) => {
  const messages = await axios.get(
    `http://localhost:8000/api/v1/message/${id}`
  );
  return messages.data;
};

export default GetAllMessages;
