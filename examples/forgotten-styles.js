// Wrong:
function rowRenderer ({ key, index, style }) {
  return (
    <div key={key}>
      {items[index]}
    </div>
  )
}

// Right:
function rowRenderer ({ key, index, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {items[index]}
    </div>
  )
}
