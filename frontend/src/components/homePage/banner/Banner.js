import { NavLink } from "react-router-dom";

import "./Banner.css";

import BgI1 from "../../../asset/pexels-daria-shevtsova-704569.jpg";
import BgI2 from "../../../asset/pexels-pixabay-315755.jpg";
import BgI3 from "../../../asset/pexels-brigitte-tohm-377903.jpg";
import BgI4 from "../../../asset/pexels-valeria-boltneva-842571.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <p className="banner-title">
          Foodies, <br /> Let's find your <br /> go to place!
        </p>
        <NavLink to="/search">
          <button className="banner-btn">find out more</button>
        </NavLink>
      </div>
      <div className="banner-images">
        <img className="banner-bgi1 anime" src={`${BgI1}`} alt="bImage" />
        <img className="banner-bgi2 anime" src={`${BgI2}`} alt="bImage" />
        <img className="banner-bgi3 anime" src={`${BgI3}`} alt="bImage" />
        <img className="banner-bgi4 anime" src={`${BgI4}`} alt="bImage" />
      </div>
    </div>
  );
};

export default Banner;
