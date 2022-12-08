import React from "react";
import ImageHero from "../assets/images/hero.svg";
import HeroFrame from "../assets/images/hero-frame.svg";
import IconCities from "../assets/images/icons/ic_cities.svg";
import IconTraveler from "../assets/images/icons/ic_traveler.svg";
import IconTreasure from "../assets/images/icons/ic_treasure.svg";

export default function Hero(props) {
  return (
    <section className="container px-36">
      <div className="flex row items-center content-center">
        <div className="flex col-auto pr-5">
          <h1 className="font-bold text-4xl text-dark-blue">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="font-light text-gray-500 w-3/4 mb-5">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
        </div>
      </div>
    </section>
  );
}
