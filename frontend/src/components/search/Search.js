import { useState, useEffect } from "react";

import SearchBar from "../searchBar/SearchBar";

import "./Search.css";
import SearchResult from "./searchResult/SearchResult";

const Search = ({ results }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/get-all")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData(data.businesses);

        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <SearchBar />
      <SearchResult
        restaurants={restaurantData}
        results={results}
        isLoaded={isLoaded}
      />
    </div>
  );
};

export default Search;
