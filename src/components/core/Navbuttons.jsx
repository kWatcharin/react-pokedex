import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import navButtons from './nav-buttons.json';


export default function Navbuttons({ isDesktop }) {
  let ulClass;
  let liClass;

  if (isDesktop) {
    ulClass = "hidden md:flex space-x-4";
    liClass = ""
  } else {
    ulClass = "flex-col md:hidden"
    liClass = "p-y-2"
  }

  return (
    <>
      <ul className={ulClass}>
        {
          navButtons.map(navButton => (
            <li className={liClass} key={navButton.id}>
              <NavLink to={navButton.to} className="text-rose-300 text-lg font-bold hover:text-rose-400 capitalize">
                { navButton.name }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </>
  );
}


Navbuttons.prototype = {
  isDesktop: PropTypes.bool.isRequired
}