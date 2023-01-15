import React, { useEffect, useState } from 'react'
import { SingleProduct } from '../Components/SingleProduct';

export const Products = () => {
   
    const [products, setProducts] = useState([])
    
    const Get_All_Products =async () => {
        try {
            const response = await fetch(
              "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
            );
           
            const res = await response.json()
            console.log(res)
            setProducts(res)
           
            
        } catch (error) {
           console.log(error) 
        }

    }

    useEffect(() => {
      Get_All_Products()    
    },[])





  return (
      <div style={{display:"flex", flexWrap:"wrap", margin:"auto"}}>
          {products?.map((e) => {
              return (
                  <SingleProduct props={e} key={e.id}  />
              )
          })}
    </div>
  )
}
