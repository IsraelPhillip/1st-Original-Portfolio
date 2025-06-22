
import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import ExperienceMain from './components/ExperienceSection/ExperienceMain'
import HelpSection from './components/HelpSection'
import HeroGradient from './components/HeroSection/HeroGradient'
import HeroMain from './components/HeroSection/HeroMain'
import SubHeroSection from './components/HeroSection/SubHeroSection'
import NavbarMain from './components/Navbar/NavbarMain'
import SkillsMain from './components/SkillsSection/SkillsMain'
import SubSkills from './components/SkillsSection/SubSkills'
import ProjectMain from './components/ProjectSection/ProjectMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import FooterMain from './components/FooterSection/FooterMain'


function App() {

  return (
    <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ProjectMain/>
    <ContactMeMain/>
    <FooterMain/>
    <HelpSection/>
  </main>
  ) 
}

export default App
