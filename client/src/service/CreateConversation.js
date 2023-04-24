import axios from 'axios';

const CreateConversationAPI = async (data) => {
    try{
        const response = await axios.post(`http://localhost:8000/api/v1/conversation`, data);
        return response;   
    }catch(err){
        return err;
    }
}

export default CreateConversationAPI;