import { useContext } from "react";
import { shoppingcartContext } from "../context/shoppingCartContext";
export function useShoppingCart() {
  const value = useContext(shoppingcartContext);
  return value;
}
