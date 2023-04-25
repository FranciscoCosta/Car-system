import axios from "axios";

const GetOrdersByClient = async (client) => {
    const response = await axios.get(
        `https://automatch.onrender.com/api/v1/orders/client/${client}`
    );
    return response.data;
    };

export default GetOrdersByClient;