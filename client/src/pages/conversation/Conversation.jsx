import React,{useState} from 'react'
import './Conversation.scss'
import { AiFillMessage } from "react-icons/ai";

function Conversation() {

 const [conversations, setconversations] = useState([]);


 const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 
 
  return (
    <div className='Conversation'>
      <div className="Conversation__container"> 
        <h1>Conversas:</h1>
        { conversations.length === 0 ? <h2>Não possui conversas.</h2>:<table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Última mensagem</th>
              <th>Última atualização</th>
              <th>Ir para conversa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>João</td>
              <td>Olá, tudo bem?</td>
              <td>10/10/2021</td>
              <td><AiFillMessage/></td>
            </tr>
            </tbody>
        </table>}
      </div>
    </div>
  )
}

export default Conversation