import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Register</h1>

        <div class="jumbotron">
          <div className="form-group">
            <label>Iwi</label>
            <input className="form-control" label="Iwi" />

            <label>Email</label>
            <input className="form-control" label="Email" />

            <label>Password</label>
            <input className="form-control" label="Password" />

            <label>Confirm password</label>
            <input className="form-control" label="Password" />

            <div>
              <br />
              <br />
              <button type="button" class="btn btn-primary btn-lg">
                Submit
              </button>
              <br />
              <br />
              <a className="password-links" href="http://www.ngatitoa.iwi.nz//">
                Forgotten your password?
              </a>
            </div>
          </div>
          <div className="form-group" />
        </div>

        <hr />
      </div>
    );
  }
}

export default Register;
