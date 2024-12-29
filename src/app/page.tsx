import DealSection from "@/components/DealSection"
import ElectronicSection from "@/components/ElectronicSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import HomeSection from "@/components/HomeSection"
import Navbar from "@/components/Navbar"
import Recommendation from "@/components/Recommendation"
import Secondbar from "@/components/Secondbar"
import SendQuote from "@/components/Sendquote"
import Service from "@/components/Service"
import Subscribe from "@/components/Subscribe"
import Suplier from "@/components/Supplier"

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
        

      <div>
        <Secondbar />
      </div>

      <div>
        <HeroSection />
      </div>

      <div>
        <DealSection />
      </div>

      <div>
        <HomeSection />
      </div>

      <div>
        <ElectronicSection />
      </div>

      <div>
        <SendQuote />
      </div>

      <div>
        <Recommendation />
      </div>

      <div>
        <Service />
      </div>

      <div>
        <Suplier/>
      </div>

      <div>
        <Subscribe />
      </div>

      <div>
        <Footer />
      </div>


    

    </main>
  );
}
