import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import formatDate from "../../../util/formatDate";
import iconCalendar from "../../../assets/images/icons/ic_calendar.svg";

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div ref={refDate} className={["mb-3", props.outerClassName].join(" ")}>
      <div className="flex flex-row">
        <div className="bg-dark-blue h-[45px] w-[45px] pointer-events-none flex justify-center items-center rounded z-999 absolute">
          <span className="flex justify-center">
            <img src={iconCalendar} alt="icon calendar" />
          </span>
        </div>
        <input
          className="bg-input-grey w-full h-[45px] font-poppins text-base text-center outline-none border "
          readOnly
          type="text"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="p-1 bg-white absolute z-5 top-[45px] rounded">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
