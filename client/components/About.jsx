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
      <div className="navbar-end">
        <h1>About</h1>
        <p>
          LOKAL is a local story telling app for Iwi to tell their stories about
          their places. LOKAL works with Iwi to create walking tours of cities
          and allow visitors to experience the depth of the local environment
          through Maori eyes. We hope you enjoy exploring. Ka kite!
        </p>
      </div>
    );
  }
}

export default About;
