import {questions} from "../mocks/questions";
import {ActionType} from "../store/action";
import {extend} from "../utils";

const initialState = {
  mistakes: 0,
  step: 0,
  questions,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_STEP:
      let nextStep = state.step + action.payload;
      return extend(state, {
        step: nextStep,
      });

    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload,
      });

    case ActionType.RESET_GAME:
      return extend({}, initialState);
  }

  return state;
};

export {reducer};
