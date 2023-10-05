
import { styled } from 'styled-components';

const MoreFilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 80px;
  .filter-item {
    padding: 8px 12px;
    border: 1px solid ${props => props.theme.borderColor};
    cursor: pointer;
    &.active {
      background-color: ${props => props.theme.highLightFontColor};
      color: #fff;
    }
  }
`

export default MoreFilterWrapper