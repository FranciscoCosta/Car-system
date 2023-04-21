import { registerOrderService,getOrdersVheicleService,getOrdersClientVheicleService, getOrdersMechanicVheicleService, getOrderInfoService } from "../services/OrderService.js";

const registerOrder = async (req, res) => {
    const newOrder = registerOrderService(req.body);
    if (newOrder) {
        res.status(200).send(newOrder);
    }
    else {
        res.status(400).send("Erro ao adicionar pedido");
    }
};

const getOrdersVheicle = async (req, res) => {
    const orders = await getOrdersVheicleService(req.params.id);
    if (orders) {
        res.status(200).send(orders);
    }
    else {
        res.status(400).send("Erro ao buscar pedidos");
    }
};


const getOrdersClientVheicle = async (req, res) => {
    const { id } = req.params;
    const orders = await getOrdersClientVheicleService(id);
    if (orders) {
        res.status(200).json(orders);
    }
    else {
        res.status(400).json("Erro ao buscar pedidos");
    }
};

const getOrdersMechanicVheicle = async (req, res) => {
    console.log(req.params)
    const { id } = req.params;
    const orders = await getOrdersMechanicVheicleService(id);
    if (orders) {
        res.status(200).json(orders);
    }
    else {
        res.status(400).json("Erro ao buscar pedidos");
    }
};

const getOrderInfo = async (req, res) => {
    const { id } = req.params;
    const order = await getOrderInfoService(id);
    if (order) {
        res.status(200).json(order);
    }
    else {
        res.status(400).json("Erro ao buscar pedido");
    }
};



export { registerOrder, getOrdersVheicle,getOrdersClientVheicle,getOrdersMechanicVheicle, getOrderInfo};