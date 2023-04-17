import React from "react";
import "./Home.scss";
import {hero} from "../../assets/index";
import { BsFillFileTextFill } from 'react-icons/bs';
import {MdCarRepair} from 'react-icons/md';
import { BiTimer } from 'react-icons/bi';
function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__container-hero">
        <div className="container-info">
          <p>
            Experimente o Ultracar e facilite a manutenção do seu automóvel!
            Registre seu veículo e agende reparos com facilidade, tudo em um
            único aplicativo. Simplifique sua vida e mantenha seu carro em dia,
            utilize agora o Ultracar!
          </p>
          <button>Registrar</button>
          </div>
          <img src={hero} alt="hero-png" />
        </div>
        <div className="Home__container-service">
          <h2>Serviços</h2>
          <div className="container-service">
            <div className="service-card">
              <h3>Orçamento</h3>
              <BsFillFileTextFill size={50} />
              <p>
                Solicite um orçamento para a manutenção do seu veículo e aguarde.
              </p>
            </div>  
            <div className="service-card">
              <h3>Reparação</h3>
              <BiTimer size={50} />
              <p>
                Melhores reparações com os melhores profissionais, agende agora!
              </p>
          </div>
          <div className="service-card">
            <h3>Manutenção</h3>
            <MdCarRepair size={50} />
            <p>
              Mantenha seu veículo em dia, agende a sua manutenção .
            </p>
            </div>
            </div>
            </div>
      </div>
    </div>
  );
}

export default Home;
