import styled from 'styled-components'

const HeaderMain = styled.div`
  position: relative;
  padding: 0 24px;
  flex: 0 1 auto;
  min-width: 354px;
  .main {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 21px;
    height: 48px;
    transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    button {
      font-size: 14px;
      /* 参数使用方法 */
      color: ${(props) => props.theme.fontColor};
      cursor: pointer;
      & span {
        padding: 0 16px;
      }
      &:not(&:last-child) {
        border-right: 1px solid #ddd;
        font-weight: 600;
      }
      &:last-child {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.secondaryFontColor};
        height: 100%;
        .search-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #ff385c;
        }
      }
    }
  }
`

export default HeaderMain
