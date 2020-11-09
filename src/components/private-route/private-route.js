import React from "react";
import {Redirect, Route} from "react-router-dom";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../constants";
import {connect} from "react-redux";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  // console.log(render, path, exact, authorizationStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTHORIZED
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
