import axios from 'axios';

const AddOrderAPI = async (data) => {
    try{
        const response = await axios.post('http://localhost:8000/api/v1/order', data);
        return response;   
    }catch(err){
        console.log(err)
        return err;
    }
}

export default AddOrderAPI;