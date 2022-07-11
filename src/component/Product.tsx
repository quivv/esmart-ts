import React, { useEffect, useState } from 'react'
import { ProductType } from '../Type';
import { useParams } from 'react-router'
import Loading from './Loading';
import ShowProduct from './ShowProduct';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddCart } from '../Redux/action';

const Product = () => {
  
  const {id} = useParams<string>();
  const [product, setProduct] = useState<ProductType>(Object);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    }
    getProduct();
  },[])

  const handleCart = (item: ProductType) => {
    dispatch(handleAddCart(item))
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading/> : <ShowProduct product={product} handleCart={handleCart}/>}
        </div>
      </div>

    </div>
  )
}

export default Product