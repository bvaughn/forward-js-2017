function renderList (listProps) {
  return (
    <CellMeasurer {...listProps}>
      {({ getRowHeight }) => (
        <List
          rowHeight={getRowHeight}
          {...listProps}
        />
      )}
    </CellMeasurer>
  );
}
