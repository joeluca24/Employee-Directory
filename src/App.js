import React from 'react';
import logo from './logo.svg';
import './App.css';
import Faker from "faker";
import Fakermod from "./utils/fakemod";




function App() {
  var randomName = Faker.name.findName(); // Rowan Nikolau
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
  <tr>
    <th>email</th>
    <th>phone number</th>
    <th>name</th>
    <th>image</th>
  </tr>
  {Fakermod.map(employee => 
    <tr>
      <td>{employee.email}</td>
  <td>{employee.phoneNumber}</td>
  <td>{employee.name}</td>
      <td><img src={employee.image}/></td>
    </tr>
    )}
  </table>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
