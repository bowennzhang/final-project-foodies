import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import SearchBar from "./SearchBar";
import SearchResult from "./searchResult/SearchResult";

import "./Search.css";
import { NavLink } from "react-router-dom";

const Search = ({ results, pageNumber }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allStoresFromDb, setAllStoresFromDb] = useState();

  useEffect(() => {
    fetch("/api/get-all")
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    fetch("/api/get-allStore")
      .then((res) => res.json())
      .then((data) => {
        setAllStoresFromDb(data.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <SearchBar
        results={results}
        isLoaded={isLoaded}
        allStoresFromDb={allStoresFromDb}
      />
      <NavLink to="/">
        <div className="search-home-button">
          <ArrowBackIosIcon className="search-arrow" />
          <p>Home</p>
        </div>
      </NavLink>
      <SearchResult
        results={results}
        pageNumber={pageNumber}
        isLoaded={isLoaded}
      />
    </div>
  );
};

export default Search;
