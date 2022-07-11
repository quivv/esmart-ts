import React from 'react'
import { NavLink } from 'react-router-dom';
import { ProductType } from '../Type'
type Props = {
  product: ProductType;
  handleCart: (item:ProductType) => void
}

const ShowProduct:React.FC<Props> = ({product, handleCart}) => {

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
        <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2" onClick={() => handleCart(product)}>
          Go to Cart
        </NavLink>
      </div>
    </>
  )
}

export default ShowProduct