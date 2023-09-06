import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #f7f7f7;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  .links-wrapper {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 48px 40px;
    h3 {
        font-size: 16px;
        margin-bottom: 12px;
    }
    li {
        font-size: 14px;
        color: ${(props) => props.theme.secondaryFontColor};
        margin-bottom: 8px;
        cursor: pointer;
    }
  }
  .rights {
    text-align: center;
    color: ${(props) => props.theme.secondaryFontColor};
    font-size: 14px;
    height: 48px;
    line-height: 48px;
  }
`

export default FooterWrapper
