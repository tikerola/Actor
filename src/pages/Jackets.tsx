import React, { useState, useEffect } from "react";
import axios from "axios";

type renderItem = {
  id: string;
  name: string;
  color: string[];
  manufacturer: string;
  price: number;
};

export const Jackets = (): JSX.Element => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await axios.get("/products/jackets");
        setProductData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
  }, []);

  const renderProductData = (): JSX.Element => (
    <div>
      {productData.map((item: renderItem) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.color[0]}</p>
            <p>{item.manufacturer}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <h1>Jackets</h1>
      {renderProductData()}
    </div>
  );
};
