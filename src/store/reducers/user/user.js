import {AuthorizationStatus} from "../../../constants";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
  }
  return state;
};

export {user};
