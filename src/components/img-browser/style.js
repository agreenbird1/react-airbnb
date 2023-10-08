import { styled } from 'styled-components'

const ImgBrowserWrapper = styled.section`
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: #333;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  color: #fff;
  .exit {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 40px;
    cursor: pointer;
  }
  .left-button,
  .right-button {
    font-size: 100px;
    cursor: pointer;
  }
  .img-wrapper {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    .img {
      position: relative;
      height: 100%;
      width: 70%;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s;
        &.active {
          opacity: 1;
        }
      }
    }
  }
  .indicators-wrapper {
    margin-top: 30px;
    width: 70%;
    overflow: hidden;
    img {
      height: 50px;
      width: 100px;
      object-fit: cover;
      opacity: 0.6;
      &.active {
        opacity: 1;
      }
    }
  }
`

export default ImgBrowserWrapper
