import React from "react";
import NavItem from "../elements/NavItem";
import BrandIcon from "../elements/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location?.pathname === path ? " active" : "";
  };

  return (
    <header className="border-b-2 border-b-gray-200 w-full h-20 flex items-center mb-20">
      <div className="w-full">
        <nav className="flex justify-between px-36">
          <BrandIcon />
          <div className="flex items-center">
            <ul className="flex flex-row">
              <li className="pl-4">
                <NavItem link={getNavLinkClass("/")} href="/">
                  Home
                </NavItem>
              </li>
              <li className="pl-8">
                <NavItem link={getNavLinkClass("/browse-by")} href="/browse-by">
                  Browse By
                </NavItem>
              </li>
              <li className="pl-8">
                <NavItem type="link" href="/">
                  Stories
                </NavItem>
              </li>
              <li className="pl-8">
                <NavItem type="link" href="/">
                  Agents
                </NavItem>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
