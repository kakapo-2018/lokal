import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Experience</h1>
        <img src="https://media.giphy.com/media/up6YwxhvrNuqQ/giphy.gif" />
        <hr />
      </div>
    );
  }
}

export default Experience;
