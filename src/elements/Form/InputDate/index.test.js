/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import { screen } from "@testing-library/jest-dom";
// import InputDate from "./index";

// class TestInput extends React.Component {
//   state = {
//     value: {
//       startDate: new Date(),
//       endDate: new Date(),
//     },
//   };

//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   render() {
//     return (
//       <InputDate
//         max={30}
//         onChange={this.handleChange}
//         name="value"
//         value={this.state.value}
//       />
//     );
//   }
// }

// const setup = () => {
//   const { container } = render(<TestInput />);
//   const wrapper = container.querySelector(`.input-date`);
//   const input = container.querySelector(`input.form-control`);

//   return {
//     container,
//     wrapper,
//     input,
//   };
// };
