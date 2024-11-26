import About from "../Components/Departments";
import FAQ from "../Components/FAQ";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <FAQ />
    </main>
  );
}
