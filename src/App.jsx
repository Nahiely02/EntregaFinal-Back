import './App.scss';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './componentes/Error/Error';
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer welcome="Descubre el Placer de Compartir un Buen Mate" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer welcome="Descubre el Placer de Compartir un Buen Mate" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
      {/* el footer va aqui*/}
    </BrowserRouter>
  );
}

export default App;
