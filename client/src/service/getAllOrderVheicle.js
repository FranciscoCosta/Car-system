import axios from 'axios';

const getAllOrdersVheicle = async (id) => {
    try{
        const response = await axios.get(`https://automatch.onrender.com/api/v1/orders/${id}`);
        return response.data;
    }catch(err){
        return err;
    }
}

export default  getAllOrdersVheicle ;