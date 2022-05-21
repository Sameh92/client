import { useEffect, useState } from "react";
import { product } from "../../layout/model/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [productList, setProducts] = useState<product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  /* function addProdcut() {*/
  /*
    setProducts([
      ...productList,
      { id: 3 + productList.length, name: "dood" + productList.length * 100 },
    ]);
    */
  /*setProducts((prevSate) => [
      ...prevSate,
      {
        id: prevSate.length + 101,
        name: "Product" + (prevSate.length + 1),
        price: prevSate.length * 100 + 1,
        brand: "Sameh (*) Rana",
        description: "test",
        pictureUrl: "http://picsum.photos/200",
        quantityInStock: prevSate.length + 1,
        type: "test",
      },
    ]);
}*/
  return (
    <>
      <ProductList products={productList} />
      {/*

       TO USE Console :
        <>{console.log("Hi Sameh and Rana")}</>


      product.map((item) => (
         <li key={item.id}> {item.name}</li>
      ))*/}
    </>
  );
}
