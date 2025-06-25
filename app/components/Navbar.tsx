import { Link, NavLink } from "@remix-run/react";
import React from "react";
import Logo from "./logo";
type Props = {};
const navigation = [
  { name: "Home", href: "/home" },
  {
    name: "Stories",
    href: "/stories/",
  },
  { name: "Film", href: "/film" },
  { name: "Pictures", href: "/picture" },
  { name: "Pre-wedding", href: "/prewedding" },
  { name: "About US", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar({}: Props) {
  return (
    <>
      <div className="px-4 py-16 bg-slate-200">
        <div className="flex">
          {/* <div className="flex w-40 shrink-0 items-center lg:w-56"> */}
          <Link prefetch="intent" to="/" className="px-12">
          <Logo /> 
          </Link>
          {/* </div> */}
          <nav
            role="navigation"
            aria-label="main-nav"
            className="px-64  sm:-my-px sm:flex sm:space-x-10"
          >
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href}>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
