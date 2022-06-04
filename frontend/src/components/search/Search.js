import SearchBar from "../searchBar/SearchBar";
import SearchResult from "./searchResult/SearchResult";

import "./Search.css";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <div className="search-results">
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
