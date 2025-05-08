import About from "./sections/About"
import CallToAction from "./sections/CallToAction"
import Faqs from "./sections/Faqs"
import FeaturesCards from "./sections/FeaturesCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import DevEx from "./sections/DevEx"
import LogoTicker from "./sections/LogoTicker"
import Navbar from "./sections/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <About />
      <FeaturesCards />
      <DevEx />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
