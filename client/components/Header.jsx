import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="site-header sticky-top py-1">
        <div class="py-2" href="#">
          <a class="header-text" href="#">
            <img className="logo" src="logowhite.svg" />
          </a>
          <Link class="header-text" to="/login">
            login
          </Link>
          <Link class="header-text" to="/register">
            register
          </Link>
          <Link class="header-text" to="/about">
            about
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
