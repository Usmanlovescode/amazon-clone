import React from "react";
import "./styles/Home.css";
import Products from "./Products.jsx";
import Navbar from './Navbar.jsx';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="home__container ">
          <img src="images/banner.jpg" alt="" className="home__image" />
        </div>

        <Products />
      </div>
    </>
  );
};

export default Home;
