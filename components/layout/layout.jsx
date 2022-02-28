import React, { useContext } from "react";
import Blur from "./blur";
import CartView from "../cart-view/cart-view";
import DisplayContext from "../../context/display-context";
import styles from "../../styles/layout.module.css";
import CustomNavbar from "./customNavbar";

const Layout = ({ children }) => {
  const { cartView } = useContext(DisplayContext);

  return (
    <div className={cartView ? styles.noscroll : null}>
      <CartView />
      <Blur />
      <CustomNavbar/>
    
      <main>{children}</main>
    </div>
  );
};

export default Layout;
