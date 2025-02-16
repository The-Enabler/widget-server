import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import ClinicHomePage from '../ClinicHome';
import Checkout from '../PatientRegistration/Checkout';

import './index.css'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <div className="">
        <div className="">
          <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.CLINIC_HOME} component={ClinicHomePage} />
          <Route exact path={ROUTES.PATIENT_REGISTRATION} component={Checkout} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  
);

export default withAuthentication(App);
