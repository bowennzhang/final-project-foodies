import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { AllStoresContext } from "../../contexts/allStoresContext";

import Loading from "../../reusable/Loading";
import "./Bars.css";

const Bars = () => {
  const { isLoaded, barsData } = useContext(AllStoresContext);

  return (
    <div className="bars-container">
      {isLoaded ? (
        <>
          {barsData.map((bars) => {
            return (
              <NavLink key={bars._id} to={`/storeDetails/${bars.id}`}>
                <div className="bars-result">
                  <img
                    src={bars.image_url}
                    alt="business"
                    className="bars-image"
                  />

                  <div className="bars-info">
                    <div className="bars-subtitle">{bars.name}</div>

                    <div className="bars-category">
                      <p>
                        {bars.price}{" "}
                        <span className="bars-tag">
                          {bars.categories[0].title}
                        </span>
                      </p>
                    </div>

                    <p className="bars-rating">{bars.rating}</p>

                    <div className="bars-contact">
                      <p className="bars-phone">{bars.display_phone}</p>
                      <div className="bars-address">
                        <p>{bars.location.display_address[0]}</p>
                        <p>{bars.location.display_address[1]}</p>
                        <p>{bars.location.display_address[2]}</p>
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

export default Bars;
