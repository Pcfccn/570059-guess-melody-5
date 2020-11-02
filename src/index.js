import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {AuthorizationStatus} from "./constants";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {checkAuth, fetchQuestionList} from "./store/api-actions";
import rootReducer from "./store/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NOT_AUTHORIZED)));

const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchQuestionList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
