import axios from 'axios';

const getVehiclesAPI = async (id) => {
    try{
        const response = await axios.get(`https://automatch.onrender.com/api/v1/vheicles/${id}`);
        return response.data.vheicles;
    }catch(err){
        console.log(err)
        return err;
    }
}

export { getVehiclesAPI }