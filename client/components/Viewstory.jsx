import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Viewstory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { auth, logout } = this.props;
    return (
      <div className="container mainpage">
        <hr />
        <h1>Te Aro Pa</h1>
        <img src="https://nzhistory.govt.nz/files/styles/fullsize/public/images/stories/treaty/tw-039.jpg?itok=jufvPTas" />
        <br />
        <br />

        <h5>
          <img className="logo" src="logowhite.svg" />
          Story as told by Kaumatua Matiu Rei
        </h5>
        <h3>
          Uenuku is a taonga (treasure) of the Tainui people. Uenuku was the god
          of the rainbow, and the style of this striking representation is
          unlike most Māori carvings. Uenuku was lost during the battle of
          Hingakākā, between Ngāti Toa and Waikato tribes about 1780, and was
          rediscovered near Lake Ngāroto many years later. It was included in
          the acclaimed Te Māori exhibition of 1984, and is now the pride of the
          Te Awamutu museum. Here Uenuku, adorned with a feather cloak, is shown
          after its transfer from the old to the new museum building in 1975.
        </h3>

        <hr />
      </div>
    );
  }
}

export default Viewstory;
