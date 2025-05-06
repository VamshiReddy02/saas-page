import Features from "./sections/Features"
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
      <Introduction />
      <Features />
      <Integrations />
    </>
  )
}

export default App
