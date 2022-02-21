import { useState } from 'react';
import './App.css';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';


function App() {

  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
