import axios from 'axios';

const RegisterVheicle = async (data) => {
    try{
        const response = await axios.post('https://automatch.onrender.com/api/v1/vheicle', data);
        return response;   
    }catch(err){
        return err;
    }
}

export {RegisterVheicle };