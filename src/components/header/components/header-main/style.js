import styled from 'styled-components'

const HeaderMain = styled.div`
  position: relative;
  padding: 0 24px;
  flex: 0 1 auto;
  min-width: 348px;
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
        cursor: pointer;
        flex: 1;
    }
  }
`

export default HeaderMain
