import React, { useState, useEffect } from "react";
import "./Conversation.scss";
import { AiFillMessage } from "react-icons/ai";
import GetAllConversationsAPI from "../../service/GetAllConversations";
import moment from "moment";
import CreateConversationAPI from "../../service/CreateConversation";
import GetConversation from "../../service/GetConversation";
import { useNavigate } from "react-router-dom";

function Conversation() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [conversations, setconversations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllConversation();
  }, []);

  const fetchAllConversation = async () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const conversationArray = await GetAllConversationsAPI(currentUser._id);
    setconversations(conversationArray.data);
    setIsLoading(false);
  };

  const handleMessage = async (mechanicId, clientId) => {
    const data = {
      mechanicId,
      clientId,
    };
    const id = `${mechanicId}${clientId}`;
    const isCreated = await GetConversation(id);
    if (isCreated.status === 200) {
      navigate(`/messages/:${id}`);
    } else {
      await CreateConversationAPI(data);
      navigate(`/messages/:${id}`);
    }
    //
    // console.log(response);
  };

  return (
    <div className="Conversation">
      {isLoading ? (
        "Carregando"
      ) : (
        <div className="Conversation__container">
          <h1>Conversas:</h1>
          {conversations.length === 0 ? (
            <h2>Não possui conversas.</h2>
          ) : (
            <div className="Conversation__content">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Última mensagem</th>
                    <th>Última atualização</th>
                    <th>Ir para conversa</th>
                  </tr>
                </thead>
                <tbody>
                  {conversations.map((conversation) => (
                    <tr>
                      <td>
                        {user.isMechanic
                          ? conversation.clientName
                          : conversation.mechanicName}
                      </td>
                      <td>{conversation.lastMessage}</td>
                      <td>{moment(conversation.updatedAt).fromNow()}</td>
                      <td>
                        <AiFillMessage
                          onClick={() =>
                            handleMessage(
                              conversation.mechanicId,
                              conversation.clientId
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="Conversation__mobile">
                {conversations.map((conversation) => (
                  <div className="Conversation__mobile__content">
                      <span>
                        {user.isMechanic
                          ? conversation.clientName
                          : conversation.mechanicName}
                      </span>
                      <span>{conversation.lastMessage}</span>
                    <AiFillMessage
                      onClick={() =>
                        handleMessage(
                          conversation.mechanicId,
                          conversation.clientId
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Conversation;
