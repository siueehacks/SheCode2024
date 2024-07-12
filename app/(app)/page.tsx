import  HomeComponent  from "@/components/Homepage"
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Sponsor from "@/components/Sponsors";
import FAQAndContact from "@/components/FAQAndContact";
export default function Home() {
  return (
    <main className="pt-16">
      <HomeComponent />
      <About />
      <Gallery />
      <Sponsor />
      <FAQAndContact />
    </main>
  );
}
