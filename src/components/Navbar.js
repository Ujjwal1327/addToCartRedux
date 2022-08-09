import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import c from "./Navbar.module.css";
export default function Navbar() {
  const data = useSelector((state) => state.add);
  return (
    <div className={c.navbar}>
      <Link to="/">
        <h2>Shopping with Ujjwal</h2>
      </Link>
      <Link to="/cartitem">
        <p>
          Cart item <span> {data.length} </span>
        </p>
      </Link>
    </div>
  );
}
