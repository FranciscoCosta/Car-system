import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/index";
import "./Navbar.scss";
import { FaHome, FaStoreAlt } from 'react-icons/fa';
import {RiLoginBoxFill, RiLogoutBoxFill } from 'react-icons/ri';
import { AiFillCar,AiOutlineOrderedList } from 'react-icons/ai';
import { MdOutlineFormatAlignJustify } from 'react-icons/md';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { GiCarWheel } from 'react-icons/gi';









function Navbar() { 

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [navbarActive, setnavbarActive] = useState(false);
  const isScrolled = () => {
    window.scrollY > 0 ? setnavbarActive(true) : setnavbarActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isScrolled);
    return () => {
      window.addEventListener("scroll", isScrolled);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  useEffect(() => {
    setIsLoading(false)
    
  }, [currentUser])

const handleLogout = () => {
  localStorage.removeItem("currentUser");
  fetchUser();
  navigate("/");
}

const fetchUser = async () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  setCurrentUser(currentUser);
}


  return (
    <div className={!navbarActive ? "Navbar" : "Navbar active"}>
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
              >Cadastrar</h2>
              <button
              onClick={() => {navigate("/login")}}
              >Login</button>
            </ul>
          </div>
        ) : !currentUser.isMechanic? (
          <div className="Navbar__menu">
            <ul>
              <h2 
              onClick={()=> {navigate("/client")}}
              >Veiculos</h2>
              <h2>Pedidos</h2>
              <h2>Loja</h2>
              <button
              onClick={handleLogout}
              >Logout</button>
            </ul>
          </div>
        ) : (
          <div className="Navbar__menu">
            <ul>
              <h2>Novo Serviço</h2>
              <h2>Lista de serviço</h2>
              <h2>Peças</h2>
              <button 
              type="button"
              onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        )}
      </div>}
      <div className="Navbar__container-mobile">
      {!currentUser.username ? (
          <div className="Navbar__menu">
            <ul>
              <FaHome
              id="Home"
              onClick={() => {navigate("/")}}
              />
              <AiFillCar
              id="Serviços"
              onClick={() => {navigate("/")}}
              />
              <MdOutlineFormatAlignJustify
              onClick={() => {navigate("/register")}}
              />
              <RiLoginBoxFill
              onClick={() => {navigate("/login")}}
              />
            </ul>
          </div>
        ) : !currentUser.isMechanic? (
          <div className="Navbar__menu">
            <ul>
              <AiFillCar 
              onClick={()=> {navigate("/client")}}
              />
              <MdOutlineFormatAlignJustify/>
              <FaStoreAlt/>
              <RiLogoutBoxFill
              type="button"
              onClick={handleLogout}/>
            </ul>
          </div>
        ) : (
          <div className="Navbar__menu">
            <ul>
              <BsFillBookmarkPlusFill/>
              <AiOutlineOrderedList/>
              <GiCarWheel/>
              <RiLogoutBoxFill
              type="button"
              onClick={handleLogout}/>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;
