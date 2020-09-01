import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={ROUTES.LANDING}>The Enabler</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          {!!authUser.roles[ROLES.ADMIN] && (
            <li className="nav-item">
              <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
            </li>
          )}
          <li className="nav-item">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <Link className="navbar-brand" to={ROUTES.LANDING}>The Enabler</Link>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={ROUTES.SIGN_IN}>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ROUTES.SIGN_UP}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
