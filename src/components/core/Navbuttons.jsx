import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


export default function Navbuttons({ isDesktop, navButtonsData }) {
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
          navButtonsData.map(navButtonData => (
            <li className={liClass} key={navButtonData.id}>
              <NavLink 
                to={navButtonData.to} 
                className="text-rose-300 text-lg font-bold hover:text-rose-400 capitalize"
              >
                { navButtonData.name }
              </NavLink>
            </li>
          ))
        }
      </ul>
    </>
  );
}


Navbuttons.prototype = {
  isDesktop: PropTypes.bool.isRequired,
  navButtonsData: PropTypes.array.isRequired
}