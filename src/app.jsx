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
    <Router>
      <div className={styles.app}>
        <Login authService={authService}/>
      </div>
      <Switch>
            <Route path='/app'>
                <Main/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
