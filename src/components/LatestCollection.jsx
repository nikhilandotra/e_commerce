import React, { useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            Loading latest products...
          </p>
        ) : (
          latestProducts.map((items) => (
            <ProductItem
              key={items._id}
              id={items._id}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default LatestCollection;
