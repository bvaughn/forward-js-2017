function rowRenderer ({ isScrolling, ...rest }) {
  return isScrolling
    ? <LightRow {...rest} />
    : <FullRow {...rest} />
}
