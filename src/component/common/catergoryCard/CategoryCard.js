import React, { useEffect, useState } from 'react';
import './CategoryCard.css';
import { useContext } from 'react';
import priceContext from '../../../context/PriceContext';


export default function CategoryCard({ name, price, link }) {


  const context = useContext(priceContext);
  const { showDiscount, value } = context;


  //this state calculates the value of the discounted price.
  const [num, setNum] = useState(0);


  useEffect(() => {
    
    setNum(price - (value * price) / 100);
  }, [price, value])

  return (



    <div className="cardCategory_contain">
      <div className='card_imageBox'>
        <img src={link} alt="Not available" className='card_image' />
      </div>

      <div className='card_text'>
        <p style={{ fontSize: "20px", fontWeight: 600 }}>{name}</p>
        <p style={{ color: "grey" }}>Lorem ipsum dolorsolo</p>
        <p style={{ fontSize: "15px", color: "grey" }}>Original price <span style={{ fontWeight: "600" }}>${price}</span></p>

        {showDiscount &&
          <p style={{ fontSize: "15px", color: "grey" }}>Discount price <span style={{ color: "#0A66C2", fontWeight: "600" }}>${num}</span></p>
        }
      </div>
    </div>
  )
}
