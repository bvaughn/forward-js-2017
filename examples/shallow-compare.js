import React, { Component } from 'react'
import shallowCompare from 'react-addons-shallow-compare'

class MyComponent extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    // Your render logic here
  }
}
