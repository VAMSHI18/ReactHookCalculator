import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../../src/App.css";

const App = () => {
  const [number, setNumber] = useState(() => "");

  const numberHandler = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    setNumber(e.target.value);
  };

  const numberClickHandler = (e) => {
    // console.log(e.target);
    //  console.log(`Value: ${e.target.innerText}`);
    if(e.target.tagName !== "BUTTON" ) {
      return;
    }
    let inputValue = e.target.innerText;
    let result = null;
     if(inputValue === '='){
        result = eval(number);
        // alert(`the answer is: ${result}`);
        setNumber(() => result);
     } else{
        setNumber((prev) => prev + e.target.innerText);
     }
  };

  const clearInputHandler = () => {
      setNumber(() => "");
  };

  return (
    <div className="app container">
      <div>
        <h1>The Calculator</h1>
      </div>
      <div className="box">
        <div className="row input-div">
          <input
            className="form-control"
            type="text"
            name="numbers"
            value={number}
            onChange={(e) => numberHandler(e)}
          />
          <button className="clear-button btn btn-primary" onClick={clearInputHandler}>Clear</button>
        </div>
        <div
          className="buttons conatiner"
          onClick={(e) => numberClickHandler(e)}
        >
          <div className="row">
            <button className="col btn btn-primary button-number">7</button>
            <button className="col btn btn-primary button-number">8</button>
            <button className="col btn btn-primary button-number">9</button>
            <button className="col btn btn-primary button-number">/</button>
          </div>

          <div className="row">
            <button className="col btn btn-primary button-number">4</button>
            <button className="col btn btn-primary button-number">5</button>
            <button className="col btn btn-primary button-number">6</button>
            <button className="col btn btn-primary button-number">*</button>
          </div>
          <div className="row">
            <button className="col btn btn-primary button-number">1</button>
            <button className="col btn btn-primary button-number">2</button>
            <button className="col btn btn-primary button-number">3</button>
            <button className="col btn btn-primary button-number">-</button>
          </div>
          <div className="row">
            <button className="col btn btn-primary button-number">0</button>
            <button className="col btn btn-primary button-number">.</button>
            <button className="col btn btn-primary button-number">+</button>
            <button className="col btn btn-primary button-number equals">
              <span>=</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
