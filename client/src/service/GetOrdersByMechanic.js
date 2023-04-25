import axios from "axios";

const GetOrdersByMechanic = async (mechanic) => {
    console.log(mechanic);
    const response = await axios.get(
        `https://automatch.onrender.com/api/v1/orders/mechanic/${mechanic}`);
    console.log(response.data);
    return response.data;
    }

export default GetOrdersByMechanic;