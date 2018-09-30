import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {getStories, getStory} from '../actions/index'

class Journeylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

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
              <button onClick={() => this.props.dispatch 
              (getStory(story.id))} 
              key={story.title} type="button" class="btn btn-block">
                {story.title}
              </button>
            )
          })}
         {this.props.iwiStory && this.props.iwiStory.content}
        </div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    iwiStories: state.iwiStories,
    iwiStory: state.iwiStory
  }
}

export default connect(mapStateToProps)(Journeylist)
