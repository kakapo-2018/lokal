import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bodyheader from "./Bodyheadersmall";

class Contact extends React.Component {
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
        <h1>Contact</h1>
        <h3>LOKAL was developed by;</h3>
        <br />
        <br />

        <div className="row">
          <div className="col-lg-3">
            <a href="https://github.com/dani-smith">
              <img
                className="Profile-image"
                src="https://avatars1.githubusercontent.com/u/24470414?s=460&v=4"
              />
              <br />
              <h3 className="contact-links">Dani</h3>
            </a>
          </div>

          <div className="col-lg-3">
            <a href="https://github.com/ben-vandelaar">
              <img
                className="Profile-image"
                src="https://avatars0.githubusercontent.com/u/32469338?s=460&v=4"
              />
              <br />
              <h3 className="contact-links">Ben</h3>
            </a>
          </div>

          <div className="col-lg-3">
            <a href="https://github.com/Rob-Bee-Neilson">
              <img
                className="Profile-image"
                src="https://avatars1.githubusercontent.com/u/35246811?s=460&v=4"
              />
              <br />
              <h3 className="contact-links">Robbie</h3>
            </a>
          </div>

          <div className="col-lg-3">
            <a href="https://github.com/mattritani">
              <img
                className="Profile-image"
                src="https://avatars3.githubusercontent.com/u/33272889?s=460&v=4"
              />
              <br />
              <h3 className="contact-links">Matt</h3>
            </a>
          </div>
        </div>
        

        <hr />
        <br />
        <a href='/#/about'><button type="button" class="btn btn-block">
          Back to About
        </button></a>
      </div>
    );
  }
}

export default Contact;
