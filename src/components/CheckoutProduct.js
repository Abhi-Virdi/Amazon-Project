import Image from "next/image";
import React, { useState } from 'react'
import { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "../slices/basketSlice";

const Max_Rating = 5;
const Min_Rating = 1;

function Check({ id, title, image, price, description, category }) {
  const dispatch= useDispatch();
  const [rating, setRating] = useState(1);
  const [hasPrime, setHasPrime] = useState(true);
  
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating
    );
    setHasPrime(Math.random() < 0.5);
  }, []);
  
  const product={
      id,
      title,
      image,
      price, 
      description,
      category,
      hasPrime
  };
  const additemtobasket=()=>{
    dispatch(addToBasket(product))
  }
  const removeitemtobasket=()=>{
    dispatch(removeFromBasket({id}))
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p className="text-m">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((__, i) => (
              <AiFillStar className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="my-2 mt-2 text-xs line-clamp-3">{description}</p>
        
        {hasPrime && (
          <div>
          <p className='text-xs text-gray-500'> FREE Next-Day Delivery</p>
          </div>
        )}
        </div>
         
      <div className="flex flex-col w-40 h-20 space-y-2 justify-self-end">
        <button onClick={additemtobasket} className="p-3 text-xs bg-yellow-400 border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
        <button onClick={removeitemtobasket} className="p-3 text-xs bg-yellow-400 border border-yellow-300 rounded-sm md:text-sm bg-gradient-to-b from-yellow-200 to focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 ">Remove from Basket</button>
        </div>
    </div>
  );
}

export default Check;
