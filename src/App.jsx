import { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Products from "./Products";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <>
      <Header setShowProducts={setShowProducts} />
      {showProducts ? <Products /> : <Home />}
    </>
  );
}
