import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="px-36 mb-[70px]" key={`category-${index1}`}>
        <h4 className="text-2xl mb-5 font-poppins text-dark-blue">
          {category.name}
        </h4>
        <div className="flex flex-row justify-between">
          {category?.items.length === 0 ? (
            <div>There is no property in this category</div>
          ) : (
            category?.items.map((item, index2) => {
              return (
                <div className="flex flex-col">
                  <div
                    className="bg-primary min-h-[180px] w-[263px] relative overflow-hidden rounded-2xl"
                    key={`category-${index1}-item-${index2}`}
                  >
                    {item.isPopular && (
                      <div
                        className="inline-flex items-center justify-center rounded-tr-2xl 
              rounded-bl-2xl bg-magenta text-white font-medium z-10 w-[180px] h-[40px] absolute right-0"
                      >
                        <div className="text-white font-medium font-poppin">
                          Popular{" "}
                          <span className="text-white font-light">choice</span>
                        </div>
                      </div>
                    )}
                    <div className="object-cover relative ">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="absolute z-0"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link className="text-dark-blue font-regular text-xl">
                      {item.name} <br />
                      <span className="text-gray-400 font-light text-[15px]">
                        {item.city}, {item.country}{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
