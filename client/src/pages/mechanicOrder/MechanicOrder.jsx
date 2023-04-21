import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getDetailsOrder from "../../service/getDetailsOrder";
import "./MechanicOrder.scss";
import aproveOrder from "../../service/AproveOrder";

function MechanicOrder() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchOrder = async () => {
    console.log(id);
    const order = await getDetailsOrder(id);
    console.log(order);
    setOrder(order);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleAprove = async (id,status) => {
    const response = await aproveOrder(id, status);
    fetchOrder();
  };

  return (
    <div className="MechanicOrder">
      <div className="MechanicOrder__container">
        <h1>Detalhes do pedido</h1>
        {loading ? (
          "Carrrengado..."
        ) : (
          <div className="MechanicOrder__container__info">
            <div className="MechanicOrder__container__info__client">
            <div className="MechanicOrder__container__info__mechanic">
              <h2>Cliente</h2>
              <p><span>Nome:</span>{order.client.username}</p>
              <p><span>Email:</span>{order.client.email}</p>
              {order.client.phone && <p><span>Celular:</span>{order.client.phone}</p>}
            </div>
            <div className="MechanicOrder__container__info__vehicle">
              <h2>Veículo</h2>
              <p><span>Marca:</span>{order.vehicle.brand}</p>
              <p><span>Model:</span>{order.vehicle.model}</p>
              <p><span>Placa:</span>{order.vehicle.plate}</p>
            </div>
            </div>
            <div className="MechanicOrder__container__info__service">
              <h2>Serviço</h2>
              <p>
                <span>Preço:</span> R${order.order.price}
              </p>
              <p>
                <span> Data de entrega:</span>
                {order.order.deliveryDate}
              </p>
              <p>
                <span>Descrição:</span>
                {order.order.description}
              </p>
              <h3
              style={{
                backgroundColor:
                order.order.status === "Pendente"
                    ? "#e40145"
                    : order.order.status === "Em andamento"
                    ? "#ff9600"
                    : order.order.status === "Pronto para entrega"
                    ? "#2fc18c"
                    : "#0ff74d", 
              }}
              >{order.order.status}</h3>
              <div className="Button__container">
              <button
              type="button"
              disabled={order.order.status !== "Em andamento"}
              onClick={()=> handleAprove(order.order._id,"Pronto para entrega")}
              >
                Serviço concluído
              </button>
              <button
              type="button"
              >
                Menssagem
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MechanicOrder;
