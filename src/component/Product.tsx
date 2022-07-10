import React, { useEffect, useState } from 'react'
import { CartType } from '../Type';
import { useParams } from 'react-router'
import Loading from './Loading';
import ShowProduct from './ShowProduct';

const Product = () => {
  
  const {id} = useParams<string>();
  const [product, setProduct] = useState<CartType>(Object);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    }
    getProduct();
  },[])

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading/> : <ShowProduct product={product}/>}
        </div>
      </div>

    </div>
  )
}

export default Product