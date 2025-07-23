    import { createContext, useEffect } from "react";
    import { products } from "../assets/assets";
    import { useState } from "react";
    import { toast } from "react-toastify";
import { useNavigate } from "react-router";

    export const ShopContext = createContext();

    const ShopContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState(() => {
       
        const storedCart = localStorage.getItem("cartItem");
        return storedCart ? JSON.parse(storedCart) : {};
      });
    const currency = "$";
    const deliveryFee = 10;
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
      }, [cartItem]);
    
    const addCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please select a product size");

        return ;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        } else {
            cartData[itemId][size] = 1;
        }
        } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
        for (const item in cartItem[items]) {
            try {
            if (cartItem[items][item] > 0) {
                totalCount += cartItem[items][item];
            }
            } catch (error) {
            console.log(error);
            }
        }
        }
        return totalCount;
    };
    const updateQuantity = async (itemId , size , quantity)=>{
        if (quantity < 0) {
            toast.error("Quantity cannot be negative");
            return;
          }
          
        let cartData = structuredClone(cartItem)
        cartData[itemId][size] = quantity
        setCartItem(cartData)
    }
    const getTotalPrice = async()=>{
        let totalAmount =0 
        for(const items in cartItem){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItem[items]){

            try {
                if (cartItem[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItem[items][item]

                }
                
            } catch (error) {
                console.log(error)
            }
            }
           
        }
        return totalAmount ;
    }
    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addCart,
        getCartCount,
        updateQuantity,
        getTotalPrice,navigate
    };
    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
    };
    export default ShopContextProvider;
