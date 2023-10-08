import { styled } from 'styled-components'
const DetailWrapper = styled.main`
  display: flex;
  height: 400px;
  .left,
  .right {
    flex: 1;
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    div {
      flex: 50%;
      height: 50%;
    }
  }
  .img-wrapper {
    overflow: hidden;
    &:hover {
      > img {
        transform: scale(1.2);
      }
    }
    > img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.3s;
    }
  }
`

export default DetailWrapper
