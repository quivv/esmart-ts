import { ProductType } from "../../Type";

type Props = {
  type: string
  payload: ProductType
}
const cart:ProductType[] = [];

const handleCart = (state: ProductType[] = cart, action: Props) => {
  const product = action.payload;
  //check if product already exist
  const Exist = state.find(x => x.id === product.id);
  switch (action.type) {
    case "ADDITEM":
      if(Exist){
        return state.map(x => x.id === product.id ? {...x, amount: x.amount + 1} : x)
      }else{
        return [...state, {...product, amount: 1}]
      }
      break;  
    case "DELITEM":
      if(Exist?.amount === 1){
        return state.filter(x => x.id !== product.id)
      }else{
        return state.map(x => x.id === product.id ? {...x, amount: x.amount - 1} : x)
      }
      break;
    default:
      return state
      break;
  }
}

export default handleCart;