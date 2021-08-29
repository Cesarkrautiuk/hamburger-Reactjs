import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import { GlobalStyle } from "./styles/global";
import { Home } from "./page/Home";
import { Menu } from "./page/Menu";

function App() {
  return (
    <ShoppingCartContextProvider>
      <GlobalStyle />
      {/* <Home /> */}
      <Menu />
    </ShoppingCartContextProvider>
  );
}

export default App;
