import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from "react-router-dom";

import Login from './Login'
import Logout from './Logout'

import Register from './Register'



const App = ({ auth }) => (

  <Router>
    <div className='app-container'>
      <div className=''>
      {console.log({auth})}
      {!auth.isAuthenticated && (
          <Route exact path="/" component={Login} />     
        )
      }
        <Route exact path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route exact path="/register" component={(Login, Register)} />
      </div>


    </div>
  </Router>

)


const mapStateToProps = ({auth}) => {
  
  return {
    auth
  };
  
};

export default connect(mapStateToProps)(App)
