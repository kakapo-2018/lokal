import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bodyheader from "./Bodyheadersmall";
import {updateStory, getStories} from '../actions'

class Addedit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iwiStory: {...props.iwiStory}
    };

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    var iwiStory = this.state.iwiStory
    iwiStory[e.target.name] = e.target.value
    this.setState({
      iwiStory
    })
  }

  submit(e) {
    e.preventDefault()
    const {iwiStory} = this.state
    console.log(iwiStory)
    this.props.dispatch(updateStory(iwiStory))
    this.props.dispatch(getStories(iwiStory.iwi_id))
    this.props.history.push('/iwilanding')
    //send the iwi story to the server in a put request that updates the db
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div>
        <div className="container mainpage">
        <Bodyheader />
          <hr />
          <h1>Add / Edit</h1>
          <div class="jumbotron">
            <form className="form-group" onSubmit={this.submit}>
              <label>Title</label>
              <input className="form-control" label="Iwi" value={this.state.iwiStory.title} name="title" onChange={this.handleChange}/>
              <label>Story</label>
              <textarea className="form-control" name="content" onChange={this.handleChange} rows='6'>
                {this.state.iwiStory.content}
              </textarea>
              <label>Latitude</label>
              <input className="form-control" label="Email" value={this.state.iwiStory.latitude} name="lat" onChange={this.handleChange}/>
              <label>Longitude</label>
              <input className="form-control" label="Email" value={this.state.iwiStory.longitude} name="long" onChange={this.handleChange}/>
              <br />
              <label>Image</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Upload Image</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" value={this.state.iwiStory.image} name="image" onChange={this.handleChange}/>
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose Image
                  </label>
                </div>
              </div>
              <label>Audio</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Upload Audio</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" value={this.state.iwiStory.obj} name="obj" onChange={this.handleChange}/>
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose Audio
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </form>
          </div>
          <br />
          <br />

          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    iwiStory: state.iwiStory
  };
};

export default connect(mapStateToProps)(Addedit)
