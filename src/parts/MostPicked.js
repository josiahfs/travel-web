import React from "react";
import { Link } from "react-router-dom";

export default function MostPicked(props) {
  return (
    <section className="px-36 mb-[70px]">
      <h4 className="text-2xl mb-5">Most Picked</h4>
      <div className="grid grid-rows-2 grid-flow-col gap-7">
        {props.data?.map((item, index) => {
          return (
            <div
              className={
                index === 0
                  ? `min-h-[215px] row-span-2 relative`
                  : `min-h-[215px] relative`
              }
            >
              <div
                className="inline-flex items-center justify-center rounded-tr-2xl 
              rounded-bl-2xl bg-magenta text-white font-medium z-10 w-[180px] h-[40px] absolute right-1"
              >
                ${item.price}
                <span className="font-light text-white pl-1">
                  per {item.unit}
                </span>
              </div>
              <div>
                <div className="object-cover relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="absolute z-0"
                  ></img>
                  <div
                    className={
                      index === 0
                        ? `absolute z-1 bg-gradient-to-t from-black/50 to-black/0 h-[460px] w-[361px] rounded-b-2xl `
                        : `absolute z-1 bg-gradient-to-t from-black/50 to-black/0 h-[215px] w-[361px] rounded-b-2xl`
                    }
                  />
                </div>
                <div className="absolute left-5 bottom-5 z-10">
                  <Link className="text-white font-regular text-xl">
                    {item.name} <br />
                    <span className="text-white font-light text-[15px]">
                      {item.city}, {item.country}{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
