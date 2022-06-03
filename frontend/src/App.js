import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./components/homePage/Home";

import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/reusable/NavBar";
import Profile from "./components/profile/Profile";
import Loading from "./components/reusable/Loading";
import Search from "./components/search/Search";

// import StartingPage from "./components/startPage/StartingPage";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  return (
    <>
      <Router>
        <Container>
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

              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
          </Wrapper>
        </Container>
      </Router>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--darkwhite-color);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 0 10px 20px #bdbdbd;
`;
