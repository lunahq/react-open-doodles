import React, { Component } from "react";
import { LovingDoodle } from "react-open-doodles";

export default class App extends Component {
  render() {
    return (
      <div>
        <LovingDoodle />
        <LovingDoodle accent="#ff0083" ink="#484848" />
      </div>
    );
  }
}
