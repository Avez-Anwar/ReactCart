import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import ImgComp from "./container/ImgComp";
import DealsOfTheDay from "./container/DealsOfTheDay";
import Shoe from "./container/Shoe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/product" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/deals" component={DealsOfTheDay} />
            <Route path="/shoe" component={ProductsPage} />
            <Route path="/" component={ImgComp} exact />
          </Switch>
        </BrowserRouter>{" "}
      </div>
    );
  }
}

export default App;
