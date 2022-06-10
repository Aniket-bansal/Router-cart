import React from 'react'
import cart from './cart.json'
import style from './box.module.css'
const Cart = () => {
  console.log(cart)
  return (
    <div>Cart:
      <br/>
      <button onClick={()=>{
        alert("Your products will be delivered!")
      }}>Checkout</button>
      <br/>
      <br/>
      {cart.map((c)=>{
        return(
          <div className={style.box} key={c.id}> 
          <strong>Product ID:</strong>{c.productId}
          <strong>count:</strong>{c.count}
          
        </div>
        
        )
      })}

    </div>
  )
}

export default Cart