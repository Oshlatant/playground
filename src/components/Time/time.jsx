import "./time.css"
import React, { useEffect, useState } from "react";

const Time = function() {
  const [time, setTime] = useState(Date.now());

  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timeWrapper">
      {new Date(time).toLocaleTimeString()}
    </div>
  );
}


export default Time;