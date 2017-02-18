function getRowHeight ({ index }) {
  return itemArray[index].type === 'header' ? 20 : 30
}

function renderList (listProps) {
  return (
    <List
      rowCount={itemArray.length}
      rowHeight={getRowHeight}
      {...listProps}
    />
  )
}
