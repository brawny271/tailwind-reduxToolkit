import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Products from "./Products";
import FeatureCard from "./FeatureCard";
import SmartCard from "./SmartCard";
import Footer from "./Footer";

const Home = () => {
  const [product, setProducts] = useState([]);
  console.log(product)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      <h2 className="text-6xl font-bold text-center mt-20">Products</h2>
      {product.length > 0 ? (
        <Products product={product} />
      ) : (
        <div>Loading...</div>
      )}

      <Products />
      <FeatureCard />
      <SmartCard />
    </div>
  );
};

export default Home;
