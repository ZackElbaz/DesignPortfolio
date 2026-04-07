import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/RaceTracker/WhatsApp Image 2021-10-22 at 10.23.49_d5a268e7 (1).png'

import img1 from '../../assets/projects/RaceTracker/zack drawings oct 24 (2) (1).jpg'

import img2 from '../../assets/projects/RaceTracker/WhatsApp Image 2021-11-09 at 09.21.00_5d3cb13d.jpg'

import img3 from '../../assets/projects/RaceTracker/WhatsApp Image 2021-11-01 at 15.40.26_7868316c.jpg'
import img4 from '../../assets/projects/RaceTracker/image (67).png'

import img5 from '../../assets/projects/RaceTracker/image (83).png'
import img6 from '../../assets/projects/RaceTracker/image (82).png'
import img7 from '../../assets/projects/RaceTracker/image (81).png'

import img8 from '../../assets/projects/RaceTracker/image (86).png'
import img9 from '../../assets/projects/RaceTracker/image (85).png'
import img10 from '../../assets/projects/RaceTracker/WhatsApp Image 2022-05-05 at 10.13.27_98dcc13d.jpg'

import img11 from '../../assets/projects/RaceTracker/image (84).png'
import img12 from '../../assets/projects/RaceTracker/WhatsApp Image 2021-10-22 at 10.23.49_d5a268e7 (2).jpg'

const project = {
  slug: 'RaceTracker',
  title: 'Modular Charging Dock',
  date: '2021-12-04',
  problem: [
    'Managing and charging large fleets of tracking devices requires a system that is reliable, scalable, and easy to deploy in field conditions.',

    'Existing solutions can be costly to manufacture, complex to assemble, and difficult to scale efficiently for large volumes.',

    'High part counts, reliance on additional components, and inefficient assembly processes increase production time, introduce opportunities for human error, and raise overall cost.',

    'Additionally, limited consideration for repairability and modularity makes maintenance difficult, reducing product lifespan and increasing long-term operational cost.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img3, img4, img7, img8, img9],
  solutionMedia: [
  {
    type: 'image',
    src: img1,
  },
  {
    type: 'image',
    src: img2,
  },
   {
    type: 'row',
    items: [
      { type: 'image', src: img3 },
      { type: 'image', src: img4 },
    ],
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img5 },
      { type: 'image', src: img6 },
      { type: 'image', src: img7 },
    ],
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img8 },
      { type: 'image', src: img9 },
      { type: 'image', src: img10 },
    ],
  },
  {
    type: 'row',
    items: [
      { type: 'image', src: img11 },
      { type: 'image', src: img12 },
    ],
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

export default function RaceTracker() {
  return <ProjectTemplate {...project} />
}