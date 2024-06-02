import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const result = products.filter((item) => {
      if (category === "All") {
        return item.title.toLowerCase().includes(search.toLowerCase());
      } else {
        return (
          category === item.category &&
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    setFilteredProducts(result);
  }, [products, category, search]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10 ">
        {loading ? (
          <h2 className="text-2xl">กำลังโหลดข้อมูล...</h2>
        ) : filteredProducts.length === 0 ? (
          <h2 className="text-2xl">ไม่พบข้อมูล</h2>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              rating={product.rating.rate}
              handleToast={handleToast}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
