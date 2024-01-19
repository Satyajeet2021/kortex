import Featured from "./components/Featured"
import Hero from "./components/Hero"
import Navbar from "./components/Header"
import Bot from "./components/Bot"
import FAQ from "./components/FAQ"
import RealYield from "./components/RealYield"
import Footer from "./components/Footer"
import Comparison from "./components/Comparison"
import Roadmap from "./components/Roadmap"


function App() {

  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="featured">
        <Featured />
      </section>
      <section id="bot">
         <Bot />
      </section>
      <section id="comparison">
        <Comparison />
      </section>
      <section id="realYield">
        <RealYield />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="faq">
         <FAQ />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}

export default App
