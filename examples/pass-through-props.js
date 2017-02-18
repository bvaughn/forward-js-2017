function renderList (props) {
  const { sortOrder, ...rest } = props

  return (
    <List
      {...rest}
      sortOrder={sortOrder}
    />
  );
}
