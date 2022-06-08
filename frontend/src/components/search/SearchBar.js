import { NavLink } from "react-router-dom";
import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./SearchBar.css";
import Loading from "../reusable/Loading";

const SearchBar = ({ results, allStoresFromDb, isLoaded }) => {
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState([""]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = allStoresFromDb.filter((value) => {
      console.log(value);
      return value.categories[0].title
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div>
      {isLoaded ? (
        <>
          <div className="search-field">
            <div className="search-btn-input">
              <div className="search-btn">search</div>

              <input
                className="search-input"
                type="text"
                value={wordEntered}
                placeholder="burgers, coffee, bars..."
                onChange={handleFilter}
              />
              <div className="search-icon">
                {filterData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon className="close-icon" onClick={clearInput} />
                )}
              </div>
            </div>
          </div>

          {filterData.length !== 0 && (
            <div className="dataResult-container">
              {filterData?.slice(0, 15).map((value, key) => {
                return (
                  <NavLink to={`/storeDetails/${value.id}`}>
                    <div className="search-result" key={value._id}>
                      <img
                        className="search-image"
                        src={value.image_url}
                        alt=""
                      />
                      <div className="search-restoInfo">
                        <p className="search-name">{value.name}</p>

                        <p className="search-tag">
                          {value.categories[0].title}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SearchBar;
