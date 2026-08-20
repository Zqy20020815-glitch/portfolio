import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/project'
import { cn } from '@/lib/utils'

interface ProjectSelectorProps {
  projects: Project[]
  activeId: string
  setActiveId: (id: string) => void
}

export function ProjectSelector({ projects, activeId, setActiveId }: ProjectSelectorProps) {
  const visibleProjects = projects.slice(0, 3)

  return (
    <section className="px-6 py-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-muted-foreground">Selected works</p>
          <p className="text-sm text-muted-foreground">
            {visibleProjects.length} projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleProjects.map((project) => {
            const isActive = project.id === activeId
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border text-left transition-all duration-300',
                  isActive
                    ? 'border-foreground/20 ring-1 ring-foreground/10'
                    : 'border-border hover:border-foreground/20'
                )}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                </div>

                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground backdrop-blur-sm transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-semibold text-white drop-shadow-sm">
                    {project.name}
                  </h3>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
