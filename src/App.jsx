import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Error from './componentes/Error/Error';
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './componentes/Checkout/Checkout';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer welcome="DESCUBRE EL PLACER DE COMPARTIR UN BUEN MATE 🧉" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer welcome="Descubre el Placer de Compartir un Buen Mate" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
      {/* el footer va aqui*/}
    </BrowserRouter>
  );
}

export default App;
