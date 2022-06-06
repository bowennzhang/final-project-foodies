import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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

// import StartingPage from "./components/startPage/StartingPage";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

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
                <Search />
              </Route>

              <Route path="/restaurants">
                <Restaurants />
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
