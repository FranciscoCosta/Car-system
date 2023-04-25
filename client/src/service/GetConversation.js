import axios from 'axios';

const GetConversation = async (id) => {
    try{
        const response = await axios.get(`https://automatch.onrender.com/api/v1/conversation/order/${id}`);
        return response;   
    }catch(err){
        return err;
    }
}

export default GetConversation;