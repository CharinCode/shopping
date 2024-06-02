import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { FaCartShopping } from "react-icons/fa6";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const exUsToTh = (p) => {
    const number = Math.floor(p);
    return number * 35;
  };
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p4 bg-white mb-3 ${
          activeCart
            ? "translate-x-0 transition-all duration-500 z-500"
            : "translate-x-full"
        } `}
      >
        <div className="flex justify-between items-center my-3 p-5">
          <div className="text-2xl font-bold">Your Order</div>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-2 border-gray-600 text-gray font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-200 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <ItemCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
                rating={item.rating.rate}
                qty={item.qty}
              />
            );
          })
        ) : (
          <h2 className="text-2xl text-center">Your cart is empty</h2>
        )}
        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {exUsToTh(totalPrice)}
          </h3>
          <hr className="w-[90vh] lg:w-[18vw] my-2" />
          <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw]  lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      {!activeCart && (
        <FaCartShopping
          onClick={() => {
            setActiveCart(!activeCart);
          }}
          className={`rounded-full bg-white shadow-md text-5xl p-3  fixed bottom-4 right-4 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          }`}
        />
      )}
    </>
  );
};

export default Cart;
