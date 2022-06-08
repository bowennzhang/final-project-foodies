import { NavLink } from "react-router-dom";
import Loading from "../../reusable/Loading";

import "./SearchResult.css";

const SearchResult = ({ isLoaded, results, pageNumber }) => {
  return (
    <div className="search-results-container">
      {isLoaded ? (
        <>
          {results.businesses.map((restaurant) => {
            return (
              <NavLink
                key={restaurant.id}
                to={`storeDetail/${pageNumber}/${restaurant.id}`}
              >
                <div className="search-results-result">
                  <img
                    src={`${restaurant.image_url}`}
                    alt="business"
                    className="search-results-image"
                  />

                  <div className="search-results-info">
                    <div>
                      <div className="search-results-subtitle">
                        {restaurant.name}
                      </div>

                      <div className="search-results-category">
                        <span className="search-results-price">
                          {restaurant.price}
                        </span>
                        <span className="search-results-tag">
                          {restaurant.categories[0].title}
                        </span>
                        <p className="search-results-rating">
                          {restaurant.rating}
                        </p>
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

export default SearchResult;
