import React, { useState } from "react";
import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
      );
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };
  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };
  return (
    <div className={["mb-3", props.outerClassName].join(" ")}>
      <div className="flex flex-row">
        <div
          className="bg-button-red h-[45px] w-[45px] rounded cursor-pointer select-none flex justify-center items-center"
          onClick={minus}
        >
          <span className="flex justify-center font-poppins text-2xl font-bold text-white">
            -
          </span>
        </div>
        <input
          className="bg-input-grey w-[230px] font-poppins text-base text-center outline-none border "
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          placeholder={placeholder ? placeholder : "0"}
          value={String(InputValue)}
          onChange={onChange}
        />
        <div
          className="bg-button-green h-[45px] w-[45px] rounded cursor-pointer select-none flex justify-center items-center"
          onClick={plus}
        >
          <span className=" font-poppins text-2xl font-bold text-white">+</span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
