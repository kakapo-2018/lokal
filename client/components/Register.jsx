import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUserRequest } from "../actions/register";
import { loginError } from "../actions/login";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iwi_name: "",
      password: "",
      confirm_password: "",
      email: "",
      contact_name: "",
      location: "",
      phone_number: ""
    };

    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loginError(""));
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    e.target.reset();
    let {
      iwi_name,
      password,
      confirm_password,
      email,
      contact_name,
      location,
      phone_number
    } = this.state;

    if (confirm_password != password)
      return this.props.dispatch(loginError("Passwords don't match"));
    this.props.dispatch(registerUserRequest(this.state));
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <div id="">
          <form className="" onSubmit={this.submit}>
            <hr />
            {auth.errorMessage && <span className="">{auth.errorMessage}</span>}

            <h1>Register</h1>

            <div class="jumbotron">
              <div className="form-group">
                <label className="">
                  Iwi
                  <input
                    className="form-control"
                    label="Iwi"
                    name="iwi_name"
                    onChange={this.updateDetails}
                  />
                </label>

                <label className="">
                  Email
                  <input
                    required
                    className="form-control"
                    label="Email"
                    placeholder="email"
                    type="text"
                    name="email"
                    onChange={this.updateDetails}
                  />
                </label>

                <br />

                <div className="form-control">
                  <label className="">
                    Password
                    <input
                      required
                      className=""
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={this.updateDetails}
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="">
                    Confirm Password
                    <input
                      required
                      className=""
                      placeholder="Confirm Password"
                      type="password"
                      name="confirm_password"
                      onChange={this.updateDetails}
                    />
                  </label>
                </div>

                <label>Contact Name</label>
                <input
                  className="form-control"
                  label="contact_name"
                  name="contact_name"
                  onChange={this.updateDetails}
                />

                <label>Address</label>
                <input
                  className="form-control"
                  label="location"
                  name="location"
                  onChange={this.updateDetails}
                />

                <label>Phone number</label>
                <input
                  className="form-control"
                  label="phone_number"
                  name="phone_number"
                  onChange={this.updateDetails}
                />

                <div>
                  <br />
                  <br />
                  <button
                    id="register_submit"
                    className="btn btn-primary btn-lg"
                    value="Register"
                    type="submit"
                  >
                    Submit
                  </button>

                  <br />
                  <br />
                  <a
                    className="password-links"
                    href="http://www.ngatitoa.iwi.nz//"
                  >
                    Forgotten your password?
                  </a>
                </div>
              </div>
            </div>

            <hr />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Register);
