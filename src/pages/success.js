import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
const success=()=>{
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center justify-center gap-2 py-10'>
    <h1 className='text-5xl font-bold text-hoverBg'>
    Thanks for shopping, your order is confirmed</h1>
    <Link href= {'/'} className='text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300'>
    <p className='mt-4'>Continue Shopping</p>
    </Link>
    </div>
    </>
  )
}

export default success;