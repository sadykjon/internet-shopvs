import React, { useContext, useEffect, useReducer, useState } from 'react'
import CartItem from '../components/cart-item/cart-item'
import { services } from '../Services/Services'
import { MyContext } from '../Context/My-Context'


function Home() {

  const { products, getAllProductsState, addToCard, deleteToCart, searchClick } = useContext(MyContext)
  const [data, setData] = useState([])

  useEffect(() => {
    const data = async () => {
      const product = await services.allProducts()
      getAllProductsState(product.data.products)
    }
    data()
  }, [])

 



  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        products.map((product, index) => {
          return <CartItem onClick={() => addToCard(product.id)} key={index} {...product} children="Add To Cart" />
        })
      }


    </div>
  )
}

export default Home