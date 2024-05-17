import { useEffect, useState } from 'react'
import Hero from "../components/hero/Hero"
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import ProjectDetails from '../components/projects/ProjectDetails'

const Home = () => {
      const [openModal, setOpenModal] = useState({ state: false, project: null });
      useEffect(() => {
            window.scrollTo(0, 0)
      }, [])
      return (
            <>
                  <Hero />
                  <Skills />
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Experience />
                  {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                  }
            </>
      )
}

export default Home