import React, { useState } from 'react'
import styles from "./SingleProduct.module.css"
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
export const SingleProduct = ({ props }) => {

 
    const { name, price, imageURL, id } = props
     const { state, dispatch } = useContext(CartContext);


    const addToCart = (id) => {
     
        dispatch({
            type: "ADD_TO_CART",
            payload: props
        });
        alert("added")
    }

  return (
      <div className={styles.cart}>
        
          <p>{name}</p>
          <img src={imageURL} alt={"imageLink"} />
          <div>
              <p>Rs: {price}</p>
              <button onClick={()=>addToCart(id)}>ADD</button>
          </div>
          
    </div>
  )
}
