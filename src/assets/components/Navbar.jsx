import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-scroll";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const navigationItems = [
  {
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "About"
  },
  {
    id: 3,
    title: "Product"
  },
  {
    id: 4,
    title: "Pricing"
  },
  {
    id: 5,
    title: "Contact"
  },

]
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className=" shadow pt-3 gap-4 select-none">
        <nav
          className="max-w-screen-lg mx-auto"
        >
          <div className="relative navigation top-0 left-0 navigation flex justify-between px-4 py-4 " >

            {/* Logo  */}
            <a
              className="flex items-center   gap-2 font-bold text-primary">
              <img
                className="w-6"
                src={logo}
                alt="biccs" />
              BICCS
            </a>
            {/* navigation Items for Large screen */}
            <ul
              className="hidden justify-between items-center gap-6 md:flex ">
              {
                navigationItems.map(({ id, title }) => <li key={id}>
                  <Link
                    to={title}
                    className=' hover:text-primary hover:border-b-primary'
                  >{title} </Link>
                </li>)
              }
              <div
                className=" flex gap-2 items-center ml-2 md:ml-9 lg:ml-16">
                <a
                  href="#"
                  className=" hover:text-primary"
                >Login</a>
                <button
                  className="  btn-primary"
                >
                  Register
                </button>

              </div>
            </ul>
            {/* Navigation for mobile devise */}
            {
              !isMenuOpen ? <HiMenu onClick={toggleMenu} className="text-3xl text-primary md:hidden" /> : <CgClose onClick={toggleMenu} className="text-3xl text-red-700 sm:hidden" />
            }
          </div>
          <div
            className={` absolute top-0 w-full h-screen z-10 bg-primary ease-in-out duration-1000  sm:hidden ${isMenuOpen ? "" : " -translate-x-full "}`}
          >
            <ul
              className=" items-center space-y-4 pl-8 pt-20 ">
              {
                navigationItems.map(({ id, title }) => <li key={id}>
                  <Link
                    to={title}
                    className=' hover:text-white border-b-2 border-b-primary hover:border-b-white'
                  >{title} </Link>
                </li>)
              }
              <div
                className="space-y-4"
              >
                <a
                  href="#"
                  className=" hover:text-white"
                >Login</a><br />
                <button
                  className="btn-secondary"
                >
                  Register
                </button>

              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}