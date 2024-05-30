import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { ao1, ao2, ao3, ao4, ao5, ao6, ao7 } from "./assets";

const des1 = `<div class="product-info">
<h2 class="product-title"><b>Mô tả sản phẩm</b></h2>

<ul class="product-details">
    <li>Chất liệu: Cotton Compact 25</li>
    <li>Thành phần: 100% Cotton</li>
    <li>Tính năng:</li>
        <ul class="product-features">
            <li>- Thấm hút thoát ẩm</li>
            <li>- Mềm mại</li>
            <li>- Thân thiện với môi trường</li>
            <li>- Kiểm soát mùi</li>
            <li>- Điều hòa nhiệt</li>
        </ul>
    <li>Thiết kế:</li>
        <p class="product-design">
            - Kỹ thuật In dẻo<br>
            - Thiết kế cổ tròn<br>
            - Sử dụng bo dệt cotton làm cổ áo<br>
            - Logo may trước ngực được thiết kế tạo dấu ấn riêng cho BST (Chất liệu nhựa TPR là vật liệu cao su nhiệt dẻo thân thiện với môi trường.)
        </p>
</ul>
</div>`;
const prod = [
  {
    "_id": 1,
    "title": "Cóc truyền thông",
    "isNew": true,
    "oldPrice": "300,000",
    "price": 159000,
    "description": des1,
    "category": "Ngành truyền thông",
    "image": ao1,
    "rating": 5
  },
  {
    "_id": 2,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "360,000",
    "price": 219000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao2,
    "rating": 4
  },
  {
    "_id": 3,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao3,
    "rating": 4
  },
  {
    "_id": 4,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao4,
    "rating": 5
  },
  {
    "_id": 5,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao5,
    "rating": 4
  },
  {
    "_id": 6,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao6,
    "rating": 5
  },
  {
    "_id": 7,
    "title": "Cóc gymer",
    "isNew": true,
    "oldPrice": "320,000",
    "price": 169000,
    "description": des1,
    "category": "CLB Street Workout",
    "image": ao7,
    "rating": 5
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
