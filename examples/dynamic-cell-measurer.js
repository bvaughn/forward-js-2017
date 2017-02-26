const cache = new CellMeasurerCache({
  fixedWidth: true
});

function rowRenderer ({ index, key, parent, style }) {
  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      <div style={style}>
        {/* Your content here */}
      </div>
    </CellMeasurer>
  );
}

function renderList (props) {
  return (
    <List
      {...props}
      deferredMeasurementCache={cache}
      rowHeight={cache.rowHeight}
      rowRenderer={rowRenderer}
    />
  );
}