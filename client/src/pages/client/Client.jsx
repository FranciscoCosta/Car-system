import React,{useState,useEffect} from 'react'
import './Client.scss'


function Client() {

  const [vehicles, setVehicles] = useState([])
  const [vehicle, setVehicle] = useState({
    brand: '',
    model: '',
    year: '',
    plate: ''
  })

  const handleChange = (e) => {
    setVehicle((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vehicle)
  }
  return (
    <div className='Client'>
      <div className="Client__container">
        <div className="Client__container-addvehicle">
          <h1>Adicionar novo Veiculo</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Marca
            <input
              name="brand"
              type="text"
              placeholder="Marca:"
              onChange={handleChange}
            />
            </label>
            <label htmlFor="">Modelo
            <input
              name="model"
              type="text"
              placeholder="Modelo:"
              onChange={handleChange}
            />
            </label>
            <label htmlFor="">Ano
            <input
              name="year"
              type="text"
              placeholder="Ano:"
              onChange={handleChange}
            />
            </label>
            <label htmlFor="">Placa
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
            {
            (vehicles.length === 0) ? (
              <h2>Nenhum veiculo cadastrado</h2>
            ) : (
            vehicles.map((vh) => (
              <div className="Client__container-vehicles-list-item" key={vh._id}>
              <h3><p>{vh.brand}</p></h3>
              <h3><p>{vh.model}</p></h3>
              <h3><p>{vh.year}</p></h3>
              <h3><p>{vh.plate}</p></h3>
              </div>
            )))}

        </div>
        </div>
        </div>
    </div>
  )
}

export default Client