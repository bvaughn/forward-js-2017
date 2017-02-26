import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

const globalStyles = `
  html, body {
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
  h1, h2, h3, h4 {
    font-weight: 400;
    margin: 0 0 1rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1rem;
  }

  li {
    margin: 0 0 0.5rem;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    color: #FF502F;
    text-decoration: none;
  }

  p {
    margin: 0 0 1rem;
  }

  code {
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    font-family: monospace;
  }

  strike {
    color: #666;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #FF502F;
    border: 0.1em solid #FFFFFF;
    border-radius: 0;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .CodeMirror-scroll {
    overflow: hidden !important;
  }

  .VirtualizedSelect {
    font-size: 14px;
  }
`

export default class ForwardTheme extends Component {
  componentWillMount () {
    injectGlobal([`${globalStyles}`])
  }

  render () {
    return (
      <link
        href='https://fonts.googleapis.com/css?family=Roboto'
        rel='stylesheet'
        type='text/css'
      />
    )
  }
}
