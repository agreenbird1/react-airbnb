import { styled } from "styled-components"

const RecommendWrapper = styled.section`
  width: 100%;
  padding: 0 80px;
  h2 {
    padding: 10px 0;
  }
  .desc {
    color: ${props => props.theme.secondaryFontColor}
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .show-all {
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.highLightFontColor};
    cursor: pointer;
  }
`

export default RecommendWrapper