import React, { useEffect } from "react";
import "./App.css";
// import {
//   GetCountry,
//   GetOffice,
//   GetDepartment,
//   GetEmployee
// } from "./GetFunctions";
import { Country, Office, Department, Employees } from "./SelectTags";

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
      <header className="App-header">Global CMS</header>

      <h1>Contacts</h1>
      <div className="Search-content">
        <div>
          <input id="search-box" placeholder="Search"></input>
        </div>

        <div>
          <label htmlFor="country-select">Country:</label>
          <select id="country-select" onChange={Office}></select>
          <label htmlFor="office-select">Office:</label>
          <select id="office-select" onChange={Department}></select>
          <label htmlFor="department-select">Department:</label>
          <select id="department-select" onChange={Employees}></select>
          {/* <select id="employee-select"></select> */}
        </div>

        <div id="SearchingIn"></div>
        <div id="emp-list-labels">
          <span id="span-empNo">EmpNo</span>
          <span id="span-name">Name</span>
          <span id="span-email">Email</span>
          <span id="span-phonenr">Phonenumber</span>
          <span id="span-phonenrAbbr">phoneNrAbbr</span>    
        </div>
        <div class="clear"></div>
        <div id="emp-list"></div>
      </div>
    </div>
  );
}

export default App;
