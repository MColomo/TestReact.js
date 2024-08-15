import { useState, useEffect } from "react";
import ProductMatrix from '../components/ProductMatrix'
import Header from '../components/Header'

export default function Index() {
  const [items, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://dulces-petalos.herokuapp.com/api/product";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
        <ProductMatrix
          allProducts={items}
          nColumns={4}/>
    </div>
  );
}