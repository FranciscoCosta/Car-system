import axios from 'axios';

const aproveOrder = async(id,status) => {
    const response = await axios.put(`https://automatch.onrender.com/api/v1/order/${id}`, {status:status});
    return response.data;
}

export default aproveOrder;