import { styled } from 'styled-components'

const MoreRoomsWrapper = styled.main`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 60px 80px;
  gap: 20px;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`

export default MoreRoomsWrapper
