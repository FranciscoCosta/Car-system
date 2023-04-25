import axios from "axios";

const GetOrdersByMechanic = async (mechanic) => {
    const response = await axios.get(
        `https://automatch.onrender.com/api/v1/orders/mechanic/${mechanic}`);
    return response.data;
    }

export default GetOrdersByMechanic;