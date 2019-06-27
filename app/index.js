import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import Checkout from './components/Checkout';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('app'))