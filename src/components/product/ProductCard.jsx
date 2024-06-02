import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/slices/CartSlice";
const ProductCard = ({
  id,
  title,
  price,
  description,
  image,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  const exUsToTh = (p) => {
    const number = Math.floor(p);
    return number * 35;
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-2 py-3 ">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">{exUsToTh(price)} ฿</h3>
          <div className="flex">
            {" "}
            <AiFillStar className="text-yellow-400 text-xl" />
            <span className="text-1xl font-bold">{rating}</span>
          </div>
        </div>
        <p className="">{description.slice(0, 60)}...</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              dispatch(
                addTocart({
                  id,
                  title,
                  price,
                  description,
                  image,
                  rating,
                  qty: 1,
                })
              );
              handleToast(title);
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
