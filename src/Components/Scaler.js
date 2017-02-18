import { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import './Slide.css';

const WIDTH = 1024;
const HEIGHT = 800;

export default class Scaler extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this._onResize = this._onResize.bind(this);
  }

  componentDidMount () {
    window.addEventListener('resize', this._onResize);

    this._scaleToFit();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._onResize);
  }

  render () {
    const { children } = this.props;

    return children ({
      style: this.style
    });
  }

  // Inspired by https://github.com/gnab/remark/blob/develop/src/remark/scaler.js
  _scaleToFit () {
    const node = findDOMNode(document.body);
    const { clientHeight, clientWidth } = node;

    let scale;
    // let scaledWidth;
      let scaledHeight;
    let left;
    let top;

    if (WIDTH / clientWidth > HEIGHT / clientHeight) {
      scale = clientWidth / WIDTH;
    } else {
      scale = clientHeight / HEIGHT;
    }

    // scaledWidth = Math.max(0, clientWidth * scale);
      scaledHeight = Math.max(0, clientHeight * scale);

    // left = (clientWidth - scaledWidth);
    // top = (clientHeight - scaledHeight);
    scale = `scale(${scale})`

    this.style = {
      MozTransform: scale,
      WebkitTransform: scale,
      transform: scale
      // margin: `-${top}px -${left}px`
    };

    this.forceUpdate();
  }

  _onResize (event) {
    this._scaleToFit();
  }
}
