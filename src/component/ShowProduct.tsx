import React from "react";
import { CartType } from "../Type";

type Props = {  
  data: CartType[];
  filter: CartType[];
  setFilter: React.Dispatch<React.SetStateAction<CartType[]>>
};

const ShowProduct: React.FC<Props> = ({ data, filter, setFilter }) => {
  const handlFilter = (para: string) => {
    const updateList = data.filter(x => x.category === para)
    setFilter(updateList)
  } 
  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handlFilter("men's clothing")}>Men's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handlFilter("women's clothing")}>Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handlFilter("jewelery")}>Jewelery</button>
        <button className="btn btn-outline-dark me-2" onClick={() => handlFilter("electronics")}>Electronic</button>
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
