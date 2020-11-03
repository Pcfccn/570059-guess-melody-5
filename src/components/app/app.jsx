import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import WinScreen from "../win-screen/win-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import {MAX_MISTAKE_COUNT, Path} from "../../constants";
import GameScreen from "../game-screen/game-screen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {Path.WELCOME_SCREEN}
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact path = {Path.LOGIN}>
          <AuthScreen />
        </Route>
        <Route exact path = {Path.RESULT}
          render={({history}) => (
            <WinScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path = {Path.LOSE}
          render={({history}) => (
            <GameOverScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
