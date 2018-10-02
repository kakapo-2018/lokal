import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IwiJourney from "./IwiJourney";
import {getStories, getInfo} from '../actions/index'
import Bodyheader from "./Bodyheadersmall";

class Iwilanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.props.dispatch(getStories());
  //   this.props.dispatch(getInfo());
  // }

  render() {
    const { auth, logout } = this.props;
    return (
      <div>
        <div className="container mainpage">
        <Bodyheader />
          <hr />
          <h1>Kia ora Whanau</h1>
          <h3>Haere Mai Aroha from Ngati Koata</h3>
          <br />
          <br />
          <h4 className="black">
            Kia ora Whanau welcome back to your Iwi’s story page. Here are your
            journeys
          </h4>
          <br />
          <br />
        </div>
        <IwiJourney />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     iwiStories: state.iwiStories,
//     iwiInfo: state.iwiInfo
//   }
// }

export default Iwilanding
