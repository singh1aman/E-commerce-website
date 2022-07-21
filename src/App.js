import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Data from "./Object";
import Shirt from "./Components/SubHeaderOp/Shirt";
import Pant from "./Components/SubHeaderOp/Pant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/CartPage/Cart";
import SignUp from "./Components/HeaderComp/SignUp";
import Hero from "./Components/Hero";
export default function () {
  const [inputState, setInputState] = React.useState("sample");
  // console.log(inputState);

  const [cart, setCart] = React.useState([]);

  function addToCart(product) {
    console.log("atc clicked", product);

    const productinCart = cart.find((ele) => ele.id === product.id);
    console.log(productinCart, "value of productincart");
    if (productinCart) {
      if (productinCart.quantity < productinCart.totalquantity) {
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        setCart(
          cart.map((ele) =>
            ele.id === product.id
              ? { ...productinCart, quantity: productinCart.quantity + 1 }
              : ele
          )
        );
      }
    } else {
      // spread opertor

      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log(cart);
    }
  }
  function deleteToCart(product) {
    const productinCarttoDelete = cart.find((ele) => ele.id === product.id);
    console.log(productinCarttoDelete);
    if (productinCarttoDelete.quantity === 1) {
      setCart((cart) =>
        cart.filter((ele) => {
          return ele.id !== productinCarttoDelete.id;
        })
      );
    } else {
      setCart(
        cart.map((ele) =>
          ele.id === product.id
            ? {
                ...productinCarttoDelete,
                quantity: productinCarttoDelete.quantity - 1,
              }
            : ele
        )
      );
    }
  }

  function removeCart(product) {
    setCart(cart.filter((ele) => ele.id != product.id));
  }

  return (
    <>
      <BrowserRouter>
        <Header setInputState={{ setInputState, cart }} />
        <SubHeader />

        <Routes>
          <Route
            path="/"
            element={<Card inputState={{ inputState, addToCart }} />}
          />
          <Route path="/Shirt" element={<Shirt />} />
          <Route path="/Pant" element={<Pant />} />
          <Route path="/cart" element={<Cart cart={{ cart, addToCart,deleteToCart,removeCart }} />} />
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const productinCart = cart.find((ele) => ele.id === product.id);

//     if (productinCart) {
//       if (productinCart.quantity < productinCart.totalquantity) {
//         setCart(
//           cart.map((ele) =>
//             ele.id === product.id
//               ? { ...productinCart, quantity: productinCart.quantity + 1 }
//               : ele
//           )
//         )
//       } else {
//         setCart([...cart, { ...product, quantity: 1 }]);
//         // console.log(productinCart);
//       }
//     }
//   }
