import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import fire from '../../config/fire';
export default class RegistrationComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
          email: '',
          password: '',
          fireErrors: '',
          formTitle: 'Login',
          loginBtn: true
      };
  }

  handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
  }

  login = e => {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
          this.setState({fireErrors: error.message})
      });
  }

  register = e => {
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
          this.setState({fireErrors: error.message})
      });
  }


  getAction = action => {
      if(action === 'reg'){
          this.setState({formTitle: 'New User Registration', loginBtn: false, fireErrors: ''});
      }
      else {
          this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
      }
  }

  render() {

      let errorNotification = this.state.fireErrors ?
          (
              <div className="alert alert-danger col-md-4 offset-md-4" role="alert">
                  {this.state.fireErrors}
              </div>
          ) : null;

      let submitBtn = this.state.loginBtn ?
              (<input type="submit" className="btn btn-outline-success btn-sm float-left" value="Enter" onClick={this.login} />) :
              (<input type="submit" className="btn btn-outline-warning btn-sm float-left" value="Register" onClick={this.register} />);

      let login_register = this.state.loginBtn ?
              (<button className="btn btn-outline-warning btn-sm float-right" onClick={() => this.getAction('reg')}>Sign Up</button>) :
              (<button className="btn btn-outline-success btn-sm float-right" onClick={() => this.getAction('login')}>Already Registered</button>);

      return (
          <div>
          <Router>
          </Router>
          <div className="container">
              {errorNotification}
              <div className="col-md-4 offset-md-4 text-center">
                  <form>
                      <div className="form-group">
                          <label htmlFor="EmailInput">{this.state.formTitle}</label>
                          <input 
                              type="email" 
                              value={this.state.email} 
                              onChange={this.handleChange}
                              className="form-control" 
                              placeholder="Email"
                              autoComplete="username"
                              name="email" />
                      </div>
                      <div className="form-group">
                          <input 
                              type="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              className="form-control" 
                              placeholder="Password"
                              autoComplete="current-password"
                              name="password"
                              />
                      </div>
                      {submitBtn}
                  </form>
                  {login_register}
          </div>
          </div>
          </div>
      )
  };
}