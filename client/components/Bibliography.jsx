import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bodyheader from "./Bodyheadersmall";


class Bibliography extends React.Component {
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

        <h1>Bibliography</h1>
          <h4>
            <a className="links" href="https://teatiawa.iwi.nz/">
              https://teatiawa.iwi.nz/
            </a>
            <br />
            <br />

            <a className="links" href="http://www.ngatitoa.iwi.nz//">
              http://www.ngatitoa.iwi.nz//
            </a>
            <br />
            <br />

            <a className="links" href="https://www.raukawa.org.nz/">
              https://www.raukawa.org.nz/
            </a>
            <br />
            <br />

            <a className="links" href="http://teatiawakikapiti.co.nz/">
              http://teatiawakikapiti.co.nz/
            </a>
            <br />
            <br />

            <a className="links" href="https://www.kahungunu.iwi.nz/">
              https://www.kahungunu.iwi.nz/
            </a>
            <br />
            <br />
          </h4>
        <hr />
        <br />

        <a href='/#/about'><button type="button" class="btn btn-block">
          Back to About
        </button></a>

      </div>
    );
  }
}

export default Bibliography;