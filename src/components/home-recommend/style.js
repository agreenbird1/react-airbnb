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
`

export default RecommendWrapper