import ProjectTemplate from './ProjectTemplate'

import cover from '../../assets/projects/BoeingSeat/Airline Seat.png'

import img1 from '../../assets/projects/BoeingSeat/Handwritten_2024-10-24_124618 (2) (1).jpg'
import img2 from '../../assets/projects/BoeingSeat/Handwritten_2024-10-24_125002 (3) (1).jpg'
import img3 from '../../assets/projects/BoeingSeat/Handwritten_2024-10-24_124506 (1).jpg'

import img4 from '../../assets/projects/BoeingSeat/image - 2026-04-06T232358.031.png'

import img5 from '../../assets/projects/BoeingSeat/image (70).png'
import img6 from '../../assets/projects/BoeingSeat/Document_2024-10-24_124847 (1).jpg'
import img7 from '../../assets/projects/BoeingSeat/2024-10-24_124733 (1).jpg'

import img8 from '../../assets/projects/BoeingSeat/image - 2026-04-06T232355.528.png'

import img9 from '../../assets/projects/BoeingSeat/image (71).png'
import img10 from '../../assets/projects/BoeingSeat/image (72).png'

import img11 from '../../assets/projects/BoeingSeat/image - 2026-04-06T232400.714.png'

const project = {
  slug: 'BoeingSeat',
  title: 'Economy Class Seating',
  date: '2020-05-04',
  problem: [
    'Long-haul economy seating requires balancing passenger comfort, seat density, and operational cost, where increasing capacity improves revenue but reduces personal space and comfort.',

    'For aircraft such as the Boeing 777-300, this challenge is intensified by the need to accommodate over 200 passengers on extended flights, where fatigue, restricted movement, and discomfort significantly impact the passenger experience.',

    'Designing an effective solution requires optimizing seat ergonomics and cabin layout while minimizing weight and manufacturing complexity, and meeting strict aviation safety and certification requirements.',
    ],
  coverImage: cover,
  hoverSlides: [cover, img1, img4, img11],
  solutionMedia: [
    {
        type: 'row',
        items: [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        ],
    },
    {
        type: 'image',
        src: img4,
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
        type: 'image',
        src: img8,
    },
    {
        type: 'row',
        items: [
        { type: 'image', src: img9 },
        { type: 'image', src: img10 },
        ],
    },
    {
        type: 'image',
        src: img11,
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

export default function BoeingSeat() {
  return <ProjectTemplate {...project} />
}