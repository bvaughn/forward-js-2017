class Example extends Component {
  componentDidUpdate (prevProps, prevState) {
    if (this.props.sortOrder !== prevProps.sortOrder) {
      this._grid.forceUpdate()
    }
  }

  render () {
    return (
      <Grid
        {...this.props}
        ref={(ref) => this._grid = ref}
      />
    )
  }
}
