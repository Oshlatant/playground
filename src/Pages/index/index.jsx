import "./index.css";
import React from "react";
import Counter from "../../components/Counter/counter";
import Time from "../../components/Time/time";
import ChatBox from "../../components/ChatBox/chatBox";

const Index = function() {
  
  return (
    <div className="index">
      <header>
        <Time />
        <Counter />
        <ChatBox />
      </header>
    </div>
  );

}

export default Index;