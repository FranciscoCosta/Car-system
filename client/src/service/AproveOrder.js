import axios from 'axios';

const aproveOrder = async(id,status) => {
    console.log(id,status);
    const response = await axios.put(`http://localhost:8000/api/v1/order/${id}`, {status:status});
    return response.data;
}

export default aproveOrder;