import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import About from './components/pages/About';
import User from './components/users/User';

import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar icon='fa fa-github' title='Github Finder' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about' component={About}></Route>
              {/*la propiedad login se refiere al nombre dle usario en la api de github*/}
              <Route exact path='/user/:login' component={User}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
