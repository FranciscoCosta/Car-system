import React, { useState } from "react";
import "./Mechanic.scss";
import AddOrderAPI from "../../service/AddOrder";
import Qrscanner from "../../components/qrscanner/Qrscanner";
import getAllOrdersVheicle from "../../service/getAllOrderVheicle";
import { useNavigate } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { BsDoorOpenFill } from "react-icons/bs";

function Mechanic() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [orders, setOrders] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  function handleInfo(data) {
    const vehiclesArray = data.split(",");
    const newVehicle = {
      vehicleId: vehiclesArray[0],
      brand: vehiclesArray[1],
      model: vehiclesArray[2],
      year: vehiclesArray[3],
      plate: vehiclesArray[4],
      userId: vehiclesArray[5],
    };
    fetchOrders(newVehicle.vehicleId);
    setVehicles(newVehicle);
  }

  const fetchOrders = async (id) => {
    const ordersV = await getAllOrdersVheicle(id);
    setOrders(ordersV);
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const newOrder = {
      price: price,
      description: description,
      deliveryDate: deliveryDate,
      status: "Pendente",
      clientId: vehicles.userId,
      vehicleId: vehicles.vehicleId,
      mechanicId: currentUser._id,
    };
    const response = await AddOrderAPI(newOrder);
    if (response.status === 200) {
      navigate("/mechanic/orders");
    }
    if (response.status === 400) {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="Mechanic">
      <div className="Mechanic__container">
        <div className="Mechanic__container-addOrder">
          <h1>Escanear veiculo</h1>
          <Qrscanner info={handleInfo} />
        </div>
        <div className="Mechanic__showCar">
          <h1>Orçamento</h1>
          {vehicles ? (
            <div className="Mechanic__showCar-info">
              <div className="Mechanic__info">
                <div className="Mechanic__info-container">
                  <h3>Informação veículo</h3>
                <p>
                  Marca: <span>{vehicles.brand}</span>
                </p>
                <p>
                  Modelo: <span>{vehicles.model}</span>
                </p>
                <p>
                  Ano: <span>{vehicles.year}</span>
                </p>
                <p>
                  Placa: <span>{vehicles.plate}</span>
                </p>
              </div>
              </div>
              <div className="Mechanic__newOrder">
                <h3>Adicionar novo pedido</h3>
                <form action="" onSubmit={handleOrder}>
                  <label htmlFor="">
                    Descrição do serviço
                    <textarea
                      rezize="none"
                      name="model"
                      type="text"
                      placeholder="Descrição do serviço:"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </label>
                  <label htmlFor="">
                    Preço
                    <input
                      name="price"
                      type="number"
                      placeholder="Preço em Real:"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </label>
                  <label htmlFor="">
                    Entrega
                    <input
                      name="deliveryDate"
                      type="date"
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </label>

                  <button type="submit">Adicionar no pedido</button>
                </form>
              </div>
            </div>
          ) : (
            <h4>Nenhum veiculo encontrado</h4>
          )}
        </div>
        {orders.length !== 0 && (
          <div className="Vheicle__orders-container">
            <h1>Pedidos do Veiculo</h1>
            <div className="Order__container">
              {orders.map((order) => (
                <div className="Order__card" key={order._id}>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Mechanic;
