import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Addedit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div>
        <div className="container mainpage">
          <hr />
          <h1>Add / Edit</h1>
          <div class="jumbotron">
            <div className="form-group">
              <label>Title</label>
              <input className="form-control" label="Iwi" />
              <label>Author</label>
              <input className="form-control" label="Email" />
              <label>Story</label>
              <input className="form-control" label="Email" />

              <br />
              <label>Image</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Upload Image</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" />
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
                  <input type="file" class="custom-file-input" />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose Audio
                  </label>
                </div>
              </div>

              <button type="button" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </div>
          <br />
          <br />

          <hr />
        </div>
      </div>
    );
  }
}

export default Addedit;
