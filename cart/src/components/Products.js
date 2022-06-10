import React, { useEffect, useState } from 'react'
import Product from './product.json';
import style from './box.module.css'
const Products = () => {
  // console.log(Product)
  return (
    <div>Products:
      <br/>
    {Product.map((p)=>{
        return(
          <div className={style.box} key={p.id}>
           <strong> Product name:</strong>  {p.name}
           <strong> description:</strong> {p.description}
          </div>
        )
    })}
    </div>
  )
}

export default Products