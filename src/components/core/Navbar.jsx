import { NavLink } from "react-router-dom";


export default function Navbar() {
  const navButtons = [
    { id: 1, name: "home", to: "/" },
    { id: 2, name: "pokedex", to: "/pokedex" },
    { id: 3, name: "user", to: "/user" },
    { id: 4, name: "info", to: "info" },
  ]

  const navButtonClass = `text-rose-300 hover:bg-slate-500 
  hover:text-slate-200 rounded-md px-3 py-2 font-bold 
  hover:font-extrabold capitalize
  `;

  return (
    <>
      <nav className="bg-slate-700 border-b border-slate-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 item-center justify-between">
            <div className="flex flex-1 item-center justify-center md:item-stretch md:justify-start p-3">
              <NavLink
                className={"flex flex-shrink-0 item-center mr-4"}
                to={"/"}
              >
                <span 
                  className="hidden md:block text-rose-300 text-2xl font-bold ml-2 hover:text-rose-400"
                >
                  React-Pokedex
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  {
                    navButtons.map(navButton => (
                      <>
                        <NavLink
                          to={navButton.to}
                          className={navButtonClass}
                          key={navButton.id}
                        >
                          { navButton.name }
                        </NavLink>
                      </>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
