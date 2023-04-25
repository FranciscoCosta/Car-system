import axios from 'axios';

const registerAPI = async (data) => {
    try{
        const response = await axios.post('https://automatch.onrender.com/api/v1/register', data);
        return response;   
    }catch(err){
        console.log(err)
        return err;
    }
}

export default registerAPI;