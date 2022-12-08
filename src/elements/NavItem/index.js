import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ children, link }) {
  return (
    <Link
      href={link}
      className="font-poppins font-normal text-dark-blue hover:text-primary"
    >
      {children}
    </Link>
  );
}
