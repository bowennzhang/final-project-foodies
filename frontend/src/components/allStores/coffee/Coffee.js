import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { AllStoresContext } from "../../contexts/allStoresContext";

import Loading from "../../reusable/Loading";
import "./Coffee.css";

const Coffee = () => {
  const { isLoaded, coffeeData } = useContext(AllStoresContext);

  return (
    <div className="coffee-container">
      {isLoaded ? (
        <>
          {coffeeData.map((coffee) => {
            return (
              <NavLink key={coffee._id} to={`/storeDetails/${coffee.id}`}>
                <div className="coffee-result">
                  <img
                    src={coffee.image_url}
                    alt="business"
                    className="coffee-image"
                  />

                  <div className="coffee-info">
                    <div>
                      <div className="coffee-subtitle">{coffee.name}</div>

                      <div className="coffee-category">
                        <span className="coffee-price">{coffee.price}</span>
                        <span className="coffee-tag">
                          {coffee.categories[0].title}
                        </span>
                        <p className="coffee-rating">{coffee.rating}</p>
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

export default Coffee;
