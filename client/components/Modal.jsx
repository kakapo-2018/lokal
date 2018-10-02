import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../store";
import { Provider } from "react-redux";
 class Modal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
      };
    
  render() {
    return <div className="modal">
      {this.props.children}
    </div>
  }
 }
 const mapStateToProps = state => state
 export default connect(mapStateToProps)(Modal); 