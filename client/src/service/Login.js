import axios from 'axios';

const loginAPI = async (data) => {
    try{
        const response = await axios.post('https://automatch.onrender.com/api/v1/login', data);
        return response;   
    }catch(err){
        return err;
    }
}

export default loginAPI;