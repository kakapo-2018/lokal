import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Bodyheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container title">
        <img src="titlelarge.svg" className="header-small" />
      </div>
    );
  }
}

export default Bodyheader;
