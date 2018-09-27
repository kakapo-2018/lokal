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
        <h1>Bibliography</h1>
        <h4>
          <a className="links" href="https://teatiawa.iwi.nz/">
            https://teatiawa.iwi.nz/
          </a>
          <br />
          <br />
        </h4>

        <hr />
      </div>
    );
  }
}

export default About;
