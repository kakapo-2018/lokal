import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import About from "./About";
import Header from "./Header";
import Bodyheader from "./Bodyheader";
import IwiList from "./IwiList";
import Bibliography from "./Bibliography";
import Overview from "./Overview";
import Mapview from "./Mapview";
import Addedit from "./Addedit";
import Journeylist from "./Journeylist";
import Experience from "./Experience";
import Iwilanding from "./Iwilanding";
import Viewstory from "./Viewstory";
import Postregister from "./Postregister";
import Contact from "./Contact";
import Mapcomp from "./Mapcomp"

const App = () => (
  <Router>
    <div>
      <Header />

      <div className="container-mainpage">
        <Bodyheader />
        <Mapcomp />
        <IwiList />
        <Iwilanding />
        <Journeylist />
        <Route exact path="/Mapview" component={Mapview} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Header" component={Header} />
        <Route exact path="/Overview" component={Overview} />
        <Route exact path="/Addedit" component={Addedit} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Iwilanding" component={Iwilanding} />
        <Route exact path="/Viewstory" component={Viewstory} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Postregister" component={Postregister} />
        <Route exact path="/Bibliography" component={Bibliography} />
        <Route exact path="/Journeylist" component={(Journeylist)} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = () => {
  return {
   
  };
};

export default connect(mapStateToProps)(App);
