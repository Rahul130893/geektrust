import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/cart"} element={<Cart/>} />
      </Routes>
      
    </div>
  );
}

export default App;
