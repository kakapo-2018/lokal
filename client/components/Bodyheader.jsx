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
      <div className="container">
        <img src="titlelarge.svg" className="header-title" />
      </div>
    );
  }
}

export default About;
