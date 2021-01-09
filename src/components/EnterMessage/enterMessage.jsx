import React, { useState } from "react";
import "./enterMessage.css"

const EnterMessage = function({onSubmit}) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(message) {
      onSubmit(message)
      setMessage("");
    }
  }

  return (
    <form className="entermessage" action="#" onSubmit={handleSubmit}>
      <input className="entermessage-text" type="text" value={message} onChange={handleChange}/>
      <input className="entermessage-submit" type="submit" value="Send"/>
    </form>
  );
}

export default EnterMessage;