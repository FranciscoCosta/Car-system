import React,{useState} from 'react'
import  {useNavigate} from 'react-router-dom'
import './Register.scss'

function Register() {

    const [error, setError] = useState(null);
    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      isMechanic:"",
      desc: "",
    });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleMechanic = (e) => {
    e.preventDefault();
    setUser((prev) => {
        return { ...prev, isMechanic: !prev.isMechanic };
        });
    }

  return (
    <div className='Register'>
      <div className="Register__container">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Criar uma nova conta</h1>

          <label htmlFor="">Usuário</label>
          <input
            name="username"
            type="text"
            placeholder="Usuário:"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          {error && <p className="error">{error}</p>}
          <button type="submit">Registrar</button>
        </div>
        <div className="right">
          <h1>Quero ser mecânico na Ultracar</h1>
          <div className="toggle">
            <label htmlFor="">Quero ser mecânico na Ultracar</label>
            <label className="switch">
              <input type="checkbox" onChange={handleMechanic} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Número do celular:</label>
          <input
            name="phone"
            type="text"
            placeholder="+319999999"
            onChange={handleChange}
          />
          <label htmlFor="">Descrição</label>
          <textarea
            placeholder="Uma pequena descrição sobre você"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Register