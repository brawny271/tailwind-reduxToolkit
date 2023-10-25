import React,{useState, useEffect} from 'react'
import Products from './Products';
import FeatureCard from './FeatureCard';

const CatagoryCrad = () => {
const [categories, setCategories] = useState([]);
console.log(categories,"Category")
  useEffect(() => {
    async function fetchp() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchp();
  }, []);

    const [product, setProducts] = useState([]);
    console.log(product);

    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await fetch(
            "https://fakestoreapi.com/products?limit=12"
          );
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

  if(categories.length === 0) return <dive>Loading...</dive>

  return (
    <>
    <FeatureCard card={categories} />
    { product.length > 0 ? 
      <Products product={product}  /> : <div>Loading...</div>
    }
    </>
  );
};

export default CatagoryCrad;
