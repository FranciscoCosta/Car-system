import React from "react";
import "./Footer.scss";

import { MdLocationPin, MdEmail, MdInfo } from "react-icons/md";
import { RiCellphoneFill } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaPortrait } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__container-info">
          <div className="Footer__container-info-social">
            <h3>Redes Sociais</h3>
            <div className="Footer__info">
              <FaLinkedin
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  window.open(
                    "https://www.linkedin.com/in/francisco-costa-dev/",
                    "_blank"
                  );
                }}
              />
              <p>Linkedin</p>
            </div>
            <div className="Footer__info">
              <FaGithub
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  window.open("https://github.com/FranciscoCosta", "_blank");
                }}
              />
              <p>Github</p>
            </div>
            <div className="Footer__info">
              <FaPortrait
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  window.open(
                    "https://franciscostaportfolio.netlify.app/",
                    "_blank"
                  );
                }}
              />
              <p>Portfolio</p>
            </div>
          </div>
          <div className="Footer__container-info-contact">
            <h3>Contato</h3>
            <div className="Footer__info">
              <MdLocationPin />
              <p>Minas Gerais - Belo Horizonte</p>
            </div>
            <div className="Footer__info">
              <MdEmail />
              <p>francisco100eg@gmail.com
                <a href="mailto:francisco100eg@gmail.com " />
              </p>
            </div>
            <div className="Footer__info">
              <RiCellphoneFill />
              <p>+55(31)99158-3328</p>
            </div>
          </div>
        </div>
        <div className="Footer__container-credits">
          <p>@2023 FRANCISCO COSTA TODOS OS DIREITOS RESERVADOS.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
