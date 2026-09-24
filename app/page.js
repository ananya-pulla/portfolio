import HeaderNav from '../components/HeaderNav'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import FunStuffSection from '../components/FunStuffSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main className="pt-20">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <FunStuffSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
