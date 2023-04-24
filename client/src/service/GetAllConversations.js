import axios from 'axios';

const GetAllConversationsAPI = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/v1/conversation/${id}`);
        return response;   
    }catch(err){
        return err;
    }
}