import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { ao1, ao2 } from "./assets";

const prod = [
  {
    "_id": 1,
    "title": "Long sleeve Jacket",
    "isNew": true,
    "oldPrice": "300.000",
    "price": 159000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    "category": "Ngành truyền thông",
    "image": ao1,
    "rating": 5
  },
  {
    "_id": 2,
    "title": "Long sleeve Jacket",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
    "category": "CLB Street Workout",
    "image": ao2,
    "rating": 4
  },
];
const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    // setProducts(data.data);
    setProducts(prod);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
