import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import App1 from './components/App1';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          //Change path to route that you want to use
          <Route exact path="/west" component={App1} />
          //Default route path (handling error 404)
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
