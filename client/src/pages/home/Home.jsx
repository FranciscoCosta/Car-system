import React from "react";
import "./Home.scss";
import {hero, Logo} from "../../assets/index";
import { BsFillFileTextFill } from 'react-icons/bs';
import {MdCarRepair} from 'react-icons/md';
import { BiTimer } from 'react-icons/bi';

function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__container-hero">
        <div className="container-info">
          <img src={Logo} alt="logo" />
          <p>
            Experimente o <span>AutoMatch</span> e facilite a manutenção do seu automóvel!
            <br/>
            Simplifique sua vida e mantenha seu carro em dia,
            utilize agora o <span>AutoMatch</span>!
          </p>
          <button
            onClick={() => { navigate("/register")}}
          >REGISTRAR</button>
          </div>
          <div className="Hero__img">
          <img src={hero} alt="hero-png" />
          </div>
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
        <div className="Home__container-contato">
          <h2>Contato</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
