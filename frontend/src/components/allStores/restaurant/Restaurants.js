import { useContext } from "react";

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
              <div key={restaurant._id} className="restaurant-result">
                <img
                  src={restaurant.image_url}
                  alt="business"
                  className="restaurant-image"
                />

                <div className="restaurant-info">
                  <div className="restaurant-subtitle">{restaurant.name}</div>

                  <div className="restaurant-category">
                    <p>
                      {restaurant.price}{" "}
                      <span className="restaurant-tag">
                        {restaurant.categories[0].title}
                      </span>
                    </p>
                  </div>

                  <p className="restaurant-rating">{restaurant.rating}</p>

                  <div className="restaurant-contact">
                    <p className="restaurant-phone">
                      {restaurant.display_phone}
                    </p>
                    <div className="restaurant-address">
                      <p>{restaurant.location.display_address[0]}</p>
                      <p>{restaurant.location.display_address[1]}</p>
                      <p>{restaurant.location.display_address[2]}</p>
                    </div>
                  </div>
                </div>
              </div>
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
