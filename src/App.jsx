import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonContainer from "./components/ButtonContainer.jsx";
import { useState } from "react";

function App() {
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newdisplayvalue = calVal + buttonText;
      setcalVal(newdisplayvalue);
    }
  };
  let [calVal, setcalVal] = useState("");
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
