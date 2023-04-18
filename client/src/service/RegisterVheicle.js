import axios from 'axios';

const RegisterVheicle = async (data) => {
    try{
        const response = await axios.post('http://localhost:8000/api/v1/vheicle', data);
        return response;   
    }catch(err){
        console.log(err)
        return err;
    }
}

export {RegisterVheicle };