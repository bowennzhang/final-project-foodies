import { useState, useContext, useEffect } from "react";

import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ReactPaginate from "react-paginate";

import { AllStoresContext } from "../../frontend/src/components/contexts/allStoresContext";

import Home from "./components/homePage/Home";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/reusable/NavBar";
import Profile from "./components/profile/Profile";
import Loading from "./components/reusable/Loading";
import Search from "./components/search/Search";
import Restaurants from "./components/allStores/restaurant/Restaurants";
import Coffee from "./components/allStores/coffee/Coffee";
import Bars from "./components/allStores/bars/Bars";
import Shopping from "./components/allStores/shopping/Shopping";
import StoreDetails from "./components/storeDetails/StoreDetails";
import StoreDetailsFromAll from "./components/storeDetails/storeDetailsFromAll/StoreDetailsFromAll";

import "./App.css";
import SearchResult from "./components/search/searchResult/SearchResult";
// import StartingPage from "./components/startPage/StartingPage";

function App() {
  const { storesToShowRestaurant } = useContext(AllStoresContext);

  const [resultsTotal, setResultsTotal] = useState(0);
  const [results, setResults] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`/api/get-all/${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.data);

        if (data.data.total > 1000) {
          setResultsTotal(1000);
        } else {
          setResultsTotal(data.data.total);
        }
      });
  }, [pageNumber]);
  // console.log(results);

  //auth0
  const { isLoading } = useAuth0();
  if (isLoading) return <Loading />;

  // pagination for data from mongodb
  const storesPerPage = 10;
  const pageVisited = pageNumber * storesPerPage;

  const displayStores = storesToShowRestaurant
    .slice(pageVisited, pageVisited + storesPerPage)
    .map((store) => {
      return <Restaurants key={store.id} store={store} />;
    });

  const pageCount = Math.ceil(storesToShowRestaurant.length / storesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // api
  // const displayStore = results.businesses.map((store) => {
  //   return <Search key={store.id} store={store} />;
  // });

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Router>
        <Wrapper>
          <GlobalStyles />
          {/* <StartingPage /> */}
          <Wrapper>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/search">
                <div className="restaurant-container">
                  <Search results={results} pageNumber={pageNumber} />
                  <div className="page-btn">
                    <ReactPaginate
                      previousLabel={"previous"}
                      nextLabel={"next"}
                      pageCount={Math.ceil(resultsTotal / 20)}
                      onPageChange={handlePageClick}
                      containerClassName={"paginationBtns"}
                      previousLinkClassName={"previousBtn"}
                      nextLinkClassName={"nextBtn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>
              </Route>

              <Route path="/restaurants">
                <div className="restaurant-container">
                  {displayStores}
                  <div className="page-btn">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBtns"}
                      previousLinkClassName={"previousBtn"}
                      nextLinkClassName={"nextBtn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                </div>
              </Route>

              <Route path="/coffee">
                <Coffee />
              </Route>

              <Route path="/bars">
                <Bars />
              </Route>

              <Route path="/shopping">
                <Shopping />
              </Route>

              <Route path="/storeDetails/:id">
                <StoreDetails />
              </Route>

              <Route path="/storeDetail/:page/:id">
                <StoreDetailsFromAll />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Wrapper>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: var(--darkwhite-color);
// `;

const Wrapper = styled.div`
  /* max-width: 1200px;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  background: white; */
  background: none repeat scroll 0 0 #fff;
  max-width: 1200px;
  height: fit-content;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  &:before {
    /* box-shadow: 0 10px 20px #bdbdbd; */
    box-shadow: -20px 0 20px -20px #bdbdbd inset;
    content: " ";
    height: 100%;
    left: -20px;
    position: absolute;
    top: 0;
    width: 20px;
  }

  &:after {
    box-shadow: 20px 0 20px -20px #bdbdbd inset;
    content: " ";
    height: 100%;
    position: absolute;
    top: 0;
    right: -20px;
    width: 20px;
  }
`;
