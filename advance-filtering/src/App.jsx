import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import Card from "./components/Card";

//Database
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-------Radio button
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //selected filter
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

  filteredData(products, selectedCategory, query);
  const result = filteredData(products, selectedCategory, query);



  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}
export default App;
