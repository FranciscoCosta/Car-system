import Order from '../models/Order.js';

const registerOrderService = async (order) => {
    try{
        const newOrder = new Order(order);
        await newOrder.save();
        return newOrder;
    }catch(error){
        console.log(error);
    }
}

const getOrdersVheicleService = async (id) => {
    try{
        const orders = await Order.find({vehicleId: id});
        return orders;
    }catch(error){
        console.log(error);
    }
}

const getOrdersClientVheicleService = async (id) => {
    try{
        const orders = await Order.find({clientId: id});
        return orders;
    }catch(error){
        console.log(error);
    }
}

const getOrdersMechanicVheicleService = async (id) => {
    try{
        const orders = await Order.find({mechanicId: id});
        return orders;
    }catch(error){
        console.log(error);
    }
}



export { registerOrderService, getOrdersVheicleService, getOrdersClientVheicleService, getOrdersMechanicVheicleService};