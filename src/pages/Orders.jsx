import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
function Orders() {
  const { currency, products } = useContext(ShopContext);
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((items) => (
          <div
            key={items._id}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={items.image[0]}
                alt={items.name}
              />
          <div>
            <p className="sm:text-base font-medium ">{items.name}</p>
            <div className="flex items-center gap-3 text-base text-gray-700">
              <p className="text-lg">
                {currency}
                {items.price}
              </p>
              
              <p>Quantity: 1</p>
              <p>Size: M</p>
            </div>
            <p className="mt-2">
              Date: <span className="text-gray-400">{date}</span>
            </p>
          </div>
          </div>
          <div className="md:w-1/2 flex justify-between">
          <div className="flex items-center gap-2">
            <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
            <p className="text-sm md:text-base">Ready To Ship</p>
          </div>
          <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
