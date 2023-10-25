import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import OneProduct from "./Components/OneProduct";
import CatagoryCrad from "./Components/CatagoryCrad";
import Cart from "./Modules/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<OneProduct />} />
        <Route path="/Products" element={<CatagoryCrad/>}/>
        <Route path="Cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
