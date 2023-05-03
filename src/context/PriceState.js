import React, { useState } from "react";
import priceContext from './PriceContext';


export default function PriceState(props) {


    //state for the total price of products
    const [price, setPrice] = useState(0);

    // state that will decide when to show discount value
    const [showDiscount, setshowDiscount] = useState(false);

    // this state carries the discount percentage to the CategoryCard component from discount component
    const[value, setValue] = useState(0);


  return (
    <priceContext.Provider value={{price, setPrice, showDiscount, setshowDiscount,value, setValue}} >
    {props.children}
  </priceContext.Provider>
  )
}
