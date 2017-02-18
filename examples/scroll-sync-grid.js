function renderSpreadsheet () {
  return (
    <ScrollSync>
      {({ onScroll, scrollLeft, scrollTop }) => (
        <div className='Container'>
          <Grid
            cellRenderer={cellRendererFixed}
            className='LeftGrid'
            columnCount={1}
            rowCount={100}
            scrollTop={scrollTop}
          />
          <Grid
            cellRenderer={cellRendererFixed}
            className='HeaderGrid'
            columnCount={100}
            rowCount={1}
            scrollLeft={scrollLeft}
          />
          <Grid
            cellRenderer={cellRendererBody}
            className='BodyGrid'
            columnCount={100}
            onScroll={onScroll}
            rowCount={100}
          />
        </div>
      )}
    </ScrollSync>
  );
}
