import { styled } from 'styled-components'

const DiscountWrapper = styled.section`
  width: 100%;
  padding: 0 80px;
  h2 {
    padding: 10px 0;
  }
  .desc {
    color: ${(props) => props.theme.secondaryFontColor};
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  .show-all {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.highLightFontColor};
    cursor: pointer;
  }
  .address-list-wrapper {
    position: relative;
    padding: 10px 0;
    &:hover {
      .right-button,
      .left-button {
        display: flex;
      }
    }
    .left-button,
    .right-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .right-button {
        right: 0px;
        transform: translateY(-50%) translateX(-50%);
    }
    .address-list {
      width: 100%;
      overflow: scroll;
      display: flex;
      gap: 10px;

      &::-webkit-scrollbar {
        height: 0px;
        webkit: 0px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent; /* 可选设置滚动轨道的背景色 */
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent; /* 可选设置滚动条的颜色 */
      }
      .address-item {
        font-size: 18px;
        color: ${(props) => props.theme.fontColor};
        border: 1px solid ${(props) => props.theme.borderColor};
        padding: 8px 100px;
        cursor: pointer;
      }
      .active {
        color: #fff;
        background-color: ${(props) => props.theme.highLightFontColor};
        border: 1px solid ${(props) => props.theme.highLightFontColor};
      }
    }
  }
`

export default DiscountWrapper
