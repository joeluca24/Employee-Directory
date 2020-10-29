import React from 'react';
import './App.css';
import Faker from "faker";
import Fakermod from "./utils/fakemod";




function App() {
  var randomName = Faker.name.findName(); // Rowan Nikolau
  return (
    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
            <td><img src={employee.image} /></td>
          </tr>
        )}
      </table>



    </div>
  );
}

export default App;
