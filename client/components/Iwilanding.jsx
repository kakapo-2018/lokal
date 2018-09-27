import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Journeylist from "./Journeylist";

class Iwilanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div>
        <div className="container mainpage">
          <hr />
          <h1>Kia ora Whanau</h1>
          <h3>Haere Mai Aroha from Ngati Koata</h3>
          <br />
          <br />
          <h4 className="black">
            Kia ora Whanau welcome back to your Iwi’s story page. Here are your
            journeys
          </h4>
          <br />
          <br />
        </div>
        <Journeylist />
      </div>
    );
  }
}

export default Iwilanding;
