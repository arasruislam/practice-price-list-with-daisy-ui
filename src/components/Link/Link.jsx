import React from "react";

const Link = ({route}) => {
  return (
      <li className="mr-12 hover:text-indigo-500 font-semibold">
          <a href={route.path}>{route.name}</a>
    </li>
  )
};

export default Link;
