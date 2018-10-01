import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IwiList from "./IwiList";
import Mapcomp from './Mapcomp'
import Viewstory from './Viewstory'
import Journeylist from "./Journeylist";

class IwiListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout, iwiInfo} = this.props;
    return (
      <div className="container title">
        Iwi List View
        <Mapcomp />
        <Journeylist />

        {iwiInfo && <Viewstory />}
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

    iwiInfo: state.iwiInfo
  }
}

export default connect(mapStateToProps)(IwiListView);
