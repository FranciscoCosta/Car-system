import React, {useState} from 'react'
import './Mechanic.scss'
import { Qrscanner } from '../../components';

function Mechanic() {

  const [vehicles, setVehicles] = useState('');
  
  function handleInfo(data) {
    const vehiclesArray = data.split(',');
    const newVehicle = {
      vehicleId : vehiclesArray[0],
      brand : vehiclesArray[1],
      model : vehiclesArray[2],
      year : vehiclesArray[3],
      plate : vehiclesArray[4],
      userId : vehiclesArray[5]
    }
    setVehicles(newVehicle);
  }

  const handlePedido = (id) => {
    console.log(id)
  }


  return (
    <div className='Mechanic'>
      <div className="Mechanic__container">
        <div className="Mechanic__container-addOrder">
          <h1>Adicionar novo Pedido</h1>
          <Qrscanner info={handleInfo}/>
        </div>
        <div className="Mechanic__showCar">
          <h1>Veiculo:</h1>
          {
            vehicles ? (
              <div className="Mechanic__showCar-info">
                <p>Marca: <span>{vehicles.brand}</span></p>
                <p>Modelo: <span>{vehicles.model}</span></p>
                <p>Ano: <span>{vehicles.year}</span></p>
                <p>Placa: <span>{vehicles.plate}</span></p>
                <button
                  type="button"
                  name="addOrder"
                  id= {vehicles.vehicleId}
                  onClick={ handlePedido(vehicles.vehicleId)}
                >Adicionar no Pedido</button>
              </div>
            ) : (
              <p>Nenhum veiculo encontrado</p>
            )
          }
        </div>
      </div>
    </div>
  )
}


export default Mechanic;