import React, { Component } from "react";

import InputNumber from "../elements/Form/InputNumber";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="bg-gray-200 flex justify-center items-center">
        <div className="h-[45px]">
          <InputNumber
            max={30}
            suffix=" night"
            isSuffixPlural
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
