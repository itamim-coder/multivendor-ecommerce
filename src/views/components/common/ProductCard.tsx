import React from "react";

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h5>{product}</h5>
        <p>price</p>
      </div>
    </div>
  );
};
