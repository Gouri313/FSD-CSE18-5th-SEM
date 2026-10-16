
import React from 'react';

const Product = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto"
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "2px solid black",
            textAlign: "center",
            padding: "10px"
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain"
            }}
          />

          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <h3>{product.price}$</h3>

          <h3>Rating: {product.rating}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
