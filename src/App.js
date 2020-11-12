import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Dashboard';
import ArticleDetail from './components/ArticleDetail';
import Contributors from './components/Contributors';
import Affiliates from './components/Affiliates';
import ConstributorsDetail from './components/Contributors/ConstributorsDetail';
import EditorialGuidelines from './components/Policy/editorialGuidelines';
import EditorialPolicy from './components/Policy/editorialPolicy';
import PrivacyPolicy from './components/Policy/privacyPolicy';
import UserAgreement from './components/Policy/userAgreement';
import GeneralInformation from './components/GeneralInformation';
import Supporters from './components/Supporters'
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

const hist = createBrowserHistory();

const App = () => (
  <div>
    <Suspense fallback="loading">
      <Router history={hist}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/articles/:normalizeName" component={ArticleDetail} />
          <Route exact path="/contributors" component={Contributors} />
          <Route exact path="/contributor/:id" component={ConstributorsDetail} />
          <Route exact path="/affiliates" component={Affiliates} />
          <Route exact path="/editorialGuidelines" component={EditorialGuidelines} />
          <Route exact path="/editorialPolicy" component={EditorialPolicy} />
          <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
          <Route exact path="/userAgreement" component={UserAgreement} />
          <Route exact path="/generalInformation" component={GeneralInformation} />
          <Route exact path="/supporters" component={Supporters} />
          <Redirect to="/" />
        </Switch>

      </Router>
    </Suspense>
  </div>
);

export default App;

