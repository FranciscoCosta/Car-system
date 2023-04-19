import React, {useEffect} from "react";
import "./Home.scss";
import { hero, Logo } from "../../assets/index";
import { BsFillFileTextFill } from "react-icons/bs";
import { MdCarRepair } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    if(currentUser.isMechanic){
      navigate("/mechanic")
    }if(currentUser.isMechanic){
      navigate("/client")
    }
  }, [])
  
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__container-hero">
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="container-info"
          >
            <img src={Logo} alt="logo" />
            <p>
              Experimente o <span>AutoMatch</span> e facilite a manutenção do
              seu automóvel!
              <br />
              Simplifique sua vida e mantenha seu carro em dia, utilize agora o{" "}
              <span>AutoMatch</span>!
            </p>
            <button
            type="button"
              onClick={() => {
                navigate("/register");
              }}
            >
              REGISTRAR
            </button>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className="Hero__img"
          >
            <img src={hero} alt="hero-png" />
          </motion.div>
        </div>
        <div className="Home__container-service">
          <h2 id="Servico">Serviços</h2>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="container-service"
          >
            <div className="service-card">
              <h3>Orçamento</h3>
              <BsFillFileTextFill size={50} />
              <p>
                Solicite um orçamento para a manutenção do seu veículo e
                aguarde.
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
              <p>Mantenha seu veículo em dia, agende a sua manutenção .</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
