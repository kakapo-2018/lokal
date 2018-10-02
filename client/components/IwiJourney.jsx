import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStories, getStory, getInfo, getIwis } from "../actions/index";
import Experience from './Experience'

class IwiJourneylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { auth, logout, iwiStories, iwiInfo, iwiStory } = this.props;

    return (
      <div className="container journey-container">
        <hr />

        <h3>Here are {(iwiInfo.length && iwiInfo[0].iwi_name) || 'your'} Journeys</h3>
        <br />
        <a href = '/#/addedit'><button 
        type="button"
        class="btn btn-block">
        Add Journey
        </button></a>
        <br />
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
              
              <h4>{this.props.iwiStory.title}</h4><a href= '/#/addedit'><button 
                 type="button"
                  class="btn btn-block">
                  Edit Journey
              </button></a>
              <p>{this.props.iwiStory.content}</p>
              <img src={`${this.props.iwiStory.image}`} />
              {Object.keys(iwiStory).length > 0 && <Experience />}
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

export default connect(mapStateToProps)(IwiJourneylist);
