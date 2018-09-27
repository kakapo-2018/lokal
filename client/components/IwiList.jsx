import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class IwiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container">
        <hr />
        <h1>Haere Mai! </h1>
        <h3>Welcome to Te Whanganui a Tara Wellington</h3>
        <h2>Journey</h2>
        <button type="button" class="btn btn-outline-primary">
          Te Ati Awa
        </button>
        <button type="button" class="btn btn-outline-primary">
          Ngati Toa
        </button>
      </div>
    );
  }
}

export default IwiList;
