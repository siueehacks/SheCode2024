import HomeComponent from "@/components/Homepage"
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Sponsor from "@/components/Sponsors";
import FAQAndContact from "@/components/FAQAndContact";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
export default function Home() {
  return (
    <main className="pt-16">
      <HomeComponent />
      <Location />
      <About />
      <Gallery />
      <Sponsor />
      <Schedule />
      <FAQAndContact />
    </main>
  );
}
