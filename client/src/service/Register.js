import axios from 'axios';

const registerAPI = async (data) => {
    try{
        const response = await axios.post('http://localhost:8000/api/v1/register', data);
        console.log(response,"aqi")
        return response;   
    }catch(err){
        console.log(err)
        return err;
    }
}

export default registerAPI;