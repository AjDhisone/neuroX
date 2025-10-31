import './App.css'
import AboutSection from './components/about'
import ContactRegisterSection from './components/contact'
import CoursesSection from './components/courses'
import FeaturesMarquee from './components/featured'
import Footer from './components/footer'
import HeroSection from './components/Hero'
import LogoSection from './components/logoSection'
import Marquee from './components/marque'
import Navbar from './components/navbar'
import ResourcesSection from './components/resources'
import TeamSection from './components/team'

function App() {
  return (
    <div className="font-poppins bg-[#F8F9FA]">
      <Navbar/>
      <Marquee/>
      <HeroSection/>
    <FeaturesMarquee/>
    <AboutSection/>
    <TeamSection/>
    <CoursesSection/>
    <ResourcesSection/>
    <ContactRegisterSection/>
    <Footer/>
      
    </div>
    
  )
}

export default App
