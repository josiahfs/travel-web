import React from "react";
import TestiImage from "../assets/images/foto_keluarga.svg";
import StarIcon from "../assets/images/icons/ic_star.svg";
import Button from "../elements/Button";

export default function Testimony({ data }) {
  return (
    <section className="px-36 mb-[70px] pt-8">
      <div className="flex flex-row items-center mr-20">
        <img src={TestiImage} alt="Testi"></img>
        <div className="flex flex-col pl-[75px]">
          <h4 className="text-dark-blue text-2xl font-poppins font-medium ml-[5px]">
            {data.name}
          </h4>
          <div className="flex flex-row mt-10">
            <img width={34} height={34} src={StarIcon} alt="rating"></img>
            <img width={34} height={34} src={StarIcon} alt="rating"></img>
            <img width={34} height={34} src={StarIcon} alt="rating"></img>
            <img width={34} height={34} src={StarIcon} alt="rating"></img>
            <img width={34} height={34} src={StarIcon} alt="rating"></img>
          </div>
          <p className="text-dark-blue text-[32px] font-poppins w-[600px] font-light ml-[5px] mt-2">
            {data.content}
          </p>
          <p className="text-light-gray text-[18px] font-poppins font-light ml-[5px] mt-2">
            {data.familyName}
            {", "} <span> {data.familyOccupation} </span>
          </p>
          <div width={210} className="mt-[50px]">
            <Button>Read Their Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
