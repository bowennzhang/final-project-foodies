import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import "./Category.css";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="category-container">
      <p className="category-title">Categories</p>

      <div className="category-wrapper">
        <NavLink to="/coffee">
          <div className="category-card">
            <LocalCafeIcon />
            <p>coffee</p>
          </div>
        </NavLink>

        <NavLink to="/restaurants">
          <div className="category-card">
            <RestaurantIcon />
            <p>restaurant</p>
          </div>
        </NavLink>

        <NavLink to="/bars">
          <div className="category-card">
            <LocalBarIcon />
            <p>bar</p>
          </div>
        </NavLink>

        <NavLink to="/shopping">
          <div className="category-card">
            <ShoppingBasketIcon />
            <p>shopping</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Category;
