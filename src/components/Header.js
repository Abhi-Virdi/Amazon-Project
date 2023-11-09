import React from "react";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import {ShoppingCartIcon} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const items=useSelector(selectItems)
  const { data:session } = useSession()
  const router=useRouter()
  return (
    <>
      <div className="flex items-center flex-grow py-1 pr-2 mp-1 bg-amazon_blue">
        <div className="flex items-end flex-grow mt-2 ml-3 sm:flex-grow-0">
          <Image
            onClick={()=>router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <div className="items-center flex-grow hidden h-10 ml-5 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
          <input
            className="flex-grow flex-shrink w-6 h-full p-2 focus:outline-none"
            type="text"
          />
          <AiOutlineSearch className="h-12 p-4" />
        </div>

        <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
          <div 
          onClick={!session ? signIn: signOut} 
          className="cursor-pointer">
            <p className ='hover:underline'> 
            {session? `Hello, ${session.user.name}`:  "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm"> Accounts & Lists</p>
          </div>

          
          <div className="cursor-pointer">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div onClick={()=>router.push('/checkout')} className="relative flex items-center cursor-pointer link">
            <span className="absolute top-0 right-0 w-4 h-4 text-center text-black bg-yellow-400 rounded-full md:right-10">
            {items.length}</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden mt-2 font-extrabold md:inline md:text-sm">Basket</p>
          </div>
        </div>
      </div>

      <div className="flex items-center p-2 text-white cursor--3 pointer space-x bg-amazon_blue-light">
        <p className="flex items-center cursor-pointer ">
          <AiOutlineMenu className="h-6 mr-1" />
          All
        </p>
        <p className="pl-5 cursor-pointer">Prime Video</p>
        <p className="pl-5 cursor-pointer ">Amazon Business</p>
        <p className="hidden pl-5 cursor-pointer lg:inline-flex"> Today's Deals</p>
        <p className="hidden pl-5 cursor-pointer lg:inline-flex"> Electronics</p>
        <p className="hidden pl-5 cursor-pointer lg:inline-flex"> Fashion</p>
        <p className="hidden pl-5 cursor-pointer lg:inline-flex"> Careers</p>
      </div>
      </>

  );
}

export default Header;
