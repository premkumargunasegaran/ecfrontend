import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Recommended from "./Recommended/Recommended";
import product from "./db/data";
import Card from "./Component/Card";

function App() {
  // Input Filter
  const [selectedCategory, setselectCategory] = useState(null);
  const [query, setquery] = useState("");

  const handleInputChange = (e) => {
    setquery(e.target.value);
  };
  const filteredItems = product.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .indexOf(query.toLocaleLowerCase()) !== -1;
  });
 
  // radio filter

  const handleChange = (e) => {
    setselectCategory(e.target.value);
  };

  // Button filter

  const handleClick = (e) => {
    setselectCategory(e.target.value);
   
    
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(product, selectedCategory, query);
  // console.log(result);
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </>
  );
}

export default App;
