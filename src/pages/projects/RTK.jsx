import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/RTK/RTK AI.png'

import img1 from '../../assets/projects/RTK/image2.png'

import img2 from '../../assets/projects/RTK/PCBLayout.png'
import img3 from '../../assets/projects/RTK/image__60_-removebg-preview (1).png'

import img4 from '../../assets/projects/RTK/image (75).png'
import img5 from '../../assets/projects/RTK/image (74).png'
import img6 from '../../assets/projects/RTK/image__59_-removebg-preview (1).png'

import img7 from '../../assets/projects/RTK/image (90).png'
import img8 from '../../assets/projects/RTK/image (91).png'

import img9 from '../../assets/projects/RTK/image (89).png'

import img10 from '../../assets/projects/RTK/image__61_-removebg-preview (1).png'


const project = {
  slug: 'RTK',
  title: 'Real Time Kinematic Device',
  date: '2022-05-04',
  problem: [
    'Rail maintenance takes place within controlled line closures, where workers are assigned to specific track sections. Entering the wrong section can expose them to active lines, creating a serious safety risk.',

    'While existing procedures and monitoring make these environments generally safe, occasional human error can still lead to workers operating outside their designated areas.',

    'Even rare incidents carry severe consequences, highlighting a gap where additional safeguards could further reduce risk without disrupting established workflows.',

    'This creates an opportunity for a precise, real-time geofencing solution that can alert workers when they move outside safe zones, helping to reduce risk from low to near zero.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img2, img7, img9, img10],
  solutionMedia: [
    {
        type: 'image',
        src: img1,
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img4 },
        { type: 'image', src: img5 },
        { type: 'image', src: img6 },
        ],
    },

    {
        type: 'row',
        items: [
        { type: 'image', src: img7 },
        { type: 'image', src: img8 },
        ],
    },
    {
        type: 'image',
        src: img9,
    },
    {
        type: 'image',
        src: img10,
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

export default function KneeImplantTestRig() {
  return <ProjectTemplate {...project} />
}