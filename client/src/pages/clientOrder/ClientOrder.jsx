import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getDetailsOrder from "../../service/getDetailsOrder";
import "./ClientOrder.scss";

function ClientOrder() {
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

  return (
    <div className="ClientOrder">
      <div className="ClientOrder__container">
        <h1>Detalhes do pedido</h1>
        {loading ? (
          "Carrrengado..."
        ) : (
          <div className="ClientOrder__container__info">
            <div className="ClientOrder__container__info__client">
            <div className="ClientOrder__container__info__mechanic">
              <h2>Mecânico</h2>
              <p><span>Nome:</span>{order.mechanic.username}</p>
              <p><span>Email:</span>{order.mechanic.email}</p>
              <p><span>Celular:</span>{order.mechanic.phone}</p>
            </div>
            <div className="ClientOrder__container__info__vehicle">
              <h2>Veículo</h2>
              <p><span>Marca:</span>{order.vehicle.brand}</p>
              <p><span>Model:</span>{order.vehicle.model}</p>
              <p><span>Placa:</span>{order.vehicle.plate}</p>
            </div>
            </div>
            <div className="ClientOrder__container__info__service">
              <h2>Serviço</h2>
              <p>
                <span>R$:</span> {order.order.price}
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
                    : order.status === "Em andamento"
                    ? "#ff9600"
                    : "#00c21d",
              }}
              >{order.order.status}</h3>
              <div className="Button__container">
              <button
              type="button"
              disabled={order.order.status === "Pedente"}
              >
                Aprovar Pedido
              </button>
              <button
              type="button"
              disabled={order.order.status !== "Pedente"}
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

export default ClientOrder;
