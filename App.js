import React from "react";
import Checkout from "./components/Checkout.jsx";
import Home from "./components/Home.jsx";
import Gaming from "./components/Routes/Gaming.jsx";
import Computer from "./components/Routes/Computer.jsx";
import Dress from "./components/Routes/Dress.jsx";
import Health from "./components/Routes/Health.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Computer />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/dresses" element={<Dress />} />
        <Route path="/health" element={<Health />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};
export default App;
