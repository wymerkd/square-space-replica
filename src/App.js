import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import Features from './components/Features';
import Templates from './components/Templates';
import Support from './components/Support';
import Login from './components/Login';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/features' component={Features}/>
        <Route path='/templates' component={Templates}/>
        <Route path='/support' component={Support}/>
        <Route path='/login' component={Login}/>
        <Route path='/get-started' component={GetStarted}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
