import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Ticker from './components/Ticker'
import WrongIdea from './components/WrongIdea'
import VsAI from './components/VsAI'
import HowItWorks from './components/HowItWorks'
import WhoItFor from './components/WhoItFor'
import IdeaCardSection from './components/IdeaCardSection'
import BeforeAfter from './components/BeforeAfter'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <SocialProof />
      {/* <Ticker /> */}
      <WrongIdea />
      {/* <VsAI /> */}
      <HowItWorks />
      <WhoItFor />
      <IdeaCardSection />
      <BeforeAfter />
      <Pricing />
      <Footer />
    </>
  )
}
