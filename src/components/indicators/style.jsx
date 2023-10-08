import { styled } from 'styled-components'
const IndicatorsWrapper = styled.div`
  overflow: hidden;
  .i-content {
    position: relative;
    display: flex;
    transition: transform 0.3s ease;
    text-align: center;
    > * {
      flex-shrink: 0;
    }
  }
`

export default IndicatorsWrapper
