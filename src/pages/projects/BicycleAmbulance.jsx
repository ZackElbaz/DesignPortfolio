import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/BicycleAmbulance/Bike Ambulance.png'

import img1 from '../../assets/projects/BicycleAmbulance/Handwritten_2024-10-24_125231 (5) (1).jpg'
import img2 from '../../assets/projects/BicycleAmbulance/Handwritten_2024-10-24_125342 (6) (1).jpg'

import img3 from '../../assets/projects/BicycleAmbulance/Handwritten_2024-10-24_125117 (4) (1).jpg'
import img4 from '../../assets/projects/BicycleAmbulance/Final design line (2).png'

import img5 from '../../assets/projects/BicycleAmbulance/Lead (2).jpg'
import img6 from '../../assets/projects/BicycleAmbulance/Oak (2).jpg'
import img7 from '../../assets/projects/BicycleAmbulance/Melamine (2).jpg'

import img8 from '../../assets/projects/BicycleAmbulance/bicycle_trailer__2_-removebg-preview (1).png'
import img9 from '../../assets/projects/BicycleAmbulance/cover image bicycle trailer 2 (2).png'


const project = {
  slug: 'BicycleAmbulance',
  title: 'Bicycle Ambulance',
  date: '2021-01-04',
  problem: [
    'Access to healthcare in remote regions of Sub-Saharan Africa is often limited by poor infrastructure, long distances, and a lack of reliable transport, making it difficult for patients to reach medical facilities in time.',

    'In emergency situations, incapacitated patients are frequently carried manually or transported using unsuitable means, resulting in slow journeys, physical strain on caregivers, and increased risk to patient safety.',

    'Transporting patients over rough terrain for extended distances further introduces challenges around stability, environmental protection, and maintaining basic medical needs during transit.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img2, img7, img8],
  solutionMedia: [
    {
        type: 'row',
        items: [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        ],
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
        ],
    },
    {
        type: 'image',
        src: cover,
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

export default function BicycleAmbulance() {
  return <ProjectTemplate {...project} />
}