import React, {useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

function CartTotal() {
  const { currency, deliveryFee, getTotalPrice } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      const total = await getTotalPrice();
      setSubtotal(total);
    };
    fetchTotal();
  }, [getTotalPrice]);
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;


  return (
   
      <div className="w-full">
        <div className="text-2xl">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {currency}
              {subtotal.toFixed(2)}
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>
              {currency}
              {deliveryFee.toFixed(2)}
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>
              {currency}
              {total.toFixed(2)}
            </b>
          </div>
        </div>
      </div>
      
   
    
  );
}

export default CartTotal;
