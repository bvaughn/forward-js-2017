// Pseudo-code
class WithUser extends Component {
  componentDidMount () {
    // Load data...
  }

  render () {
    const { user } = this.state
    const { children } = this.props

    return user
      ? children(user)
      : null
  }
}
