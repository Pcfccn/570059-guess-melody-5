import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import {Path} from "../../constants";
import GameScreen from "../game-screen/game-screen";
import artistQuestionProp from "../artist-question-screen/artist-question.prop";
import genreQuestionProp from "../genre-question-screen/genre-question.prop";

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {Path.WELCOME_SCREEN}
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path = {Path.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path = {Path.RESULT}>
          <WinScreen />
        </Route>
        <Route exact path = {Path.LOSE}>
          <GameOverScreen />
        </Route>
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp]).isRequired
  ),
};

export default App;
