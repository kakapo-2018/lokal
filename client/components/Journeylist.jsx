import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getStories} from '../actions/index'

class Journeylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getStories())
  }

  render() {
    const { auth, logout, iwiStories } = this.props;
    return (
      <div className="container journey-container">
        <hr />

        <h3>Here are Te Ati Awa's Journeys</h3>
        
        <div class="jumbotron">
          <h2 className="Journey">Journeys</h2>
          {iwiStories.map(story => {
            return (
              <button key={story.title} type="button" class="btn btn-block">
                {story.title}
              </button>
            )
          })}
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

function mapStateToProps(state) {
  return {
    iwiStories: state.iwiStories,
  }
}

export default connect(mapStateToProps)(Journeylist)
