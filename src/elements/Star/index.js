import React from "react";
import propTypes from "prop-types";
import StarIcon from "../../assets/images/icons/ic_star.svg";
export default function Star({ value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos = leftPos + width;
    star.push(
      <div className="" key={`star-${i}`}>
        <img src={StarIcon} alt={value} />
      </div>
    );
  }
  if (decimals > 0 && decimals <= 5) {
    star.push(
      <div className="">
        <img src={StarIcon} alt={value} />
      </div>
    );
  }
  //   return <div></div>;
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
