import About from "./sections/About"
import CallToAction from "./sections/CallToAction"
import Faqs from "./sections/Faqs"
import Features from "./sections/Features"
import FeaturesCards from "./sections/FeaturesCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Integrations from "./sections/Integrations"
import Introduction from "./sections/Introduction"
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
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
