import axios from 'axios';

const getAllOrdersVheicle = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8000/api/v1/orders/${id}`);
        return response.data;
    }catch(err){
        console.log(err)
        return err;
    }
}

export default  getAllOrdersVheicle ;