import { useEffect, useState } from 'react'
import { CartType } from '../Type';
import Loadings from './Loadings';
import ShowProducts from './ShowProducts';

const Products = () => {
  const [data, setData] = useState<CartType[]>([]);
  const [filter, setFilter] = useState<CartType[]>(data);
  const [loading, setLoading] = useState<boolean>(false);
  let componentMounted:boolean = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data)
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();    
  },[])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loadings/> : <ShowProducts data={data} filter={filter} setFilter={setFilter} /> }
        </div>
      </div>
    </div>
  )
}

export default Products