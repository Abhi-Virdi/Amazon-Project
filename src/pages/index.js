import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <>
      <Header/>
      
      <Banner/>
      <ProductFeed products={products}/>
    </>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );

  return{
    props:{
      products:products,
    },
  };
}
