import React from "react";
import { useSelector } from "react-redux";
import AllProduct from "./components/AllProduct";
import Navbar from "./components/Navbar";

export default function App() {
  const data = useSelector((state) => state.add);
  console.log(data);
  return (
    <div>
      <Navbar />
      <AllProduct />
    </div>
  );
}
