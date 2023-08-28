import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/My-Context';
import CartItem from '../components/cart-item/cart-item';
import Order from '../components/order/order';

const Cart = () => {
  const [modalShow, setModalShow]=useState(false);
  const onOrder = ()=>{
    setModalShow(true)
  }
  const { cart, deleteToCart } = useContext(MyContext);


  return (
    <div>
      <div className='d-flex flex-wrap justify-content-around gap-4 mt-4'>
      {
      cart.map((elem, index) => (
        <CartItem onClick={() => deleteToCart(index)} {...elem} key={index} children="Delete to cart" />
      ))
      }
      
    </div>
    <Order show={modalShow} onHide={()=> setModalShow(false)}/>
    <button onClick={onOrder}>Оформить Товар </button>
    </div>
  );
};

export default Cart;
