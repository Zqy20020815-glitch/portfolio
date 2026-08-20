export interface Project {
  id: string
  name: string
  category: string
  cover: string
  images: GalleryImage[]
}

export interface GalleryImage {
  src: string
  alt: string
  aspect: 'landscape' | 'portrait' | 'square'
  caption?: string
}
