import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact Us", path: "/contact" },
  ];
  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-8 w-8 text-black" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-black" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex absolute duration-500 bg-orange-200 p-2 md:static ${
          open ? "top-12" : "-top-40"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
