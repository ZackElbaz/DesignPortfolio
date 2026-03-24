export default function MediaBlock({ item }) {
  // 🔹 ROW (NEW)
  if (item.type === 'row') {
    return (
      <div className="media-row">
        {item.items.map((subItem, index) => (
          <div className="media-row-item" key={index}>
            {subItem.type === 'video' ? (
              <video
                src={subItem.src}
                className="project-media"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            ) : (
              <img
                src={subItem.src}
                alt={subItem.caption || 'Project media'}
                className="project-media"
              />
            )}

            {subItem.caption && (
              <p className="media-caption">{subItem.caption}</p>
            )}
          </div>
        ))}
      </div>
    )
  }

  // 🔹 SINGLE (EXISTING BEHAVIOUR)
  return (
    <div className="media-block">
      {item.type === 'video' ? (
        <video
          src={item.src}
          className="project-media"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      ) : (
        <img
          src={item.src}
          alt={item.caption || 'Project media'}
          className="project-media"
        />
      )}

      {item.caption && (
        <p className="media-caption">{item.caption}</p>
      )}
    </div>
  )
}