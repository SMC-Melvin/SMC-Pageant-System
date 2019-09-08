import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from './../../utilities/auth.util';
const ProtectedRoute = ({
  accessRoleIds,
  path,
  render,
  component: Component,
  ...rest
}) => {
  const currentUser = getCurrentUser();
  return (
    <Route
      {...rest}
      render={props => {
        if (!currentUser)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        const isAccessible =
          accessRoleIds && accessRoleIds.length
            ? accessRoleIds.includes(currentUser.RoleId)
            : true;
        if (!isAccessible) return <Redirect to="/not-found" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
