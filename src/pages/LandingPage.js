import React, { Component } from "react";

import NavBar from "./LandingPage";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <NavBar {...this.props}></NavBar>
      </>
    );
  }
}
