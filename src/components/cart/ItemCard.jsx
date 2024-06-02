import React from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  setQtyToZero,
} from "../../redux/slices/CartSlice";
import toast from "react-hot-toast";
const exUsToTh = (p) => {
  const number = Math.floor(p);
  return number * 35;
};
const ItemCard = ({ id, title, price, description, image, rating, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-4 mb-3 relative">
      <MdDelete
        onClick={() => {
          dispatch(
            removeFromCart({
              id,
              title,
              price,
              description,
              image,
              rating,
              qty,
            })
          );
          toast(`${title} Reomoved!`, {
            icon: "👋",
          });
        }}
        className="absolute top-0 right-7 text-gray-600 cursor-pointer hover:text-red-500"
      />
      <img src={image} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{title}</h2>
        <div className="flex justify-between items-center ">
          <span className="text-green-500 font-bold">฿{exUsToTh(price)}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1
                  ? dispatch(decrementQty({ id }))
                  : dispatch(setQtyToZero({ id }))
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
