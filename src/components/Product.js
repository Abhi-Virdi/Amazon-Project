import React, { useState } from 'react'
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from 'react';
import { addToBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import Currency from "react-currency-formatter"
const Max_Rating=5;
const Min_Rating=1;
function Product({id,title,image,price, description, category}) {
  const dispatch= useDispatch();
  
  const [rating, setRating] = useState(1);

  const [hasPrime, setHasPrime] = useState(true);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
    );
    setHasPrime(Math.random() < 0.5);
  }, []);
  const additem= ()=>{
    const product={
      id,
      title,
      image,
      price, 
      description,
      category,
      hasPrime
    };
    // sending the product as an action to redux store
    dispatch(addToBasket(product));
  }
    return (
    <div className='relative z-30 flex flex-col p-10 m-5 bg-white border' >

    <p className='absolute text-xs italic top-2'>{category}</p>
    
    <Image src={image} height={300} width={300} objectFit='contain' />
   
    <h4 className='my-3'>{title}</h4>
  
    <div className='flex'>
  
    {Array(rating).fill().map((__,i)=>(
    <AiFillStar className='h-5 text-yellow-500'/>
    
    ))}
   
   </div>
   <p className='my-2 text-xs line-clamp-2'>{description}</p>
   
   <div className='mb-2'>
   <Currency  quantity={price} currency="GBP"/>

   </div>
   
   {hasPrime && (
    <p className='text-xs text-gray-500'> FREE Next-Day Delivery</p>
    
   )}
   <button onClick={additem} className='p-2 text-xs bg-yellow-400 border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500'>Add to basket</button>
   
    </div>
  )
}

export default Product;