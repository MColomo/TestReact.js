import { useState, useEffect, Component } from "react";
import ProductMatrix from './components/ProductMatrix'
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://dulces-petalos.herokuapp.com/api/product";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
      <article>
        <h1>Floristería Dulces Pétalos
        {/* #TODO: Navegar a home */}
        {/* #TODO: Breadcrumbs */}
        </h1>
        <ProductMatrix
          allProducts={posts}
          nColumns={4}/>
      </article>
  );
}

export default App;