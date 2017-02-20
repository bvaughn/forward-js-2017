import styled from 'styled-components'
import presenterSlideStyle from './presenterSlideStyle'

export default styled.div`
  height: 100%;
  padding: 1rem;
  ${presenterSlideStyle}
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
  h1 {
    paddingRight: 9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #444;
  }
  h1::before {
    display: inline-block;
    content: ' ';
    background-image: url(/header-prefix.svg);
    background-size: 26px 58px;
    height: 58px;
    width: 26px;
    margin-right: 1rem;
  }
`
