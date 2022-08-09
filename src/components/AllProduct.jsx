import { useEffect, useState } from "react";

import axios from "axios";
import c from "./AllProduct.module.css";
import { useDispatch } from "react-redux";
import { ADD } from "../state/action";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    console.log(res.data);
    setProducts([...products, ...res.data]);
  };
  const sendItemToCart = (item) => {
    dispatch(ADD({ ...item, quant: 1 }));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className={c.allproduct}>
      {products.length ? (
        products.map((item) => (
          <div className={c.cards} key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.category}</p>
            <h5>{item.description}</h5>
            <p> {item.title}</p>
            <b>$ {item.price}</b>
            <button
              onClick={() => {
                sendItemToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <img
          src="https://c.tenor.com/k9yAts9ymaIAAAAM/loading-load.gif"
          alt="imageasdfa"
          style={{ width: "100px", height: "70px" }}
        />
      )}
    </div>
  );
}
