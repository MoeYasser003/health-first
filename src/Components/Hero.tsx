import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className=" relative flex justify-center items-center w-full sm:bg-hero-image bg-cover bg-center h-[500px] md:h-[800px]">
      <div className="absolute w-full h-full bg-gradient-to-r from-slate-50 to-slate-50/10"></div>
      <div className="wrapper z-10">
          <article className=" text-primary-2">
            <div className=" flex flex-col gap-2 sm:max-w-[35ch] md:max-w-[40ch] lg:max-w-[50ch]">
                <h3 className="sm:text-xl">Health First</h3>
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
                  A professional and friendly care provider.
                </h1>
                <p className="text-primary-2/80 text-sm sm:text-base">
                  Excepteur sint occaecat cupidatat non proident sunt officia
                </p>
            </div>
            <div className="mt-10 flex gap-3">
              <Link to="/login" className="py-2 px-3 rounded-3xl bg-primary-1 text-white hover:bg-primary-1/80 duration-300 md:py-3 md:px-4 md:text-lg">
                Get Started
              </Link>
              <Link to="/" className="py-2 px-3 rounded-3xl bg-primary-1 text-white hover:bg-primary-1/80 duration-300 md:py-3 md:px-4 md:text-lg">
                Track Appointment
              </Link>
            </div>
          </article>
      </div>
    </section>
  );
}
