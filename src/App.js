import { useState } from 'react';
import './App.css';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';


function App() {
  const switchLight = () => setLight((light === "on") ? "off" : "on");

  const [light, setLight] = useState("off");
  const dark = (light === "off") ? "dark" : "";
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
