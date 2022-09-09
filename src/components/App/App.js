import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Switch, useHistory } from "react-router-dom";
import links from "../../data/links";
import Navigation from "../Navigation/Navigation";
import NoMatch from "../NoMatch/NoMatch";
import { useState } from "react";

function App() {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  function onOpenMenu() {
    setIsPopupMenuOpen(true);
  }
  function onCloseMenu() {
    setIsPopupMenuOpen(false);
  }
  return (
    <>
      <Navigation
        links={links}
        onCloseMenu={onCloseMenu}
        isPopupMenuOpen={isPopupMenuOpen}
      />
      <Switch>
        <Route path="/" exact>
          <Header colorHeader={"pink"} isLoggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path="/signin">
          <></>
        </Route>
        <Route path="/signup">
          <></>
        </Route>
        <Route path="/movies">
          <Header
            colorHeader={"white"}
            links={links}
            isLoggedIn={true}
            onOpenMenu={onOpenMenu}
          />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header
            colorHeader={"white"}
            links={links}
            isLoggedIn={true}
            onOpenMenu={onOpenMenu}
          />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
