  import React, { useEffect, useContext } from 'react'
  import CartItem from '../cart-item/cart-item'
  import { useParams } from 'react-router-dom'
  import { services } from '../../Services/Services'
  import { MyContext } from '../../Context/My-Context'

  const Products = () => {
  const {data,getCategoryProduct}=useContext(MyContext)
  const { product} = useParams()
  useEffect(()=>{
    const data = async()=>{
      const result= await services.getCategoryProduct(product)
      getCategoryProduct(result.data.products)

    }
    data()
  },[product]);

    return (
      <div>
  <h1>{product} {data.length}</h1>
  <div  className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
  {
    data.map((elem,i)=>{
      return <CartItem key={i} {...elem} />
    })
  }
  </div>
  </div>
    )
  }

  export default Products
