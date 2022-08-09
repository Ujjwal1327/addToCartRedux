import React, { useEffect, useState } from "react";
import { INC, DEC, DEL } from "../state/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import c from "./CartPage.module.css";
export default function CartPage() {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.add);
  const total = () => {
    let sum = 0;
    cart.map((item) => {
      sum = item.quant * item.price + sum;
    });
    setPrice(Math.round(sum));
  };
  useEffect(() => {
    total();
  }, [total]);
  console.log(price);
  return (
    <div>
      <Navbar />
      <div className={c.cartpage}>
        {cart.length ? (
          cart.map((item) => (
            <div className={c.cartitem}>
              <div className={c.left}>
                <img src={item.image} alt="" />
              </div>
              <div className={c.right}>
                <h2> {item.title} </h2>
                <h3> {item.category} </h3>
                <h6>{item.description}</h6>
                <span> Rating: {item.rating.rate} </span>
                <h3>
                  {" "}
                  Total Price:{item.price} x {item.quant}= $
                  {item.price * item.quant}
                </h3>

                <div className={c.quantity}>
                  <button
                    onClick={() => {
                      dispatch(DEC(item.id));
                    }}
                  >
                    DEC
                  </button>
                  <div>{item.quant}</div>
                  <button
                    onClick={() => {
                      dispatch(INC(item.id));
                    }}
                  >
                    INC
                  </button>
                </div>

                <div
                  className={c.delete}
                  onClick={() => {
                    dispatch(DEL(item.id));
                  }}
                >
                  Delete from the cart
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>add items to your cart</h1>
        )}

        <span className={c.total}> total amount: ${price}</span>
      </div>
    </div>
  );
}
