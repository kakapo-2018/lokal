import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Logout from "./Logout";
import About from "./About";
import Register from "./Register";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import IwiList from "./IwiList";
import Bibliography from "./Bibliography";
import Overview from "./Overview";
import Mapview from "./Mapview";
import Login from "./Login";
import Addedit from "./Addedit";
import Journeylist from "./Journeylist";
import Experience from "./Experience";
import Iwilanding from "./Iwilanding";
import Viewstory from "./Viewstory";

const App = ({ auth }) => (
  <Router>
    <div>
      <Header />

      <div className="container-mainpage">
        <Bodyheader />

        <IwiList />
        <Route exact path="/Mapview" component={Mapview} />
        <Route exact path="/About" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Header" component={Header} />
        <Route exact path="/Overview" component={Overview} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/Addedit" component={Addedit} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Iwilanding" component={Iwilanding} />
        <Route exact path="/Viewstory" component={Viewstory} />
        <Route exact path="/Bibliography" component={Bibliography} />
        <Route exact path="/register" component={(Login, Register)} />
        <Route exact path="/Journeylist" component={(Login, Journeylist)} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
