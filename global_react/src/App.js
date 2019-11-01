import React, { useEffect } from "react";
import "./App.css";
// import {
//   GetCountry,
//   GetOffice,
//   GetDepartment,
//   GetEmployee
// } from "./GetFunctions";
import { Country, Office, Department } from "./SelectTags";

function App() {
  useEffect(() => {
    Country();
  });
  // GetCountry("Sweden").then(lo => console.log(lo));
  // GetOffice("sweden", "global-total").then(foo => console.log(foo));
  // GetDepartment("sweden", "global-total", "awesome-department").then(q =>
  //   console.log(q)
  // );
  // GetEmployee(
  //   "sweden",
  //   "global-total",
  //   "awesome-department",
  //   "alexander-olofsson"
  // ).then(p => console.log(p));

  return (
    <div className="App">
      <header className="App-header">
        <select id="country-select"></select>
        <span>
          <select id="office-select"></select>
          <select id="department-select"></select>
          <select id="employee-select"></select>
        </span>
      </header>
    </div>
  );
}

export default App;
