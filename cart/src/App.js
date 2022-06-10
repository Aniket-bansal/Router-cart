import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to Cart App</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
