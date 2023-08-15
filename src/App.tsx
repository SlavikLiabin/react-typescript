import React from 'react';
import './App.css';
import Table from "./Table";
import {usersArray} from "./data";

function App() {

 return (
   <div className="App">
     <Table users={usersArray} />
   </div>
 );
}

export default App;