import { useState, useEffect } from 'react'
import { Hero } from './sections/Hero'
import { ProjectSelector } from './sections/ProjectSelector'
import { Gallery } from './sections/Gallery'
import { Footer } from './sections/Footer'
import { projects } from '@/data/projects'

function App() {
  const [activeId, setActiveId] = useState<string>(projects[0].id)
  const activeProject = projects.find((p) => p.id === activeId) || projects[0]

  useEffect(() => {
    const el = document.getElementById('gallery')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 24
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [activeId])

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProjectSelector
        projects={projects}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <Gallery activeProject={activeProject} />
      <Footer />
    </main>
  )
}

export default App
