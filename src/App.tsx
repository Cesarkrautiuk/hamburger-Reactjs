import { ShoppingCartContextProvider } from "./context/shoppingCartContext";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./page/Home";
import { Menu } from "./page/Menu";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartContextProvider>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/cardapio" exact component={Menu} />
        </Switch>
      </ShoppingCartContextProvider>
    </BrowserRouter>
  );
}

export default App;
