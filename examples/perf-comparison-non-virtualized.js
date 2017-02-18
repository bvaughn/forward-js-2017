const itemsArray = [...] // This is our data

function rowRenderer ({ index }) {
  return (
    <div key={index}>
      {itemsArray[index].name}
    </div>
  )
}

function renderList () {
  return (
    <div
      style={{
        height: 240,
        width: 240
      }}
    >
      {itemsArray.map((item, index) => rowRenderer({ index }))}
    </div>
  )
}
