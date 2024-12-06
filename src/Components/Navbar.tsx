import { FiMail } from "react-icons/fi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex flex-col">
      <section className="hidden  px-4 mx-auto w-full py-1 bg-slate-50 md:flex items-center justify-between gap-8">
        <div className="flex gap-10">
          <article className="flex items-center gap-2">
            <FiMail className="text-primary-1" />
            <span>medicust@gmail.com</span>
          </article>

          <article className="flex items-center gap-2">
            <FaHeadphonesSimple className="text-primary-1" />
            <span>+88 564 867 4687</span>
          </article>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-primary-1" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-primary-1" />
          </a>

          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter className="text-primary-1" />
          </a>
        </div>
      </section>
      <section className="bg-primary-1">
        <div className=" px-2 sm:px-4 mx-auto w-full py-2 flex items-center justify-between">
          <Sidebar isOpen={isOpen} />
          <article className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className=" w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] object-cover"
            />
            <h2 className="text-white font-semibold text-lg sm:text-xl ">Health First</h2>
          </article>
          <div className="hidden md:block">
            <ul className="flex gap-3 text-white text-lg min-[850px]:gap-4 min-[850px]:text-xl lg:gap-6">
              <li>
                <Link to="/" className="hover:text-primary-2 duration-300">Home</Link>
              </li>
              <li>
                <NavLink to='/about' className="hover:text-primary-2 duration-300">About</NavLink>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-2 duration-300">Department</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-2 duration-300">Doctors</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary-2 duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/login"
            className="hidden md:block text-white bg-primary-2 hover:bg-primary-2/70 duration-300 py-3 px-5 rounded-3xl"
          >
            Get Appointment
          </Link>
          <button
            className="md:hidden"
            aria-label="show-hide sidebar"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
          </button>
        </div>
      </section>
    </nav>
  );
}
