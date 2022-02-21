import {useState} from 'react';
import App from '../App';

function LightSwitchButton(props) {
  const {light, switchLight} = props;

  // const [light, setLight] = useState("off");
  // const handleClick = () => setLight(light === "on" ? "off" : "on"); 
  // we remove the setLight prop because it is now handled by App.js

  return (
  <button onClick={switchLight} className="LightSwitchButton">
  {light === "on" && <span><i>💡</i> I'm on!</span>}
  {light === "off" && <span className="off"> <i>💡</i> I'm off!</span>}
  </button>
  );
}
export default LightSwitchButton;