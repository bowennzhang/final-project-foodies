import "./SearchResult.css";

const SearchResult = () => {
  return (
    <>
      <div className="search-results-single-result">
        <img
          src="https://via.placeholder.com/150"
          alt="business"
          className="search-results-business-image"
        />

        <div className="search-results-business-info">
          <div className="search-results-subtitle">Burger Place</div>

          <div className="search-results-category">
            <p>
              $$ <span className="search-results-tag">Burgers</span>
              <span className="search-results-tag">Fast Food</span>
            </p>
          </div>

          <div className="search-results-business-contact">
            <p>+3456789</p>
            <p>5930 boul milan</p>
            <p>J4Z2A9 Brossard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
