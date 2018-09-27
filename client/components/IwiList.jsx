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
      <div className="container journey-container">
        <hr />
        <h1>Haere Mai! </h1>
        <h3>Welcome to Te Whanganui a Tara Wellington</h3>

        <hr />
        <div class="jumbotron">
          <h2 className="Journey">Journey</h2>

          <button type="button" class="btn btn-block">
            Te Ati Awa
          </button>
          <button type="button" class="btn btn-block">
            Ngati Toa
          </button>
        </div>
      </div>
    );
  }
}

export default IwiList;
