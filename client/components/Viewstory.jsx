import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getInfo } from "../actions/index";
import Experience from "./Experience";

class Viewstory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { iwiInfo, iwiStory } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>{iwiInfo.length && iwiInfo[0].iwi_name}</h1>
        <img src="{iwiInfo.length && iwiInfo[0].image" />
        <br />
        <br />

        <h5>
          <img className="logo" src="logowhite.svg" />
        </h5>
        <h3>{iwiInfo.length && iwiInfo[0].content}</h3>

        <hr />
        {Object.keys(iwiStory).length > 0 && <Experience />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    iwiInfo: state.iwiInfo,
    iwiStory: state.iwiStory
  };
}

export default connect(mapStateToProps)(Viewstory);
