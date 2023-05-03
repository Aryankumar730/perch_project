import React, { useEffect } from 'react';
import './Category.css';
import CategoryCard from '../../common/catergoryCard/CategoryCard';
import priceContext from '../../../context/PriceContext';
import { useContext } from 'react';



const data = [

  {
    "link": 'https://i.ibb.co/4WHGsrd/1st.jpg',
    "name": "Product 1",
    "price": 200,
    "id": 1
  },
  {
    "link": 'https://i.ibb.co/chWCj7N/2nd.jpg',
    "name": "Product 2",
    "price": 100,
    "id": 2
  },
  {
    "link": 'https://i.ibb.co/DGBzDHq/3rd.jpg',
    "name": "Product 3",
    "price": 200,
    "id": 3
  }
]

export default function Category() {

  const context = useContext(priceContext);
  const {setPrice} = context;

  
  
  useEffect(() =>{
    let amount = 0;
    
    for(let i = 0; i < data.length; i++){
      amount = amount + data[i].price;
    }

    if(amount !== 0){
      setPrice(amount);
    }
  }, [ ])


  return (
    <div className="category_contain">
      <div className="category_header">
        <p style={{ fontSize: "25px" }}>New Release</p>
      </div>
      <div className='category_header_text'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis earum  am a good boy</p>
      </div>

      <div className="category_images">
        {data.map((element) => {
          return <CategoryCard name={element.name} price={element.price} link={element.link} key={element.id} />
               
        })}
      </div>
    </div>
  )
}
