import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { AllStoresContext } from "../../contexts/allStoresContext";

import Loading from "../../reusable/Loading";
import "./Shopping.css";

const Shopping = () => {
  const { isLoaded, shoppingData } = useContext(AllStoresContext);

  return (
    <div className="shopping-container">
      {isLoaded ? (
        <>
          {shoppingData.map((shopping) => {
            return (
              <NavLink key={shopping._id} to={`/storeDetails/${shopping.id}`}>
                <div className="shopping-result">
                  <img
                    src={shopping.image_url}
                    alt="business"
                    className="shopping-image"
                  />

                  <div className="shopping-info">
                    <div className="shopping-subtitle">{shopping.name}</div>

                    <div className="shopping-category">
                      <p>
                        {shopping.price}{" "}
                        <span className="shopping-tag">
                          {shopping.categories[0].title}
                        </span>
                      </p>
                    </div>

                    <p className="shopping-rating">{shopping.rating}</p>

                    <div className="shopping-contact">
                      <p className="shopping-phone">{shopping.display_phone}</p>
                      <div className="shopping-address">
                        <p>{shopping.location.display_address[0]}</p>
                        <p>{shopping.location.display_address[1]}</p>
                        <p>{shopping.location.display_address[2]}</p>
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

export default Shopping;
