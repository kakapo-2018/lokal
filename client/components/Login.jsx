import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {loginUser, loginError} from '../actions/login'
import {getStories, getInfo} from '../actions/index'
import Bodyheader from "./Bodyheadersmall";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {       
      email: '',
      password: '' 
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(loginError(""));
}
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
}
  submit(e) {
    e.preventDefault()
    let {email, password,} = this.state
    this.props.dispatch(loginUser({email, password}))

}

  render() {
    const { auth } = this.props;

    return (
      <div className="container mainpage">
        <Bodyheader />
        <hr />

        <h1>Login</h1>

        <form onSubmit={this.submit} className="form">
         
          <div class="jumbotron">

            <div className="form-group">

              <label>Email address
                <input className="form-control" label="Email address" required placeholder="Email" type="text" name="email" className="form-control" onChange={this.updateDetails}/>
              </label>

              <label>Password
                <input className="form-control" label="Password" required placeholder="Password" type="password" name="password" className="form-control" onChange={this.updateDetails}/>
              </label>

            </div>

            <button type="submit" class="btn btn-primary btn-lg">
              Login
            </button>
            <br />
            <br />

            {auth.errorMessage && <span>{auth.errorMessage}</span>}
            {/* <a className="password-links" href="http://www.ngatitoa.iwi.nz//">
              Forgotten your password?
            </a> */}
            
          </div>

        </form>
        <hr />

      </div>
    );
  }
}

const mapStateToProps = ( {auth}) => {
  return {
    auth
  
  }
}

export default connect(mapStateToProps)(Login)