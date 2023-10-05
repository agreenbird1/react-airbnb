import { styled } from 'styled-components'

const HomeLongForWrapper = styled.section`
  width: 100%;
  padding: 64px 80px;
  .long-for-title {
    padding: 10px 0;
  }
  .long-for-desc {
    color: ${(props) => props.theme.secondaryFontColor};
  }
  .long-for-list-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    .left-button,
    .right-button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      top: 50%;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      transform: translateY(-50%);
      background: #fff;
      cursor: pointer;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
      color: ${(props) => props.theme.secondaryFontColor};
      z-index: 1;
    }

    .right-button{
      right: 0;
    }
  }
  .long-for-list {
    position: relative;
    transition: transform 2s ease;
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
  .long-for-item {
    position: relative;
    width: 200px;
    height: 250px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .city-name {
      margin-bottom: 10px;
      color: #fff;
      font-weight: 600;
    }
    .city-price {
      margin-bottom: 20px;
      font-style: 12px;
      color: #eee;
    }
  }
`

export default HomeLongForWrapper
