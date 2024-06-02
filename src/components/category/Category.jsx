import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/CategorySlice";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const getProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const uniqueCategories = [
      ...new Set(response.data.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    getProduct();
  }, []);
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="flex p-3 my-5 mx-5 gap-3">
      <button
        onClick={() => dispatch(setCategory("All"))}
        className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ${
          selectedCategory === "All" && "bg-green-500 text-white"
        }`}
      >
        All
      </button>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white  ${
              selectedCategory === category && "bg-green-500 text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
