import React from "react";
import styles from"./app.module.css";
import Login from './components/login/login';
import Main from './components/main/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App( { authService } ) {

  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService}/>
          </Route>
          <Route path='/main'>
              <Main authService={authService}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
