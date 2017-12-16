import React from 'react';
import ReactDODM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { firebaseApp } from './firebase';
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('user has signed in or signed up', user);
  } else {
    console.log('user has signed out or need to sign in');
  }
})

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
