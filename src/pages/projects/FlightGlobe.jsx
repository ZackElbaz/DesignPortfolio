import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/FlightGlobe/billie.jpg'
import img1 from '../../assets/projects/FlightGlobe/billie-475x380.jpg'
import img2 from '../../assets/projects/FlightGlobe/Screen-Shot-2018-04-16-at-6.32.43-PM-1714194453-1523921546737.webp'
import vid1 from '../../assets/projects/FlightGlobe/Recording 2025-12-09 212127.mp4'

const project = {
  slug: 'flight-globe',
  title: 'Flight Globe',
  date: '2026-03-18',
  problem:
    'Climbers often want a brush to stay easily accessible on a chalk bag without swinging awkwardly, snagging, or being difficult to remove and reattach during use.',
  coverImage: cover,
  hoverSlides: [cover, img1, img2],
  solutionMedia: [
    {
      type: 'image',
      src: img1,
      caption: 'Early concept direction.',
    },
    {
      type: 'image',
      src: img2,
      caption: 'Refined form and attachment detail.',
    },
    {
      type: 'video',
      src: vid1,
      caption: 'Prototype interaction and use case.',
    },
  ],
}

export const projectMeta = {
  slug: project.slug,
  title: project.title,
  date: project.date,
  coverImage: project.coverImage,
  hoverSlides: project.hoverSlides,
}

export default function FlightGlobe() {
  return <ProjectTemplate {...project} />
}