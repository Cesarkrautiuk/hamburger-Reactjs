import { createContext, ReactNode, useState } from "react";
type AuthContextProviderProps = {
  children: ReactNode;
};
type items = {
  id: string;
  qt: string;
};
type shoppingCartContextType = {
  setItemShoppingCard: (item: items) => void;
  shopping: items[];
};
export const shoppingcartContext = createContext({} as shoppingCartContextType);

export function ShoppingCartContextProvider(props: AuthContextProviderProps) {
  const [shopping, setShopping] = useState<items[]>([]);
  console.log(shopping);
  function setItemShoppingCard(item: items) {
    setShopping([item, ...shopping]);
  }
  return (
    <shoppingcartContext.Provider value={{ setItemShoppingCard, shopping }}>
      {props.children}
    </shoppingcartContext.Provider>
  );
}
