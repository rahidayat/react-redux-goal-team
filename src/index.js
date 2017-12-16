import React from 'react';
import ReactDODM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

ReactDODM.render(
  <BrowserRouter>
    <div>
      <Route path ="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </BrowserRouter>
  , document.getElementById('root')
)
