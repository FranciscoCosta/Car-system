import axios from 'axios';

const getDetailsOrder = async (id) => {
    const order = await axios.get(`https://automatch.onrender.com/api/v1/info/${id}`);
    return order.data;
    }

export default getDetailsOrder;