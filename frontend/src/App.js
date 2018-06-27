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
          <Route exact path="/west" component={App1} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
