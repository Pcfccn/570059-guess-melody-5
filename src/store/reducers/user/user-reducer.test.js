import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {ActionApiCreator} from "../../api-actions";
import {ApiPath, AuthorizationStatus, Path} from "../../../constants";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NOT_AUTHORIZED,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTHORIZED
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTHORIZED
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = ActionApiCreator.checkAuth();

    apiMock
      .onGet(ApiPath.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTHORIZED,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = ActionApiCreator.login(fakeUser);

    apiMock
      .onPost(ApiPath.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTHORIZED,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Path.RESULT,
        });

      });
  });

});
