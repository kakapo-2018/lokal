import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Journeylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container journey-container">
        <hr />

        <h3>Here are Te Ati Awa's Journeys</h3>

        <div class="jumbotron">
          <h2 className="Journey">Journeys</h2>

          <button type="button" class="btn btn-block">
            Tangi-te keo and Whataitai
          </button>
          <button type="button" class="btn btn-block">
            Te Aro Pa
          </button>
          <button type="button" class="btn btn-block">
            Add a story
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Journeylist;
