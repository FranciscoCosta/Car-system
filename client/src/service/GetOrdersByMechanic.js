import axios from "axios";

const GetOrdersByMechanic = async (mechanic) => {
    const response = await axios.get(
        `http://localhost:8000/api/v1/orders/mechanic/${mechanic}`
    );
    return response.data;
    }

export default GetOrdersByMechanic;