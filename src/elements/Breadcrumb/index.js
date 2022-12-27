// import React from "react";
// import NavItem from "../NavItem/index";
// import propTypes from "prop-types";

// export default function Breadcrumb(props) {
//   const className = ["breadcrumb flex space-x-2", props.className];
//   return (
//     <nav aria-label="breadcrumb">
//       <ol className={className.join(" ")}>
//         {props.data.map((item, index) => {
//           return (
//             <li
//               key={`breadcrumb-${index}`}
//               // className={`breadcrumb-item${
//               //   index === props.data.length - 1 ? " active" : ""
//               // }`}
//             >
//               {/* {index === props.data.length - 1 ? (
//                 item.pageTitle
//               ) : (
//                 <NavItem
//                   type="link"
//                   href={item.pageHref}
//                   className="after:content-['/'] after:ml-2"
//                 >
//                   {item.pageTitle}
//                 </NavItem>
//               )} */}
//               <NavItem
//                 type="link"
//                 href={item.pageHref}
//                 className="after:content-['/'] after:ml-2"
//               >
//                 {item.pageTitle}
//               </NavItem>
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// }

// Breadcrumb.propTypes = {
//   data: propTypes.array,
//   className: propTypes.string,
// };

import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
  { path: "/users/:userId", breadcrumb: "Example 1" },
  { path: "/data", breadcrumb: "Example 2" },
];

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link
          key={match.url}
          to={match.url}
          className={
            match.pathname === location.pathname
              ? "font-poppins font-normal text-dark-blue hover:text-primary"
              : "font-poppins font-normal text-primary"
          }
        >
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
