import React from "react";
import { Link } from "react-router-dom";
import IconText from "../elements/IconText";

export default function Footer() {
  return (
    <footer className="border-t-2 border-t-gray-200 w-full flex items-center flex-col">
      <div className="flex flex-row px-36 mt-[50px] w-full">
        <div className="flex flex-col">
          <IconText />
          <p className="font-poppins text-light-gray font-light w-5/6 pt-2">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="flex flex-row justify-evenly w-full">
          <div className="flex flex-col">
            <Link
              className="font-medium text-dark-blue text-lg font-poppins"
              href="/"
            >
              For Beginners
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  New Account
                </Link>
              </li>
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  Start Booking a Room
                </Link>
              </li>
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  Use Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <Link
              className="font-medium text-dark-blue text-lg font-poppins hover:text-dark-blue"
              href="/"
            >
              Explore Us
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  Our Careers
                </Link>
              </li>
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="/"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Link
              className="font-medium text-dark-blue text-lg font-poppins hover:text-dark-blue"
              href="/"
            >
              Connect Us
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </a>
              </li>
              <li>
                <a
                  className="font-light text-light-gray font-poppins hover:text-dark-blue"
                  href="tel:+622122081996"
                >
                  021 - 2208 - 1996
                </a>
              </li>
              <li className="font-light text-light-gray font-poppins hover:text-dark-blue">
                <span> Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-poppins font-light text-light-gray my-[50px]">
        Copyright 2019 • All rights reserved • Staycation
      </p>
    </footer>
  );
}
