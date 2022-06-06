import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { AllStoresContext } from "../../contexts/allStoresContext";

import Loading from "../../reusable/Loading";
import "./Restaurants.css";

const Restaurants = () => {
  const { isLoaded, restaurantData } = useContext(AllStoresContext);

  return (
    <div className="restaurant-container">
      {isLoaded ? (
        <>
          {restaurantData.map((restaurant) => {
            return (
              <NavLink
                key={restaurant._id}
                to={`/storeDetails/${restaurant.id}`}
              >
                <div className="restaurant-result">
                  <img
                    src={restaurant.image_url}
                    alt="business"
                    className="restaurant-image"
                  />

                  <div className="restaurant-info">
                    <div>
                      <div className="restaurant-subtitle">
                        {restaurant.name}
                      </div>

                      <div className="restaurant-category">
                        <span className="restaurant-price">
                          {restaurant.price}
                        </span>
                        <span className="restaurant-tag">
                          {restaurant.categories[0].title}
                        </span>
                        <p className="restaurant-rating">{restaurant.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Restaurants;
