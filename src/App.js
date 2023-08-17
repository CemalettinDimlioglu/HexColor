import { useState } from "react";
import "./App.css";

function App() {

const [hex, setHex] = useState("#ffffff");

function randomHex() {
const randomhex= "#" + Math.floor(Math.random()*16777721).toString(16);

setHex(randomhex)

}


  return (
    <div className="App" style={{backgroundColor:`${hex}`}}>
      <h1>{hex}</h1>
      <button onClick={randomHex} >Click for New Background</button>
      <button onClick={()=>navigator.clipboard.writeText(hex)} >Copy the Hex Value</button>
      <h4>
        <a href="https://github.com/CemalettinDimlioglu" target='_blank'>
          Visit my Github Profile
        </a>
      </h4>
    </div>
  );
};

export default App;
