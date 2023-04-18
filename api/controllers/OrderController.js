import { registerOrderService,getOrdersVheicleService } from "../services/OrderService.js";

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


export { registerOrder, getOrdersVheicle };