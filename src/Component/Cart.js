import React, { useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(0);

  if (count < 0) {
    alert("quantity should not be negative");
  }

  var obj = JSON.parse(localStorage.getItem("object"));
  return (
    <div>
      {obj.map((rec) => {
        return (
          <div>
            <img src={rec.img} alt="img" />
            <h2>price: ${rec.price}</h2>
            Quantity: <button onClick={() => setCount(count + 1)}>
              +
            </button>{" "}
            {count} <button onClick={() => setCount(count - 1)}>-</button>
            <span>
              {" "}
              Total Price:({count}*{rec.price}) ={" "}
            </span>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
