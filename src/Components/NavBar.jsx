import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-3 nav backdrop-blur-md border-white border-b-[0.1rem] border-opacity-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="/"
            >
              ANDRES
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none Button_Menu"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {/* Add a background overlay with opacity */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm ${navbarOpen ? "block" : "hidden"}`}></div>

            {/* Menu container with higher z-index and background color */}
            <ul className="text-3xl flex flex-col lg:flex-row list-none lg:ml-auto Opciones z-50 bg-[#0FBFBF]  lg:bg-transparent p-4 lg:p-0 rounded-md lg:rounded-none">
              
              <Link smooth spy to="page1" onClick={() => setNavbarOpen(false)}>
                <span className="ml-2 text-white lg:text-inherit">About</span>
              </Link>
              <Link smooth spy to="page2" onClick={() => setNavbarOpen(false)}>
                <span className="ml-2 text-white lg:text-inherit">Studies</span>
              </Link>
              <Link smooth spy to="page3" onClick={() => setNavbarOpen(false)}>
                <span className="ml-2 text-white lg:text-inherit">Experience</span>
              </Link>
              <Link smooth spy to="page4" onClick={() => setNavbarOpen(false)}>
                <span className="ml-2 text-white lg:text-inherit">Projects</span>
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
