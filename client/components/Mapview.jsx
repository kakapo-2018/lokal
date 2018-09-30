import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Mapcomp from "./Mapcomp";
import Journeylist from "./Journeylist";

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
          <br />
          <br />
         <Journeylist />
          <br />
          <br />
        

        <hr />
      </div>
    );
  }
}

export default Mapview;
