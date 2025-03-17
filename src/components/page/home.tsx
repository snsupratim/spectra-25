import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
export default Home;
