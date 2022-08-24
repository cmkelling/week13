import React, { Component } from "react";

export default class Login extends Component {
    render() {
      return(
        <div className="text-center" id="log">
            <div className="card-header">
                Login
            </div>
            <div className="card-body">
                <label>Username</label>
                <input type='text' className="form-control" placeholder="username"></input>
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password"></input>
                <button type="button" className="btn btn-primary">Enter</button>
            </div>
        </div>
        
      )
    }
  }