import testimonial from "../assets/testimonials-1.png";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
export default function Testimonials() {
  return (
    <section className="py-20 bg-foreground">
      <div className="wrapper flex flex-col items-center">
        <h3 className="text-primary-2 text-3xl font-semibold">
          Our Testimonials
        </h3>
        <p className="text-primary-2 text-base mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
        </p>
        <section className="mt-20 grid gap-10 place-items-center grid-cols-1 xl:grid-cols-3 ">
          <article className="w-[370px] bg-cardBg p-6 shadow-md rounded-lg relative">
            <img
              src={testimonial}
              alt="testimonial"
              className="rounded-full w-[50px] h-[50px] object-cover border border-white absolute -top-[25px]"
            />
            <div className="absolute w-[50px] h-[50px] grid place-items-center bg-primary-1 rounded-full -top-[25px] right-[30px] border border-white">
              <FaQuoteRight className="text-white" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <section>
                <h3 className="text-text text-xl font-medium">Amber Morales</h3>
                <p className="text-primary-2 text-sm">Product Designer</p>
              </section>
              <span className="flex  gap-1">
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
              </span>
            </div>
            <h3 className="text-text text-2xl mb-4">
              Duis aute irure dolor in reprehe voluptate velit esse cillum do
            </h3>
            <p className="text-text text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              copy
            </p>
          </article>
          <article className="w-[370px] bg-cardBg p-6 shadow-md rounded-lg relative">
            <img
              src={testimonial}
              alt="testimonial"
              className="rounded-full w-[50px] h-[50px] object-cover border border-white absolute -top-[25px]"
            />
            <div className="absolute w-[50px] h-[50px] grid place-items-center bg-primary-1 rounded-full -top-[25px] right-[30px] border border-white">
              <FaQuoteRight className="text-white" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <section>
                <h3 className="text-text text-xl font-medium">Amber Morales</h3>
                <p className="text-primary-2 text-sm">Product Designer</p>
              </section>
              <span className="flex  gap-1">
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
              </span>
            </div>
            <h3 className="text-text text-2xl mb-4">
              Duis aute irure dolor in reprehe voluptate velit esse cillum do
            </h3>
            <p className="text-text text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              copy
            </p>
          </article>
          <article className="w-[370px] bg-cardBg p-6 shadow-md rounded-lg relative">
            <img
              src={testimonial}
              alt="testimonial"
              className="rounded-full w-[50px] h-[50px] object-cover border border-white absolute -top-[25px]"
            />
            <div className="absolute w-[50px] h-[50px] grid place-items-center bg-primary-1 rounded-full -top-[25px] right-[30px] border border-white">
              <FaQuoteRight className="text-white" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <section>
                <h3 className="text-text text-xl font-medium">Amber Morales</h3>
                <p className="text-primary-2 text-sm">Product Designer</p>
              </section>
              <span className="flex  gap-1">
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
                <FaStar className="text-sm text-gold" />
              </span>
            </div>
            <h3 className="text-text text-2xl mb-4">
              Duis aute irure dolor in reprehe voluptate velit esse cillum do
            </h3>
            <p className="text-text text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              copy
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}
