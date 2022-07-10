import React from 'react'
import { NavLink } from 'react-router-dom';
import { CartType } from '../Type'
type Props = {
  product: CartType;
}

const ShowProduct:React.FC<Props> = ({product}) => {
  return (
    <>
      <div className="col-md-6 my-4">
        <img 
          src={product.image} 
          alt={product.title}
          width="400px"
          height="400px"           
        />
      </div>
      <div className="col-md-6 my-4">
        <h4 className="text-uppercase text-black-50">
          {product.category}
        </h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bold">
          Rating {product.rating && product.rating.rate} 
          <i className="fa fa-star ms-1"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">
          ${product.price}
        </h3>
        <p className='lead'>{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2">
          Add to Cart
        </button>
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
          Go to Cart
        </NavLink>
      </div>
    </>
  )
}

export default ShowProduct