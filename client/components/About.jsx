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
        <h1>About</h1>
        <h4>
          LOKAL is a local story telling app for Iwi to tell their stories about
          their places.
          <br />
          <br />
          LOKAL works with Iwi to create walking tours of cities and allow
          visitors to experience the depth of the local environment through
          Maori eyes.
          <br />
          <br />
          We hope you enjoy exploring. Ka kite!
        </h4>

        <hr />
      </div>
    );
  }
}

export default About;
