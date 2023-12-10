import React from 'react';
import './App.css';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer";

function App() {


  return ( 
      <div id="app">
        <NavBar/>
        <ItemListContainer welcome = "Bienvenidos a mi tienda"/>

      </div>
      
  );
}

export default App;
