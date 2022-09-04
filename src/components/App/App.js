import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Footer />
      {/* <Switch>
        <Route path="/signin">
          <></>
        </Route>
        <Route path="/signup">
          <></>
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch> */}
    </>
  );
}

export default App;