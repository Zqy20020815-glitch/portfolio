import type { Project } from '@/types/project'

interface GalleryProps {
  activeProject: Project
}

export function Gallery({ activeProject }: GalleryProps) {
  return (
    <section id="gallery" className="py-12 scroll-mt-6">
      <div className="mx-auto mb-8 max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {activeProject.category}
            </span>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              {activeProject.name}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            {activeProject.images.length} images
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[13px]">
        {activeProject.images.map((image, index) => (
          <div
            key={`${activeProject.id}-${index}`}
            className="group relative w-full overflow-hidden bg-secondary"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-medium text-white">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
