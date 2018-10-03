import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bodyheader from "./Bodyheadersmall";


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;

    return (
      <div className="container mainpage">
        
        <Bodyheader />
        <hr />
        
        <h1>About</h1>

          <h4>
            LOKAL is a local story telling app for Iwi to tell their stories about
            their places.
            <br />
            <br />
            LOKAL works with Iwi to create walking tours of cities and allow
            visitors to experience the depth of the local environment through
            Maori eyes.
            <br />
            <br />
            We hope you enjoy exploring. Ka kite!
          </h4>
        <br />
        <br />

        <a href='/#/contact'><button type="button" class="btn btn-block">
          Contact us
        </button></a>
        <br />

        <a href='/#/bibliography'><button type="button" class="btn btn-block">
          Our Bibliography
        </button></a>

        <hr />

      </div>
    );
  }
}

export default About;