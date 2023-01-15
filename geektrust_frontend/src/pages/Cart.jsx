import React, { useEffect, useState } from 'react'
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { SingleCart } from '../Components/SingleCart';
export const Cart = () => {
     const { state, dispatch } = useContext(CartContext);
    const [total, setTotal]= useState(0)
    
    console.log(state.cart)

    useEffect(() => {
        let sum=0
        state.cart?.map((e) => {
            sum+= e.price
        })

        console.log("price", sum)
        setTotal(sum)
    },[state])

  return (
      <div>
          {state.cart?.map((e) => {
              return (
                <div key={e.id}>
                  <SingleCart props={e} />
                </div>
              );
          })}

          <p>Total: {total}</p>
    </div>
  )
}
