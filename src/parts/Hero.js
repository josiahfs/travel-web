import React from "react";
import IconCities from "../assets/images/icons/ic_cities.svg";
import IconTraveler from "../assets/images/icons/ic_traveler.svg";
import IconTreasure from "../assets/images/icons/ic_treasure.svg";
import Button from "../elements/Button";
import ImageHero from "../assets/images/hero.png";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked?.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <section className="px-36">
      <div className="flex flex-row contents-center items-center">
        <div className="flex flex-col contents-center pr-5">
          <h1 className="font-bold text-head text-dark-blue pb-5">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="font-light text-desc text-gray-400 w-7/12 mb-7">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <div width={210}>
            <Button>Show Me Now</Button>
          </div>
          <div className="mt-20 flex flex-row">
            <div className="flex flex-col mr-12">
              <img
                width={36}
                height={36}
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-light"> travellers</span>
              </h6>
            </div>
            <div className="flex flex-col mr-12">
              <img
                width={36}
                height={36}
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-light"> treasures</span>
              </h6>
            </div>
            <div className="flex flex-col">
              <img
                width={36}
                height={36}
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-light"> cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <img
            width={700}
            height={590}
            src={ImageHero}
            alt="Frame room with couches"
          />
        </div>
      </div>
    </section>
  );
}
