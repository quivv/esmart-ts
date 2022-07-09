import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="Hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg.webp" className="card-img" alt="Background" height="800px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ON THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
