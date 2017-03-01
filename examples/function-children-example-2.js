// Pseudo-code
class WithLocalization extends Component {
  componentDidMount () {
    // Load data...
  }

  render () {
    const { localization } = this.state
    const { children } = this.props

    return localization
      ? children(localization)
      : null
  }
}
