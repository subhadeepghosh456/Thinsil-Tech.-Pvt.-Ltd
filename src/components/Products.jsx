import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";

const Products = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState([]);

  // fetching data from api
  const getProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      // filter different Category using Set data structure.
      setCategory(["All", ...new Set(response.map((item) => item.category))]);
      setData(response);
      setFilterData(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = (cat) => {
    // if cat is All then show all the products
    if (cat === "All") {
      setFilterData([...data]);
      return;
    }
    //other wise show only specific category product
    setFilterData([...data.filter((item) => item.category === cat)]);
  };
  return (
    <div>
      <Header />
      {/* Show different category on the UI*/}
      <div className="btn-container">
        {category.map((item, index) => (
          <button
            className="cat-button"
            onClick={() => handleClick(item)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      {/* show the product list on the UI */}
      <div className="product-list">
        {filterData?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
