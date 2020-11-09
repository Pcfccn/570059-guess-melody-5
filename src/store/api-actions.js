import {ActionCreator} from "./action";
import {AuthorizationStatus, ApiPath} from "../constants";

const ActionApiCreator = {
  fetchQuestionList: () => (dispatch, _getState, api) => (
    api.get(ApiPath.QUESTIONS)
    .then(({data}) => dispatch(ActionCreator.loadQuestions(data)))
  ),

  checkAuth: () => (dispatch, _getState, api) => (
    api.get(ApiPath.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .catch(() => {})
  ),

  login: ({login: email, password}) => (dispatch, _getState, api) => (
    api.post(ApiPath.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTHORIZED)))
    .then(() => dispatch(ActionCreator.redirectToRoute(ApiPath.RESULT)))
  ),
};

export {ActionApiCreator};
