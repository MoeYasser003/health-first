import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaClipboardList,
  FaUserMd,
  FaPhoneAlt,
} from "react-icons/fa";
interface Props {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: Props) {
  return (
    <aside
      className={` z-20 fixed flex flex-col items-center gap-10 px-6 pt-5 top-[66px] sm:top-[73px] left-0 w-full h-full bg-emerald-50 duration-300 md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="w-full">
        <li>
          <NavLink
            to="/"
            className="block py-3 text-2xl  hover:text-primary-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <FaHome />
              <span>Home</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className="block py-3 text-2xl  hover:text-primary-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <FaInfoCircle />
              <span>About</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="block py-3 text-2xl  hover:text-primary-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <FaClipboardList />
              <span>Department</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="block py-3 text-2xl  hover:text-primary-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <FaUserMd />
              <span>Doctors</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="block py-3 text-2xl  hover:text-primary-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>Contact</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <section className="flex flex-col gap-4">
        <Link
          to="/login"
          className="bg-primary-1 py-2 px-4 rounded-3xl text-white text-xl grid place-items-center"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-primary-1 py-2 px-4 rounded-3xl text-white text-xl"
        >
          Register
        </Link>
      </section>
    </aside>
  );
}
