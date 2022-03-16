import React, { useEffect, useState } from "react";
import ProductService from "../../../services/Product.service";
import { Dslider } from "../../components/custom/Dslider";
import { ProductsArray } from "../../components/home/ProductsArray";

const Home = () => {
  const [products, setProducts] = useState<[] | IProduct[]>([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <div className="py-20">
        <Dslider></Dslider>
      </div>
      <div>
        <ProductsArray products={products} />
      </div>
    </main>
  );
};

export default Home;
