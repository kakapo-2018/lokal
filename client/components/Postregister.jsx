import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Kia ora rawa atu!</h1>
        <h4>
          Thank you for registering. A member of our team will be in touch
          shortly to confirm your registration.
          <br />
          <br />
        </h4>
        <button type="button" class="btn btn-block">
          Return to Journey
        </button>
        <br />
        <br />

        <hr />
      </div>
    );
  }
}

export default About;
