import styled from 'styled-components'

const HeaderRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  .publish {
    width: 136px;
    height: 42px;
    border-radius: 22px;
    line-height: 42px;
    text-align: center;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  .language {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 22px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
  .user-info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px 5px 12px;
    gap: 10px;
    background: transparent;
    margin-left: 8px;
    cursor: pointer;
    text-align: inherit;
    border: 1px solid #ddd;
    border-radius: 21px;
    cursor: pointer;
    ${(props) => props.theme.mixins.hoverShadow}
  }
  .menu {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    z-index: 2;
    min-width: 240px;
    display: block;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
    margin-top: 34px;
    padding: 8px 0;
    right: 0;
    background: #fff;
    li {
        cursor: pointer;
        padding: 12px;
        font-size: 14px;
        color: #2d2d2d;
        &:hover {
            background-color: #f7f7f7
        }
        &:first-child {
            font-weight: 500;
            color: #000;
        }
    }
    .line {
        height: 2px;
        width: 100%;
        background-color: #f0f0f0;
        margin: 8px 0;
    }
  }
`

export default HeaderRight
