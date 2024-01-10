import React from 'react';
import './App.scss';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './componentes/Error/Error';

function App() {

  return (
    <BrowserRouter>
      <div id="app">
        <NavBar />

        <Routes>
          
          <Route path="/" element={<ItemListContainer welcome="Descubre el Placer de Compartir un Buen Mate" />} />
          <Route path="/categorias/:categoria"  element={<ItemListContainer welcome="Descubre el Placer de Compartir un Buen Mate" />}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
        {/* el footer va aqui*/}
      </div>
    </BrowserRouter>


  );
}

export default App;
