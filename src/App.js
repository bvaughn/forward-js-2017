import React, { Component, PropTypes } from 'react';
import { DropDownNav, Presentation, Slide } from 'react-presents';
import generateRandomList from './Utils/generateRandomList';
import './App.css';

// Load all slides in the Slides folder
const slides = require.context('./Slides/', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', ''))
  .map((filename) => require(`./Slides/${filename}`).default);

// Support navigating to any slides also tagged with a :title
const options = slides
  .map((slide, index) => ({
    label: slide.title,
    value: index
  }))
  .filter((option) => option.label);

// Test data for use in performance examples
const list = generateRandomList();

export default class App extends Component {
  static childContextTypes = {
    list: PropTypes.array.isRequired
  };

  getChildContext () {
    return {
      list
    };
  }

  render() {
    return (
      <Presentation>
        {slides.map((Component, index) => (
          <Slide
            component={Component}
            key={index}
          />
        )).concat(
          <DropDownNav
            key='DropDownNav'
            options={options}
          />
        )}
      </Presentation>
    );
  }
}
