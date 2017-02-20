function renderSpreadsheet () {
  return (
    <MultiGrid
      cellRenderer={cellRenderer}
      columnWidth={columnWidth}
      columnCount={28}
      fixedColumnCount={1}
      fixedRowCount={1}
      height={height}
      rowHeight={40}
      rowCount={100}
      width={width}
    />
  );
}
