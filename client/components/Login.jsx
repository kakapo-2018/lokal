import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Login</h1>

        <div class="jumbotron">
          <div className="form-group">
            <label>Email address</label>
            <input className="form-control" label="Email address" />
            <label>Password</label>
            <input className="form-control" label="Password" />
          </div>
          <button type="button" class="btn btn-primary btn-lg">
            Submit
          </button>
          <br />
          <br />
          <a className="password-links" href="http://www.ngatitoa.iwi.nz//">
            Forgotten your password?
          </a>
        </div>

        <hr />
      </div>
    );
  }
}

export default Login;
