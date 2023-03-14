import React from "react";
import Card from "../Components/Card";
import { useContextCustom } from "../Context/StateContext";


const Products = () => {
  const {state:{products}}= useContextCustom();

  //  console.log(state);
  return (
    <div className=" flex flex-wrap gap-10 mt-10 ">
      {products?.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
