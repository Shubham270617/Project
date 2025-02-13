import FeatureCards from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import NewsCards from "./components/NewsCard";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-4">
        <Carousel />
      </div>
        <h1 className="text-center mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, reiciendis? Quaerat vero quibusdam eum sit quasi, rerum reprehenderit veritatis reiciendis aspernatur, recusandae laboriosam nisi omnis libero nostrum corrupti laborum eaque est, neque tenetur perspiciatis beatae cupiditate sint culpa consequatur? Provident accusamus porro explicabo. Optio rerum autem ad itaque ab suscipit ullam odio quo, inventore, eum, laboriosam numquam veritatis consequatur! Sed eum natus ullam aspernatur quod officia facilis ipsum expedita quibusdam ad dicta, consequatur iste dolores libero rerum sequi fugiat, a enim debitis? Deserunt provident rem aliquam consequuntur. Earum, ullam enim laudantium, ratione, odit tenetur quas optio maiores omnis corporis fugit.</h1>
        <FeatureCards />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <NewsCards />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
      <Cards />
    </div>
    <div>
      <Footer />
    </div>
    </>
  );
}

export default App;
