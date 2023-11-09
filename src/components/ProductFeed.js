import React from 'react'
import Product from './Product';

function ProductFeed({products}) {
  return (
    <div className='grid grid-flow-row-dense mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-40'>
  
    {products.map(({id,title,image,price, description, category}) => (

      <Product
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}/>
    ))}
    <img className='w-full md:col-span-full' src="https://links.papareact.com/dyz" alt=""/>
      
    
    </div>
  
  );
}

export default ProductFeed;