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
        <a href='/'><img src="titlelarge.svg" className="header-small"/></a>
      </div>
    );
  }
}

export default Bodyheader;
