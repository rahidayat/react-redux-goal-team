import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { firebaseApp } from '../firebase';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signIn() {
    console.log('its signed in', this.state);
    const { email,password } = this.state
    // https://firebase.google.com/docs/auth/web/start
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      // console.log('data', data);
      this.props.history.push('/app')
    })
    .catch(error => {
      console.log('error', error);
      this.setState({error})
    })
    // this.props.history.push('/app');
  }
  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="email"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({email: event.target.value})}
          />
          <input type="password"
            className="form-control"
            placeholder="password"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({password: event.target.value})}
          />
          <button type="button"
            className="btn btn-success"
            onClick={() => this.signIn()}
          >Sign In
          </button>
        </div>
        <div style={{color: 'red'}}>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sign up instead</Link></div>
      </div>
    )
  }
}

export default Signin
