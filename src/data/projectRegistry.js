import FlightGlobePage, { projectMeta as FlightGlobeMeta } from '../pages/projects/FlightGlobe'
import MagneticBrushHolderPage, { projectMeta as MagneticBrushHolderMeta } from '../pages/projects/MagneticBrushHolder'

export const projectPages = [
  {
    ...FlightGlobeMeta,
    Component: FlightGlobePage,
  },
  {
    ...MagneticBrushHolderMeta,
    Component: MagneticBrushHolderPage,
  },
].sort((a, b) => new Date(b.date) - new Date(a.date))