function cellSizeAndPositionGetter ({ index }) {
  const item = itemsArray[index]

  return {
    height: item.size,
    width: item.size,
    x: item.left,
    y: item.top
  }
}

function cellRenderer ({ index, key, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {itemsArray[index].name}
    </div>
  )
}

function renderCollection (props) {
  return (
    <Collection
      cellCount={itemsArray.length}
      cellRenderer={cellRenderer}
      cellSizeAndPositionGetter={cellSizeAndPositionGetter}
    />
  )
}
