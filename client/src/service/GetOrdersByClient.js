import axios from "axios";

const GetOrdersByClient = async (client) => {
    const response = await axios.get(
        `http://localhost:8000/api/v1/orders/client/${client}`
    );
    return response.data;
    };

export default GetOrdersByClient;