import React, { useContext, useEffect } from 'react'
import { services } from '../../Services/Services.js'
import {MyContext} from "../../Context/My-Context.js"
import {useNavigate} from 'react-router-dom'


function Nav() {
  const {getCategoryState, categories} = useContext(MyContext)

  useEffect(() => {
    const data = async () => {
      const result = await services.getCategories()
      getCategoryState(result.data)
    }
    data()
  }, [])

let navigate=useNavigate()
  const toggleClick = (title) => {
    navigate(`/product/${title}`)
  }

  return (
    <div className='nav-menu'>
        <h2>Category Product</h2>
        <ol>
          {
            categories.map((elem, index) =>{
              return <li onClick={() => toggleClick(elem)} key={index}>{elem}</li>
            })
          }
        </ol>
    </div>
  )
}

export default Nav