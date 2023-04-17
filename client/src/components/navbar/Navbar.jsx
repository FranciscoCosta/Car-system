import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/index";
import "./Navbar.scss";

// const currentUser = {
//   name: 'John Doe',
//   email: 'jhon@gmail.com'ss,
//   role: 'client'
// }

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};


function Navbar() { 

  const navigate = useNavigate();

  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <img src={Logo} alt="logo-ultracar" />
        </div>
        {!currentUser.role ? (
          <div className="Navbar__menu">
            <ul>
              <h2
              id="Home"
              onClick={() => {navigate("/")}}
              >Home</h2>
              <h2
              id="Serviços"
              onClick={() => {navigate("/")}}
              >Serviços</h2>
              <h2
              onClick={() => {navigate("/register")}}
              >Registro</h2>
              <button
              onClick={() => {navigate("/login")}}
              >Login</button>
            </ul>
          </div>
        ) : currentUser.role === "client" ? (
          <div className="Navbar__menu">
            <ul>
              <h2>Home</h2>
              <h2>Pedidos</h2>
              <h2>Carros</h2>
              <button>Logout</button>
            </ul>
          </div>
        ) : (
          <div className="Navbar__menu">
            <ul>
              <h2>Home</h2>
              <h2>Ordem de serviço</h2>
              <h2>Peças</h2>
              <button>Logout</button>
            </ul>
          </div>
        )}
      </div>
      <div className="Navbar__container-mobile"></div>
    </div>
  );
}

export default Navbar;
