import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IwiList from "./IwiList";
import Mapcomp from "./Mapcomp";
import Viewstory from "./Viewstory";
import Journeylist from "./Journeylist";
import Experience from "./Experience";
import {
  getInfo,
  getIwis,
  getStories,
  clearState,
  getStory,
} from "../actions/index";
import Bodyheadersmall from './Bodyheadersmall'

class IwiListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout, iwiInfo, iwiStory } = this.props;

    return (
      <div className="container title">
        <Bodyheadersmall />
        <Mapcomp />
        <Journeylist />
        <Experience />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    iwiStories: state.iwiStories,
    iwiStory: state.iwiStory,
    iwiData: state.iwiData,
    iwiInfo: state.iwiInfo
  };
}

export default connect(mapStateToProps)(IwiListView);
