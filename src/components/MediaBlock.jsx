export default function MediaBlock({ item }) {
  return (
    <div className="media-block">
      {item.type === 'image' && (
        <img src={item.src} alt={item.caption || 'Project media'} className="project-media" />
      )}

      {item.type === 'video' && (
        <video
          src={item.src}
          className="project-media"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      )}

      {item.caption ? <p className="media-caption">{item.caption}</p> : null}
    </div>
  )
}