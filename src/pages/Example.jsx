import React, { Component } from "react";

import { InputDate } from "../elements/Form";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="w-[230px]">
        <InputDate
          max={30}
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
      </div>
    );
  }
}
