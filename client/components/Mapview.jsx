import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Mapview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Insert map title</h1>
        <h5>
          <img src="https://snazzy-maps-cdn.azureedge.net/assets/27-shift-worker.png?v=20170626083420" />
          <br />
          <br />
          Map caption
          <br />
          <br />
        </h5>

        <hr />
      </div>
    );
  }
}

export default Mapview;
