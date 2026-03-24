// import Header from '../../components/Header'
// import MediaBlock from '../../components/MediaBlock'
// import BackToTopButton from '../../components/BackToTopButton'

// export default function ProjectTemplate({
//   title,
//   date,
//   problem,
//   solutionMedia,
// }) {
//   return (
//     <div className="page-shell">
//       <Header />

//       <main className="project-main">
//         <article className="project-article">
//           <h1 className="project-title">{title}</h1>

//           <section className="project-section">
//             <h2 className="project-subtitle">The problem:</h2>
//             <p className="project-text">{problem}</p>
//           </section>

//           <section className="project-section">
//             <h2 className="project-subtitle">The solution:</h2>
//             <div className="project-media-stack">
//               {solutionMedia.map((item, index) => (
//                 <MediaBlock key={index} item={item} />
//               ))}
//             </div>
//           </section>

//           <BackToTopButton />
//         </article>
//       </main>
//     </div>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import BackToTopButton from '../../components/BackToTopButton'

function MediaItem({ item }) {
  if (item.type === 'image') {
    return (
      <img
        className="project-media"
        src={item.src}
        alt={item.alt || ''}
      />
    )
  }

  if (item.type === 'video') {
    return (
      <video
        className="project-media"
        src={item.src}
        controls={item.controls ?? true}
        autoPlay={item.autoPlay}
        loop={item.loop}
        muted={item.muted}
        playsInline
      />
    )
  }

  return null
}

function MediaRow({ items, gap = 5 }) {
  const rowRef = useRef(null)
  const [rowWidth, setRowWidth] = useState(0)
  const [ratios, setRatios] = useState([])

  useEffect(() => {
    if (!rowRef.current) return

    const updateWidth = () => {
      setRowWidth(rowRef.current.clientWidth)
    }

    updateWidth()

    const observer = new ResizeObserver(() => {
      updateWidth()
    })

    observer.observe(rowRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false

    const loadRatios = async () => {
      const loaded = await Promise.all(
        items.map(
          (item) =>
            new Promise((resolve) => {
              if (item.type === 'image') {
                const img = new Image()
                img.onload = () =>
                  resolve(
                    img.naturalWidth && img.naturalHeight
                      ? img.naturalWidth / img.naturalHeight
                      : 1
                  )
                img.onerror = () => resolve(1)
                img.src = item.src
                return
              }

              if (item.type === 'video') {
                const video = document.createElement('video')
                video.onloadedmetadata = () =>
                  resolve(
                    video.videoWidth && video.videoHeight
                      ? video.videoWidth / video.videoHeight
                      : 1
                  )
                video.onerror = () => resolve(1)
                video.src = item.src
                return
              }

              resolve(1)
            })
        )
      )

      if (!cancelled) {
        setRatios(loaded)
      }
    }

    loadRatios()

    return () => {
      cancelled = true
    }
  }, [items])

  const totalGap = gap * (items.length - 1)
  const availableWidth = Math.max(rowWidth - totalGap, 0)
  const totalRatio = ratios.reduce((sum, ratio) => sum + ratio, 0)
  const rowHeight = totalRatio > 0 ? availableWidth / totalRatio : 0

  return (
    <div className="media-row" ref={rowRef}>
      {items.map((item, index) => {
        const ratio = ratios[index] || 1
        const itemWidth = rowHeight * ratio

        return (
          <div
            key={index}
            className="media-row-item"
            style={{
              width: itemWidth ? `${itemWidth}px` : 'auto',
            }}
          >
            <MediaItem item={item} />
          </div>
        )
      })}
    </div>
  )
}

export default function ProjectTemplate({
  title,
  date,
  problem,
  solutionMedia,
}) {
  return (
    <div className="page-shell">
      <Header />

      <main className="project-main">
        <article className="project-article">
          <h1 className="project-title">{title}</h1>

          <section className="project-section">
            <h2 className="project-subtitle">The problem:</h2>
            {Array.isArray(problem) ? (
              problem.map((p, i) => (
                <p key={i} className="project-text">
                  {p}
                </p>
              ))
            ) : (
              <p className="project-text">{problem}</p>
            )}
          </section>

          <section className="project-section">
            <h2 className="project-subtitle">The solution:</h2>
            <div className="project-media-stack">
              {solutionMedia.map((item, index) => {
                if (item.type === 'row') {
                  return <MediaRow key={index} items={item.items} gap={5} />
                }

                return (
                  <div key={index} className="media-block">
                    <MediaItem item={item} />
                  </div>
                )
              })}
            </div>
          </section>

          <BackToTopButton />
        </article>
      </main>
    </div>
  )
}