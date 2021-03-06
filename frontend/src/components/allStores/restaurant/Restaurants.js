import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { AllStoresContext } from "../../contexts/allStoresContext";
import Loading from "../../reusable/Loading";
import "./Restaurants.css";

const Restaurants = ({ store }) => {
  const { isLoaded } = useContext(AllStoresContext);

  return (
    <>
      {isLoaded ? (
        <>
          <div className="restaurant-container">
            <NavLink key={store._id} to={`/storeDetails/${store.id}`}>
              <div className="restaurant-result">
                <img
                  src={store.image_url}
                  alt="business"
                  className="restaurant-image"
                />

                <div className="restaurant-info">
                  <div>
                    <div className="restaurant-subtitle">{store.name}</div>

                    <div className="restaurant-category">
                      <span className="restaurant-price">{store.price}</span>
                      <span className="restaurant-tag">
                        {store.categories[0].title}
                      </span>
                      <p className="restaurant-rating">{store.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Restaurants;
