import "./SearchResult.css";

const SearchResult = ({ restaurant }) => {
  return (
    <>
      <div className="search-results-single-result">
        <img
          src={restaurant.image_url}
          alt="business"
          className="search-results-business-image"
        />

        <div className="search-results-business-info">
          <div className="search-results-subtitle">{restaurant.name}</div>

          <div className="search-results-category">
            <p>
              {restaurant.price}{" "}
              <span className="search-results-tag">
                {restaurant.categories[0].title}
              </span>
            </p>
          </div>

          <div className="search-results-business-contact">
            <p>{restaurant.phone}</p>
            <p>5930 boul milan</p>
            <p>J4Z2A9 Brossard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
