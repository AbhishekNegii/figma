import React from "react";
import "./App.css";
import Building from "./Building";
import FirstScreen from "./FirstScreen";
import Second from "./Second";

function App() {
  return (
    <div className="main_div">
      <FirstScreen />
      <Second />
      <Building/>
    </div>
  );
}

export default App;
