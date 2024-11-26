import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Root() {
  return (
    <section className="w-full min-h-screen bg-slate-50">
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}
