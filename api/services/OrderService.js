import Order from "../models/Order.js";
import User from "../models/User.js";
import Vheicle from "../models/Vheicle.js";

const registerOrderService = async (order) => {
  try {
    const newOrder = new Order(order);
    await newOrder.save();
    return newOrder;
  } catch (error) {
  }
};

const getOrdersVheicleService = async (id) => {
  try {
    const orders = await Order.find({ vehicleId: id });
    return orders;
  } catch (error) {
  }
};

const getOrdersClientVheicleService = async (id) => {
  try {
    const orders = await Order.find({ clientId: id });
    return orders;
  } catch (error) {
  }
};

const getOrdersMechanicVheicleService = async (id) => {
  try {
    const orders = await Order.find({ mechanicId: id });
    return orders;
  } catch (error) {
  }
};

const getOrderInfoService = async (id) => {
  try {
    const order = await Order.findById(id);
    const client = await User.findById(order.clientId);
    const mechanic = await User.findById(order.mechanicId);
    const vehicle = await Vheicle.findById(order.vehicleId);
    const orderInfo = {
      order: order,
      client: client,
      mechanic: mechanic,
      vehicle: vehicle,
    };
    return orderInfo;
  } catch (error) {
  }
};

const updateOrderService = async (id, status) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(id, { status: status });
    return updateOrder;
  } catch (error) {
  }
};

export {
  registerOrderService,
  getOrdersVheicleService,
  getOrdersClientVheicleService,
  getOrdersMechanicVheicleService,
  getOrderInfoService,
  updateOrderService,
};
