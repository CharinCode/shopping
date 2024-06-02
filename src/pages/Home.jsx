import React from "react";

//import components
import Navbar from "../components/Navbar";
import Category from "../components/category/Category";
import Products from "../components/product/Products";
import Cart from "../components/cart/Cart";
const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Products />
      <Cart />
    </>
  );
};

export default Home;
