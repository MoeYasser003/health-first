import {
  FaHeart,
  FaEye,
  FaFemale,
  FaTooth,
  FaChild,
  FaBrain,
} from "react-icons/fa";
import { GiLipstick, GiStomach } from "react-icons/gi";

export default function Departments() {
  return (
    <section className="bg-foreground">
      <div className="wrapper flex flex-col items-center py-10">
        <h3
          id="departments"
          className="text-center text-primary-2 text-3xl font-semibold tracking-wide"
        >
          Our Departments
        </h3>
        <p className="text-primary-2 sm:text-lg text-center leading-loose mt-4 ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore fugiat sunt culpa officia deserunt mollit anim est laborum.
        </p>
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-1  my-10">
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaHeart className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Cardiology
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaEye className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Ophthalmology
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaFemale className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Gynecology
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaTooth className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Dental Care
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <GiLipstick className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Plastic Surgery
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaChild className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Pediatrics
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <GiStomach className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Gastrology
            </span>
          </article>
          <article className="flex flex-col items-center bg-white gap-2 p-4">
            <div className="grid place-items-center w-[90px] h-[90px]  bg-iconBg p-4 hover:bg-primary-2 duration-300 rounded-full group">
              <FaBrain className="text-primary-1 text-4xl group-hover:text-white duration-300" />
            </div>
            <span className="text-primary-2 font-medium text-lg">
              Neurology
            </span>
          </article>
        </section>
      </div>
    </section>
  );
}
