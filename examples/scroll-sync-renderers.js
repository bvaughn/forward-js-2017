function cellRendererBody ({ columnIndex, key, rowIndex, style }) {
  return (
    <input
      key={key}
      onChange={
        (event) => updateCellValue(key, event.target.value)
      }
      style={style}
      value={getCellValue(key)}
    />
  );
}
