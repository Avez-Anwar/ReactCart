import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const mainNavigation = (props) => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>Login</li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            Cart
            <Badge
              color="primary"
              badgeContent={props.cartItemNumber}
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/">main</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
