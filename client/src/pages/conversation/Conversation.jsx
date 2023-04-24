import React,{useState, useEffect} from 'react'
import './Conversation.scss'
import { AiFillMessage } from "react-icons/ai";
import GetAllConversationsAPI from '../../service/GetAllConversations';
import moment from "moment";

function Conversation() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
 const [conversations, setconversations] = useState([]);


 useEffect(() => {
  fetchAllConversation();
 }, [])
 
 
 const fetchAllConversation = async()=>{
   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const conversationArray = await GetAllConversationsAPI(currentUser._id);
  setconversations(conversationArray.data)

 }

 
 
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
          {conversations.map((conversation)=> (
            <tr>
              <td>{user.isMechanic ? conversation.clientName : conversation.mechanicName}</td>
              <td>{conversation.lastMessage}</td>
              <td>{moment(conversation.updatedAt).fromNow()}</td>
              <td><AiFillMessage/></td>
            </tr>
          ))}
            </tbody>
        </table>}
      </div>
    </div>
  )
}

export default Conversation