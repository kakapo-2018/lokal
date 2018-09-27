import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Te Ati Awa</h1>
        <h4>
          In 2010 the Crown and Te Atiawa recommenced negotiations to settle the
          historical Treaty claims of Te Atiawa. In February 2010 Te Atiawa Iwi
          Authority (TAIA) was given the mandate to negotiate a deed of
          settlement with the Crown. .<br />
          <br />
          In June 2013, Te Atiawa resolved to establish Te Kotahitanga o Te
          Atiawa Trust (Te Kotahitanga) as the post-settlement governance entity
          (PSGE) for Te Atiawa. Te Kotahitanga is a private Trust that has the
          purpose of receiving Treaty
          <br />
          <br />
          settlement assets and holding, managing and administering the Trust
          Fund for the benefit of members of Te Atiawa (irrespective of where
          members live). It was also resolved in June 2013 that, following the
          signing of the Deed of Settlement
        </h4>
        <button type="button" class="btn btn-block">
          View story
        </button>

        <hr />
      </div>
    );
  }
}

export default Overview;
