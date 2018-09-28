import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getIwis } from "../actions/index";

class IwiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getIwis())
  }



  render() {

    const { auth, logout, iwiData } = this.props;
    return (
      <div className="container journey-container">
        <hr />
        <h1>Haere Mai! </h1>
        <h3>Welcome to Te Whanganui a Tara Wellington</h3>

        <hr />
        <div class="jumbotron">
          <h2 className="Journey">Journey</h2>

          {iwiData.map(iwi => {
            return (
              <button key={iwi.iwi_name} type="button" class="btn btn-block">
                {iwi.iwi_name}
              </button>
            )
          })}

          {/* 
          <button type="button" class="btn btn-block">
            Ngati Toa
          </button> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    iwiData: state.iwiData,
  }
}

export default connect(mapStateToProps)(IwiList);
