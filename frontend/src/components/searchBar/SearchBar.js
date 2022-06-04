import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <div className="search-field">
        <div className="search-btn">search</div>
        <p className="search-control">
          <input
            className="search-input"
            type="text"
            placeholder="restaurants, coffee, bars..."
          />
        </p>

        <button className="search-icon">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
