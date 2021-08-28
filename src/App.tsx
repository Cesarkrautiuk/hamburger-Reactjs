import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import { Home } from "./page/Home";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Home />
    </ShoppingCartContextProvider>
  );
}

export default App;
