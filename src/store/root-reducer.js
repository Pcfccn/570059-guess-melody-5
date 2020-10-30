import {combineReducers} from "redux";
import {gameData} from "./reducers/game-data/game-data";
import {gameProcess} from "./reducers/game-process/game-process";

export const NameSpace = {
  DATA: `DATA`,
  GAME: `GAME`,
};

export default combineReducers({
  [NameSpace.DATA]: gameData,
  [NameSpace.GAME]: gameProcess,
});
