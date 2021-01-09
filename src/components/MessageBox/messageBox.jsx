import React from "react";
import "./messageBox.css"

const MessagesBox = function({messageList}) {
  const renderMessage = messageList.map((element, index)=>
    <li key={index}>
      <span>Oshlatant: </span>
      <span>{element}</span>
    </li>
  );

  return (
    <ul className="message-list">{renderMessage}</ul>
  );

}

export default MessagesBox;