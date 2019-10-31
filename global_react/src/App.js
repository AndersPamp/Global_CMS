import React from "react";
import "./App.css";
import {
  GetCountry,
  GetOffice
  // GetDepartment,
  // GetEmployee
} from "./GetFunctions";

function App() {
  GetCountry("Sweden").then(lo => console.log(lo));
  GetOffice("sweden", "global-total").then(foo => console.log(foo));
  return (
    <div className="App">
      <header className="App-header">
        <input id="country-input"></input>
        <span>
          <input id="office-input"></input>
          <input id="department-input"></input>
          <input id="employee-input"></input>
        </span>
      </header>
    </div>
  );
}

export default App;
