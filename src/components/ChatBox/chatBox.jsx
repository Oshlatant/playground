import React, { useState } from "react";
import EnterMessage from "../EnterMessage/enterMessage.jsx";
import MessagesBox from "../MessageBox/messageBox.jsx";
import "./chatBox.css";

const ChatBox = function() {
  const [messageList, set] = useState([]);

  const handleMessage = (message) => {
    set([...messageList, message]);
  }

  return (
    <div className="chatbox">
      <MessagesBox messageList={messageList.slice()}/> 
      <EnterMessage onSubmit={handleMessage}/> 
    </div>
  );
}

export default ChatBox;