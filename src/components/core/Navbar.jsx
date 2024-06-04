import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="bg-slate-700 border-b border-slate-500 p-4">
        <div className="flex items-center justify-between">
          <div className="text-rose-300 text-2xl font-bold hover:text-rose-400">
            <NavLink to={"/"}>
              React-Pokedex
            </NavLink>
          </div>

          {/* Toggle Menu button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="text-white" onClick={() => toggleMenu()}>
              <svg 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"  
              >
                <path d="M4 6h16M4 12h16M4 18h16M4"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li className=""><NavLink to={"/"} className="text-white">Home</NavLink></li>
            <li className=""><NavLink to={"/pokedex"} className="text-white">Pokedex</NavLink></li>
            <li className=""><NavLink to={"/user"} className="text-white">User</NavLink></li>
            <li className=""><NavLink to={"/info"} className="text-white">Info</NavLink></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {
          isMenuOpen ? (
            <ul className="flex-col md:hidden">
              <li className="p-y-2"><NavLink to={"/"} className="text-white">Home</NavLink></li>
              <li className="p-y-2"><NavLink to={"/pokedex"} className="text-white">Pokedex</NavLink></li>
              <li className="p-y-2"><NavLink to={"/user"} className="text-white">User</NavLink></li>
              <li className="p-y-2"><NavLink to={"/info"} className="text-white">Info</NavLink></li>
            </ul>
          ): null
        } 
      </nav>
    </>
  );
}



















  // const navButtons = [
  //   { id: 1, name: "home", to: "/" },
  //   { id: 2, name: "pokedex", to: "/pokedex" },
  //   { id: 3, name: "user", to: "/user" },
  //   { id: 4, name: "info", to: "info" },
  // ]

  // const navButtonClass = `text-rose-300 hover:bg-slate-500 
  // hover:text-slate-200 rounded-md px-3 py-2 font-bold 
  // hover:font-extrabold capitalize
  // `;

  // return (
  //   <>
  //     <nav className="bg-slate-700 border-b border-slate-500">
  //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //         <div className="flex h-20 item-center justify-between">
  //           <div className="flex flex-1 item-center justify-center md:item-stretch md:justify-start p-3">
  //             <NavLink
  //               className={"flex flex-shrink-0 item-center mr-4"}
  //               to={"/"}
  //             >
  //               <span 
  //                 className="hidden md:block text-rose-300 text-2xl font-bold ml-2 hover:text-rose-400"
  //               >
  //                 React-Pokedex
  //               </span>
  //             </NavLink>
  //             <div className="md:ml-auto">
  //               <div className="flex space-x-2">
  //                 {
  //                   navButtons.map(navButton => (
  //                     <>
  //                       <NavLink
  //                         to={navButton.to}
  //                         className={navButtonClass}
  //                         key={navButton.id}
  //                       >
  //                         { navButton.name }
  //                       </NavLink>
  //                     </>
  //                   ))
  //                 }
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );