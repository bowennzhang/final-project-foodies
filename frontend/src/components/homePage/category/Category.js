import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <p className="category-title">Categories</p>

      <div className="category-wrapper">
        <div className="category-card">
          <LocalCafeIcon />
          <p>coffee</p>
        </div>

        <div className="category-card">
          <RestaurantIcon />
          <p>restaurant</p>
        </div>

        <div className="category-card">
          <LocalBarIcon />
          <p>bar</p>
        </div>

        <div className="category-card">
          <ShoppingBasketIcon />
          <p>shopping</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
