const itemsArray = [...] // This is our data

function renderList () {
  return (
    <div
      style={{
        height: 240,
        width: 240
      }}
    >
      {itemsArray.map((item, index) => {
        <div key={index}>
          {item.name}
        </div>
      })}
    </div>
  )
}
