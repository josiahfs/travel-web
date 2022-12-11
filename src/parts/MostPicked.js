import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="px-36 mb-[70px]" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="text-2xl mb-5 font-poppins text-dark-blue">
          Most Picked
        </h4>
        <div className="grid grid-rows-2 grid-flow-col gap-7">
          {props.data?.map((item, index) => {
            return (
              <Fade bottom delay={300 * index}>
                <div
                  key={`mostPicked-${index}`}
                  className={
                    index === 0
                      ? `group min-h-[215px] w-[361px] row-span-2 relative overflow-hidden rounded-2xl`
                      : `group min-h-[215px] w-[361px] relative overflow-hidden rounded-2xl`
                  }
                >
                  <div
                    className="inline-flex items-center justify-center rounded-tr-2xl font-poppins
              rounded-bl-2xl bg-magenta text-white font-medium z-10 w-[180px] h-[40px] absolute right-0"
                  >
                    ${item.price}
                    <span className="font-light text-white pl-1 font-poppins">
                      per {item.unit}
                    </span>
                  </div>
                  <div>
                    <div className="object-cover relative group-hover:scale-110 ease-in-out duration-300">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="absolute z-0"
                      ></img>
                      <div
                        className={
                          index === 0
                            ? `absolute z-1 bg-gradient-to-t from-black/50 to-black/0 h-[460px] w-[361px] rounded-b-2xl`
                            : `absolute z-1 bg-gradient-to-t from-black/50 to-black/0 h-[215px] w-[361px] rounded-b-2xl`
                        }
                      />
                    </div>
                    <div className="absolute left-5 bottom-5 z-10 group-hover:bottom-6 ease-in-out duration-300">
                      <Link className="text-white font-regular text-xl font-poppins">
                        {item.name} <br />
                        <span className="text-white font-light text-[15px] font-poppins">
                          {item.city}, {item.country}{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
