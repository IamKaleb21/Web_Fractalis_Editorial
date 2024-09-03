// src/pages/Home.jsx
import GradientRectangle from "../assets/rectangle_gradient.png";
import Footer from "../components/Footer";
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection';
import PopularSection from '../components/PopularSection';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PopularSection />
      <InfoSection />
      <div className="flex-col border border-blue-600 mx-3">
        <img src={GradientRectangle} alt="" className="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
