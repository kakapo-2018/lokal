import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStories, getStory, getInfo, getIwis } from "../actions/index";

class Journeylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { auth, logout, iwiStories, iwiInfo } = this.props;

    return (
      <div className="container journey-container">
        <hr />

        <h3>Here are {(iwiInfo.length && iwiInfo[0].iwi_name) || 'your'} Journeys</h3>

        <div class="jumbotron">
          <h2 className="Journey">Journeys</h2>
          {iwiStories.map(story => {
            return (
              <button
                onClick={() => this.props.dispatch(getStory(story.id))}
                key={story.title}
                type="button"
                class="btn btn-block"
              >
                {story.title}
              </button>
            );
          })}
          {this.props.iwiStory && (
            <div>
              <br />
              <h4>{this.props.iwiStory.title}</h4>
              <p>{this.props.iwiStory.content}</p>
              <img src={`${this.props.iwiStory.image}`} />
            </div>
          )}
        </div>
        <hr />
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

export default connect(mapStateToProps)(Journeylist);
