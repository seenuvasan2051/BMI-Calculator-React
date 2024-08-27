import "./App.css";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiSatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiSatus("Under Wwight");
      } else if (bmiValue >= 18.6 && bmiValue < 24.9) {
        setBmiSatus("Normal");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiSatus("Over Weight");
      } else {
        bmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiSatus("");
      setErrorMessage(
        "Please enter valid numeric values for Height and weight."
      );
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiSatus("");
  };

  return (
    <>
      <div className="bmi_calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm) : </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight(kg) : </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>

          {bmi !== null && (
            <div className="results">
              <p>Your BMI is : {bmi}</p>
              <p>Status : {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
