import axios from 'axios';

const GetConversation = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/v1/conversation/order/${id}`);
        return response;   
    }catch(err){
        return err;
    }
}

export default GetConversation;