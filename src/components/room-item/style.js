import { styled } from 'styled-components'

const RoomItemWrapper = styled.li`
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
    }
    .indicators {
      position: absolute;
      width: 35%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;
      .dot-wrapper {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
    .left,
    .right {
      display: none;
      position: absolute;
      width: 20%;
      height: 100%;
      top: 0;
      left: 0;
      color: #fff;
      font-size: 50px;
      background-color: rgba(0, 0, 0, 0.1);
      align-items: center;
      justify-content: center;
      > span {
        cursor: pointer;
        user-select: none;
      }
    }
    .right {
      right: 0;
      left: unset;
    }
    &:hover {
      .left,
      .right {
        display: flex;
      }
    }
  }
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc,
  .price {
    font-size: 14px;
    padding: 8px 0;
    color: ${(props) => props.theme.secondaryFontColor};
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
      font-size: 12px;
      color: ${(props) => props.theme.secondaryFontColor};
    }
  }
`
export default RoomItemWrapper
