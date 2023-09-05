import { styled } from 'styled-components'

const RoomItemWrapper = styled.li`
  .img-wrapper {
    width: 100%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export default RoomItemWrapper
