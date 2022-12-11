import React from "react";
import { Link } from "react-router-dom";

export default function IconText() {
  return (
    <Link className="font-medium text-primary text-2xl font-poppins" href="/">
      Stay<span className="text-dark-blue">cation.</span>
    </Link>
  );
}
