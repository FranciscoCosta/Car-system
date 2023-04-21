import axios from 'axios';

const getDetailsOrder = async (id) => {
    const order = await axios.get(`http://localhost:8000/api/v1/info/${id}`);
    return order.data;
    }

export default getDetailsOrder;