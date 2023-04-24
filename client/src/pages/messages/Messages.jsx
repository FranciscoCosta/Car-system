import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { useParams } from "react-router-dom";

const Messages = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [update, setupdate] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
  }, [update]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  }


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