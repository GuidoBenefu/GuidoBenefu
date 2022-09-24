import React, { useContext } from 'react'
import { CartContext } from '../context/useContext'

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext)

  return (
    <div className='m-4'>
      {
        items.map((item) => (
          <div key={item.id}>
            <br/>
            <h2 className='text-xl'>{item.counter} - {item.title}</h2>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'  onClick={() => removeItem(item.id)}>Borrar Producto</button>
          </div>
        ))
      }
      <button className='bg-black hover:bg-gray-900 text-white font-bold py-1 px-3 rounded mt-5'  onClick={() => clear()}>Vaciar carrito</button>
    </div>
  )
}

export default Cart