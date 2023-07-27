import './App.css';

import {useState} from "react"
import backg from './assets/bg.jpg'
import Boat from './Components/Boat'

function App() {
  const [trigger,setTrigger]=useState(0);
    
  return (
    <div className="App">
      <img src={backg} alt="background" style={{height:"100vh", position:"absolute", left:0}}></img>
      <div className="lane1">
        <Boat trigger={trigger} setTrigger={setTrigger}/>
      </div>
      <div className="lane2">
        <Boat trigger={trigger} setTrigger={setTrigger}/>
      </div>
    </div>
  );
}

export default App;
