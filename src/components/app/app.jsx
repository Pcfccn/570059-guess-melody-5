import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import AuthScreen from "../auth-screen/auth-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import {paths} from "../../constants";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {paths.WELCOME_SCREEN}>
          <WelcomeScreen errorsCount = {errorsCount} />
        </Route>
        <Route exact path = {paths.DEV_ARTIST}>
          <ArtistQuestionScreen/>
        </Route>
        <Route exact path = {paths.DEV_GENRE}>
          <GenreQuestionScreen />
        </Route>
        <Route exact path = {paths.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path = {paths.RESULT}>
          <WinScreen />
        </Route>
        <Route exact path = {paths.LOSE}>
          <GameOverScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
