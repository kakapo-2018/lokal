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
import Register from "./Register";
import Postregister from "./Postregister";
import Contact from "./Contact";
import Mapcomp from "./Mapcomp";
import { runInThisContext } from "vm";
import IwiListView from './IwiListView';
import Login from './Login';

import ScrollToTop from './ScrollToTop'

const App = (props) => (

  
  <Router>
    <ScrollToTop>
      <div>
        <Header />

        <div className="container-mainpage">
          
          {/* <Iwilanding />
          <Viewstory /> */}
          {/* <Journeylist /> */}
         
          <Route exact path="/" component={Bodyheader} />
          <Route exact path="/" component={Mapview} />
          <Route exact path="/" component={IwiList} />
          <Route exact path="/iwi" component={IwiListView} />
          <Route exact path="/iwilanding" component={Iwilanding} />
          <Route exact path="/registered" component={Postregister} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/bibliography" component={Bibliography} />
          <Route exact path="/mapview" component={Mapview} />
          <Route exact path="/header" component={Header} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/addedit" component={Addedit} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/viewstory" component={Viewstory} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/postregister" component={Postregister} />
          <Route exact path="/journeylist" component={(Journeylist)} />
        </div>
      </div>

    </ScrollToTop>
  </Router>
);

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps)(App);
