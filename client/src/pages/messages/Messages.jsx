import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { useParams } from "react-router-dom";
import CreateMessage from "../../service/CreateMessage";
import GetAllMessages from "../../service/GetAllMessages";

const Messages = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [update, setupdate] = useState(false);
  console.log(currentUser)
  useEffect(() => {
    getMessages();
  }, [update]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message= {
      conversationId : id,
      userId: currentUser._id,
      desc : newMessage,
    }
    const messageCreate = await CreateMessage(message);
    console.log(messageCreate);
    setupdate(!update);

  }

  const getMessages = async () => {
    
    setIsLoading(true);
    const messages = await GetAllMessages(id);
    setMessages(messages);
    setIsLoading(false);
  };


  return (
    <div className="Messages">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="Messages__container">
          <span className="Messages__info">
            <Link to="/conversations" className="link">
              Mensagens {" >"}
            </Link>
          </span>
          <div className="messages">
            {messages.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item" : "item"}
                key={m._id}
              >
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="profile-default"
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <hr />
          <form className="Message__write" onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="Responder..."
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Messages;