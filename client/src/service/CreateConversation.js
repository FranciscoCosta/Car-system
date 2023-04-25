import axios from 'axios';

const CreateConversationAPI = async (data) => {
    try{
        const response = await axios.post(`https://automatch.onrender.com/api/v1/conversation`, data);
        return response;   
    }catch(err){
        return err;
    }
}

export default CreateConversationAPI;