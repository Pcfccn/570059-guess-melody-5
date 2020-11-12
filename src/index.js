import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {AuthorizationStatus} from "./constants";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {ActionApiCreator} from "./store/api-actions";
import rootReducer from "./store/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED)));

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(ActionApiCreator.fetchQuestionList()),
  store.dispatch(ActionApiCreator.checkAuth())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
