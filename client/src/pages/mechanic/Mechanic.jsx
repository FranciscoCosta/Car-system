import React, { useState } from "react";
import "./Mechanic.scss";
import { Qrscanner } from "../../components";

function Mechanic() {
  const [vehicles, setVehicles] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

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
    setVehicles(newVehicle);
  }

  const handleOrder = (e) => {
    e.preventDefault();
    const vehicleId = e.target.id;
    console.log(vehicleId);
  };

  const handleChange = (e) => {
    setAddOrder((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="Mechanic">
      <div className="Mechanic__container">
        <div className="Mechanic__container-addOrder">
          <h1>Escanear veiculo</h1>
          <Qrscanner info={handleInfo} />
        </div>
        <div className="Mechanic__showCar">
          <h1>Novo pedido:</h1>
          {vehicles ? (
            <div className="Mechanic__showCar-info">
              <div className="Mechanic__info">
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
              <div className="Mechanic__newOrder">
                <form action="" onSubmit={handleOrder}>
                  <h2>Adicionar orçamento:</h2>
                <label htmlFor="">
                    Descrição do serviço
                    <textarea
                      rezize="none"
                      name="model"
                      type="text"
                      placeholder="Descrição do serviço:"
                      onChange={() => setDescription(e.target.value)}
                    />
                  </label>
                  <label htmlFor="">
                    Preço
                    <input
                      name="price"
                      type="number"
                      placeholder="Preço em Real:"
                      onChange={() => setPrice(e.target.value)}
                    />
                  </label>
                  <label htmlFor="">
                    Data de entrega
                    <input
                      name="deliveryDate"
                      type="date"
                      onChange={() => setDeliveryDate(e.target.value)}
                    />
                  </label>

                  <button type="submit">Adicionar no pedido</button>
                </form>
              </div>
            </div>
          ) : (
            <p>Nenhum veiculo encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mechanic;
