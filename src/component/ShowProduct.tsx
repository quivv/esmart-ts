import React from "react";
import { CartType } from "../Type";
type Props = {
  filter: CartType[];
};
const ShowProduct: React.FC<Props> = ({ filter }) => {
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewelery</button>
        <button className="btn btn-outline-dark me-2">Electronic</button>
      </div>
      {filter.map((product) => {
        return (
          <React.StrictMode key={product.id}>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4">
                <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                  <p className="card-text lead fw-bold">
                    ${product.price}
                  </p>
                  <a href="#" className="btn btn-outline-dark">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </React.StrictMode>
        );
      })}
    </>
  );
};

export default ShowProduct;
