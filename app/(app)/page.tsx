import  HomeComponent  from "@/components/Homepage"
import About from "@/components/About";
import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <main className="pt-16">
      <HomeComponent />
      <About />
      <Gallery />
    </main>
  );
}
