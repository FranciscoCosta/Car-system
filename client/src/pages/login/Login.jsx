import React,{useState} from 'react'
import  {useNavigate} from 'react-router-dom'
import './Login.scss'

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("aqui")
  };


  return (
    <div className='Login'>
      <div className="Login__container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Usuário</label>
        <input
          name="username"
          type="text"
          placeholder="Usuário:"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password:"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
      </div>
    </div>
  )
}

export default Login