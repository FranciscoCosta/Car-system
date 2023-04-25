import axios from 'axios';

const GetAllConversationsAPI = async (id) => {
    try{
        const response = await axios.get(`https://automatch.onrender.com/api/v1/conversation/${id}`);
        return response;   
    }catch(err){
        return err;
    }
}

export default GetAllConversationsAPI;