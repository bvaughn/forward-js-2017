function rowRenderer ({ key, index, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {itemsArray[index].name}
    </div>
  )
}
