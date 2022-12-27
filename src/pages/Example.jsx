import React, { Component } from "react";
import Breadcrumb from "../elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTite: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: " " },
    ];

    return (
      <div className="">
        <div className="flex-row items-center justify-center h-screen">
          <div className="flex-col">
            <Breadcrumb data={breadcrumb} />
          </div>
        </div>
      </div>
    );
  }
}
