import React from "react";
import styles from "./SingleProduct.module.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export const SingleCart = ({ props }) => {
  const { name, price, imageURL, id } = props;
  const { state, dispatch } = useContext(CartContext);

  //  removeItem(index) {
  //     const todos = this.state.todos.filter((todo, todoIndex) => {
  //       return todoIndex !== index
  //     })
  //     this.setState({ todos })
  //   }
  const RemoveFromCart = (id) => {
    // console.log(state)
    const newState = state.cart.filter((e, i) => {
      return e.id !== id;
    });
    console.log(newState);
    dispatch({
      type: "DELETE_FROM_CART",
      payload: newState,
    });
    //    alert("added");
  };

  console.log(state);
  return (
    <div className={styles.checkout}>
      <img src={imageURL} alt={"imageLink"} />
      <div>
        <p>Rs: {price}</p>
        <p>{name}</p>
      </div>
      <div>
        <button onClick={() => RemoveFromCart(id)}>REMOVE</button>
      </div>
    </div>
  );
};
