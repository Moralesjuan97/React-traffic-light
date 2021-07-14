import React, { useState } from "react";
import './App.css';




const App = () => {

  const [on, setOn] = useState("")

  const turnLight = (color) => {
    if (color === on){
      setOn("");
    }else{
      setOn(color)
    }
  }

  return (
    <div className="App">
     <div className="traffic-top"> </div>
     <div className="container">
     <div className={on == "red" ? "red on " : "red"} onClick={() => turnLight("red")}> </div>
     <div className={on == "yellow" ? "yellow on " : "yellow"} onClick={() => turnLight("yellow")}> </div>
     <div className={on == "green" ?  "green on " : "green"} onClick={() => turnLight("green")}> </div>
     </div>
    </div>
  );
}

export default App;
