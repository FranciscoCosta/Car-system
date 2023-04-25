import axios from 'axios';

const DeleteVehicleAPI = async (id) => {
    try{
        const response = await axios.delete(`https://automatch.onrender.com/api/v1/vheicle/${id}`);
        return response;   
    }catch(err){
        return err;
    }
}

export default DeleteVehicleAPI;