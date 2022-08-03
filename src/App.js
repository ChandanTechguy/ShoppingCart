import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Component/Products";
import {Loginform} from "./Component/Login.jsx";
import { useState } from "react";
import MyCart from "./Component/MyCart";
import Form from "./Component/Form";
import OrderPlace from "./Component/OrderPlace";
import AddProduct from "./Component/Display";
// import Navbar from "./Component/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (data) => {
    const exist = cartItems.find((item) => item.id === data.id);
    setTotal(data.price + total);
    // console.log("total price:",total)
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === data.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter >
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Loginform />}></Route>

        <Route
          path="/products"
          element={<Products onAdd={onAdd} cartItems={cartItems} />}
        ></Route>
        <Route
          path="/cart"
          element={<MyCart cartItems={cartItems} total={total} />}
        ></Route>
        <Route path="/placeOrder" element={<Form />}></Route>
        <Route
          path="/placed"
          element={<OrderPlace cartItems={cartItems} total={total} />}
        ></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
