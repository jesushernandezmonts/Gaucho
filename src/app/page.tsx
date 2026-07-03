import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ReservationForm from "@/components/ReservationForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Rooms />
      <Gallery />
      <Testimonials />
      <ReservationForm />
    </>
  );
}
