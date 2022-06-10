import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home:
      <div>Proceed to Products page through below link or navigate through navbar</div>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Home