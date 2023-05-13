import About from "./components/About";
import Categories from "./components/Categories";
import Course from "./components/Course";
import Enviroment from "./components/Enviroment";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Outcome from "./components/Outcome";
import Testimonial from "./components/Testimonial";
import TimeComplexity from "./components/TimeComplexity";
import VideoDesign from "./components/VideoDesign";
import "./scss/index.scss";
const App = () => {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Features />
      <Outcome />
      <Testimonial />
      <Categories />
      <VideoDesign />
      <div className='divider'></div>
      <Course />
      <div className='divider'></div>
      <Languages />
      <div className='divider'></div>
      <Enviroment />
      <div className='divider'></div>
      <TimeComplexity />
      <Footer />
    </div>
  );
};

export default App;
