import { ProductType } from "../../Type";

//for Add item cart
export const handleAddCart = (item: ProductType) => {
  return{
    type: "ADDITEM",
    payload: item
  }
}

//for Del item cart

export const handleDelCart = (item: ProductType) => {
  return{
    type: "DELITEM",
    payload: item
  }
}