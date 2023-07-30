import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import Home from './Components/Home';



const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home}/>
        </Switch>
    </Router>
  );
};

export default App;
