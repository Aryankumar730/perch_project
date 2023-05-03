import React, { useEffect, useState } from 'react';
import './Discount.css';
import priceContext from '../../../context/PriceContext';
import { useContext } from 'react';


export default function Discount() {

    const context = useContext(priceContext);

    //values coming from the state context API
    const { price, setshowDiscount, showDiscount, setValue } = context;

    // declaring information states that will be displayed on the screen

    const [info1, setInfo1] = useState("Click here to get a discount.");
    const [info2, setInfo2] = useState();

    //this function will set the value of above states based on total price value of products
    function calculate() {

        if (price < 20) {
            setInfo1("Minimum cost of the item to receive a discount is $20 add.");
            setInfo2(0);
        }
        else if (price >= 20 && price < 100) {
            setInfo2(20);
        }
        else if (price >= 100 && price < 500) {
            setInfo2(30);
        }
        else if (price >= 500) {
            setInfo2(40);
        }
    }

    // this useEffect will render each time when price value will be changed and will change the infomation states
    // by calling the calculate() function.
    useEffect(() => {

        if (price !== 0) {
            calculate();
        }

    }, [price])


    //this function handles the onClick event of the discount area.

    function handleClick(e) {
        e.preventDefault();

        if (price >= 20) {

            if (showDiscount) {

                setshowDiscount(false);
                setInfo1("Click here to get a discount.");
                calculate();

            }
            else {
                setshowDiscount(true);
                setValue(info2);
                setInfo1("Click again to view value without discount.");
                setInfo2(0);

            }
        }
    }

    return (
        <ul className="nav bg-primary discount_content" onClick={handleClick}>
            <li className="nav-item">
                <p aria-current="page" className='  header_text'>{info1} </p>
            </li>
            <li className="nav-item ">
                <p className='  header_text'> &nbsp; Available discount - {info2}%</p>
            </li>

        </ul>
    )
}

