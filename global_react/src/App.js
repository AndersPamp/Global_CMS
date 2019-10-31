import React from "react";
import "./App.css";
import { GetCountry,GetOffice } from './GetFunctions';

function App() {

 GetCountry('Sweden').then(lo => console.log(lo));
 GetOffice('Sweden','Global-Total').then(foo => console.log(foo));

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <input></input>
        <span>
          <input></input>
        </span>
      </header>
    </div>
  );
}

export default App;
