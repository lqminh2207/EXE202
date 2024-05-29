import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  // const prod = [
  //   {
  //     "_id": 1,
  //     "title": "Long sleeve Jacket",
  //     "isNew": true,
  //     "oldPrice": "200",
  //     "price": 150,
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
  //     "category": "women",
  //     "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "rating": 4
  //   },
  //   {
  //     "_id": 2,
  //     "title": "Long sleeve Jacket",
  //     "isNew": true,
  //     "oldPrice": "200",
  //     "price": 150,
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
  //     "category": "women",
  //     "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "rating": 4
  //   },
  // ];
  return products;
  // return prod;
}
