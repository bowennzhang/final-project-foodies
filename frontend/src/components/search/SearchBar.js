import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const Search = () => {
  return (
    <div>
      <div className="search-field">
        <button className="search-btn">search</button>
        <p className="search-control">
          <input
            className="search-input"
            type="text"
            placeholder="burgers, coffee, bars..."
          />
        </p>

        <button className="search-btn">near</button>
        <p className="search-control">
          <input className="search-input" type="text" placeholder="Where" />
        </p>
        <button className="search-icon">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
