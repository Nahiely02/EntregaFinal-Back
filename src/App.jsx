import React from 'react';
import './App.scss';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div id="app">
      <NavBar />
      <ItemListContainer welcome="Bienvenidos a mi tienda" />
    </div>

  );
}

export default App;
