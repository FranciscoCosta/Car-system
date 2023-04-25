import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getDetailsOrder from "../../service/getDetailsOrder";
import "./ClientOrder.scss";
import aproveOrder from "../../service/AproveOrder";
import CreateConversationAPI from "../../service/CreateConversation";
import GetConversation from "../../service/GetConversation";
import { useNavigate } from "react-router-dom";

function ClientOrder() {
  const navigate = useNavigate()
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchOrder = async () => {
    const order = await getDetailsOrder(id);
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

  const handleMessage = async (mechanicId, clientId) => {
    const data = {
      mechanicId,
      clientId,
    };
    const id = `${mechanicId}${clientId}`;
    const isCreated = await GetConversation(id);
    if(isCreated.status === 200){
      navigate(`/messages/${id}`)
    }
    else{
      await CreateConversationAPI(data);
      navigate(`/messages/${id}`)
    }
  };
    


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
              disabled={order.order.status !== "Pendente"}
              onClick={()=> handleAprove(order.order._id,"Em andamento")}
              >
                Aprovar Pedido
              </button>
              <button
              type="button"
              disabled={order.order.status !== "Pronto para entrega"}
              onClick={()=> handleAprove(order.order._id,"Concluído")}
              >
                Serviço concluído
              </button>
              <button
              type="button"
              onClick={()=> handleMessage(order.order.mechanicId, order.order.clientId)}
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
