import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Bibliography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
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
      </div>
    );
  }
}

export default Bibliography;
