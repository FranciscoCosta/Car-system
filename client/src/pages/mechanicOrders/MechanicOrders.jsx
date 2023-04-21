import React, { useState, useEffect } from "react";
import "./MechanicOrders.scss";
import GetOrdersByMechanic from "../../service/GetOrdersByMechanic";
import { AiFillMessage } from "react-icons/ai";
import { BsDoorOpenFill } from "react-icons/bs";

function MechanicOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    fetchOrdersMechanic();
  }, []);

  const fetchOrdersMechanic = async () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    const orders = await GetOrdersByMechanic(currentUser._id);
    console.log(orders);
    setOrders(orders);
    setTotalOrders(orders);
    setLoading(false);
  };

  const handleState = (e) => {
    const status = e.target.value;
    console.log(status);
    if (status === "Todos") {
      fetchOrdersMechanic();
    } else {
      const filteredOrders = totalOrders.filter(
        (order) => order.status === status
      );
      setOrders(filteredOrders);
    }
  };

  const handleDate = (e) => {
    const date = e.target.value;
    console.log(date);
    const filteredOrders = totalOrders.filter(
      (order) => order.deliveryDate === date
    );
    setOrders(filteredOrders);
  };

  return (
    <div className="MechanicOrders">
      <div className="MechanicOrders__container">
        <h1>Pedidos</h1>
        <div className="MechanicOrders__container-items">
          <div className="MechanicOrders__filters">
            <div className="MechanicOrders__filters-status">
              <label htmlFor="status">Status</label>
              <select name="status" id="status" onChange={handleState}>
                <option value="Todos">Todos</option>
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Finalizado">Finalizado</option>
              </select>
            </div>
            <div className="MechanicOrders__filters-date">
              <label htmlFor="date">Data de entrega</label>
              <input type="date" name="date" id="date" onChange={handleDate} />
            </div>
          </div>
          {orders.length === 0 ? (
            <h2>Não possui nenhum pedido</h2>
          ) : (
            <div className="MechanicOrders__container-items-list">
              {orders.map((order) => (
                <div className="MechanicOrders__container-items-list-item">
                  <span
                    style={{
                      backgroundColor:
                        order.status === "Pendente"
                          ? "#e40145"
                          : order.status === "Em andamento"
                          ? "#ff9600"
                          : "#00c21d",
                    }}
                  >
                    {order.status}
                  </span>
                  <h3>
                    Preço: <p>{order.price}</p>
                  </h3>
                  <h3>
                    Data de entrega: <p>{order.deliveryDate}</p>
                  </h3>
                  <h3>
                    Descrição: <p>{order.description}</p>
                  </h3>
                  <div>
                    <BsDoorOpenFill 
                    onClick={() => navigate(`/mechanic/order/${order._id}`)}
                    />
                    <AiFillMessage />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MechanicOrders;
