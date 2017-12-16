import React, { Component } from 'react';
import { firebaseApp } from '../firebase'

class Signup extends Component {
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
  signUp() {
    console.log('its signed up', this.state);
    const { email,password } = this.state
    // https://firebase.google.com/docs/auth/web/start
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log('error', error);
      this.setState({error})
    })
  }
  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
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
            className="btn btn-primary"
            onClick={() => this.signUp()}
          >Sign Up
          </button>
        </div>
        <div style={{color: 'red'}}>{this.state.error.message}</div>
      </div>
    )
  }
}

export default Signup
