import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/index";
import "./Navbar.scss";

// const currentUser = {
//   name: 'John Doe',
//   email: 'jhon@gmail.com'ss,
//   role: 'client'
// }

function Navbar() { 

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  console.log(currentUser.isMechanic)
  setCurrentUser(currentUser);
  setIsLoading(false)
  
}, [currentUser])

const handleLogout = () => {
  console.log("sai")
  localStorage.removeItem("currentUser");
  navigate("/");
}

  return (
    <div className="Navbar">
      { !isLoading && <div className="Navbar__container">
        <div className="Navbar__logo">
          <img src={Logo} alt="logo-ultracar" />
        </div>
        {!currentUser.username ? (
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
        ) : !currentUser.isMechanic? (
          <div className="Navbar__menu">
            <ul>
              <h2>Home</h2>
              <h2>Pedidos</h2>
              <h2>Veiculos</h2>
              <button
              onClick={handleLogout}
              >Logout</button>
            </ul>
          </div>
        ) : (
          <div className="Navbar__menu">
            <ul>
              <h2>Home</h2>
              <h2>Ordem de serviço</h2>
              <h2>Peças</h2>
              <button 
              type="button"
              onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        )}
      </div>}
      <div className="Navbar__container-mobile"></div>
    </div>
  );
}

export default Navbar;
