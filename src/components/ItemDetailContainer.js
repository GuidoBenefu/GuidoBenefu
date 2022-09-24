import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import prodJson from "../prod.json"
import { useParams } from 'react-router-dom'
//import { data } from 'autoprefixer'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id }= useParams()

    useEffect(() => {
      getItem()
      .then( data =>{
        if (data) {
            setItem(data)
        }
      })
    }, [])
    

    const getItem = () => { 
        return new Promise( resolve => {
            setTimeout(() => {
                resolve(prodJson.find(p => p.id == id))
            }, 2000);
        })
    }


  
  
    return (
    <ItemDetail item ={item}/>
  )
}

export default ItemDetailContainer