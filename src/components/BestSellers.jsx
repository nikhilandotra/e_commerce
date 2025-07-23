import React, { useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { products } from "../assets/assets";
import Title from "./Title";
import ProductItem from "./ProductItem";
function BestSellers() {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
   
    setBestSellers(bestProduct.slice(0, 5));
  }, []);
  
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellers.map((items,index)=>(
            <ProductItem key={index} id={items._id} image={items.image} name={items.name} price={items.price}/>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
