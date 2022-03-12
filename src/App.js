
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/alert';


import Navbar from './components/Navbar';
import Text from './components/Text';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ACD } from './components/ACD';
import { B } from './components/B';
import {form} from './components/form'
import Login from './components/Login';




function App() {
  // const [alert, setalert] = useState(null)
  // const showalert = (message, type) => {
  //   setalert({
  //     msg: message,
  //     type: type,
  //   })

  // }


  return (
    <>

      {/* <Navbar title="My Company" Abouttext="About" /> */}
      {/* <Alert alert={alert} /> */}
      


        <Router>
          <Switch>
            <Route path="/admin">
              <ACD />
            </Route>
            <Route path="/logout">
              <B />
            </Route>
            <Route path="/form">
              <Login/>
                          </Route>
          </Switch>
        </Router>
        {/* <Text /> */}

        {/* <Text heading="Enter text to convert it into Uppercase letters"/> */}

      

    </>
  );
}

export default App;
