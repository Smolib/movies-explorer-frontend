import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import links from "../../data/links";
import Navigation from "../Navigation/Navigation";
import NoMatch from "../NoMatch/NoMatch";
import { useState, useEffect } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSavedMoviesLoaded, setIsSavedMoviesLoaded] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);
  function onOpenMenu() {
    setIsPopupMenuOpen(true);
  }
  function onCloseMenu() {
    setIsPopupMenuOpen(false);
  }

  function loggedInStatus() {
    setIsUserLoggedIn(true);
  }

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res) {
          setIsUserLoggedIn(true);
        }
      })
      .catch(() => {
        setIsUserLoggedIn(false);
      })
      .finally(() => {
        setIsUserChecked(true);
      });
  }, []);

  useEffect(() => {
    if (isUserLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
        .then(([user, savedMovies]) => {
          setCurrentUser(user);
          setSavedMovies(savedMovies);
        })
        .then(() => setIsSavedMoviesLoaded(true))
        .catch((err) => {
          alert(
            "Ой! Что-то пошло не так! Movies сломался и мы не смогли подгрузить данные пользователя и сохраненные фильмы, простите нас! :("
          );
          setCurrentUser({ name: "ой,", email: "что-то сломалось" });
        });
    }
  }, [isUserLoggedIn]);

  function onExitButton() {
    mainApi
      .signOut()
      .then(() => {
        setCurrentUser({});
        setSavedMovies([]);
        localStorage.clear();
        setIsUserLoggedIn(false);
      })
      .catch(() => alert("Произошла ошибка, мы не смогли разлогиниться"));
  }
  return (
    <CurrentUserContext.Provider
      value={{ currentUser, setCurrentUser, savedMovies, setSavedMovies }}
    >
      {isUserChecked ? (
        <>
          <Navigation
            links={links}
            onCloseMenu={onCloseMenu}
            isPopupMenuOpen={isPopupMenuOpen}
          />
          <Switch>
            <Route path="/" exact>
              <Header
                colorHeader={"pink"}
                links={links}
                isLoggedIn={isUserLoggedIn}
                onOpenMenu={onOpenMenu}
                isUserChecked={isUserChecked}
              />
              <Main />
              <Footer />
            </Route>
            <Route path="/signin">
              {isUserLoggedIn ? (
              <Redirect to="./" />
              ) : (
                <Register loggedInStatus={loggedInStatus} />
              )}
            </Route>
            <Route path="/signup">
              {isUserLoggedIn ? (
               <Redirect to="./" />
              ) : (
                <Login loggedInStatus={loggedInStatus} />
              )}
            </Route>
            <ProtectedRoute exact path="/movies" loggedIn={isUserLoggedIn}>
              <Header
                colorHeader={"white"}
                links={links}
                isLoggedIn={isUserLoggedIn}
                onOpenMenu={onOpenMenu}
                isUserChecked={isUserChecked}
              />
              <Movies />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path="/saved-movies"
              loggedIn={isUserLoggedIn}
            >
              <Header
                colorHeader={"white"}
                links={links}
                isLoggedIn={isUserLoggedIn}
                onOpenMenu={onOpenMenu}
                isUserChecked={isUserChecked}
              />
              <SavedMovies isSavedMoviesLoaded={isSavedMoviesLoaded} />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile" loggedIn={isUserLoggedIn}>
              <Header
                colorHeader={"white"}
                links={links}
                isLoggedIn={isUserLoggedIn}
                onOpenMenu={onOpenMenu}
                isUserChecked={isUserChecked}
              />
              <Profile
                onExitButton={onExitButton}
                isUserChecked={isUserChecked}
              />
            </ProtectedRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>{" "}
        </>
      ) : (
        ""
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
