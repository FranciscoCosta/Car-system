import React, { useState, useEffect } from "react";
import "./Client.scss";
import { getVehiclesAPI } from "../../service/GetVheicles";
import { RegisterVheicle } from "../../service/RegisterVheicle";
import QRCode from "react-qr-code";

function Client() {
  const [vehicles, setVehicles] = useState([]);
  const [user, setUser] = useState({});
  const [qrcodeValue, setqrcodeValue] = useState('')
  const [vehicle, setVehicle] = useState({
    brand: "",
    model: "",
    year: "",
    plate: "",
  });

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    try {
      const vehicles = await getVehiclesAPI(user._id);
      setVehicles(vehicles);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setVehicle((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const vheicleUser = { ...vehicle, userId: user._id };
      const newVehicle = await RegisterVheicle(vheicleUser);
      fetchVehicles();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Client">
      <div className="Client__container">
        <div className="Client__container-addvehicle">
          <h1>Adicionar novo Veiculo</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Marca
              <input
                name="brand"
                type="text"
                placeholder="Marca:"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Modelo
              <input
                name="model"
                type="text"
                placeholder="Modelo:"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Ano
              <input
                name="year"
                type="text"
                placeholder="Ano:"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Placa
              <input
                name="plate"
                type="text"
                placeholder="Placa:"
                onChange={handleChange}
              />
            </label>
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <div className="Client__container-vehicles">
          <h1>Veiculos</h1>
          <div className="Client__container-vehicles-list">
            {vehicles.length === 0 ? (
              <h2>Nenhum veiculo cadastrado</h2>
            ) : (
              vehicles.map((vh) => (
                <div
                  className="Client__container-vehicles-list-item"
                  key={vh._id}
                >
                  <h3>
                    Marca:<p>{vh.brand}</p>
                  </h3>
                  <h3>
                    Modelo:<p>{vh.model}</p>
                  </h3>
                  <h3>
                    Ano:<p>{vh.year}</p>
                  </h3>
                  <h3>
                    Placa:<p>{vh.plate}</p>
                  </h3>
                  <button>Remover</button>
                  <div
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 125,
                      width: "100%",
                    }}
                  >
                    <QRCode
                      size={400}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={ `${vh._id},${vh.brand},${vh.model},${vh.year},${vh.plate},${user._id}`}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
