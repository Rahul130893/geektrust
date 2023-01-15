import React from 'react'
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { SingleCart } from '../Components/SingleCart';
export const Cart = () => {
     const { state, dispatch } = useContext(CartContext);

    
    console.log(state.cart)
  return (
      <div>
          {state.cart?.map((e) => {
              return (
                <div key={e.id}>
                  <SingleCart props={e} />
                </div>
              );
          })}
    </div>
  )
}
