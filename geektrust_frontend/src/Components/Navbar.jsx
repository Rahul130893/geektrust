import React from "react";
import styles from "./Navbar.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export const Navbar = () => {
    const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.navbar}>
      <div>
        <Link to={"/"} style={{ textDecoration: "none", color: "red" }}>
          TEEREX Store
        </Link>
      </div>
      <div>Products</div>
      <div>
        <h3>
          <Link to={"/cart"}>
            <HiShoppingCart />
          </Link>
        </h3>
        <p>
          {state.count===0?"Empty":state.count}
        </p>
      </div>
    </div>
  );
};
