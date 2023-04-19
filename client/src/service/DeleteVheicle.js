import axios from 'axios';

const DeleteVehicleAPI = async (id) => {
    try{
        console.log(id,"AQUIIII")
        console.log("entrei")
        const response = await axios.delete(`http://localhost:8000/api/v1/vheicle/${id}`);
        console.log(response.data)
        return response;   
    }catch(err){
        console.log(err)
        return err;
    }
}

export default DeleteVehicleAPI;