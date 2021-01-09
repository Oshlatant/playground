import "./counter.css";
import React, { useState } from "react";

const Counter = function() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="pannel">
        <div className="display">
          <h3 className="count">
            {count}
          </h3>
        </div>
        <div className="incrementer">
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count > 0 ? count-1 : count)}>-</button>
          <button className="reset" onClick={()=>setCount(0)}>↻</button>
        </div>
      </div>
    </div> 
  )
}

export default Counter;