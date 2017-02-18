// Pseudo-code
class WithLocalization extends Component {
  componentDidMount () {
    // Fetch user data from Api, localStorage, whatever
    // Then call setState({ localization })
  }

  render () {
    const { localization } = this.state
    const { children } = this.props

    return localization
      ? children(localization)
      : null
  }
}
