// Pseudo-code
class WithUser extends Component {
  componentDidMount () {
    // Fetch user data from Api, localStorage, whatever
    // Then call setState({ user })
  }

  render () {
    const { user } = this.state
    const { children } = this.props

    return user
      ? children(user)
      : null
  }
}
