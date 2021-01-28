import React from "react";
import styles from"./app.module.css";
import Login from './components/login/login';

function App( { authService } ) {

  return (
    <section className={styles.container}>
      <Login authService={authService}/>
    </section>
  );
}

export default App;
