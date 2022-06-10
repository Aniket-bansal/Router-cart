import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent:"space-between",width: "60%",margin:"auto"}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Navbar