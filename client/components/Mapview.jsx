import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Mapcomp from "./Mapcomp";

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
        
          <div>
            <Mapcomp />
          </div>
          <br />
          <br />
          Map caption
          <br />
          <br />
        

        <hr />
      </div>
    );
  }
}

export default Mapview;
